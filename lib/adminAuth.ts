import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'adhasi_admin';

export async function isAdmin(): Promise<boolean> {
  const expected = process.env.ADMIN_REVIEW_PASSWORD;
  if (!expected) return false;
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === expected;
}

export async function requireAdmin() {
  if (!(await isAdmin())) redirect('/admin/login');
}

export const ADMIN_COOKIE = COOKIE_NAME;
