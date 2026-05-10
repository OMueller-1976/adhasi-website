import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

// GET /api/email-abmelden?token=UUID&action=unsubscribe|resubscribe
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token  = searchParams.get('token');
  const action = searchParams.get('action') ?? 'unsubscribe';

  if (!token) {
    return NextResponse.json({ error: 'Token fehlt.' }, { status: 400 });
  }

  if (action !== 'unsubscribe' && action !== 'resubscribe') {
    return NextResponse.json({ error: 'Ungültige Aktion.' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from('parent_profiles')
    .update({ weekly_email_enabled: action === 'resubscribe' })
    .eq('unsubscribe_token', token);

  if (error) {
    console.error('email-abmelden: supabase update failed', { token, action, error });
    return NextResponse.json({ error: 'Datenbankfehler.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, action });
}
