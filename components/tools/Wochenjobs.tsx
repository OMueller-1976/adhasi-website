'use client'

import { useState } from 'react'
import { newId, useStoredState } from './useStoredState'

const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const KEY = 'adhasi-wochenjobs-v1'

interface Job {
  id: string
  text: string
  days: boolean[]
}

function parse(raw: unknown): Job[] | null {
  if (!Array.isArray(raw)) return null
  const out: Job[] = []
  for (const item of raw) {
    const j = item as Record<string, unknown>
    if (j && typeof j.id === 'string' && typeof j.text === 'string' && Array.isArray(j.days)) {
      out.push({
        id: j.id,
        text: j.text,
        days: DAYS.map((_, i) => (j.days as unknown[])[i] === true),
      })
    }
  }
  return out
}

export default function Wochenjobs() {
  const [jobs, setJobs] = useStoredState<Job[]>(KEY, [], parse)
  const [text, setText] = useState('')

  function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    setJobs((prev) => [...prev, { id: newId(), text: value.slice(0, 80), days: DAYS.map(() => false) }])
    setText('')
  }

  function toggle(id: string, day: number) {
    setJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, days: j.days.map((d, i) => (i === day ? !d : d)) } : j)),
    )
  }

  function remove(id: string) {
    setJobs((prev) => prev.filter((j) => j.id !== id))
  }

  function newWeek() {
    setJobs((prev) => prev.map((j) => ({ ...j, days: DAYS.map(() => false) })))
  }

  const total = jobs.length * DAYS.length
  const done = jobs.reduce((sum, j) => sum + j.days.filter(Boolean).length, 0)

  return (
    <div>
      <form onSubmit={add} className="flex flex-col sm:flex-row gap-3 mb-5">
        <label className="sr-only" htmlFor="wj-text">
          Neuer Job
        </label>
        <input
          id="wj-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={80}
          placeholder="z. B. Tisch abräumen"
          className="flex-1 rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        />
        <button
          type="submit"
          className="rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Job hinzufügen
        </button>
      </form>

      {jobs.length > 0 && (
        <>
          <p className="font-body text-sm text-neutral-600 mb-3" aria-live="polite">
            {done} von {total} Kästchen abgehakt
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] font-body text-sm border-separate border-spacing-y-1">
              <thead>
                <tr>
                  <th scope="col" className="text-left text-xs text-neutral-500 font-semibold">
                    Job
                  </th>
                  {DAYS.map((d) => (
                    <th key={d} scope="col" className="text-xs text-neutral-500 font-semibold">
                      {d}
                    </th>
                  ))}
                  <th scope="col">
                    <span className="sr-only">Entfernen</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id} className="bg-white">
                    <th scope="row" className="text-left font-normal text-neutral-800 px-3 py-2 rounded-l-lg border border-adhasi-border border-r-0">
                      {j.text}
                    </th>
                    {DAYS.map((d, i) => (
                      <td key={d} className="text-center border-y border-adhasi-border">
                        <input
                          type="checkbox"
                          checked={j.days[i]}
                          onChange={() => toggle(j.id, i)}
                          aria-label={`${j.text}, ${d}`}
                          className="h-5 w-5 accent-green-700"
                        />
                      </td>
                    ))}
                    <td className="text-center rounded-r-lg border border-adhasi-border border-l-0">
                      <button
                        type="button"
                        onClick={() => remove(j.id)}
                        aria-label={`${j.text} entfernen`}
                        className="px-2 text-neutral-400 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              type="button"
              onClick={newWeek}
              className="rounded-xl border border-adhasi-border bg-white px-4 py-2 font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
            >
              Neue Woche starten
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-xl border border-adhasi-border bg-white px-4 py-2 font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
            >
              Drucken
            </button>
          </div>
        </>
      )}
    </div>
  )
}
