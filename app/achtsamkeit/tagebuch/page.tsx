import Link from 'next/link'
import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import DiaryApp from './DiaryApp'

export const metadata: Metadata = defaultMetadata({
  title: 'Achtsamkeitstagebuch Kinder – kostenlos & ohne Anmeldung | ADHaSi',
  description:
    'Kostenloses digitales Achtsamkeitstagebuch für Kinder mit ADHS. Täglich eintragen mit PIN – keine Anmeldung, keine Daten auf dem Server.',
  path: '/achtsamkeit/tagebuch',
})

export default function TagebuchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-12 sm:py-16 border-b border-adhasi-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/achtsamkeit" className="hover:text-adhasi-green">Achtsamkeit</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Tagebuch</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Mein Achtsamkeitstagebuch
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed">
            Trage täglich ein, wie es dir geht – ohne Anmeldung, ohne Konto.
            Deine Einträge bleiben nur auf deinem Gerät.
          </p>
        </div>
      </section>

      {/* App */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <DiaryApp />
        </div>
      </section>
    </>
  )
}
