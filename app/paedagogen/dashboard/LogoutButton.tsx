'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch('/api/paedagogen/logout', { method: 'POST' });
    router.replace('/paedagogen/login');
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
