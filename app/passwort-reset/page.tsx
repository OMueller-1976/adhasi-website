'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

type Stage = 'exchanging' | 'form' | 'success' | 'invalid'

function createSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

function PasswortResetContent() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const [stage, setStage] = useState<Stage>(code ? 'exchanging' : 'invalid')
  const [passwort, setPasswort] = useState('')
  const [bestaetigung, setBestaetigung] = useState('')
  const [fehler, setFehler] = useState('')
  const [loading, setLoading] = useState(false)

  // Step 1: exchange code for session
  useEffect(() => {
    if (!code) return
    createSupabase()
      .auth.exchangeCodeForSession(code)
      .then(({ error }) => setStage(error ? 'invalid' : 'form'))
      .catch(() => setStage('invalid'))
  }, [code])

  // Step 2: update password
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFehler('')
    if (passwort !== bestaetigung) {
      setFehler('Passwörter stimmen nicht überein.')
      return
    }
    if (passwort.length < 8) {
      setFehler('Passwort muss mindestens 8 Zeichen haben.')
      return
    }
    setLoading(true)
    try {
      const { error } = await createSupabase().auth.updateUser({ password: passwort })
      if (error) {
        setFehler('Fehler: ' + error.message)
      } else {
        setStage('success')
      }
    } finally {
      setLoading(false)
    }
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '400px',
    margin: '60px auto',
    padding: '20px',
    textAlign: 'center',
  }

  if (stage === 'exchanging') {
    return (
      <div style={containerStyle}>
        <p style={{ color: '#666', fontSize: '16px' }}>🔐 Sicherheitslink wird geprüft…</p>
      </div>
    )
  }

  if (stage === 'invalid') {
    return (
      <div style={containerStyle}>
        <h1>⚠️ Link ungültig</h1>
        <p style={{ color: '#666' }}>
          Dieser Passwort-Reset-Link ist abgelaufen oder wurde bereits verwendet.
          Bitte fordere einen neuen Link in der App an.
        </p>
      </div>
    )
  }

  if (stage === 'success') {
    return (
      <div style={containerStyle}>
        <h1>✅ Passwort gespeichert!</h1>
        <p>Du kannst dich jetzt in der ADHaSi App mit deinem neuen Passwort anmelden.</p>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Öffne die ADHaSi App und wähle &ldquo;Bereits registriert? Hier anmelden&rdquo;
        </p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '8px' }}>Neues Passwort setzen</h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>Für dein ADHaSi-Konto</p>

      {fehler && (
        <div
          style={{
            background: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '16px',
            color: '#c00',
          }}
        >
          {fehler}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Neues Passwort</label>
        <input
          type="password"
          required
          value={passwort}
          onChange={(e) => setPasswort(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            boxSizing: 'border-box',
          }}
          placeholder="Mindestens 8 Zeichen"
        />

        <label>Passwort bestätigen</label>
        <input
          type="password"
          required
          value={bestaetigung}
          onChange={(e) => setBestaetigung(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            boxSizing: 'border-box',
          }}
          placeholder="Passwort wiederholen"
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: loading ? '#a78bfa' : '#7C3AED',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Wird gespeichert…' : 'Passwort speichern'}
        </button>
      </form>
    </div>
  )
}

export default function PasswortResetPage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
        Wird geladen…
      </div>
    }>
      <PasswortResetContent />
    </Suspense>
  )
}
