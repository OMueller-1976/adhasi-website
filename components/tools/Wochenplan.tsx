'use client'

import { useStoredState } from './useStoredState'

const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const SLOTS = ['Morgens', 'Nachmittags', 'Abends']
const KEY = 'adhasi-wochenplan-v1'

type Plan = string[][]

function emptyPlan(): Plan {
  return SLOTS.map(() => DAYS.map(() => ''))
}

function parse(raw: unknown): Plan | null {
  if (!Array.isArray(raw)) return null
  const plan = emptyPlan()
  for (let r = 0; r < SLOTS.length; r++) {
    const row = raw[r]
    if (!Array.isArray(row)) continue
    for (let c = 0; c < DAYS.length; c++) {
      if (typeof row[c] === 'string') plan[r][c] = (row[c] as string).slice(0, 60)
    }
  }
  return plan
}

export default function Wochenplan() {
  const [plan, setPlan] = useStoredState<Plan>(KEY, emptyPlan(), parse)

  function update(r: number, c: number, value: string) {
    setPlan((prev) =>
      prev.map((row, ri) => (ri === r ? row.map((cell, ci) => (ci === c ? value.slice(0, 60) : cell)) : row)),
    )
  }

  function reset() {
    if (window.confirm('Alle Einträge im Wochenplan löschen?')) setPlan(emptyPlan())
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-1 font-body text-sm">
          <caption className="sr-only">Wochenplan mit Tagen und Tageszeiten</caption>
          <thead>
            <tr>
              <th className="w-24" scope="col">
                <span className="sr-only">Tageszeit</span>
              </th>
              {DAYS.map((d) => (
                <th key={d} scope="col" className="rounded-lg bg-adhasi-green px-2 py-2 text-white font-semibold">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SLOTS.map((slot, r) => (
              <tr key={slot}>
                <th scope="row" className="text-left text-xs font-semibold text-neutral-600 pr-2">
                  {slot}
                </th>
                {DAYS.map((d, c) => (
                  <td key={d}>
                    <label className="sr-only" htmlFor={`wp-${r}-${c}`}>
                      {d} {slot}
                    </label>
                    <input
                      id={`wp-${r}-${c}`}
                      type="text"
                      value={plan[r][c]}
                      onChange={(e) => update(r, c, e.target.value)}
                      maxLength={60}
                      className="w-full rounded-md border border-adhasi-border bg-white px-2 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-body text-xs text-neutral-500 mt-3">
        Tipp: Tragen Sie zuerst die festen Punkte ein (Schule, Training, Mahlzeiten) und lassen Sie
        bewusst Lücken als Puffer.
      </p>
      <div className="mt-4 flex gap-4">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl border border-adhasi-border bg-white px-4 py-2 font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
        >
          Drucken
        </button>
        <button
          type="button"
          onClick={reset}
          className="font-body text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
        >
          Plan leeren
        </button>
      </div>
    </div>
  )
}
