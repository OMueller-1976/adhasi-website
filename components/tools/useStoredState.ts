'use client'

import { useEffect, useState } from 'react'

/**
 * Speichert Zustand im lokalen Speicher des Browsers (nur auf dem Gerät).
 * `parse` prüft geladene Daten und gibt bei ungültigen Daten null zurück.
 */
export function useStoredState<T>(
  key: string,
  initial: T,
  parse: (raw: unknown) => T | null,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initial)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw) {
        const parsed = parse(JSON.parse(raw))
        if (parsed !== null) setValue(parsed)
      }
    } catch {
      // Speicher nicht verfügbar oder Daten ungültig
    }
    setLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignorieren
    }
  }, [key, value, loaded])

  return [value, setValue]
}

export function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}
