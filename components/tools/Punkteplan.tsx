'use client'

import { useState } from 'react'
import { newId, useStoredState } from './useStoredState'

interface Task {
  id: string
  text: string
  points: number
}
interface Reward {
  id: string
  text: string
  cost: number
}
interface State {
  tasks: Task[]
  rewards: Reward[]
  balance: number
}

const KEY = 'adhasi-punkteplan-v1'
const EMPTY: State = { tasks: [], rewards: [], balance: 0 }

function parse(raw: unknown): State | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  const tasks: Task[] = []
  const rewards: Reward[] = []
  if (Array.isArray(o.tasks)) {
    for (const t of o.tasks) {
      const x = t as Record<string, unknown>
      if (x && typeof x.id === 'string' && typeof x.text === 'string' && typeof x.points === 'number') {
        tasks.push({ id: x.id, text: x.text, points: x.points })
      }
    }
  }
  if (Array.isArray(o.rewards)) {
    for (const t of o.rewards) {
      const x = t as Record<string, unknown>
      if (x && typeof x.id === 'string' && typeof x.text === 'string' && typeof x.cost === 'number') {
        rewards.push({ id: x.id, text: x.text, cost: x.cost })
      }
    }
  }
  const balance = typeof o.balance === 'number' && o.balance >= 0 ? o.balance : 0
  return { tasks, rewards, balance }
}

export default function Punkteplan() {
  const [state, setState] = useStoredState<State>(KEY, EMPTY, parse)
  const [taskText, setTaskText] = useState('')
  const [taskPoints, setTaskPoints] = useState(1)
  const [rewardText, setRewardText] = useState('')
  const [rewardCost, setRewardCost] = useState(10)

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = taskText.trim()
    if (!text) return
    setState((s) => ({ ...s, tasks: [...s.tasks, { id: newId(), text: text.slice(0, 80), points: taskPoints }] }))
    setTaskText('')
  }

  function addReward(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = rewardText.trim()
    if (!text) return
    setState((s) => ({ ...s, rewards: [...s.rewards, { id: newId(), text: text.slice(0, 80), cost: rewardCost }] }))
    setRewardText('')
  }

  function earn(task: Task) {
    setState((s) => ({ ...s, balance: s.balance + task.points }))
  }

  function redeem(reward: Reward) {
    setState((s) => (s.balance >= reward.cost ? { ...s, balance: s.balance - reward.cost } : s))
  }

  function removeTask(id: string) {
    setState((s) => ({ ...s, tasks: s.tasks.filter((t) => t.id !== id) }))
  }

  function removeReward(id: string) {
    setState((s) => ({ ...s, rewards: s.rewards.filter((r) => r.id !== id) }))
  }

  function reset() {
    if (window.confirm('Punkteplan komplett zurücksetzen?')) setState(EMPTY)
  }

  const fieldClass =
    'flex-1 rounded-xl border border-adhasi-border bg-white px-4 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green'
  const numClass =
    'w-24 rounded-xl border border-adhasi-border bg-white px-3 py-3 font-body text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-adhasi-green'
  const btnClass =
    'rounded-xl bg-adhasi-green px-5 py-3 font-body text-sm font-semibold text-white hover:opacity-90 transition-opacity'

  return (
    <div>
      <div
        className="rounded-xl bg-white border border-adhasi-border px-5 py-4 mb-6 flex items-center justify-between"
        aria-live="polite"
      >
        <span className="font-body text-sm font-semibold text-neutral-700">Aktuelle Punkte</span>
        <span className="font-heading text-3xl font-bold text-adhasi-green">{state.balance}</span>
      </div>

      <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">1. Aufgaben mit Punkten</h3>
      <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-3 mb-3">
        <label className="sr-only" htmlFor="pp-task">
          Aufgabe
        </label>
        <input
          id="pp-task"
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          maxLength={80}
          placeholder="z. B. Schulranzen packen"
          className={fieldClass}
        />
        <label className="sr-only" htmlFor="pp-task-points">
          Punkte
        </label>
        <input
          id="pp-task-points"
          type="number"
          min={1}
          max={20}
          value={taskPoints}
          onChange={(e) => setTaskPoints(Math.min(20, Math.max(1, Number(e.target.value) || 1)))}
          className={numClass}
        />
        <button type="submit" className={btnClass}>
          Hinzufügen
        </button>
      </form>
      <ul className="flex flex-col gap-2 mb-6">
        {state.tasks.map((t) => (
          <li key={t.id} className="flex items-center gap-3 rounded-lg border border-adhasi-border bg-white px-3 py-2">
            <span className="flex-1 font-body text-sm text-neutral-800">
              {t.text} <span className="text-neutral-400">({t.points} P.)</span>
            </span>
            <button
              type="button"
              onClick={() => earn(t)}
              className="rounded-lg bg-adhasi-green px-3 py-1 font-body text-xs font-semibold text-white"
            >
              +{t.points} geschafft
            </button>
            <button
              type="button"
              onClick={() => removeTask(t.id)}
              aria-label="Aufgabe entfernen"
              className="px-1 text-neutral-400 hover:text-red-600"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">2. Belohnungen</h3>
      <form onSubmit={addReward} className="flex flex-col sm:flex-row gap-3 mb-3">
        <label className="sr-only" htmlFor="pp-reward">
          Belohnung
        </label>
        <input
          id="pp-reward"
          type="text"
          value={rewardText}
          onChange={(e) => setRewardText(e.target.value)}
          maxLength={80}
          placeholder="z. B. Extra-Vorlesezeit am Abend"
          className={fieldClass}
        />
        <label className="sr-only" htmlFor="pp-reward-cost">
          Kosten in Punkten
        </label>
        <input
          id="pp-reward-cost"
          type="number"
          min={1}
          max={200}
          value={rewardCost}
          onChange={(e) => setRewardCost(Math.min(200, Math.max(1, Number(e.target.value) || 1)))}
          className={numClass}
        />
        <button type="submit" className={btnClass}>
          Hinzufügen
        </button>
      </form>
      <ul className="flex flex-col gap-2">
        {state.rewards.map((r) => (
          <li key={r.id} className="flex items-center gap-3 rounded-lg border border-adhasi-border bg-white px-3 py-2">
            <span className="flex-1 font-body text-sm text-neutral-800">
              {r.text} <span className="text-neutral-400">({r.cost} P.)</span>
            </span>
            <button
              type="button"
              onClick={() => redeem(r)}
              disabled={state.balance < r.cost}
              className="rounded-lg border border-adhasi-green px-3 py-1 font-body text-xs font-semibold text-adhasi-green disabled:opacity-40"
            >
              Einlösen
            </button>
            <button
              type="button"
              onClick={() => removeReward(r.id)}
              aria-label="Belohnung entfernen"
              className="px-1 text-neutral-400 hover:text-red-600"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={reset}
          className="font-body text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
        >
          Alles zurücksetzen
        </button>
      </div>
    </div>
  )
}
