'use client'

import Link from 'next/link'

const adhsWissenLinks = [
  { href: '/adhs-grundlagen', label: 'ADHS Grundlagen' },
  { href: '/adhs-foerderung', label: 'ADHS Förderung' },
  { href: '/adhs-eltern-tipps', label: 'ADHS Eltern-Tipps' },
  { href: '/adhs-uebungen', label: 'ADHS Übungen' },
  { href: '/achtsamkeit', label: 'Achtsamkeit' },
  { href: '/adhs-app', label: 'ADHS App für Kinder' },
  { href: '/veranstaltungen', label: 'Veranstaltungen 2026' },
  { href: '/veranstaltungen/2027', label: 'Veranstaltungen 2027' },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
  { href: '/login-info', label: 'Pädagogen-Zugang' },
]

const ratgeberLinks = [
  { href: '/ratgeber', label: 'Ratgeber Übersicht' },
  { href: '/ratgeber/adhs-verstehen', label: 'ADHS verstehen' },
  { href: '/ratgeber/lernmethodik', label: 'Lernmethodik' },
  { href: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten', label: 'Positive Erziehung' },
  { href: '/ratgeber/hilfsorganisationen', label: 'Hilfsorganisationen' },
  { href: '/buchempfehlungen', label: 'Buchempfehlungen' },
]

const contacts = [
  { label: 'Support',     href: 'mailto:support@adhasi.de',     email: 'support@adhasi.de' },
  { label: 'Datenschutz', href: 'mailto:datenschutz@adhasi.de', email: 'datenschutz@adhasi.de' },
  { label: 'Presse',      href: 'mailto:marketing@adhasi.de',   email: 'marketing@adhasi.de' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-3 font-heading text-2xl font-semibold hover:opacity-80 transition-opacity">
            <span className="text-adhasi-orange">ADHaSi</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Die spielerische Lernapp für Kinder mit ADHS.
            Jetzt im App Store verfügbar.
          </p>
        </div>

        {/* ADHS Wissen */}
        <div>
          <h3 className="font-heading text-white text-lg mb-3">ADHS Wissen</h3>
          <ul className="flex flex-col gap-2">
            {adhsWissenLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ratgeber */}
        <div>
          <h3 className="font-heading text-white text-lg mb-3">Ratgeber</h3>
          <ul className="flex flex-col gap-2">
            {ratgeberLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-heading text-white text-lg mb-3">Kontakt</h3>
          <ul className="flex flex-col gap-2">
            {contacts.map((c) => (
              <li key={c.href}>
                <span className="text-xs text-neutral-500 block">{c.label}</span>
                <a href={c.href} className="text-sm hover:text-white transition-colors break-all">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h3 className="font-heading text-white text-lg mb-3">Rechtliches</h3>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('adhasi:open-cookie-settings'))}
                className="text-sm hover:text-white transition-colors text-left"
              >
                Cookie-Einstellungen
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © 2026 ADHaSi – Alle Rechte vorbehalten.
      </div>
      <div className="border-t border-neutral-800 py-3 text-center text-xs text-neutral-500">
        Weitere Projekte von OneTitel – Digital &amp; Business Solutions:{' '}
        <a href="https://www.onetitel.de" className="hover:text-white hover:underline underline-offset-2 mx-1" rel="noopener noreferrer">OneTitel</a>
        <span>·</span>
        <a href="https://www.eritaj.de" className="hover:text-white hover:underline underline-offset-2 mx-1" rel="noopener noreferrer">Eritaj</a>
        <span>·</span>
        <a href="https://www.dschinn.online" className="hover:text-white hover:underline underline-offset-2 mx-1" rel="noopener noreferrer">Dschinn</a>
      </div>
    </footer>
  )
}
