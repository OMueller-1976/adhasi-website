import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/lib/paedagogenSession';

export async function POST() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
  console.log('[paedagogen-logout] session cookie cleared');
  return NextResponse.json({ ok: true, redirect: '/paedagogen/login' });
}
