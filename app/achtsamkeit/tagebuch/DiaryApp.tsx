'use client'

import { useState, useEffect } from 'react'

// ── Constants ────────────────────────────────────────────────────────────────

const MOODS = ['😊', '😐', '😟', '😡', '🤩'] as const

const EXERCISES = [
  'Keine',
  'Bienenatmen',
  'Drachenatmen',
  '4-7-8',
  'Sternatmen',
  'Ballonatmen',
  'Schmetterlingsatem',
] as const

const SESSION_KEY = 'adhasi_diary_pin'

const storageKey = (pin: string) => `adhasi_diary_${pin}`

function generatePin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// ── Types ────────────────────────────────────────────────────────────────────

interface DiaryEntry {
  id: string
  date: string
  mood: string
  goodThing: string
  thought: string
  exercise: string
}

type UIState = 'loading' | 'new' | 'returning' | 'diary'

// ── localStorage helpers ─────────────────────────────────────────────────────

function loadEntries(pin: string): DiaryEntry[] {
  try {
    const raw = localStorage.getItem(storageKey(pin))
    return raw ? (JSON.parse(raw) as DiaryEntry[]) : []
  } catch {
    return []
  }
}

function persistEntries(pin: string, entries: DiaryEntry[]): void {
  localStorage.setItem(storageKey(pin), JSON.stringify(entries))
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DiaryApp() {
  // Core state
  const [uiState, setUiState] = useState<UIState>('loading')
  const [pin, setPin] = useState('')
  const [pendingPin, setPendingPin] = useState('') // pre-generated for "new" flow
  const [pinInput, setPinInput] = useState('')
  const [entries, setEntries] = useState<DiaryEntry[]>([])

  // Entry form
  const [mood, setMood] = useState('')
  const [goodThing, setGoodThing] = useState('')
  const [thought, setThought] = useState('')
  const [exercise, setExercise] = useState<string>('Keine')
  const [showSaved, setShowSaved] = useState(false)

  // ── Init (client only) ───────────────────────────────────────────────────

  useEffect(() => {
    const savedPin = sessionStorage.getItem(SESSION_KEY)
    if (savedPin) {
      setPin(savedPin)
      setEntries(loadEntries(savedPin))
      setUiState('diary')
    } else {
      // Pre-generate a pin for the "new" mode so it stays stable across toggles
      setPendingPin(generatePin())
      setUiState('returning')
    }
  }, [])

  // ── Handlers ─────────────────────────────────────────────────────────────

  const openDiary = (activePin: string) => {
    sessionStorage.setItem(SESSION_KEY, activePin)
    setPin(activePin)
    setEntries(loadEntries(activePin))
    setUiState('diary')
  }

  const handleStartNew = () => openDiary(pendingPin)

  const handleOpenExisting = () => {
    const trimmed = pinInput.trim()
    if (!trimmed) return
    openDiary(trimmed)
  }

  const handleSaveEntry = () => {
    if (!mood && !goodThing.trim() && !thought.trim()) return

    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      mood,
      goodThing: goodThing.trim(),
      thought: thought.trim(),
      exercise,
    }

    const updated = [entry, ...entries]
    persistEntries(pin, updated)
    setEntries(updated)

    // Reset form
    setMood('')
    setGoodThing('')
    setThought('')
    setExercise('Keine')
    setShowSaved(true)
    setTimeout(() => setShowSaved(false), 2500)
  }

  // ── Render: loading ───────────────────────────────────────────────────────

  if (uiState === 'loading') return null

  // ── Render: State A — New user ───────────────────────────────────────────

  if (uiState === 'new') {
    return (
      <div className="flex flex-col items-center gap-6 py-4 text-center max-w-xs mx-auto">
        <p className="font-body text-sm text-neutral-500">Dein persönlicher Tagebuch-Schlüssel:</p>

        <div className="font-heading text-5xl font-bold tracking-widest text-adhasi-orange bg-adhasi-orange-50 border border-adhasi-border rounded-2xl px-8 py-5 select-all w-full">
          {pendingPin}
        </div>

        <p className="font-body text-sm text-neutral-500 leading-7">
          Das ist dein Tagebuch-Schlüssel.<br />
          <strong className="font-semibold text-neutral-700">Schreib ihn auf</strong> – du brauchst ihn beim nächsten Besuch.
        </p>

        <button
          onClick={handleStartNew}
          className="font-body font-semibold bg-adhasi-orange text-white text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-full"
        >
          Tagebuch starten
        </button>

        <button
          onClick={() => setUiState('returning')}
          className="font-body text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          ← Ich habe schon eine PIN
        </button>
      </div>
    )
  }

  // ── Render: State B — Returning user ────────────────────────────────────

  if (uiState === 'returning') {
    return (
      <div className="flex flex-col gap-8 max-w-xs mx-auto">
        {/* PIN input */}
        <div className="flex flex-col gap-4">
          <label
            htmlFor="pin-input"
            className="font-body font-semibold text-sm text-neutral-700"
          >
            Deine PIN eingeben
          </label>
          <input
            id="pin-input"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value.replace(/\D/g, ''))}
            placeholder="z. B. 483921"
            className="font-heading text-2xl tracking-widest text-center border border-adhasi-border rounded-xl px-4 py-3 focus:outline-none focus:border-adhasi-orange"
          />
          <button
            onClick={handleOpenExisting}
            disabled={pinInput.length < 1}
            className="font-body font-semibold bg-adhasi-orange text-white text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            Tagebuch öffnen
          </button>
        </div>

        {/* Divider + new */}
        <div className="flex flex-col items-center gap-3 border-t border-adhasi-border pt-6 text-center">
          <p className="font-body text-sm text-neutral-500">Noch kein Tagebuch?</p>
          <button
            onClick={() => setUiState('new')}
            className="font-body font-semibold text-sm text-adhasi-orange hover:underline"
          >
            Neu starten – neue PIN generieren →
          </button>
        </div>
      </div>
    )
  }

  // ── Render: State C — Diary open ─────────────────────────────────────────

  const canSave = !!(mood || goodThing.trim() || thought.trim())

  return (
    <div className="flex flex-col gap-8">

      {/* Progress / PIN reminder */}
      <div className="flex items-center justify-between flex-wrap gap-3 rounded-2xl bg-adhasi-orange-50 border border-adhasi-border px-5 py-4">
        <div>
          <p className="font-heading font-bold text-adhasi-orange text-xl">
            Tag&nbsp;{entries.length}
          </p>
          <p className="font-body text-xs text-neutral-500 mt-0.5">
            {entries.length === 0
              ? 'Noch kein Eintrag — starte heute!'
              : `${entries.length} ${entries.length === 1 ? 'Eintrag' : 'Einträge'} gespeichert`}
          </p>
        </div>
        <p className="font-body text-xs text-neutral-400 text-right">
          Deine PIN:{' '}
          <span className="font-semibold tracking-wider text-neutral-600 select-all">{pin}</span>
          <br />
          <span className="text-neutral-400">nicht vergessen!</span>
        </p>
      </div>

      {/* Entry form */}
      <div className="rounded-2xl border border-adhasi-border bg-surface p-6 flex flex-col gap-5">
        <p className="font-heading font-semibold text-neutral-900">Eintrag für heute</p>

        {/* Mood picker */}
        <div>
          <p className="font-body text-sm text-neutral-500 mb-2">Wie fühlst du dich?</p>
          <div className="flex gap-2 flex-wrap">
            {MOODS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMood(mood === m ? '' : m)}
                aria-pressed={mood === m}
                className={`text-2xl rounded-xl p-2 border transition-all ${
                  mood === m
                    ? 'border-adhasi-orange bg-adhasi-orange-50 scale-110 shadow-sm'
                    : 'border-adhasi-border bg-white hover:border-neutral-300'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Good thing */}
        <div>
          <label
            htmlFor="good-thing"
            className="font-body text-sm text-neutral-500 mb-1.5 block"
          >
            Was war heute gut?
          </label>
          <textarea
            id="good-thing"
            value={goodThing}
            onChange={(e) => setGoodThing(e.target.value.slice(0, 300))}
            rows={3}
            placeholder="Heute war schön, dass …"
            className="w-full font-body text-sm border border-adhasi-border rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-adhasi-orange leading-relaxed"
          />
          <p className="font-body text-xs text-neutral-400 text-right mt-1">
            {goodThing.length}/300
          </p>
        </div>

        {/* Thought */}
        <div>
          <label
            htmlFor="thought"
            className="font-body text-sm text-neutral-500 mb-1.5 block"
          >
            Mein Gedanke heute
          </label>
          <textarea
            id="thought"
            value={thought}
            onChange={(e) => setThought(e.target.value.slice(0, 200))}
            rows={2}
            placeholder="Ich denke gerade …"
            className="w-full font-body text-sm border border-adhasi-border rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-adhasi-orange leading-relaxed"
          />
          <p className="font-body text-xs text-neutral-400 text-right mt-1">
            {thought.length}/200
          </p>
        </div>

        {/* Exercise */}
        <div>
          <label
            htmlFor="exercise-select"
            className="font-body text-sm text-neutral-500 mb-1.5 block"
          >
            Welche Übung habe ich gemacht?
          </label>
          <select
            id="exercise-select"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="w-full font-body text-sm border border-adhasi-border rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-adhasi-orange"
          >
            {EXERCISES.map((ex) => (
              <option key={ex} value={ex}>{ex}</option>
            ))}
          </select>
        </div>

        {/* Save button + confirmation */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={handleSaveEntry}
            disabled={!canSave}
            className="font-body font-semibold bg-adhasi-orange text-white text-sm px-7 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            Eintrag speichern
          </button>
          {showSaved && (
            <span className="font-body text-sm font-semibold text-adhasi-green">
              Gespeichert ✓
            </span>
          )}
        </div>
      </div>

      {/* Previous entries */}
      <div>
        <p className="font-heading font-semibold text-neutral-900 mb-4">Meine Einträge</p>

        {entries.length === 0 ? (
          <p className="font-body text-sm text-neutral-500 py-8 text-center border border-dashed border-adhasi-border rounded-2xl">
            Noch kein Eintrag. Starte heute deinen ersten Tag.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-2xl border border-adhasi-border bg-white p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-body text-sm font-semibold text-neutral-600">
                    {entry.date}
                  </p>
                  {entry.mood && <span className="text-2xl">{entry.mood}</span>}
                </div>

                {entry.goodThing && (
                  <div>
                    <p className="font-body text-xs text-neutral-400 mb-0.5">Was war heute gut?</p>
                    <p className="font-body text-sm text-neutral-700 leading-relaxed">{entry.goodThing}</p>
                  </div>
                )}

                {entry.thought && (
                  <div>
                    <p className="font-body text-xs text-neutral-400 mb-0.5">Mein Gedanke</p>
                    <p className="font-body text-sm text-neutral-700 leading-relaxed">{entry.thought}</p>
                  </div>
                )}

                {entry.exercise && entry.exercise !== 'Keine' && (
                  <p className="font-body text-xs text-neutral-400">
                    Übung:{' '}
                    <span className="font-semibold text-neutral-600">{entry.exercise}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
