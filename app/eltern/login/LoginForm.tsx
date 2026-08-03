'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get('redirect') || '/eltern/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const sb = getSupabaseBrowser();
      const { error: authError } = await sb.auth.signInWithPassword({ email, password });
      if (authError) {
        setError('E-Mail oder Passwort falsch.');
      } else {
        router.replace(redirectTo);
        router.refresh();
      }
    } catch {
      setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center mb-8">
          <Image src="/Logo.png" alt="ADHaSi" width={120} height={120} priority />
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <h1 className="text-2xl font-semibold text-stone-900 mb-2">Willkommen zurück bei ADHaSi!</h1>
          <p className="text-sm text-stone-600 mb-5 leading-relaxed">
            ADHaSi begleitet Ihr Kind täglich mit kurzen, fokussierten Lerneinheiten – speziell entwickelt
            für Kinder mit ADHS. Im Eltern-Dashboard sehen Sie den Lernfortschritt, Stärken und
            Entwicklungen Ihres Kindes auf einen Blick.
          </p>

          {/* 3-Schritt Info-Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 mb-6">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2.5">So funktioniert es</p>
            <ol className="flex flex-col gap-2">
              {[
                'Mit E-Mail und Passwort anmelden',
                'Kind-Profil auswählen',
                'Lernfortschritt im Dashboard verfolgen',
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm text-stone-700 block mb-1">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-stone-700 block mb-1">
                Passwort
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors font-medium"
            >
              {loading ? 'Einloggen…' : 'Einloggen'}
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <Link href="/passwort-reset" className="text-stone-600 hover:text-stone-900 transition-colors">
              Passwort vergessen?
            </Link>
            <Link href="https://adhasi.de" className="text-stone-600 hover:text-stone-900 transition-colors">
              Noch kein Konto? 7 Tage kostenlos testen →
            </Link>
          </div>
        </div>

        {/* Noch kein Konto? */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 mt-4 text-center">
          <p className="text-sm font-semibold text-stone-800 mb-1">Noch kein ADHaSi-Konto?</p>
          <p className="text-xs text-stone-500 mb-4">7 Tage kostenlos testen – keine Kreditkarte nötig.</p>
          <Link
            href="https://adhasi.de"
            className="block w-full py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-sm text-center"
          >
            Jetzt kostenlos starten →
          </Link>
          <p className="text-xs text-stone-400 mt-3">Über 1.000 Familien vertrauen ADHaSi bereits.</p>
        </div>
      </div>
    </main>
  );
}
