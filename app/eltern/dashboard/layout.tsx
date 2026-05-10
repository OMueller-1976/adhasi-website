import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';
import LogoutButton from './LogoutButton';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sb = await getSupabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect('/eltern/login');

  const { data: parent } = await sb
    .from('parent_profiles')
    .select('display_name, name')
    .eq('id', user.id)
    .maybeSingle();
  const displayName =
    (parent as { display_name?: string; name?: string } | null)?.display_name ||
    (parent as { display_name?: string; name?: string } | null)?.name ||
    'da';

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Logo.png" alt="ADHaSi" width={40} height={40} />
            <span className="font-semibold text-stone-900">ADHaSi Eltern</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-stone-600 hidden sm:inline">
              Hallo,{' '}
              <strong className="text-stone-900">{displayName}</strong>
            </span>
            <LogoutButton />
          </div>
        </div>

        <nav className="bg-white border-t border-stone-100">
          <div className="max-w-6xl mx-auto px-6 flex gap-1 text-sm overflow-x-auto">
            <NavLink href="/eltern/dashboard" label="Übersicht" />
            <NavLink href="/eltern/dashboard/coaching" label="Eltern-Coaching" />
            <NavLink href="/eltern/dashboard/einstellungen" label="Einstellungen" />
          </div>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-3 text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300 whitespace-nowrap transition-colors"
    >
      {label}
    </Link>
  );
}
