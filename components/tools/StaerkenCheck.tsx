'use client'

import { useEffect, useState } from 'react'

const STRENGTHS: string[] = [
  'Kreativität',
  'Hyperfokus bei Lieblingsthemen',
  'Energie und Antrieb',
  'Spontaneität',
  'Begeisterungsfähigkeit',
  'Empathie',
  'Humor',
  'Mut und Risikobereitschaft',
  'Querdenken',
  'Kreative Problemlösung',
  'Ruhe in Krisensituationen',
  'Neugier',
  'Praktisches Anpacken',
  'Hilfsbereitschaft',
  'Ausdauer bei Interesse',
  'Ideenreichtum',
]

const STORAGE_KEY = 'adhasi-staerken-check-v1'

type Selection = Record<string, string>

function parseSelection(raw: string | null): Selection {
  if (!raw) return {}
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    const result: Selection = {}
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof value === 'string') result[key] = value
    }
    return result
  } catch {
    return {}
  }
}

export default function StaerkenCheck() {
  const [selection, setSelection] = useState<Selection>({})
  const [custom, setCustom] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      setSelection(parseSelection(window.localStorage.getItem(STORAGE_KEY)))
    } catch {
      // Speicher nicht verfügbar
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection))
    } catch {
      // ignorieren
    }
  }, [selection, loaded])

  function toggle(name: string) {
    setSelection((prev) => {
      const copy = { ...prev }
      if (name in copy) {
        delete copy[name]
      } else {
        copy[name] = ''
      }
      return copy
    })
  }

  function setExample(name: string, value: string) {
    setSelection((prev) => ({ ...prev, [name]: value.slice(0, 200) }))
  }

  function addCustom(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = custom.trim().slice(0, 60)
    if (!value) return
    setSelection((prev) => (value in prev ? prev : { ...prev, [value]: '' }))
    setCustom('')
  }

  const names = Object.keys(selection)
  const customNames = names.filter((n) => !STRENGTHS.includes(n))

  async function copyList() {
    const lines = names.map((n) => (selection[n] ? `- ${n}: ${selection[n]}` : `- ${n}`))
    const text = `Meine Stärken\n\n${lines.join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  function clearAll() {
    if (names.length === 0) return
    if (window.confirm('Alle ausgewählten Stärken löschen?')) {
      setSelection({})
    }
  }

  return (
    <div>
      <p className="font-body text-sm font-semibold text-neutral-700 mb-3">
        Welche Aussagen passen zu Ihnen? Wählen Sie alles aus, was Sie wiedererkennen.
      </p>
      <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Stärken auswählen">
        {STRENGTHS.map((name) => {
          const active = name in selection
          return (
            <button
              key={name}
              type="button"
              onClick={() => toggle(name)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 font-body text-sm transition-colors ${
                active
                  ? 'border-adhasi-green bg-adhasi-green text-white'
                  : 'border-adhasi-border bg-white text-neutral-700 hover:border-adhasi-green'
              }`}
            >
              {name}
            </button>
          )
        })}
      </div>

      <form onSubmit={addCustom} className="flex flex-col sm:flex-row gap-3 mb-6">
        <label className="sr-only" htmlFor="staerken-custom">
          Eigene Stärke
        </label>
        <input
          id="staerken-custom"
          type="text"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          maxLength={60}
          placeholder="Eigene Stärke ergänzen"
          className="flex-1 rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        />
        <button
          type="submit"
          className="rounded-xl border border-adhasi-border bg-white px-5 py-3 font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
        >
          Ergänzen
        </button>
      </form>

      {names.length > 0 && (
        <div className="rounded-2xl bg-white border border-adhasi-border p-5">
          <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1">Meine Stärkenliste</h3>
          <p className="font-body text-xs text-neutral-500 mb-4">
            Ergänzen Sie zu jeder Stärke ein Beispiel: Wann haben Sie sie zuletzt gezeigt?
          </p>
          <ul className="flex flex-col gap-3">
            {names.map((name, i) => (
              <li key={name}>
                <label
                  htmlFor={`example-${i}`}
                  className="block font-body text-sm font-semibold text-neutral-800 mb-1"
                >
                  {name}
                  {customNames.includes(name) ? ' (eigene)' : ''}
                </label>
                <input
                  id={`example-${i}`}
                  type="text"
                  value={selection[name]}
                  onChange={(e) => setExample(name, e.target.value)}
                  maxLength={200}
                  placeholder="Beispiel aus den letzten Wochen"
                  className="w-full rounded-lg border border-adhasi-border bg-white px-3 py-2 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <button
              type="button"
              onClick={copyList}
              className="rounded-xl bg-adhasi-green px-5 py-2.5 font-body text-sm font-semibold text-white hover:opacity-90"
            >
              {copied ? 'Kopiert!' : 'Liste kopieren'}
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="font-body text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
            >
              Alles zurücksetzen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
