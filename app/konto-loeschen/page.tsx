'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

type Step = 'login' | 'confirm' | 'success';

export default function KontoLoeschenPage() {
  const [step, setStep] = useState<Step>('login');

  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Confirm state
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    const sb = getSupabaseBrowser();
    const { error } = await sb.auth.signInWithPassword({ email, password });
    setLoginLoading(false);
    if (error) {
      setLoginError('E-Mail oder Passwort falsch.');
    } else {
      setStep('confirm');
    }
  }

  async function handleDelete() {
    setDeleteLoading(true);
    setDeleteError(null);
    try {
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (!res.ok) {
        setDeleteError(data.error ?? 'Ein Fehler ist aufgetreten.');
        setDeleteLoading(false);
        return;
      }
      setShowModal(false);
      setStep('success');
    } catch {
      setDeleteError('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      setDeleteLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center mb-8">
          <Image src="/Logo.png" alt="ADHaSi" width={120} height={120} priority />
        </Link>

        {/* ── Step 1: Login ─────────────────────────────────────────── */}
        {step === 'login' && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
            <h1 className="text-2xl font-semibold text-stone-900 mb-2">Account löschen</h1>
            <p className="text-sm text-stone-600 mb-6">
              Loggen Sie sich ein, um Ihren ADHaSi-Account unwiderruflich zu löschen.
            </p>

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

              {loginError && <p className="text-sm text-red-600">{loginError}</p>}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors font-medium"
              >
                {loginLoading ? 'Einloggen…' : 'Einloggen'}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-stone-500">
              <Link href="/eltern/login" className="hover:underline text-stone-600">
                Zurück zum Eltern-Login
              </Link>
            </p>
          </div>
        )}

        {/* ── Step 2: Confirm ───────────────────────────────────────── */}
        {step === 'confirm' && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⚠️</span>
              <h1 className="text-2xl font-semibold text-stone-900">Account löschen</h1>
            </div>
            <p className="text-sm text-stone-600 mb-6">
              Diese Aktion ist <strong>unwiderruflich</strong>. Alle Ihre Daten und der
              Lernfortschritt Ihres Kindes werden dauerhaft gelöscht.
            </p>

            <label className="flex items-start gap-3 cursor-pointer group mb-6">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1 w-4 h-4 accent-red-600 shrink-0 cursor-pointer"
              />
              <span className="text-sm text-stone-700 leading-snug">
                Hiermit bestätige ich, dass mein Account und alle Daten unwiderruflich
                gelöscht werden sollen.
              </span>
            </label>

            {deleteError && <p className="text-sm text-red-600 mb-4">{deleteError}</p>}

            <button
              onClick={() => setShowModal(true)}
              disabled={!checked}
              className="w-full py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Account löschen
            </button>

            <p className="mt-4 text-center text-sm">
              <Link href="/eltern/dashboard" className="text-stone-500 hover:underline">
                Abbrechen
              </Link>
            </p>
          </div>
        )}

        {/* ── Step 3: Success ───────────────────────────────────────── */}
        {step === 'success' && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h1 className="text-2xl font-semibold text-stone-900 mb-2">
              Löschantrag eingereicht
            </h1>
            <p className="text-sm text-stone-600 mb-6">
              Ihr Löschantrag wurde eingereicht. Wir löschen Ihren Account innerhalb
              von 48 Stunden und bestätigen dies per E-Mail.
            </p>
            <Link
              href="/"
              className="inline-block py-2.5 px-6 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors font-medium text-sm"
            >
              Zur Startseite
            </Link>
          </div>
        )}
      </div>

      {/* ── Confirmation Modal ─────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => !deleteLoading && setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl border border-stone-200 p-8 w-full max-w-sm">
            <h2 className="text-xl font-semibold text-stone-900 mb-2">Wirklich löschen?</h2>
            <p className="text-sm text-stone-600 mb-6">
              Ihr Account und alle Daten werden sofort und unwiderruflich gelöscht.
              Diese Aktion kann nicht rückgängig gemacht werden.
            </p>

            {deleteError && <p className="text-sm text-red-600 mb-4">{deleteError}</p>}

            <div className="flex flex-col gap-3">
              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="w-full py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
              >
                {deleteLoading ? 'Wird gelöscht…' : 'Ja, Account endgültig löschen'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                disabled={deleteLoading}
                className="w-full py-2.5 bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 disabled:opacity-50 transition-colors font-medium"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
