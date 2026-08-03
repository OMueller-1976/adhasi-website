import Link from 'next/link'
import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import BreathingWidget from './BreathingWidget'

export const metadata: Metadata = defaultMetadata({
  title: 'Atemübungen Kinder ADHS – kostenlos im Browser | ADHaSi',
  description:
    '6 geführte Atemübungen für Kinder mit ADHS. Animierter Atemassistent direkt im Browser – kein Download, keine Anmeldung.',
  path: '/achtsamkeit/atemubungen-kinder',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welche Atemübung ist am besten für Kinder mit ADHS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Einsteiger eignet sich das Bienenatmen besonders gut. Der summende Ausatem beruhigt das Nervensystem schnell und macht Kindern Spaß.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ab welchem Alter sind Atemübungen für Kinder geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die meisten Atemübungen funktionieren ab 6 Jahren. Wichtig ist eine spielerische Heranführung ohne Druck.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollten Kinder mit ADHS Atemübungen machen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Täglich 3–5 Minuten reichen aus. Besonders wirksam ist eine feste Routine – zum Beispiel morgens vor der Schule oder abends vor dem Schlafen.',
      },
    },
  ],
}

export default function AtemubungenPage() {
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
            <span className="text-neutral-700">Atemübungen</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Atemübungen für Kinder mit ADHS
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed">
            Wähle eine Übung und atme einfach mit dem Kreis mit.
            Keine Anmeldung, funktioniert sofort.
          </p>
        </div>
      </section>

      {/* Breathing widget */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <BreathingWidget />
        </div>
      </section>

      {/* SEO text */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900">
            Welche Atemübung passt zu meinem Kind?
          </h2>
          <div className="font-body text-base text-neutral-600 leading-8 space-y-4">
            <p>
              Für den Einstieg eignen sich <strong className="font-semibold text-neutral-700">Bienenatmen</strong> und{' '}
              <strong className="font-semibold text-neutral-700">Ballonatmen</strong> am besten: einfache
              Takte, ein klares Bild im Kopf. Jüngere Kinder (6–8 Jahre) finden damit schnell
              einen Rhythmus und erleben sofort Erfolg.
            </p>
            <p>
              <strong className="font-semibold text-neutral-700">Drachenatmen</strong> und{' '}
              <strong className="font-semibold text-neutral-700">Sternatmen</strong> eignen sich
              gut für Kinder, die kurz vor einer Aufgabe Energie freisetzen oder sich fokussieren möchten.
              Das aktive Pusten und Ausatmen hilft, angestaute Spannung loszulassen.
            </p>
            <p>
              Für ältere Kinder ab 9 Jahren ist die{' '}
              <strong className="font-semibold text-neutral-700">4-7-8 Methode</strong> und der{' '}
              <strong className="font-semibold text-neutral-700">Schmetterlingsatem</strong> ideal — beide
              enthalten eine Haltephase, die das Nervensystem besonders effektiv beruhigt und die
              Konzentration vor dem Einschlafen oder nach einem stressigen Schulvormittag fördert.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
