'use client'

import { useState } from 'react'
import { newId, useStoredState } from './useStoredState'

interface Entry {
  id: string
  date: string
  situation: string
  reaction: string
  helped: string
}

const KEY = 'adhasi-beobachtungsbogen-v1'

function parse(raw: unknown): Entry[] | null {
  if (!Array.isArray(raw)) return null
  const out: Entry[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const e = item as Record<string, unknown>
    if (
      typeof e.id === 'string' &&
      typeof e.date === 'string' &&
      typeof e.situation === 'string' &&
      typeof e.reaction === 'string' &&
      typeof e.helped === 'string'
    ) {
      out.push({ id: e.id, date: e.date, situation: e.situation, reaction: e.reaction, helped: e.helped })
    }
  }
  return out
}

export default function Beobachtungsbogen() {
  const [entries, setEntries] = useStoredState<Entry[]>(KEY, [], parse)
  const [situation, setSituation] = useState('')
  const [reaction, setReaction] = useState('')
  const [helped, setHelped] = useState('')
  const [copied, setCopied] = useState(false)

  function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!situation.trim()) return
    setEntries((prev) => [
      {
        id: newId(),
        date: new Date().toLocaleDateString('de-DE'),
        situation: situation.trim().slice(0, 300),
        reaction: reaction.trim().slice(0, 300),
        helped: helped.trim().slice(0, 300),
      },
      ...prev,
    ])
    setSituation('')
    setReaction('')
    setHelped('')
  }

  function remove(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }

  async function copyAll() {
    const text = entries
      .map(
        (e) =>
          `${e.date}\nSituation: ${e.situation}\nReaktion des Kindes: ${e.reaction || '-'}\nWas geholfen hat: ${e.helped || '-'}`,
      )
      .join('\n\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green'
  const labelClass = 'block font-body text-sm font-semibold text-neutral-700 mb-1'

  return (
    <div>
      <form onSubmit={add} className="flex flex-col gap-3 mb-5">
        <div>
          <label htmlFor="beob-situation" className={labelClass}>
            Situation
          </label>
          <input
            id="beob-situation"
            type="text"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            maxLength={300}
            placeholder="z. B. Hausaufgaben nach dem Mittagessen"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beob-reaction" className={labelClass}>
            Wie hat das Kind reagiert?
          </label>
          <input
            id="beob-reaction"
            type="text"
            value={reaction}
            onChange={(e) => setReaction(e.target.value)}
            maxLength={300}
            placeholder="z. B. nach 5 Minuten aufgestanden, wurde laut"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beob-helped" className={labelClass}>
            Was hat geholfen?
          </label>
          <input
            id="beob-helped"
            type="text"
            value={helped}
            onChange={(e) => setHelped(e.target.value)}
            maxLength={300}
            placeholder="z. B. kurze Bewegungspause, danach ging es weiter"
            className={fieldClass}
          />
        </div>
        <button
          type="submit"
          className="self-start rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Eintrag speichern
        </button>
      </form>

      {entries.length > 0 && (
        <>
          <ul className="flex flex-col gap-3">
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
                <p className="text-neutral-700 mt-1">
                  <strong>Situation:</strong> {e.situation}
                </p>
                {e.reaction && (
                  <p className="text-neutral-700">
                    <strong>Reaktion:</strong> {e.reaction}
                  </p>
                )}
                {e.helped && (
                  <p className="text-neutral-700">
                    <strong>Geholfen hat:</strong> {e.helped}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={copyAll}
              className="rounded-xl border border-adhasi-border bg-white px-4 py-2 font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
            >
              Als Text kopieren
            </button>
            {copied && (
              <span role="status" className="font-body text-sm text-adhasi-green">
                Kopiert
              </span>
            )}
          </div>
        </>
      )}
    </div>
  )
}
