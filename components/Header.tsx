'use client'

import Link from 'next/link'
import { useState } from 'react'

const ratgeberGroups = [
  {
    label: 'Grundlagen',
    links: [
      { href: '/ratgeber/adhs-verstehen', label: 'ADHS verstehen' },
      { href: '/ratgeber/lernmethodik', label: 'Lernmethodik' },
      { href: '/ratgeber/hilfsorganisationen', label: 'Hilfsorganisationen' },
      { href: '/ratgeber/quellen', label: 'Quellen & Literatur' },
    ],
  },
  {
    label: 'Familie & Erziehung',
    links: [
      { href: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten', label: 'Positive Erziehung' },
      { href: '/ratgeber/motivation-bei-schulfrust', label: 'Motivation aufbauen' },
      { href: '/ratgeber/selbstwert-staerken', label: 'Selbstwert stärken' },
      { href: '/ratgeber/kommunikation-mit-adhs-kind', label: 'Mit dem Kind sprechen' },
    ],
  },
  {
    label: 'Digital & Medien',
    links: [
      { href: '/ratgeber/medienkompetenz-bei-adhs', label: 'Medienkompetenz bei ADHS' },
      { href: '/ratgeber/bildschirmzeit-konzentration', label: 'Bildschirmzeit & Konzentration' },
      { href: '/ratgeber/family-link-bildschirmzeit-apps', label: 'Family Link & Apps' },
      { href: '/ratgeber/digitale-hilfsmittel-adhs', label: 'Digitale Hilfsmittel' },
    ],
  },
  {
    label: 'Für Erwachsene',
    links: [
      { href: '/ratgeber/erwachsene', label: 'Übersicht & Tools' },
      { href: '/ratgeber/erwachsene/tagesstruktur', label: 'Tagesstruktur' },
      { href: '/ratgeber/erwachsene/bewegung', label: 'Bewegung & Sport' },
      { href: '/ratgeber/erwachsene/visualisierung', label: 'Visualisierung' },
      { href: '/ratgeber/erwachsene/achtsamkeit', label: 'Achtsamkeit' },
      { href: '/ratgeber/erwachsene/selbstakzeptanz', label: 'Selbstakzeptanz' },
    ],
  },
]

const adhsWissenLinks = [
  { href: '/adhs-grundlagen', label: 'ADHS Grundlagen', desc: 'Symptome, Diagnose & Subtypen' },
  { href: '/adhs-foerderung', label: 'ADHS Förderung', desc: 'Therapie & was wirklich hilft' },
  { href: '/adhs-eltern-tipps', label: 'ADHS Eltern-Tipps', desc: 'Alltag, Routine & Hausaufgaben' },
  { href: '/veranstaltungen', label: 'Veranstaltungen 2026', desc: 'Kongresse & Fachtagungen' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [ratgeberOpen, setRatgeberOpen] = useState(false)
  const [adhsWissenOpen, setAdhsWissenOpen] = useState(false)
  const [appOpen, setAppOpen] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
    setRatgeberOpen(false)
    setAdhsWissenOpen(false)
    setAppOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-adhasi-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Text logo */}
        <Link href="/" className="font-heading text-2xl font-semibold hover:opacity-80 transition-opacity" aria-label="ADHaSi — Startseite">
          <span className="text-adhasi-orange">ADHaSi</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
          {/* App dropdown */}
          <div className="relative group">
            <button
              className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm flex items-center gap-1"
              aria-haspopup="true"
            >
              ADHaSi App
              <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl border border-adhasi-border shadow-xl z-50 p-3">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/app" className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors">
                    <span className="font-body font-semibold text-sm text-neutral-900 block">ADHaSi App</span>
                    <span className="font-body text-xs text-neutral-500">Features, Preise & Download</span>
                  </Link>
                </li>
                <li>
                  <Link href="/adhs-app" className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors">
                    <span className="font-body font-semibold text-sm text-neutral-900 block">ADHS App für Kinder</span>
                    <span className="font-body text-xs text-neutral-500">Was die App leistet</span>
                  </Link>
                </li>
                <li>
                  <Link href="/adhs-uebungen" className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors">
                    <span className="font-body font-semibold text-sm text-neutral-900 block">ADHS Übungen</span>
                    <span className="font-body text-xs text-neutral-500">Fokus & Impulskontrolle üben</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ADHS Wissen dropdown */}
          <div className="relative group">
            <button
              className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm flex items-center gap-1"
              aria-haspopup="true"
            >
              ADHS Wissen
              <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl border border-adhasi-border shadow-xl z-50 p-4">
              <ul className="flex flex-col gap-2">
                {adhsWissenLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors group/item">
                      <span className="font-body font-semibold text-sm text-neutral-900 group-hover/item:text-adhasi-green block">{l.label}</span>
                      <span className="font-body text-xs text-neutral-500">{l.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ratgeber dropdown */}
          <div className="relative group">
            <button
              className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm flex items-center gap-1"
              aria-haspopup="true"
            >
              Ratgeber
              <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] lg:w-[880px] bg-white rounded-2xl border border-adhasi-border shadow-xl z-50 p-5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {ratgeberGroups.map((group) => (
                  <div key={group.label}>
                    <p className="font-body text-xs font-bold text-neutral-400 uppercase tracking-wide mb-2">{group.label}</p>
                    <ul className="flex flex-col gap-1.5">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="font-body text-sm text-neutral-700 hover:text-adhasi-green transition-colors block py-0.5">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-adhasi-border">
                <Link href="/ratgeber" className="font-body font-semibold text-sm text-adhasi-green hover:underline">
                  → Alle Ratgeber-Artikel ansehen
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/shop"
            className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            Shop
          </Link>

          <Link
            href="/achtsamkeit"
            className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            Achtsamkeit
          </Link>

          <Link
            href="/arbeitsblaetter"
            className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            Arbeitsblätter
          </Link>

          <Link
            href="/paedagogen-therapeuten-adhs"
            className="font-body font-semibold text-neutral-600 hover:text-neutral-900 transition-colors text-sm border border-neutral-300 px-4 py-2 rounded-full hover:border-neutral-500"
          >
            Für Pädagog:innen
          </Link>

          <Link
            href="/eltern/login"
            className="font-body font-semibold bg-adhasi-green text-white transition-colors text-sm px-4 py-2 rounded-full hover:opacity-90"
          >
            Eltern-Login
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Navigation öffnen"
        >
          <span className="block w-6 h-0.5 bg-neutral-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-neutral-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-neutral-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-adhasi-border px-4 py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
          {/* App accordion */}
          <div>
            <button
              onClick={() => setAppOpen(!appOpen)}
              className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 w-full text-left flex items-center justify-between"
            >
              ADHaSi App
              <svg className={`w-4 h-4 transition-transform ${appOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {appOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-1 border-l-2 border-adhasi-border ml-1">
                <Link href="/app" className="block font-body text-sm text-neutral-600 hover:text-neutral-900 py-1" onClick={closeMobile}>ADHaSi App</Link>
                <Link href="/adhs-app" className="block font-body text-sm text-neutral-600 hover:text-neutral-900 py-1" onClick={closeMobile}>ADHS App für Kinder</Link>
                <Link href="/adhs-uebungen" className="block font-body text-sm text-neutral-600 hover:text-neutral-900 py-1" onClick={closeMobile}>ADHS Übungen</Link>
              </div>
            )}
          </div>

          {/* ADHS Wissen accordion */}
          <div>
            <button
              onClick={() => setAdhsWissenOpen(!adhsWissenOpen)}
              className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 w-full text-left flex items-center justify-between"
            >
              ADHS Wissen
              <svg className={`w-4 h-4 transition-transform ${adhsWissenOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {adhsWissenOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-1 border-l-2 border-adhasi-border ml-1">
                {adhsWissenLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block font-body text-sm text-neutral-600 hover:text-neutral-900 py-1" onClick={closeMobile}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Ratgeber accordion */}
          <div>
            <button
              onClick={() => setRatgeberOpen(!ratgeberOpen)}
              className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 w-full text-left flex items-center justify-between"
            >
              Ratgeber
              <svg className={`w-4 h-4 transition-transform ${ratgeberOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {ratgeberOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-1 border-l-2 border-adhasi-border ml-1">
                {ratgeberGroups.map((group) => (
                  <div key={group.label} className="mb-2">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">{group.label}</p>
                    {group.links.map((l) => (
                      <Link key={l.href} href={l.href} className="block font-body text-sm text-neutral-600 hover:text-neutral-900 py-1" onClick={closeMobile}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href="/ratgeber" className="font-body font-semibold text-sm text-adhasi-green py-1" onClick={closeMobile}>
                  → Alle Artikel
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/shop"
            className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 text-sm"
            onClick={closeMobile}
          >
            Shop
          </Link>

          <Link
            href="/achtsamkeit"
            className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 text-sm"
            onClick={closeMobile}
          >
            Achtsamkeit
          </Link>

          <Link
            href="/arbeitsblaetter"
            className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors py-2 text-sm"
            onClick={closeMobile}
          >
            Arbeitsblätter
          </Link>

          <div className="border-t border-adhasi-border mt-1 pt-3 flex flex-col gap-2">
            <Link
              href="/paedagogen-therapeuten-adhs"
              className="font-body font-semibold text-neutral-700 hover:text-neutral-900 transition-colors text-sm border border-neutral-300 px-4 py-2.5 rounded-full text-center hover:border-neutral-500"
              onClick={closeMobile}
            >
              Für Pädagog:innen
            </Link>

            <Link
              href="/eltern/login"
              className="font-body font-semibold text-white bg-adhasi-green text-sm px-4 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity"
              onClick={closeMobile}
            >
              Eltern-Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
