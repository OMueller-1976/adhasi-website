import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, breadcrumbJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Veranstaltungen & Kongresse 2026 | ADHaSi',
  description:
    'ADHS-Kongresse, Fachtagungen und Veranstaltungen 2026 für Eltern, Therapeuten und Fachkräfte — ADHS Deutschland e.V., DGKJP und weitere.',
  path: '/veranstaltungen',
})

const highlightEvent = {
  name: 'ADHS-Kongress Deutschland 2026',
  veranstalter: 'ADHS Deutschland e.V.',
  website: 'https://www.adhs-deutschland.de',
  text: 'Der wichtigste deutschsprachige Jahreskongress zu ADHS – für Eltern, Fachkräfte und Betroffene. Vorträge, Workshops und direkter Austausch mit Expertinnen und Experten.',
}

const events = [
  {
    name: 'ADHS Europe Conference 2026',
    veranstalter: 'ADHS Europe',
    website: 'https://www.adhs-europe.org',
    text: 'Europäischer Dachverband für ADHS-Organisationen: internationaler Austausch zu Forschung, Förderung und Betroffenenrechten.',
  },
  {
    name: 'Jahrestagung BAH 2026',
    veranstalter: 'Bundesverband Aufmerksamkeit & Hyperaktivität (BAH)',
    website: 'https://www.bah-selbsthilfe.de',
    text: 'Jahrestagung der ADHS-Selbsthilfegruppen – Vernetzung von Betroffenen, Angehörigen und Unterstützungsorganisationen aus dem gesamten Bundesgebiet.',
  },
  {
    name: 'Fachtagung Zentrales ADHS-Netz 2026',
    veranstalter: 'Zentrales ADHS-Netz',
    website: 'https://www.zentrales-adhs-netz.de',
    text: 'Wissenschaftliche Fachtagung für Therapeuten, Ärzte und Kliniker: aktuelle Forschungsergebnisse und evidenzbasierte Behandlungsansätze.',
  },
  {
    name: 'DGKJP Jahreskongress 2026',
    veranstalter: 'Deutsche Gesellschaft für Kinder- und Jugendpsychiatrie (DGKJP)',
    website: 'https://www.dgkjp.de',
    text: 'Jahreskongress der DGKJP mit Fachprogramm zu ADHS, komorbiden Störungen und aktuellen Leitlinien-Updates für klinische Fachkräfte.',
  },
  {
    name: 'BZgA Fachveranstaltungen 2026',
    veranstalter: 'Bundeszentrale für gesundheitliche Aufklärung (BZgA)',
    website: 'https://www.bzga.de',
    text: 'Kostenlose Informationsveranstaltungen für Eltern und Fachkräfte zu ADHS, Prävention und Gesundheitsförderung im Kindes- und Jugendalter.',
  },
  {
    name: 'Ergotherapie Austria Kongress 2026',
    veranstalter: 'Ergotherapie Austria',
    website: 'https://www.ergotherapie.at',
    text: 'ADHS in der Ergotherapie: aktuelle Methoden, Förderansätze und Praxisbeispiele für Ergotherapeutinnen und Ergotherapeuten.',
  },
]

export default function VeranstaltungenPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Veranstaltungen 2026', path: '/veranstaltungen' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Veranstaltungen 2026</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📅</span>
            <span className="text-xs font-semibold bg-adhasi-orange text-white px-3 py-1 rounded-full">Aktuell</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS Veranstaltungen & Kongresse 2026
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Kongresse, Fachtagungen und Elternveranstaltungen zu ADHS im deutschsprachigen Raum
            und in Europa — für Betroffene, Angehörige und Fachkräfte.
          </p>
        </div>
      </section>

      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hinweis-Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 flex gap-3">
            <span className="text-xl shrink-0 mt-0.5">ℹ️</span>
            <p className="font-body text-sm text-amber-900 leading-relaxed">
              <strong>Hinweis:</strong> Diese Seite wird regelmäßig aktualisiert.
              Veranstaltungsdetails — Datum, Ort und Anmeldung — können sich ändern.
              Bitte prüfe die jeweilige Veranstalter-Website für aktuelle Informationen.
            </p>
          </div>

          {/* Highlight-Kachel */}
          <div className="border-2 border-adhasi-green rounded-2xl p-6 sm:p-8 mb-6 relative bg-white">
            <span className="absolute -top-3 left-6 bg-adhasi-green text-white text-xs font-semibold px-3 py-1 rounded-full">
              Jahres-Highlight
            </span>
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">🏆</span>
              <div className="flex-1 min-w-0">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 mb-1">
                  {highlightEvent.name}
                </h2>
                <p className="font-body text-sm text-adhasi-green font-semibold mb-3">
                  {highlightEvent.veranstalter}
                </p>
                <p className="font-body text-sm text-neutral-600 leading-relaxed mb-4">
                  {highlightEvent.text}
                </p>
                <a
                  href={highlightEvent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-adhasi-green text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Zur Veranstalter-Website →
                </a>
              </div>
            </div>
          </div>

          {/* Weitere Veranstaltungen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {events.map((ev) => (
              <div
                key={ev.name}
                className="border border-adhasi-border rounded-2xl p-5 bg-white hover:border-neutral-300 hover:shadow-sm transition-all flex flex-col gap-3"
              >
                <div>
                  <h3 className="font-heading text-base font-bold text-neutral-900 mb-0.5">
                    {ev.name}
                  </h3>
                  <p className="font-body text-xs text-neutral-500 font-semibold">
                    {ev.veranstalter}
                  </p>
                </div>
                <p className="font-body text-sm text-neutral-600 leading-relaxed flex-1">
                  {ev.text}
                </p>
                <a
                  href={ev.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-adhasi-green font-body font-semibold text-sm hover:underline"
                >
                  Website besuchen →
                </a>
              </div>
            ))}
          </div>

          {/* Hinweis unten */}
          <div className="bg-surface border border-adhasi-border rounded-xl px-5 py-4 mb-10">
            <p className="font-body text-sm text-neutral-600 leading-relaxed">
              <strong>Weitere Veranstaltungen</strong> findest du direkt bei den Fachverbänden —
              z. B. bei <a href="https://www.adhs-deutschland.de" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">ADHS Deutschland e.V.</a>,{' '}
              <a href="https://www.chadd.org" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">CHADD</a> und{' '}
              <a href="https://www.iacapap.org" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">IACAPAP</a>.{' '}
              Alle Links auf dieser Seite führen zu externen Websites.
            </p>
          </div>

          {/* Internal Links */}
          <div>
            <p className="font-body text-sm font-semibold text-neutral-500 mb-4 uppercase tracking-wider">Weiterführende Themen</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/adhs-grundlagen" className="bg-surface border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
                <span className="text-2xl block mb-1">🧠</span>
                <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Grundlagen</span>
                <p className="font-body text-xs text-neutral-500 mt-0.5">Symptome, Diagnose & Subtypen</p>
              </Link>
              <Link href="/adhs-foerderung" className="bg-surface border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
                <span className="text-2xl block mb-1">🌱</span>
                <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Förderung</span>
                <p className="font-body text-xs text-neutral-500 mt-0.5">Therapie & was wirklich hilft</p>
              </Link>
              <Link href="/ratgeber/hilfsorganisationen" className="bg-surface border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
                <span className="text-2xl block mb-1">🤝</span>
                <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">Hilfsorganisationen</span>
                <p className="font-body text-xs text-neutral-500 mt-0.5">Verbände & Beratungsstellen</p>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <ArticleCTA />
    </>
  )
}
