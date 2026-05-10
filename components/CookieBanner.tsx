'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ConsentData {
  analytics: boolean
  marketing: boolean
  version: number
  timestamp: string
}

const STORAGE_KEY = 'adhasi_consent'
const CONSENT_VERSION = 1

function updateGtag(analytics: boolean, marketing: boolean) {
  if (typeof window === 'undefined') return
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  })
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const data: ConsentData = {
    analytics,
    marketing,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  updateGtag(analytics, marketing)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(false)
  const [marketingChecked, setMarketingChecked] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
      return
    }
    try {
      const data: ConsentData = JSON.parse(stored)
      updateGtag(data.analytics, data.marketing)
    } catch {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    function handleOpen() {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          const data: ConsentData = JSON.parse(stored)
          setAnalyticsChecked(data.analytics)
          setMarketingChecked(data.marketing)
        } catch {
          setAnalyticsChecked(false)
          setMarketingChecked(false)
        }
      }
      setModalOpen(true)
    }
    window.addEventListener('adhasi:open-cookie-settings', handleOpen)
    return () => window.removeEventListener('adhasi:open-cookie-settings', handleOpen)
  }, [])

  function acceptAll() {
    saveConsent(true, true)
    setVisible(false)
    setModalOpen(false)
  }

  function acceptNecessary() {
    saveConsent(false, false)
    setVisible(false)
    setModalOpen(false)
  }

  function openSettings() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const data: ConsentData = JSON.parse(stored)
        setAnalyticsChecked(data.analytics)
        setMarketingChecked(data.marketing)
      } catch {
        setAnalyticsChecked(false)
        setMarketingChecked(false)
      }
    }
    setModalOpen(true)
  }

  function saveSettings() {
    saveConsent(analyticsChecked, marketingChecked)
    setVisible(false)
    setModalOpen(false)
  }

  if (!visible && !modalOpen) return null

  return (
    <>
      {/* Banner */}
      {visible && !modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-neutral-900 text-base mb-1">
                Datenschutz ist uns wichtig
              </p>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Wir nutzen Cookies und vergleichbare Technologien, um unsere Website zu verbessern.
                Notwendige Cookies sind immer aktiv. Für Statistiken brauchen wir deine Zustimmung.{' '}
                <Link href="/datenschutz" className="underline hover:text-neutral-900">
                  Mehr dazu in unserer Datenschutzerklärung.
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <button
                onClick={openSettings}
                className="px-4 py-2 text-sm font-body font-semibold text-neutral-700 border border-neutral-300 rounded-xl hover:border-neutral-400 transition-colors"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm font-body font-semibold text-neutral-700 border border-neutral-300 rounded-xl hover:border-neutral-400 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-body font-bold text-white bg-adhasi-green rounded-xl hover:opacity-90 transition-opacity"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 flex flex-col gap-5">
            <h2 className="font-heading text-xl font-bold text-neutral-900">Cookie-Einstellungen</h2>

            <div className="flex flex-col gap-4">
              {/* Necessary — always on */}
              <label className="flex items-start gap-3 cursor-not-allowed">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 w-4 h-4 rounded accent-adhasi-green"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-neutral-900">Notwendig</p>
                  <p className="font-body text-xs text-neutral-500 leading-relaxed">
                    Erforderlich für den Betrieb der Website. Kann nicht deaktiviert werden.
                  </p>
                </div>
              </label>

              {/* Analytics */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsChecked}
                  onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded accent-adhasi-green"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-neutral-900">Statistik / Analytics</p>
                  <p className="font-body text-xs text-neutral-500 leading-relaxed">
                    Google Analytics 4 — pseudonymisierte Nutzungsanalyse zur Verbesserung der Website.
                    Keine Weitergabe an Dritte zu Werbezwecken.
                  </p>
                </div>
              </label>

              {/* Marketing */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingChecked}
                  onChange={(e) => setMarketingChecked(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded accent-adhasi-green"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-neutral-900">Marketing</p>
                  <p className="font-body text-xs text-neutral-500 leading-relaxed">
                    Ermöglicht personalisierte Werbung auf anderen Plattformen. Derzeit nicht aktiv genutzt.
                  </p>
                </div>
              </label>
            </div>

            <p className="font-body text-xs text-neutral-400">
              Weitere Informationen in unserer{' '}
              <Link href="/datenschutz" className="underline hover:text-neutral-700" onClick={() => setModalOpen(false)}>
                Datenschutzerklärung
              </Link>
              .
            </p>

            <div className="flex gap-2 justify-end flex-wrap">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm font-body font-semibold text-neutral-700 border border-neutral-300 rounded-xl hover:border-neutral-400 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={saveSettings}
                className="px-4 py-2 text-sm font-body font-bold text-white bg-adhasi-green rounded-xl hover:opacity-90 transition-opacity"
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
