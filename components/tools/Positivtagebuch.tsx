'use client'

import { useState } from 'react'
import { newId, useStoredState } from './useStoredState'

interface Entry {
  id: string
  date: string
  text: string
}

const KEY = 'adhasi-positivtagebuch-v1'

function parse(raw: unknown): Entry[] | null {
  if (!Array.isArray(raw)) return null
  const out: Entry[] = []
  for (const item of raw) {
    const e = item as Record<string, unknown>
    if (e && typeof e.id === 'string' && typeof e.date === 'string' && typeof e.text === 'string') {
      out.push({ id: e.id, date: e.date, text: e.text })
    }
  }
  return out
}

const PROMPTS = [
  'Was hat heute gut geklappt?',
  'Wobei hat mein Kind sich angestrengt?',
  'Was war ein schöner gemeinsamer Moment?',
]

export default function Positivtagebuch() {
  const [entries, setEntries] = useStoredState<Entry[]>(KEY, [], parse)
  const [text, setText] = useState('')

  function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    setEntries((prev) => [
      { id: newId(), date: new Date().toLocaleDateString('de-DE'), text: value.slice(0, 400) },
      ...prev,
    ])
    setText('')
  }

  function remove(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div>
      <ul className="font-body text-sm text-neutral-600 mb-4 list-disc pl-5">
        {PROMPTS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <form onSubmit={add} className="flex flex-col gap-3 mb-5">
        <label htmlFor="pt-text" className="sr-only">
          Positiver Moment
        </label>
        <textarea
          id="pt-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={400}
          rows={3}
          placeholder="Heute hat mein Kind ..."
          className="w-full rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        />
        <button
          type="submit"
          className="self-start rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Eintrag speichern
        </button>
      </form>
      {entries.length > 0 && (
        <ul className="flex flex-col gap-2">
          {entries.map((e) => (
            <li key={e.id} className="rounded-lg border border-adhasi-border bg-white p-3 font-body text-sm">
              <div className="flex items-start justify-between gap-3">
                <span className="font-semibold text-neutral-800">{e.date}</span>
                <button
                  type="button"
                  onClick={() => remove(e.id)}
                  aria-label="Eintrag löschen"
                  className="text-neutral-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-neutral-700 mt-1 break-words">{e.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
