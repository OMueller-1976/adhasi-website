import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import {
  createPaedagogenSessionToken,
  COOKIE_NAME,
  TTL_SECONDS,
} from '@/lib/paedagogenSession';

interface ChildRow {
  id:        string;
  name:      string;
  public_id: string;
  parent_id: string;
}

export async function POST(req: Request) {
  const body = await req.json() as { lernId?: string; code?: string };

  const lernId = String(body.lernId ?? '').trim().toUpperCase();
  const pin    = String(body.code   ?? '').trim();

  if (!lernId || !pin) {
    return NextResponse.json({ error: 'Fehlende Eingaben.' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();

  // 1. Validate: Lern-ID (child_profiles.public_id) + Lehrer-PIN (parent_profiles.parent_pin)
  const { data: rows, error: dbError } = await admin
    .from('child_profiles')
    .select('id, name, public_id, parent_id, parent_profiles!inner(parent_pin)')
    .eq('public_id', lernId)
    .eq('parent_profiles.parent_pin', pin)
    .limit(1);

  if (dbError) {
    console.error('[paedagogen-login] step=DB_VALIDATE', {
      error: dbError.message,
      code:  dbError.code,
    });
    return NextResponse.json({ error: 'Lern-ID oder Lehrer-PIN ungültig.' }, { status: 401 });
  }

  const match = (rows as ChildRow[] | null)?.[0] ?? null;
  console.log('[paedagogen-login] step=DB_VALIDATE found=' + !!match);

  if (!match) {
    return NextResponse.json({ error: 'Lern-ID oder Lehrer-PIN ungültig.' }, { status: 401 });
  }

  // 2. Sign session token (code_id not used in this auth flow → empty string)
  let token: string;
  try {
    token = await createPaedagogenSessionToken({
      child_id:   match.id,
      parent_id:  match.parent_id,
      child_name: String(match.name),
      code_id:    '',
    });
  } catch (e) {
    console.error('[paedagogen-login] step=CREATE_TOKEN', e);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }

  // 3. Set HttpOnly cookie
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path:     '/',
    maxAge:   TTL_SECONDS,
  });

  return NextResponse.json({ ok: true, redirect: '/paedagogen/dashboard' });
}
