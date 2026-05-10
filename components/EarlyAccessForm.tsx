'use client'

import { useState, FormEvent } from 'react'

export default function EarlyAccessForm() {
  const [email, setEmail]           = useState('')
  const [isEducator, setIsEducator] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), is_educator: isEducator }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.')
        return
      }
      setSubmitted(true)
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-adhasi-green-50 border border-adhasi-green rounded-2xl p-6 text-center">
        <p className="text-3xl mb-2">🎉</p>
        <p className="font-heading text-xl text-adhasi-green-700 font-semibold">
          Danke! Wir melden uns, sobald ADHaSi im Play Store ist.
        </p>
        <p className="text-sm text-neutral-500 mt-2">
          Wir nutzen deine E-Mail nur für diese eine Benachrichtigung. Keine Weitergabe.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="deine@email.de"
          className="flex-1 px-4 py-3 rounded-xl border-2 border-adhasi-green-100 focus:border-adhasi-green focus:outline-none font-body text-neutral-900 bg-white"
          aria-label="E-Mail-Adresse"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-adhasi-orange hover:bg-adhasi-orange-600 text-white font-body font-bold px-6 py-3 rounded-xl transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {loading ? 'Wird gesendet…' : 'Frühen Zugang sichern'}
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
        <input
          type="checkbox"
          checked={isEducator}
          onChange={(e) => setIsEducator(e.target.checked)}
          className="rounded accent-adhasi-green"
        />
        Ich bin Elternteil, Lehrer:in oder Therapeut:in
      </label>

      {error && <p className="text-adhasi-red text-sm">{error}</p>}

      <p className="text-xs text-neutral-400">
        Wir nutzen deine E-Mail nur für diese eine Benachrichtigung. Kein Spam. Keine Weitergabe.
      </p>
    </form>
  )
}
