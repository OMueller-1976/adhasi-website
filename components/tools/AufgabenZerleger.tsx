'use client'

import { useEffect, useState } from 'react'

interface Step {
  id: string
  text: string
  done: boolean
}

interface SavedState {
  goal: string
  steps: Step[]
}

const STORAGE_KEY = 'adhasi-aufgaben-zerleger-v1'

function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function parseState(raw: string | null): SavedState {
  const empty: SavedState = { goal: '', steps: [] }
  if (!raw) return empty
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return empty
    const obj = parsed as { goal?: unknown; steps?: unknown }
    const goal = typeof obj.goal === 'string' ? obj.goal : ''
    const steps: Step[] = []
    if (Array.isArray(obj.steps)) {
      for (const item of obj.steps) {
        if (
          item &&
          typeof item === 'object' &&
          typeof (item as Step).id === 'string' &&
          typeof (item as Step).text === 'string' &&
          typeof (item as Step).done === 'boolean'
        ) {
          steps.push({
            id: (item as Step).id,
            text: (item as Step).text,
            done: (item as Step).done,
          })
        }
      }
    }
    return { goal, steps }
  } catch {
    return empty
  }
}

export default function AufgabenZerleger() {
  const [goal, setGoal] = useState('')
  const [steps, setSteps] = useState<Step[]>([])
  const [newStep, setNewStep] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = parseState(window.localStorage.getItem(STORAGE_KEY))
      setGoal(saved.goal)
      setSteps(saved.steps)
    } catch {
      // Speicher nicht verfügbar
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ goal, steps }))
    } catch {
      // ignorieren
    }
  }, [goal, steps, loaded])

  function addStep(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = newStep.trim()
    if (!value) return
    setSteps((prev) => [...prev, { id: newId(), text: value.slice(0, 120), done: false }])
    setNewStep('')
  }

  function toggleStep(id: string) {
    setSteps((prev) => prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)))
  }

  function removeStep(id: string) {
    setSteps((prev) => prev.filter((s) => s.id !== id))
  }

  function moveStep(id: string, direction: -1 | 1) {
    setSteps((prev) => {
      const index = prev.findIndex((s) => s.id === id)
      const target = index + direction
      if (index < 0 || target < 0 || target >= prev.length) return prev
      const copy = [...prev]
      const [item] = copy.splice(index, 1)
      copy.splice(target, 0, item)
      return copy
    })
  }

  function startOver() {
    if (steps.length === 0 && !goal) return
    if (window.confirm('Aufgabe und alle Schritte löschen und neu beginnen?')) {
      setGoal('')
      setSteps([])
      setNewStep('')
    }
  }

  const doneCount = steps.filter((s) => s.done).length
  const percent = steps.length === 0 ? 0 : Math.round((doneCount / steps.length) * 100)

  return (
    <div>
      <label htmlFor="zerleger-goal" className="block font-body text-sm font-semibold text-neutral-700 mb-1">
        Große Aufgabe
      </label>
      <input
        id="zerleger-goal"
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value.slice(0, 120))}
        placeholder="z. B. Steuererklärung machen"
        className="w-full rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green mb-5"
      />

      <form onSubmit={addStep} className="flex flex-col sm:flex-row gap-3 mb-4">
        <label className="sr-only" htmlFor="zerleger-step">
          Neuer Schritt
        </label>
        <input
          id="zerleger-step"
          type="text"
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
          maxLength={120}
          placeholder="Nächster kleiner Schritt, z. B. Belege auf den Tisch legen"
          className="flex-1 rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        />
        <button
          type="submit"
          className="rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Schritt hinzufügen
        </button>
      </form>

      <p className="font-body text-xs text-neutral-500 mb-4">
        Tipp: Machen Sie den ersten Schritt so klein, dass er in unter fünf Minuten erledigt ist.
      </p>

      {steps.length > 0 && (
        <>
          <div className="flex items-center justify-between font-body text-sm text-neutral-600 mb-2">
            <span>
              {doneCount} von {steps.length} Schritten erledigt
            </span>
            <span className="font-semibold">{percent} %</span>
          </div>
          <div
            className="h-3 rounded-full bg-neutral-100 overflow-hidden mb-5"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            aria-label="Fortschritt"
          >
            <div
              className="h-full rounded-full bg-adhasi-green transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>

          <ol className="flex flex-col gap-2">
            {steps.map((s, index) => (
              <li
                key={s.id}
                className="flex items-center gap-3 rounded-lg border border-adhasi-border bg-white px-3 py-2"
              >
                <input
                  id={`step-${s.id}`}
                  type="checkbox"
                  checked={s.done}
                  onChange={() => toggleStep(s.id)}
                  className="h-5 w-5 accent-green-700"
                />
                <label
                  htmlFor={`step-${s.id}`}
                  className={`flex-1 font-body text-sm break-words ${
                    s.done ? 'text-neutral-400 line-through' : 'text-neutral-800'
                  }`}
                >
                  {index + 1}. {s.text}
                </label>
                <button
                  type="button"
                  onClick={() => moveStep(s.id, -1)}
                  disabled={index === 0}
                  aria-label="Schritt nach oben"
                  className="px-1 font-body text-sm text-neutral-500 hover:text-neutral-900 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => moveStep(s.id, 1)}
                  disabled={index === steps.length - 1}
                  aria-label="Schritt nach unten"
                  className="px-1 font-body text-sm text-neutral-500 hover:text-neutral-900 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => removeStep(s.id)}
                  aria-label="Schritt entfernen"
                  className="px-1 font-body text-sm text-neutral-400 hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ol>

          {percent === 100 && (
            <p className="font-body text-sm font-semibold text-adhasi-green mt-4">
              Geschafft! Alle Schritte sind erledigt. Gönnen Sie sich eine kleine Belohnung.
            </p>
          )}
        </>
      )}

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={startOver}
          className="font-body text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
        >
          Neu beginnen
        </button>
      </div>
    </div>
  )
}
