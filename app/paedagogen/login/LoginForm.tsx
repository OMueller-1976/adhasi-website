'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [lernId, setLernId] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch('/api/paedagogen/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lernId, code }),
    });

    const data = await res.json() as { ok?: boolean; redirect?: string; error?: string };
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? 'Ein Fehler ist aufgetreten.');
    } else {
      router.replace(data.redirect ?? '/paedagogen/dashboard');
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <Link href="/" className="flex justify-center mb-8">
          <Image src="/Logo.png" alt="ADHaSi" width={120} height={120} priority />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Kachel 1: bestehender Login */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <h1 className="text-2xl font-semibold text-stone-900 mb-2">
            Pädagogen-Login
          </h1>
          <p className="text-sm text-stone-600 mb-6">
            Geben Sie die Lern-ID und den Lehrer-PIN ein, die Sie von den Eltern des Kindes erhalten haben.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="lernId" className="text-sm text-stone-700 block mb-1">
                Lern-ID{' '}
                <span className="text-stone-400 font-normal">(z. B. ADHS-GADJTS)</span>
              </label>
              <input
                id="lernId"
                type="text"
                value={lernId}
                onChange={(e) => setLernId(e.target.value.toUpperCase())}
                required
                minLength={6}
                autoFocus
                autoComplete="off"
                placeholder="ADHS-XXXXXX"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none font-mono tracking-wider uppercase"
              />
            </div>

            <div>
              <label htmlFor="code" className="text-sm text-stone-700 block mb-1">
                Lehrer-PIN{' '}
                <span className="text-stone-400 font-normal">(4–8-stellig)</span>
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                required
                minLength={4}
                maxLength={8}
                autoComplete="off"
                placeholder="XXXX"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none font-mono tracking-wider uppercase"
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

          <p className="text-sm text-stone-500 mt-6 leading-relaxed">
            Sie haben noch keine Zugangsdaten? Diese erhalten Sie von den Eltern des Kindes.{' '}
            <Link href="/login-info" className="underline hover:text-stone-700 transition-colors">
              Mehr Infos
            </Link>
          </p>
        </div>

        {/* Kachel 2: Multi-Login Teaser */}
        <div className="relative bg-white rounded-2xl shadow-sm border border-stone-200 p-8 opacity-50 pointer-events-none select-none">
          <span className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            Kommt bald
          </span>
          <h2 className="text-2xl font-semibold text-stone-900 mb-2">
            Multi-Login für Klassen & Schulen
          </h2>
          <p className="text-sm text-stone-600">
            Melden Sie eine ganze Klasse oder Schule mit einem einzigen Zugang an.
          </p>
        </div>

        </div>{/* end grid */}

        <p className="text-center text-xs text-stone-500 mt-6">
          Sie sind Elternteil?{' '}
          <Link href="/eltern/login" className="underline">
            Zum Eltern-Login
          </Link>
        </p>
      </div>
    </main>
  );
}
