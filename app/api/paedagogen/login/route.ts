import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import {
  createPaedagogenSessionToken,
  COOKIE_NAME,
  TTL_SECONDS,
} from '@/lib/paedagogenSession';

const INVALID = { error: 'Ungültige Zugangsdaten' } as const;

export async function POST(req: Request) {
  const body = await req.json() as { lernId?: string; code?: string };

  const lernId = String(body.lernId ?? '').trim().toUpperCase();
  const pin    = String(body.code   ?? '').trim();

  if (!lernId || !pin) {
    return NextResponse.json({ error: 'Fehlende Eingaben.' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();

  // 1. Resolve child by Lern-ID
  const { data: child, error: childError } = await admin
    .from('child_profiles')
    .select('id, name, parent_id')
    .eq('public_id', lernId)
    .maybeSingle();

  if (childError) {
    console.error('[paedagogen-login] step=CHILD_LOOKUP', childError.message);
    return NextResponse.json(INVALID, { status: 401 });
  }
  if (!child) {
    return NextResponse.json(INVALID, { status: 401 });
  }

  // 2. Verify Lehrer-PIN against parent_profiles
  const { data: parent, error: parentError } = await admin
    .from('parent_profiles')
    .select('parent_pin')
    .eq('id', child.parent_id)
    .maybeSingle();

  if (parentError) {
    console.error('[paedagogen-login] step=PARENT_LOOKUP', parentError.message);
    return NextResponse.json(INVALID, { status: 401 });
  }
  if (!parent || parent.parent_pin !== pin) {
    return NextResponse.json(INVALID, { status: 401 });
  }

  // 3. Sign session token
  let token: string;
  try {
    token = await createPaedagogenSessionToken({
      child_id:   child.id,
      parent_id:  child.parent_id,
      child_name: String(child.name),
      code_id:    '',
    });
  } catch (e) {
    console.error('[paedagogen-login] step=CREATE_TOKEN', e);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }

  // 4. Set HttpOnly cookie
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
