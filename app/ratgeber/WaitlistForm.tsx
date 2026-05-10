'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Ein Fehler ist aufgetreten.');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setErrorMsg('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="font-body text-adhasi-green font-semibold text-lg">
        Danke! Wir melden uns bald.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Ihre E-Mail-Adresse"
        className="flex-1 px-4 py-3 rounded-xl border border-adhasi-border bg-white text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-adhasi-orange focus:border-adhasi-orange font-body"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-adhasi-orange text-white font-body font-bold px-6 py-3 rounded-xl hover:bg-adhasi-orange-600 disabled:opacity-50 transition-colors whitespace-nowrap"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Frühen Zugang sichern →'}
      </button>
      {status === 'error' && (
        <p className="w-full text-sm text-red-600 text-center">{errorMsg}</p>
      )}
    </form>
  );
}
