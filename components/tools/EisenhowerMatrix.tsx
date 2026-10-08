'use client'

import { useEffect, useState } from 'react'

type QuadrantId = 'now' | 'plan' | 'delegate' | 'drop'

interface Task {
  id: string
  text: string
  quadrant: QuadrantId
}

interface Quadrant {
  id: QuadrantId
  title: string
  hint: string
  action: string
  tone: string
}

const STORAGE_KEY = 'adhasi-eisenhower-v1'

const QUADRANTS: Quadrant[] = [
  {
    id: 'now',
    title: '1 · Sofort erledigen',
    hint: 'Wichtig und dringend',
    action: 'Heute zuerst angehen',
    tone: 'bg-red-50 border-red-200',
  },
  {
    id: 'plan',
    title: '2 · Termin einplanen',
    hint: 'Wichtig, aber nicht dringend',
    action: 'Feste Zeit im Kalender reservieren',
    tone: 'bg-emerald-50 border-emerald-200',
  },
  {
    id: 'delegate',
    title: '3 · Abgeben oder abkürzen',
    hint: 'Dringend, aber weniger wichtig',
    action: 'Delegieren oder kurz halten',
    tone: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'drop',
    title: '4 · Streichen',
    hint: 'Weder wichtig noch dringend',
    action: 'Bewusst weglassen',
    tone: 'bg-neutral-50 border-neutral-200',
  },
]

function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function isQuadrantId(value: unknown): value is QuadrantId {
  return value === 'now' || value === 'plan' || value === 'delegate' || value === 'drop'
}

function parseTasks(raw: string | null): Task[] {
  if (!raw) return []
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const result: Task[] = []
    for (const item of parsed) {
      if (
        item &&
        typeof item === 'object' &&
        typeof (item as Task).id === 'string' &&
        typeof (item as Task).text === 'string' &&
        isQuadrantId((item as Task).quadrant)
      ) {
        result.push({
          id: (item as Task).id,
          text: (item as Task).text,
          quadrant: (item as Task).quadrant,
        })
      }
    }
    return result
  } catch {
    return []
  }
}

export default function EisenhowerMatrix() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [text, setText] = useState('')
  const [target, setTarget] = useState<QuadrantId>('now')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      setTasks(parseTasks(window.localStorage.getItem(STORAGE_KEY)))
    } catch {
      // Speicher nicht verfügbar: Tool funktioniert trotzdem
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
      // ignorieren
    }
  }, [tasks, loaded])

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    setTasks((prev) => [...prev, { id: newId(), text: value.slice(0, 120), quadrant: target }])
    setText('')
  }

  function moveTask(id: string, quadrant: QuadrantId) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, quadrant } : t)))
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  function resetAll() {
    if (tasks.length === 0) return
    if (window.confirm('Wirklich alle Aufgaben aus der Matrix löschen?')) {
      setTasks([])
    }
  }

  return (
    <div>
      <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-3 mb-6">
        <label className="sr-only" htmlFor="eisenhower-text">
          Neue Aufgabe
        </label>
        <input
          id="eisenhower-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={120}
          placeholder="Aufgabe eingeben, z. B. Steuerunterlagen sortieren"
          className="flex-1 rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        />
        <label className="sr-only" htmlFor="eisenhower-target">
          Quadrant
        </label>
        <select
          id="eisenhower-target"
          value={target}
          onChange={(e) => setTarget(e.target.value as QuadrantId)}
          className="rounded-xl border border-adhasi-border bg-white px-3 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green"
        >
          {QUADRANTS.map((q) => (
            <option key={q.id} value={q.id}>
              {q.title}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Hinzufügen
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {QUADRANTS.map((q) => {
          const items = tasks.filter((t) => t.quadrant === q.id)
          return (
            <div key={q.id} className={`rounded-xl border p-4 ${q.tone}`}>
              <h3 className="font-heading text-base font-bold text-neutral-900">{q.title}</h3>
              <p className="font-body text-xs text-neutral-500 mb-3">
                {q.hint} · {q.action}
              </p>
              {items.length === 0 ? (
                <p className="font-body text-sm text-neutral-400">Noch keine Aufgaben.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {items.map((t) => (
                    <li
                      key={t.id}
                      className="rounded-lg bg-white border border-adhasi-border px-3 py-2"
                    >
                      <p className="font-body text-sm text-neutral-800 break-words">{t.text}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <label className="sr-only" htmlFor={`move-${t.id}`}>
                          Verschieben nach
                        </label>
                        <select
                          id={`move-${t.id}`}
                          value={t.quadrant}
                          onChange={(e) => moveTask(t.id, e.target.value as QuadrantId)}
                          className="rounded-md border border-adhasi-border bg-white px-2 py-1 font-body text-xs text-neutral-700"
                        >
                          {QUADRANTS.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.title}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => removeTask(t.id)}
                          className="ml-auto font-body text-xs font-semibold text-neutral-500 hover:text-red-600"
                        >
                          Entfernen
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={resetAll}
          className="font-body text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
        >
          Alles zurücksetzen
        </button>
      </div>
    </div>
  )
}
