import StoreButtons from './StoreButtons'

export default function ArticleCTA() {
  return (
    <section className="bg-adhasi-green py-12 sm:py-16 mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          ADHaSi jetzt kostenlos testen
        </h2>
        <p className="font-body text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          7 Tage gratis – keine Kreditkarte nötig.
        </p>
        <div className="flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  )
}
