import Link from 'next/link'

export default function ArticleCTA() {
  return (
    <section className="bg-adhasi-green py-12 sm:py-16 mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          ADHaSi kostenlos testen
        </h2>
        <p className="font-body text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          7 Tage gratis – keine Kreditkarte nötig. Kurze Lerneinheiten speziell für Kinder mit ADHS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/app"
            className="inline-flex items-center justify-center bg-white text-adhasi-green font-body font-bold px-8 py-3.5 rounded-xl hover:bg-neutral-50 transition-colors text-base shadow-sm"
          >
            Jetzt kostenlos starten →
          </Link>
          <Link
            href="/app"
            className="font-body font-semibold text-white/90 hover:text-white transition-colors text-sm underline underline-offset-2"
          >
            Mehr zur ADHaSi App →
          </Link>
        </div>
      </div>
    </section>
  )
}
