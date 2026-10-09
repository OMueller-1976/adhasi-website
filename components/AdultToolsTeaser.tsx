import Link from 'next/link'
import { ADULT_GUIDE_HUB } from '@/lib/adultGuide'
import { FAMILY_GUIDE_HUB } from '@/lib/familyGuide'

const adultTools = [
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

const familyTools = [
  {
    icon: '🔍',
    title: 'Alltags-Beobachtungsbogen',
    desc: 'Situationen festhalten für Gespräche mit Schule und Praxis',
    href: '/ratgeber/familienalltag-adhs/adhs-beim-kind-verstehen#beobachtungsbogen',
  },
  {
    icon: '🗓️',
    title: 'Wochenplan für die Familie',
    desc: 'Routinen sichtbar machen, auch zum Ausdrucken',
    href: '/ratgeber/familienalltag-adhs/routinen-wochenplan#wochenplan',
  },
  {
    icon: '⭐',
    title: 'Punkteplan',
    desc: 'Aufgaben, Punkte und Belohnungen gemeinsam festlegen',
    href: '/ratgeber/familienalltag-adhs/punkteplan#punkteplan-tool',
  },
  {
    icon: '💛',
    title: 'Positivtagebuch',
    desc: 'Gelungene Momente im Familienalltag festhalten',
    href: '/ratgeber/familienalltag-adhs/eltern-entlastung#positivtagebuch',
  },
  {
    icon: '🧭',
    title: 'Jobs der Woche',
    desc: 'Kleine Aufgaben planen und abhaken',
    href: '/ratgeber/familienalltag-adhs/regeln-wochenjobs#wochenjobs',
  },
]

interface ToolItem {
  icon: string
  title: string
  desc: string
  href: string
}

function ToolGroup({
  heading,
  tools,
  hubHref,
  hubLabel,
}: {
  heading: string
  tools: ToolItem[]
  hubHref: string
  hubLabel: string
}) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">{heading}</h3>
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
      <div className="mt-4">
        <Link href={hubHref} className="font-body text-sm font-semibold text-adhasi-green hover:underline">
          {hubLabel}
        </Link>
      </div>
    </div>
  )
}

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
          Kostenlose Tools für Eltern und Erwachsene mit ADHS
        </h2>
        <p className="font-body text-base text-neutral-600 mb-8 text-center max-w-2xl mx-auto">
          Direkt im Browser, ohne Anmeldung. Ihre Eingaben bleiben auf Ihrem Gerät.
        </p>
        <ToolGroup
          heading="Für Eltern"
          tools={familyTools}
          hubHref={FAMILY_GUIDE_HUB}
          hubLabel="Alle Tipps für den Familienalltag →"
        />
        <ToolGroup
          heading="Für Erwachsene mit ADHS"
          tools={adultTools}
          hubHref={ADULT_GUIDE_HUB}
          hubLabel="Alle Tipps für Erwachsene →"
        />
      </div>
    </section>
  )
}
