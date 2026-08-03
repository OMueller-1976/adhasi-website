import Link from 'next/link'
import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'Achtsamkeitsübungen Kinder ADHS – 5 einfache Techniken | ADHaSi',
  description:
    '5 Achtsamkeitsübungen für Kinder mit ADHS ab 6 Jahren. Sinnes-Stopp, Body-Scan, Gefühlswetterkarte und mehr – einfach und kostenlos.',
  path: '/achtsamkeit/ubungen',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Sinnes-Stopp bei ADHS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Sinnes-Stopp ist eine kurze Achtsamkeitsübung bei der Kinder bewusst 5 Dinge sehen, 4 hören, 3 fühlen, 2 riechen und 1 schmecken. Das unterbricht Gedankenspiralen sofort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helfen Achtsamkeitsübungen wirklich bei ADHS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studien zeigen, dass regelmäßige Achtsamkeit Impulsivität reduziert und die Konzentrationsfähigkeit bei Kindern mit ADHS verbessert. Sie ersetzt keine Therapie, ergänzt sie aber wirksam.',
      },
    },
  ],
}

const exercises = [
  {
    title: '1. Sinnes-Stopp',
    description:
      'Stoppt inne und nennt bewusst 5 Dinge die man sieht, 4 die man hört, 3 die man fühlt, 2 die man riecht, 1 das man schmeckt.',
    duration: 'Dauer: 3–5 Minuten. Ab 6 Jahren.',
  },
  {
    title: '2. Gefühlswetterkarte',
    description:
      'Kind malt oder beschreibt sein inneres Wetter – Sonne, Wolken, Regen, Sturm. Hilft Gefühle ohne Worte ausdrücken.',
    duration: 'Dauer: 5 Minuten. Ab 6 Jahren.',
  },
  {
    title: '3. Body-Scan für Kinder',
    description:
      'Im Liegen oder Sitzen von den Zehen bis zum Kopf wandern und spüren wie sich jeder Körperteil anfühlt. Entspannt Anspannung.',
    duration: 'Dauer: 5–8 Minuten. Ab 8 Jahren.',
  },
  {
    title: '4. Gedanken-Wolken',
    description:
      'Augen schließen, Gedanken wie vorbeiziehende Wolken beobachten ohne sie festzuhalten. Übt Distanz zu aufwühlenden Gedanken.',
    duration: 'Dauer: 3–5 Minuten. Ab 8 Jahren.',
  },
  {
    title: '5. Wohlfühlbox',
    description:
      'Eine echte kleine Box befüllen mit Dingen die gut tun – ein Stein, ein Bild, ein Duft. Bei Stress die Box öffnen und bewusst wahrnehmen.',
    duration: 'Dauer: 10 Minuten zum Bauen, jederzeit nutzbar. Ab 6 Jahren.',
  },
]

export default function AchtsamkeitsubungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-surface py-12 sm:py-16 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/achtsamkeit" className="hover:text-adhasi-green">Achtsamkeit</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Übungen</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Achtsamkeitsübungen für Kinder mit ADHS
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed">
            Diese 5 Übungen helfen Kindern mit ADHS, zur Ruhe zu kommen, Gefühle zu verstehen
            und den Alltag besser zu meistern.
          </p>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          {exercises.map((exercise) => (
            <article
              key={exercise.title}
              className="rounded-2xl border border-adhasi-border bg-surface p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                {exercise.title}
              </h2>
              <p className="font-body text-base text-neutral-600 leading-8 mb-4">
                {exercise.description}
              </p>
              <p className="font-body text-sm font-semibold text-adhasi-green">
                {exercise.duration}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
            Bereit für mehr Ruhe?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/achtsamkeit/atemubungen-kinder"
              className="font-body font-semibold bg-adhasi-green text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Atemübungen ausprobieren
            </Link>
            <Link
              href="/achtsamkeit/tagebuch"
              className="font-body font-semibold text-neutral-700 text-sm px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-500 transition-colors"
            >
              Tagebuch starten
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
