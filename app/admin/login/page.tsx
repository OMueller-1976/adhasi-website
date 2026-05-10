import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_COOKIE } from '@/lib/adminAuth';

async function loginAction(formData: FormData) {
  'use server';
  const pw = String(formData.get('pw') || '');
  if (pw !== process.env.ADMIN_REVIEW_PASSWORD) {
    redirect('/admin/login?error=1');
  }
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, pw, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });
  redirect('/admin/review');
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50">
      <form
        action={loginAction}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold">ADHaSi Admin</h1>
        <input
          name="pw"
          type="password"
          placeholder="Passwort"
          className="w-full px-4 py-2 border border-stone-300 rounded"
          autoFocus
          required
        />
        {sp.error && <p className="text-red-600 text-sm">Falsches Passwort</p>}
        <button className="w-full py-2 bg-stone-900 text-white rounded hover:bg-stone-700">
          Einloggen
        </button>
      </form>
    </main>
  );
}
