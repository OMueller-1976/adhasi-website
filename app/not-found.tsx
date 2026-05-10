import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Seite nicht gefunden | ADHaSi' },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 bg-adhasi-cream">
      <div className="text-center px-4">
        <p className="text-8xl mb-6">🤠</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
          Hoppla — diese Seite gibt es nicht
        </h1>
        <p className="font-body text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Der Lern-Cowboy hat die gesuchte Seite nicht gefunden. Vielleicht wurde sie verschoben oder du hast dich vertippt.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-adhasi-green text-white font-body font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  )
}
