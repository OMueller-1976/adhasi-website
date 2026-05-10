'use client';

import { useRouter } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const sb = getSupabaseBrowser();
    await sb.auth.signOut();
    router.replace('/');
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="text-sm text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline transition-colors"
    >
      Abmelden
    </button>
  );
}
