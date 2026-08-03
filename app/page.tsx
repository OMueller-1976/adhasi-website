import Link from 'next/link'
import StoreButtons from '@/components/StoreButtons'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, organizationJsonLd, softwareApplicationJsonLd, webSiteJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHaSi – Lern-App für Kinder mit ADHS',
  description:
    'Kurze Lerneinheiten für Kinder mit ADHS. Täglich 5 Minuten, KI-gestützt, spielerisch. 7 Tage kostenlos testen.',
  path: '/',
})

const trustBadges = [
  { icon: '👨‍👩‍👧', label: 'Für Familien', sub: 'Für Eltern und Kind' },
  { icon: '🔒', label: 'DSGVO-konform', sub: 'Daten bleiben in Europa' },
  { icon: '🇩🇪', label: 'Made in Germany', sub: 'Entwickelt in Deutschland' },
  { icon: '🚫', label: 'Werbefrei', sub: 'Kein Tracking, keine Ads' },
]

const steps = [
  {
    number: '1',
    title: 'Profil erstellen',
    description:
      'Eltern legen ein Kinderprofil an und wählen Klassenstufe sowie Förderbereiche — Mathe, Konzentration oder Selbstorganisation.',
  },
  {
    number: '2',
    title: 'Täglich üben',
    description:
      'Das Kind löst spielerische Aufgaben. ADHaSi passt Tempo und Schwierigkeit laufend per KI an — kein Druck, nur Fortschritt.',
  },
  {
    number: '3',
    title: 'Fortschritt verfolgen',
    description:
      'Eltern und Lehrkräfte sehen Lernberichte: welche Regeln sitzen, wo noch Übung fehlt — auf einen Blick.',
  },
]

export default function HomePage() {
  return (
    <>
      <StructuredData data={webSiteJsonLd()} />
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={softwareApplicationJsonLd()} />

      <Hero />

      {/* Lersi circle button — straddles Hero / FeatureGrid boundary */}
      <div className="relative z-10" style={{ height: 0 }}>
        <a
          href="https://lersi.de"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-4 md:left-8 -translate-y-1/2 flex flex-col items-center justify-center rounded-full border-2 border-[#9FE1CB] w-36 h-36 md:w-[180px] md:h-[180px] cursor-pointer transition-all duration-200 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
          style={{ backgroundColor: '#EEF9F5' }}
        >
          <span style={{ fontSize: 42, lineHeight: 1 }}>📚</span>
          <span style={{ fontSize: 13, color: '#888', marginTop: 8, lineHeight: 1.2, textAlign: 'center' }}>
            Auch für Kinder mit
          </span>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#1D4ED8', marginTop: 8, lineHeight: 1.2, textAlign: 'center' }}>
            LRS &amp; Legasthenie
          </span>
        </a>
      </div>

      <FeatureGrid />

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-adhasi-border" aria-label="Vertrauensmerkmale">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl">{b.icon}</span>
                <p className="font-heading font-semibold text-neutral-900 text-base">{b.label}</p>
                <p className="text-xs text-neutral-500">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="how-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
            So funktioniert ADHaSi
          </h2>
          <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
            Drei einfache Schritte — und dein Kind übt jeden Tag ein bisschen mehr, ohne Frust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-adhasi-green flex items-center justify-center text-white font-heading text-2xl font-bold flex-shrink-0">
                  {s.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-neutral-900">{s.title}</h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lernbereiche */}
      <section className="py-16 sm:py-20 bg-white border-y border-adhasi-border" aria-labelledby="lernbereiche-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="lernbereiche-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
            Diese Lernbereiche trainiert ADHaSi
          </h2>
          <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
            Alle Übungen sind auf die besonderen Lernbedürfnisse von Kindern mit ADHS abgestimmt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: '🧮', label: 'Mathe Grundlagen (Klasse 2–4)' },
              { icon: '⚡', label: 'Fokus-Sprint (3–5 Min. Lerneinheiten)' },
              { icon: '🔢', label: 'Zahlen & Rechnen' },
              { icon: '🧠', label: 'Konzentrationstraining' },
              { icon: '⏱️', label: 'Kurze Lernblöcke' },
              { icon: '🎯', label: 'Sofortiges Feedback' },
              { icon: '📊', label: 'Fortschrittsverfolgung' },
              { icon: '🏆', label: 'Belohnungssystem' },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 bg-surface border border-adhasi-border rounded-xl px-4 py-3"
              >
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className="font-body font-semibold text-sm text-neutral-800">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für Pädagogen & Therapeuten */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="paedagogen-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-adhasi-green mb-3">Für Fachkräfte</p>
            <h2 id="paedagogen-heading" className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Für Pädagogen &amp; Therapeuten
            </h2>
            <p className="font-body text-neutral-600 mb-8 leading-relaxed">
              ADHaSi bietet einen speziellen Pädagogen-Zugang — ideal für Lerntherapeuten,
              Förderlehrkräfte und Nachhilfeinstitute.
            </p>
            <ul className="space-y-4">
              {[
                'Übersicht über Lernfortschritte zugewiesener Kinder',
                'Gezielte Förderung einzelner Lernbereiche',
                'Einfache Einrichtung per Code-Zuweisung',
                'Datenschutzkonforme Nutzung nach DSGVO',
                'Ideal für Lerntherapeuten, Förderlehrkräfte und Nachhilfeinstitute',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-adhasi-green flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/paedagogen/signup"
                className="inline-flex items-center gap-2 bg-adhasi-green text-white font-body font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Pädagogen-Zugang anfragen →
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-80 bg-white border border-adhasi-border rounded-2xl p-6 shadow-sm">
            <p className="font-heading font-bold text-lg text-neutral-900 mb-4">Wer nutzt ADHaSi?</p>
            <ul className="space-y-3 font-body text-sm text-neutral-600">
              {[
                '👩‍🏫 Förderlehrkräfte an Schulen',
                '🏥 Lerntherapeuten und Ergotherapeuten',
                '📚 Nachhilfeinstitute und Lernzentren',
                '👨‍👩‍👧 Eltern mit Kindern mit ADHS-Diagnose',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ratgeber teaser */}
      <section className="py-16 sm:py-20 bg-white border-y border-adhasi-border" aria-labelledby="ratgeber-teaser-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="ratgeber-teaser-heading" className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Verstehe ADHS — handle richtig
          </h2>
          <p className="font-body text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Unser kostenloser Ratgeber erklärt, was hinter ADHS steckt,
            wie du dein Kind unterstützen kannst und welche Hilfsangebote es gibt.
          </p>
          <Link
            href="/ratgeber"
            className="inline-flex items-center gap-2 border border-adhasi-border text-neutral-700 font-body font-bold px-8 py-3 rounded-xl hover:border-neutral-400 hover:text-neutral-900 transition-colors text-base"
          >
            Zum Ratgeber →
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 sm:py-20 bg-adhasi-green" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="cta-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            ADHaSi jetzt kostenlos testen
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            7 Tage gratis – keine Kreditkarte nötig.
          </p>
          <div className="flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>
    </>
  )
}
