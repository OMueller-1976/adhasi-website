import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// supabaseAdmin.ts reads SUPABASE_URL, but Vercel has NEXT_PUBLIC_SUPABASE_URL.
// Fall back to the public variant so the route works in all environments.
function getAdmin() {
  const url =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  if (!url || !key) throw new Error('Supabase env vars missing');
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(req: NextRequest) {
  try {
    const { email, is_educator } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();

    // Save to waitlist table
    const admin = getAdmin();
    const { error: dbError } = await admin
      .from('waitlist')
      .insert({ email: normalised, is_educator: is_educator === true });

    if (dbError) {
      // Duplicate entry — treat as success to avoid leaking existing emails
      if (dbError.code === '23505') {
        return NextResponse.json({ success: true });
      }
      console.error('waitlist insert error:', dbError);
      return NextResponse.json({ error: 'Datenbankfehler.' }, { status: 500 });
    }

    // Send notification via Resend REST API
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
          to: 'hallo@adhasi.de',
          subject: `Neue Waitlist-Anmeldung: ${normalised}`,
          text: `Neue Anmeldung für frühen Zugang: ${normalised}`,
        }),
      });
      if (!emailRes.ok) {
        console.error('Resend error:', await emailRes.text());
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('waitlist route error:', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
