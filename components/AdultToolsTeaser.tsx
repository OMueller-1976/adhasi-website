import Link from 'next/link'
import { ADULT_GUIDE_HUB } from '@/lib/adultGuide'

const tools = [
  {
    icon: '🗓️',
    title: 'Eisenhower-Matrix',
    desc: 'Aufgaben nach Wichtigkeit und Dringlichkeit sortieren',
    href: '/ratgeber/erwachsene/tagesstruktur#eisenhower-matrix',
  },
  {
    icon: '⏱️',
    title: 'Fokus-Timer',
    desc: 'Arbeitsblöcke mit Bewegungspause',
    href: '/ratgeber/erwachsene/bewegung#fokus-timer',
  },
  {
    icon: '🧩',
    title: 'Aufgaben-Zerleger',
    desc: 'Große Aufgaben in kleine Schritte teilen',
    href: '/ratgeber/erwachsene/visualisierung#aufgaben-zerleger',
  },
  {
    icon: '🧘',
    title: 'Achtsamkeits-Übungen',
    desc: 'Atemübungen und Achtsamkeit für Erwachsene',
    href: '/ratgeber/erwachsene/achtsamkeit#achtsamkeits-uebungen',
  },
  {
    icon: '💚',
    title: 'Stärken-Check',
    desc: 'Eigene Stärken erkennen und festhalten',
    href: '/ratgeber/erwachsene/selbstakzeptanz#staerken-check',
  },
]

interface Props {
  className?: string
}

export default function AdultToolsTeaser({ className = 'bg-white' }: Props) {
  return (
    <section
      className={`py-12 sm:py-16 border-y border-adhasi-border ${className}`}
      aria-labelledby="adult-tools-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          id="adult-tools-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 text-center"
        >
          Kostenlose Tools für Erwachsene mit ADHS
        </h2>
        <p className="font-body text-base text-neutral-600 mb-8 text-center max-w-2xl mx-auto">
          Direkt im Browser, ohne Anmeldung. Ihre Eingaben bleiben auf Ihrem Gerät.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex gap-4 rounded-2xl border border-adhasi-border bg-surface p-5 hover:border-adhasi-green hover:shadow-sm transition-all"
            >
              <span className="text-3xl" aria-hidden="true">{t.icon}</span>
              <span>
                <span className="block font-heading font-semibold text-neutral-900 group-hover:text-adhasi-green transition-colors">
                  {t.title}
                </span>
                <span className="block font-body text-sm text-neutral-500 leading-relaxed mt-1">
                  {t.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href={ADULT_GUIDE_HUB}
            className="inline-flex items-center gap-2 border border-adhasi-border text-neutral-700 font-body font-bold px-6 py-3 rounded-xl hover:border-neutral-400 hover:text-neutral-900 transition-colors text-sm"
          >
            Alle Tipps für Erwachsene →
          </Link>
        </div>
      </div>
    </section>
  )
}
