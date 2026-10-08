import Link from 'next/link'
import AdultToolsTeaser from '@/components/AdultToolsTeaser'
import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'Achtsamkeit für Kinder mit ADHS – kostenlos | ADHaSi',
  description:
    'Atemübungen, Mandalas und Achtsamkeitstagebuch für Kinder mit ADHS ab 6 Jahren. Kostenlos, ohne Anmeldung.',
  path: '/achtsamkeit',
})

const modules = [
  {
    emoji: '🌬',
    title: 'Atemübungen',
    desc: '6 geführte Atemübungen direkt im Browser',
    href: '/achtsamkeit/atemubungen-kinder',
  },
  {
    emoji: '🎨',
    title: 'Mandalas',
    desc: 'Kostenlose PDFs zum Ausdrucken und Ausmalen',
    href: '/achtsamkeit/mandalas-adhs-kinder',
  },
  {
    emoji: '📔',
    title: 'Tagebuch',
    desc: 'Tägliche Einträge mit PIN, ohne Anmeldung',
    href: '/achtsamkeit/tagebuch',
  },
]

const relatedLinks = [
  {
    title: 'ADHS Übungen',
    desc: 'Spielerische Übungen für Fokus und Impulskontrolle',
    href: '/adhs-uebungen',
  },
  {
    title: 'ADHS Förderung',
    desc: 'Methoden, Therapie und Unterstützung im Alltag',
    href: '/adhs-foerderung',
  },
  {
    title: 'Selbstwert stärken',
    desc: 'Wie Kinder mit ADHS mehr Vertrauen entwickeln',
    href: '/ratgeber/selbstwert-staerken',
  },
]

export default function AchtsamkeitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-12 sm:py-18 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5">
            60 Tage Achtsamkeit für Kinder mit ADHS
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Kostenlose Atemübungen, Mandalas und ein Achtsamkeitstagebuch –
            für Kinder ab 6 Jahren. Keine Anmeldung, kein Abo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/achtsamkeit/atemubungen-kinder"
              className="font-body font-semibold bg-adhasi-green text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Atemübungen starten
            </Link>
            <Link
              href="/achtsamkeit/mandalas-adhs-kinder"
              className="font-body font-semibold text-neutral-700 text-sm px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-500 transition-colors"
            >
              Mandalas herunterladen
            </Link>
          </div>
        </div>
      </section>

      {/* Module tiles */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {modules.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group flex flex-col gap-4 rounded-2xl border border-adhasi-border bg-surface p-7 hover:border-adhasi-green hover:shadow-sm transition-all"
              >
                <span className="text-4xl">{m.emoji}</span>
                <div>
                  <p className="font-heading font-semibold text-neutral-900 text-lg mb-1 group-hover:text-adhasi-green transition-colors">
                    {m.title}
                  </p>
                  <p className="font-body text-sm text-neutral-500 leading-relaxed">{m.desc}</p>
                </div>
                <span className="font-body text-xs font-semibold text-adhasi-green mt-auto">
                  Jetzt ansehen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-5">
            Warum Achtsamkeit bei ADHS hilft
          </h2>
          <div className="font-body text-base text-neutral-600 leading-8 space-y-4">
            <p>
              Kinder mit ADHS erleben ihren Alltag oft als laut, schnell und überwältigend.
              Achtsamkeit bietet einen Gegenpol: kurze Momente der Ruhe, in denen das Kind
              lernt, seinen eigenen Körper und seine Gefühle bewusst wahrzunehmen – ohne
              Bewertung und ohne Druck.
            </p>
            <p>
              Studien zeigen, dass regelmäßige Achtsamkeitsübungen die Selbstregulation
              verbessern, Impulse besser kontrollierbar machen und den Schlaf fördern können.
              Schon fünf Minuten täglich reichen aus, um einen Unterschied zu spüren –
              besonders wenn die Übungen spielerisch und altersgerecht gestaltet sind.
            </p>
            <p>
              Atemübungen helfen dabei, das Nervensystem zu beruhigen und den Fokus zurückzuholen.
              Mandalas ausmalen fördert Konzentration und Feinmotorik auf entspannte Weise.
              Ein Tagebuch wiederum stärkt die Selbstwahrnehmung und gibt Kindern die Möglichkeit,
              ihre Erlebnisse und Gefühle in Worte zu fassen.
            </p>
          </div>
        </div>
      </section>

      {/* Tools für Erwachsene */}
      <AdultToolsTeaser />

      {/* Related links */}
      <section className="py-10 sm:py-12 bg-white border-t border-adhasi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-5">
            Das könnte dich auch interessieren
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-adhasi-border bg-surface p-5 hover:border-adhasi-green hover:shadow-sm transition-all"
              >
                <p className="font-heading font-semibold text-neutral-900 group-hover:text-adhasi-green transition-colors">
                  {link.title}
                </p>
                <p className="font-body text-sm text-neutral-500 leading-relaxed mt-1">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
