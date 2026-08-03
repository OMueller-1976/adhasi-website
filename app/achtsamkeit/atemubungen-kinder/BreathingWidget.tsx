'use client'

import { useState, useEffect, useRef } from 'react'

type PhaseType = 'inhale' | 'hold' | 'exhale'

interface Phase {
  type: PhaseType
  label: string
  duration: number
}

interface Exercise {
  name: string
  emoji: string
  phases: Phase[]
}

const EXERCISES: Exercise[] = [
  {
    name: 'Bienenatmen',
    emoji: '🐝',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 4 },
      { type: 'exhale', label: 'Summen', duration: 6 },
    ],
  },
  {
    name: 'Drachenatmen',
    emoji: '🐉',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 4 },
      { type: 'exhale', label: 'Pusten', duration: 4 },
    ],
  },
  {
    name: '4-7-8 Methode',
    emoji: '🌊',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 4 },
      { type: 'hold',   label: 'Halten',   duration: 7 },
      { type: 'exhale', label: 'Ausatmen', duration: 8 },
    ],
  },
  {
    name: 'Sternatmen',
    emoji: '⭐',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 4 },
      { type: 'exhale', label: 'Ausatmen', duration: 4 },
    ],
  },
  {
    name: 'Ballonatmen',
    emoji: '🎈',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 5 },
      { type: 'exhale', label: 'Ausatmen', duration: 5 },
    ],
  },
  {
    name: 'Schmetterlingsatem',
    emoji: '🦋',
    phases: [
      { type: 'inhale', label: 'Einatmen', duration: 4 },
      { type: 'hold',   label: 'Halten',   duration: 4 },
      { type: 'exhale', label: 'Ausatmen', duration: 4 },
    ],
  },
]

export default function BreathingWidget() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [countdown, setCountdown] = useState(EXERCISES[0].phases[0].duration)
  const [circleScale, setCircleScale] = useState(1)
  const [transitionSec, setTransitionSec] = useState(0)

  // Refs keep values readable inside the interval without stale closures
  const selectedIdxRef = useRef(0)
  const phaseIdxRef = useRef(0)
  const countdownRef = useRef(EXERCISES[0].phases[0].duration)
  const isRunningRef = useRef(false)

  /** Apply a new phase: update refs + state + drive the circle animation. */
  const applyPhase = (exIdx: number, pIdx: number) => {
    const phase = EXERCISES[exIdx].phases[pIdx]
    phaseIdxRef.current = pIdx
    countdownRef.current = phase.duration
    setPhaseIdx(pIdx)
    setCountdown(phase.duration)
    if (phase.type === 'inhale') {
      setTransitionSec(phase.duration)
      setCircleScale(1.55)
    } else if (phase.type === 'exhale') {
      setTransitionSec(phase.duration)
      setCircleScale(1)
    }
    // hold: circle stays at current scale — no change needed
  }

  const handleStart = () => {
    isRunningRef.current = true
    setIsRunning(true)
    applyPhase(selectedIdxRef.current, 0)
  }

  const handleStop = () => {
    isRunningRef.current = false
    setIsRunning(false)
    phaseIdxRef.current = 0
    setPhaseIdx(0)
    const firstDur = EXERCISES[selectedIdxRef.current].phases[0].duration
    countdownRef.current = firstDur
    setCountdown(firstDur)
    setTransitionSec(0.5)
    setCircleScale(1)
  }

  const handleSelect = (idx: number) => {
    if (isRunningRef.current) {
      isRunningRef.current = false
      setIsRunning(false)
    }
    selectedIdxRef.current = idx
    phaseIdxRef.current = 0
    setSelectedIdx(idx)
    setPhaseIdx(0)
    const firstDur = EXERCISES[idx].phases[0].duration
    countdownRef.current = firstDur
    setCountdown(firstDur)
    setCircleScale(1)
    setTransitionSec(0)
  }

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      countdownRef.current -= 1

      if (countdownRef.current <= 0) {
        const ex = EXERCISES[selectedIdxRef.current]
        const nextPIdx = (phaseIdxRef.current + 1) % ex.phases.length
        applyPhase(selectedIdxRef.current, nextPIdx)
      } else {
        setCountdown(countdownRef.current)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const currentPhase = EXERCISES[selectedIdx].phases[phaseIdx]

  return (
    <div className="flex flex-col gap-10">
      {/* ── Exercise selection grid ───────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {EXERCISES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => handleSelect(i)}
            className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all ${
              selectedIdx === i
                ? 'border-adhasi-orange bg-adhasi-orange-50 shadow-sm'
                : 'border-adhasi-border bg-surface hover:border-neutral-300'
            }`}
          >
            <span className="text-2xl">{ex.emoji}</span>
            <span
              className={`font-body font-semibold text-sm leading-tight ${
                selectedIdx === i ? 'text-adhasi-orange' : 'text-neutral-700'
              }`}
            >
              {ex.name}
            </span>
            <span className="font-body text-xs text-neutral-400">
              {ex.phases.map((p) => `${p.duration}s`).join(' · ')}
            </span>
          </button>
        ))}
      </div>

      {/* ── Breathing assistant ───────────────────────────────── */}
      <div className="flex flex-col items-center gap-6">
        {/* Phase label */}
        <p className="font-heading text-xl font-semibold text-neutral-600 h-8 flex items-center">
          {isRunning ? currentPhase.label : 'Bereit zum Starten'}
        </p>

        {/* Circle container — fixed size prevents layout shift when circle expands */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 280, height: 280 }}
        >
          {/* Soft glow behind the circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              background: 'radial-gradient(circle, #2D7D9A, #1a5c75)',
              opacity: 0.15,
              filter: 'blur(18px)',
              transition: `transform ${transitionSec}s ease-in-out`,
              transform: `scale(${circleScale * 1.3})`,
            }}
          />
          {/* Main circle */}
          <div
            className="rounded-full flex items-center justify-center select-none"
            style={{
              width: 160,
              height: 160,
              background: 'radial-gradient(circle at 38% 32%, #5ba3c0, #2D7D9A 60%, #1a5c75)',
              boxShadow: '0 8px 32px rgba(45,125,154,0.30)',
              transition: `transform ${transitionSec}s ease-in-out`,
              transform: `scale(${circleScale})`,
            }}
          >
            {isRunning && (
              <span className="font-heading text-4xl font-bold text-white">
                {countdown}
              </span>
            )}
          </div>
        </div>

        {/* Start / Stop */}
        <button
          onClick={isRunning ? handleStop : handleStart}
          className={`font-body font-semibold text-sm px-10 py-3 rounded-full transition-all ${
            isRunning
              ? 'border border-neutral-300 text-neutral-600 hover:border-neutral-500'
              : 'bg-adhasi-orange text-white hover:opacity-90'
          }`}
        >
          {isRunning ? 'Stopp' : 'Start'}
        </button>
      </div>
    </div>
  )
}
