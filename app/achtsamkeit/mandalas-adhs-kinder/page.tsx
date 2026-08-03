import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'Mandalas ADHS Kinder ausdrucken – kostenlos PDF | ADHaSi',
  description:
    'Kostenlose Mandalas für Kinder mit ADHS als PDF zum Ausdrucken. A4-fertig, speziell gestaltet für Konzentration und Entspannung.',
  path: '/achtsamkeit/mandalas-adhs-kinder',
})

const faqs = [
  {
    question: 'Für welches Alter sind die Mandalas geeignet?',
    answer:
      'Die Mandalas sind für Kinder ab 6 Jahren gestaltet. Die Motive sind klar strukturiert und nicht zu kleinteilig, damit auch jüngere Kinder sie gut ausmalen können. Ältere Kinder können die detaillierteren Motive verwenden.',
  },
  {
    question: 'Brauche ich spezielle Stifte?',
    answer:
      'Nein. Dicke Buntstifte oder Filzstifte eignen sich am besten, weil sie die Flächen schnell und gleichmäßig ausfüllen. Wachsmalkreiden funktionieren ebenfalls gut. Dünne Kugelschreiber oder Bleistifte sind weniger geeignet, da das Ausmalen länger dauert und schneller frustriert.',
  },
  {
    question: 'Darf ich die Mandalas in der Schule verwenden?',
    answer:
      'Ja. Alle Mandalas stehen unter einer freien Lizenz und dürfen kostenlos für den privaten und schulischen Gebrauch gedruckt und vervielfältigt werden. Eine kommerzielle Weiterverwendung oder Weiterverkauf ist nicht erlaubt.',
  },
]

const downloads = [
  {
    title: 'ADHS-Helden Mandalas',
    desc: '12 Mandalas mit ADHS-Helden-Motiven',
    href: '/mandalas_adhs_helden_a4.pdf',
  },
  {
    title: '8 weitere Mandalas',
    desc: '8 zusätzliche Motive zum Ausmalen',
    href: '/8_weitere_mandalas_a4.pdf',
  },
]

export default function MandalasPage() {
  return (
    <>
      <StructuredData data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section className="bg-surface py-12 sm:py-16 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/achtsamkeit" className="hover:text-adhasi-green">Achtsamkeit</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Mandalas</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Mandalas für Kinder mit ADHS – kostenlos ausdrucken
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed">
            Unsere ADHS-Helden-Mandalas sind speziell für Kinder mit ADHS gestaltet –
            beruhigend, einfach auszumalen und A4-fertig zum Drucken.
          </p>
        </div>
      </section>

      {/* Download tiles */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {downloads.map((d) => (
              <div
                key={d.href}
                className="flex flex-col gap-4 rounded-2xl border border-adhasi-border bg-surface p-7"
              >
                <div>
                  <p className="font-heading font-semibold text-neutral-900 text-lg mb-1">{d.title}</p>
                  <p className="font-body text-sm text-neutral-500 leading-relaxed">{d.desc}</p>
                </div>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start font-body font-semibold bg-adhasi-green text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Herunterladen (PDF)
                </a>
              </div>
            ))}
          </div>

          {/* Print hint */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
            <p className="font-body text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">Drucktipp:</span> A4, schwarz-weiß, 100&nbsp;% Skalierung.
              Dicke Buntstifte oder Filzstifte empfohlen.
            </p>
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-12 sm:py-16 bg-surface border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900">
            Warum Mandalas bei ADHS helfen
          </h2>
          <div className="font-body text-base text-neutral-600 leading-8 space-y-4">
            <p>
              Mandalas ausmalen ist eine der einfachsten Achtsamkeitsübungen für Kinder mit ADHS.
              Die runde, symmetrische Struktur gibt dem Blick eine klare Richtung und hilft dem
              Gehirn, zur Ruhe zu kommen – ohne dass das Kind still sitzen oder zuhören muss.
            </p>
            <p>
              Das gleichmäßige Ausmalen innerhalb der Linien fordert Konzentration, ohne zu
              überfordern. Kinder erleben schnell ein Erfolgserlebnis, weil jedes Mandala am Ende
              schön aussieht – unabhängig davon, wie es ausgemalt wurde. Es gibt keine richtige
              oder falsche Lösung, nur Kreativität.
            </p>
            <p>
              Gleichzeitig fördert das Ausmalen die Feinmotorik und schult die Hand-Auge-Koordination.
              Viele Eltern berichten, dass ihre Kinder nach einer Mandala-Einheit ruhiger und
              ausgeglichener wirken – ideal als Übergang zwischen Schulaufgaben und Freizeit
              oder zur Entspannung vor dem Schlafen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
            Häufige Fragen
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-adhasi-border bg-surface p-6">
                <p className="font-heading font-semibold text-neutral-900 mb-2">{faq.question}</p>
                <p className="font-body text-sm text-neutral-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
