import Link from 'next/link'
import BookCard from '@/components/BookCard'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, breadcrumbJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'Buchempfehlungen zu ADHS & ADHS',
  description:
    'Eine kuratierte Auswahl bewährter Bücher für Familien mit ADHS-betroffenen Kindern — Medienkompetenz, Erziehung und Lesemotivation.',
  path: '/buchempfehlungen',
})

const books = [
  {
    title: 'Medienkompetenz im Familienalltag',
    isbn: '978-3565109128',
    description:
      'Wie Eltern ihre Kinder sicher und gelassen durch die digitale Welt begleiten. Orientierung im digitalen Alltag mit Regeln, Kommunikation und passenden Tools.',
    amazonUrl: 'https://www.amazon.de/Medienkompetenz-Familienalltag-gelassen-digitale-begleiten/dp/3565109122',
  },
  {
    title: 'Ratgeber Familie und Erziehung: Leitfaden zur positiven Erziehung',
    isbn: '978-3565105910',
    description:
      'Praktische Ratschläge zu Kommunikation, Konfliktlösung und Selbstständigkeit — fundiert und alltagstauglich.',
    amazonUrl: 'https://www.amazon.de/Ratgeber-Familie-Erziehung-Leitfaden-positiven/dp/3565105917',
  },
  {
    title: 'Der Club der mutigen Freunde: Leo Geheimnis',
    isbn: '978-3565105941',
    description:
      'Mobbingprävention & Stärke — Kinderbuch, das Kindern hilft, Selbstbewusstsein zu stärken und Mobbing zu erkennen. Empfohlen als Begleitlektüre für Eltern und Kinder.',
    amazonUrl: 'https://www.amazon.de/Club-mutigen-Freunde-Leo-Geheimnis/dp/3565105941',
  },
]

export default function BuchempfehlungenPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Buchempfehlungen', path: '/buchempfehlungen' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Buchempfehlungen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📖</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Buchempfehlungen
          </h1>
          <p className="font-body text-lg text-neutral-700 max-w-2xl">
            Eine kuratierte Auswahl für Familien — Medienkompetenz, Erziehung und Lesemotivation für Kinder mit ADHS.
            Die Amazon-Links sind herkömmliche Links — keine gesponserten Inhalte.
          </p>
        </div>
      </section>

      {/* Books */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.isbn} {...book} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-surface border-t border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-body text-sm text-neutral-500">
            Die verlinkten Amazon-Seiten sind externe Angebote. ADHaSi erhält keine Provision für diese Empfehlungen. Die Auswahl erfolgt redaktionell.
          </p>
        </div>
      </section>
    </>
  )
}
