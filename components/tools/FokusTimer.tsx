'use client'

import { useEffect, useRef, useState } from 'react'

type Phase = 'focus' | 'break'

interface Preset {
  id: string
  label: string
  focusMin: number
  breakMin: number
}

const PRESETS: Preset[] = [
  { id: 'kurz', label: '10 / 2 Min. (Einstieg)', focusMin: 10, breakMin: 2 },
  { id: 'klassisch', label: '25 / 5 Min. (klassisch)', focusMin: 25, breakMin: 5 },
  { id: 'lang', label: '45 / 10 Min. (tiefes Arbeiten)', focusMin: 45, breakMin: 10 },
]

const BREAK_TIPS: string[] = [
  'Stehen Sie auf und strecken Sie sich eine halbe Minute.',
  'Trinken Sie ein Glas Wasser.',
  'Gehen Sie einmal durch die Wohnung oder ums Haus.',
  'Machen Sie zehn Kniebeugen oder Hampelmänner.',
  'Schauen Sie aus dem Fenster in die Ferne und lassen Sie die Schultern kreisen.',
  'Atmen Sie dreimal tief ein und langsam aus.',
]

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function FokusTimer() {
  const [presetId, setPresetId] = useState<string>('klassisch')
  const [phase, setPhase] = useState<Phase>('focus')
  const [remaining, setRemaining] = useState<number>(25 * 60)
  const [running, setRunning] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [tip, setTip] = useState<string>(BREAK_TIPS[0])

  const endRef = useRef<number | null>(null)
  const remainingRef = useRef<number>(25 * 60)
  const phaseRef = useRef<Phase>('focus')

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[1]
  const presetRef = useRef<Preset>(preset)
  presetRef.current = preset

  function applyRemaining(value: number) {
    remainingRef.current = value
    setRemaining(value)
  }

  function applyPhase(value: Phase) {
    phaseRef.current = value
    setPhase(value)
  }

  useEffect(() => {
    if (!running) return
    if (endRef.current === null) {
      endRef.current = Date.now() + remainingRef.current * 1000
    }
    const interval = window.setInterval(() => {
      if (endRef.current === null) return
      const left = Math.max(0, Math.ceil((endRef.current - Date.now()) / 1000))
      if (left > 0) {
        remainingRef.current = left
        setRemaining(left)
        return
      }
      // Phase beendet: automatisch zur nächsten Phase wechseln
      const current = presetRef.current
      if (phaseRef.current === 'focus') {
        setRounds((r) => r + 1)
        setTip(BREAK_TIPS[Math.floor(Math.random() * BREAK_TIPS.length)])
        phaseRef.current = 'break'
        setPhase('break')
        remainingRef.current = current.breakMin * 60
        setRemaining(current.breakMin * 60)
      } else {
        phaseRef.current = 'focus'
        setPhase('focus')
        remainingRef.current = current.focusMin * 60
        setRemaining(current.focusMin * 60)
      }
      endRef.current = Date.now() + remainingRef.current * 1000
    }, 250)
    return () => window.clearInterval(interval)
  }, [running])

  function start() {
    endRef.current = Date.now() + remainingRef.current * 1000
    setRunning(true)
  }

  function pause() {
    endRef.current = null
    setRunning(false)
  }

  function reset(next: Preset = preset) {
    endRef.current = null
    setRunning(false)
    applyPhase('focus')
    applyRemaining(next.focusMin * 60)
  }

  function changePreset(id: string) {
    const next = PRESETS.find((p) => p.id === id) ?? PRESETS[1]
    setPresetId(id)
    presetRef.current = next
    reset(next)
  }

  const total = (phase === 'focus' ? preset.focusMin : preset.breakMin) * 60
  const progress = Math.min(100, Math.max(0, Math.round((1 - remaining / total) * 100)))

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Zeitmodell wählen">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => changePreset(p.id)}
            aria-pressed={p.id === presetId}
            className={`rounded-full border px-4 py-2 font-body text-sm font-semibold transition-colors ${
              p.id === presetId
                ? 'border-adhasi-green bg-adhasi-green text-white'
                : 'border-adhasi-border bg-white text-neutral-700 hover:border-adhasi-green'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white border border-adhasi-border p-6 text-center">
        <p className="font-body text-sm font-semibold text-neutral-500 mb-1">
          {phase === 'focus' ? 'Fokusphase' : 'Bewegungspause'}
        </p>
        <p
          className="font-heading text-6xl sm:text-7xl font-bold text-neutral-900 tabular-nums"
          aria-hidden="true"
        >
          {formatTime(remaining)}
        </p>
        <div className="h-2 rounded-full bg-neutral-100 mt-5 overflow-hidden">
          <div
            className="h-full rounded-full bg-adhasi-green transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div role="status" aria-live="polite" className="min-h-[3rem] mt-4">
          {phase === 'break' ? (
            <p className="font-body text-sm text-neutral-700">
              <strong>Pause:</strong> {tip}
            </p>
          ) : (
            <p className="font-body text-sm text-neutral-500">
              Legen Sie vorab fest, woran Sie in dieser Phase arbeiten.
            </p>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {running ? (
            <button
              type="button"
              onClick={pause}
              className="rounded-xl bg-neutral-800 px-6 py-3 font-body text-sm font-semibold text-white hover:opacity-90"
            >
              Pause
            </button>
          ) : (
            <button
              type="button"
              onClick={start}
              className="rounded-xl bg-adhasi-green px-6 py-3 font-body text-sm font-semibold text-white hover:opacity-90"
            >
              {remaining === total ? 'Start' : 'Weiter'}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              reset()
              setRounds(0)
            }}
            className="rounded-xl border border-adhasi-border bg-white px-6 py-3 font-body text-sm font-semibold text-neutral-700 hover:border-neutral-400"
          >
            Zurücksetzen
          </button>
        </div>

        <p className="font-body text-xs text-neutral-400 mt-4">
          Abgeschlossene Fokusphasen: {rounds}
        </p>
      </div>
    </div>
  )
}
