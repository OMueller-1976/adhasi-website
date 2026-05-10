import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    console.log('delete-account: SUPABASE_URL exists:', !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('delete-account: SERVICE_ROLE_KEY exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
    console.log('delete-account: ANON_KEY exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    // Verify the session via the anon client (reads cookies)
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: () => {},
        },
      }
    );

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error('delete-account: auth error:', userError)
      return NextResponse.json({ error: 'Nicht authentifiziert.' }, { status: 401 });
    }

    console.log('delete-account: user verified, id:', user.id)
    const admin = getSupabaseAdmin();

    // Write deletion request record (proof of request, no further PII)
    const body = await req.json().catch(() => ({}));
    const reason: string | undefined = typeof body.reason === 'string' ? body.reason : undefined;

    const { error: insertError } = await admin
      .from('account_deletions')
      .insert({ ...(reason ? { reason } : {}) });

    if (insertError) {
      console.error('account_deletions insert failed:', insertError);
      return NextResponse.json({ error: 'Datenbankfehler.' }, { status: 500 });
    }

    // Send deletion request notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'ADHaSi <noreply@adhasi.de>',
          to: 'support@adhasi.de',
          subject: `Konto-Löschantrag: ${user.email}`,
          text: `Der Nutzer ${user.email} hat die Löschung seines Accounts beantragt. Bitte Account manuell löschen.\n\nUser ID: ${user.id}`,
        }),
      });
      if (!emailRes.ok) {
        console.error('Resend error:', await emailRes.text());
      }
    } else {
      console.error('delete-account: RESEND_API_KEY missing');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('delete-account route error:', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
