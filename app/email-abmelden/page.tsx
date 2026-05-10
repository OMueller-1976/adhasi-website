'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

// ── Token flow (existing unsubscribe/resubscribe logic) ───────────────────────

type TokenStatus = 'loading' | 'unsubscribed' | 'resubscribed' | 'error';

function TokenFlow({ token }: { token: string }) {
  const [status, setStatus] = useState<TokenStatus>('loading');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/email-abmelden?token=${encodeURIComponent(token)}&action=unsubscribe`)
      .then((r) => r.json())
      .then((data) => setStatus(data.success ? 'unsubscribed' : 'error'))
      .catch(() => setStatus('error'));
  }, [token]);

  async function handleResubscribe() {
    setActionLoading(true);
    try {
      const r = await fetch(
        `/api/email-abmelden?token=${encodeURIComponent(token)}&action=resubscribe`,
      );
      const data = await r.json();
      setStatus(data.success ? 'resubscribed' : 'error');
    } catch {
      setStatus('error');
    } finally {
      setActionLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 text-center">
      {status === 'loading' && (
        <>
          <div className="text-3xl mb-4 animate-pulse">✉️</div>
          <p className="text-stone-500 text-sm">Wird bearbeitet…</p>
        </>
      )}
      {status === 'unsubscribed' && (
        <>
          <div className="text-4xl mb-4">✓</div>
          <h1 className="text-2xl font-semibold text-stone-900 mb-3">Abgemeldet</h1>
          <p className="text-stone-600 text-sm mb-6">
            Du wirst keine Wochen-Rückblicke mehr erhalten.
          </p>
          <button
            onClick={handleResubscribe}
            disabled={actionLoading}
            className="inline-block py-2.5 px-6 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors font-medium text-sm"
          >
            {actionLoading ? 'Wird gespeichert…' : 'Doch wieder anmelden'}
          </button>
        </>
      )}
      {status === 'resubscribed' && (
        <>
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-2xl font-semibold text-stone-900 mb-3">Wieder angemeldet</h1>
          <p className="text-stone-600 text-sm mb-6">
            Du erhältst weiterhin den wöchentlichen Rückblick.
          </p>
          <Link
            href="/"
            className="inline-block py-2.5 px-6 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors font-medium text-sm"
          >
            Zur Startseite
          </Link>
        </>
      )}
      {status === 'error' && (
        <>
          <div className="text-4xl mb-4">⚠️</div>
          <h1 className="text-2xl font-semibold text-stone-900 mb-3">Link ungültig</h1>
          <p className="text-stone-600 text-sm mb-6">
            Dieser Abmelde-Link ist nicht mehr gültig. Bitte nutze den Link
            aus deiner letzten E-Mail.
          </p>
          <Link
            href="/"
            className="inline-block py-2.5 px-6 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors font-medium text-sm"
          >
            Zur Startseite
          </Link>
        </>
      )}
    </div>
  );
}

// ── No-token flow: login + toggle ─────────────────────────────────────────────

function LoginFlow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [weeklyEnabled, setWeeklyEnabled] = useState(true);
  const [toggleLoading, setToggleLoading] = useState(false);
  const [toggleSaved, setToggleSaved] = useState(false);

  async function loadPreference(uid: string) {
    const supabase = getSupabaseBrowser();
    const { data } = await supabase
      .from('parent_profiles')
      .select('weekly_email_enabled')
      .eq('id', uid)
      .single();
    if (data) setWeeklyEnabled(data.weekly_email_enabled ?? true);
  }

  // Check if already logged in (e.g. existing session cookie)
  useEffect(() => {
    const supabase = getSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setLoggedIn(true);
        setUserId(data.user.id);
        loadPreference(data.user.id);
      }
    });
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    try {
      const supabase = getSupabaseBrowser();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error || !data.user) {
        setLoginError('E-Mail oder Passwort falsch.');
      } else {
        setUserId(data.user.id);
        setLoggedIn(true);
        await loadPreference(data.user.id);
      }
    } catch {
      setLoginError('Ein Fehler ist aufgetreten. Bitte erneut versuchen.');
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleToggle() {
    const newValue = !weeklyEnabled;
    setToggleLoading(true);
    setToggleSaved(false);
    try {
      const supabase = getSupabaseBrowser();
      await supabase
        .from('parent_profiles')
        .update({ weekly_email_enabled: newValue })
        .eq('id', userId);
      setWeeklyEnabled(newValue);
      setToggleSaved(true);
      setTimeout(() => setToggleSaved(false), 2000);
    } finally {
      setToggleLoading(false);
    }
  }

  if (!loggedIn) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
        <div className="text-3xl mb-4 text-center">🔐</div>
        <h1 className="text-xl font-semibold text-stone-900 mb-2 text-center">
          E-Mail-Einstellungen
        </h1>
        <p className="text-stone-500 text-sm mb-6 text-center">
          Bitte melde dich mit deinem ADHaSi-Konto an.
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">E-Mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Passwort</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          <button
            type="submit"
            disabled={loginLoading}
            className="w-full py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-colors font-medium text-sm"
          >
            {loginLoading ? 'Wird angemeldet…' : 'Anmelden'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
      <div className="text-3xl mb-4 text-center">✉️</div>
      <h1 className="text-xl font-semibold text-stone-900 mb-6 text-center">
        E-Mail-Einstellungen
      </h1>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-stone-800">
            Wochen-Rückblick E-Mails erhalten
          </p>
          <p className="text-xs text-stone-500 mt-0.5">
            Jeden Sonntag – Lernfortschritt deines Kindes
          </p>
        </div>
        <button
          onClick={handleToggle}
          disabled={toggleLoading}
          aria-pressed={weeklyEnabled}
          className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
            weeklyEnabled ? 'bg-orange-500' : 'bg-stone-300'
          } ${toggleLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
              weeklyEnabled ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {toggleSaved && (
        <p className="text-green-600 text-xs mt-4 text-center">✓ Gespeichert</p>
      )}

      <div className="mt-6 pt-6 border-t border-stone-100 text-center">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

function EmailAbmeldenContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center mb-8">
          <Image src="/Logo.png" alt="ADHaSi" width={120} height={120} priority />
        </Link>
        {token ? <TokenFlow token={token} /> : <LoginFlow />}
      </div>
    </main>
  );
}

export default function EmailAbmeldenPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center">
          <p className="text-stone-400 text-sm">Wird geladen…</p>
        </main>
      }
    >
      <EmailAbmeldenContent />
    </Suspense>
  );
}
