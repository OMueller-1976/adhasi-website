'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

export default function SignupForm() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    const sb = getSupabaseBrowser();
    const cleanCode = code.trim().toUpperCase();

    if (cleanCode.length !== 8) {
      setError('Der Zugangscode muss genau 8 Zeichen haben.');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Bitte ein Passwort mit mindestens 8 Zeichen wählen.');
      setLoading(false);
      return;
    }

    // 1) Account anlegen
    const { data: signUpData, error: signUpError } = await sb.auth.signUp({
      email: email.trim(),
      password,
    });

    if (signUpError) {
      setError(
        signUpError.message.includes('registered')
          ? 'Diese E-Mail ist bereits registriert. Bitte loggen Sie sich ein und lösen Sie den Code dort ein.'
          : 'Konto-Erstellung fehlgeschlagen: ' + signUpError.message
      );
      setLoading(false);
      return;
    }

    // 2) Falls keine Session (E-Mail-Bestätigung erforderlich)
    if (!signUpData.session) {
      setInfo(
        'Konto angelegt. Bitte bestätigen Sie zuerst Ihre E-Mail-Adresse — ' +
          'anschließend können Sie sich einloggen und Ihren Code einlösen.'
      );
      setLoading(false);
      return;
    }

    // 3) Code einlösen
    const { error: redeemError } = await sb.rpc('redeem_educator_code', {
      p_code: cleanCode,
      p_name: name.trim(),
      p_school: school.trim() || null,
    });

    if (redeemError) {
      setError(
        'Konto angelegt, aber Code-Einlösung fehlgeschlagen: ' +
          redeemError.message +
          ' Sie können sich einloggen und es erneut versuchen.'
      );
      setLoading(false);
      return;
    }

    // 4) Erfolg → Dashboard
    router.replace('/paedagogen/dashboard');
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <Link href="/" className="flex justify-center mb-8">
          <Image src="/Logo.png" alt="ADHaSi" width={120} height={120} priority />
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <h1 className="text-2xl font-semibold text-stone-900 mb-2">
            Pädagogen-Zugang
          </h1>
          <p className="text-sm text-stone-600 mb-6">
            Sie haben von einem Elternteil einen 8-stelligen Zugangscode erhalten.
            Mit diesem Code können Sie sich registrieren und erhalten Einsicht in
            den Lernfortschritt des Kindes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-stone-700 block mb-1">
                Zugangscode
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                required
                maxLength={8}
                placeholder="z.B. A7K4M2P9"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg font-mono tracking-widest text-center uppercase focus:ring-2 focus:ring-stone-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">
                  Ihr Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Vor- und Nachname"
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">
                  Schule / Praxis (optional)
                </label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="z.B. Grundschule Köln"
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 block mb-1">
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 block mb-1">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="mind. 8 Zeichen"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {info && <p className="text-sm text-emerald-700">{info}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 font-medium transition-colors"
            >
              {loading ? 'Konto wird erstellt…' : 'Konto erstellen & Code einlösen'}
            </button>
          </form>

          <div className="text-sm text-stone-600 mt-6 pt-4 border-t border-stone-100 text-center">
            Bereits registriert?{' '}
            <Link href="/paedagogen/login" className="text-stone-900 underline">
              Hier einloggen
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-stone-500 mt-6">
          Sie haben keinen Code? Bitte fragen Sie das Elternteil — der Code wird in
          den ADHaSi-Eltern-Einstellungen generiert.
        </p>
      </div>
    </main>
  );
}
