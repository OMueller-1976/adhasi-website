import Image from 'next/image'
import EarlyAccessForm from './EarlyAccessForm'

export default function Hero() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-adhasi-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface border border-adhasi-border text-neutral-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-adhasi-green inline-block" />
            Bald im Google Play Store verfügbar
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            ADHaSi – die Lern-App für Kinder mit{' '}
            <span className="text-adhasi-green">ADHS</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Kurze, fokussierte Lerneinheiten – speziell entwickelt für Kinder zwischen 8 und 14 Jahren
            mit ADHS. Täglich 5 Minuten, maximaler Lernerfolg.
          </p>

          <div id="early-access">
            <EarlyAccessForm />
          </div>
        </div>

        {/* Logo illustration */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            src="/Logo.png"
            alt="ADHaSi App — Lern-Cowboy und Pferd"
            width={400}
            height={400}
            className="w-64 sm:w-80 lg:w-[400px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
