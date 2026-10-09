import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import AiNoticeBadge from '@/components/AiNoticeBadge'
import ArticleCTA from '@/components/ArticleCTA'
import { defaultMetadata, breadcrumbJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Veranstaltungen & Kongresse 2027 | ADHaSi',
  description:
    'Termine 2027 zu ADHS: ADHS Deutschland Symposium in Magdeburg, 7. ADHS-Tage in Hambrücken und World Congress on ADHD in Kapstadt. Stand Oktober 2026.',
  path: '/veranstaltungen/2027',
})

const STAND = 'Oktober 2026'

const confirmedEvents = [
  {
    name: 'ADHS Deutschland Symposium 2027 mit Mitgliederversammlung',
    veranstalter: 'ADHS Deutschland e. V.',
    datum: '17. bis 18. April 2027',
    ort: 'Magdeburg',
    text: 'Symposium und Mitgliederversammlung des Selbsthilfeverbands. Programm und Anmeldung sind laut Veranstalter noch nicht veröffentlicht.',
    quelle: 'https://adhs-deutschland.de/aktuelles-termine/adhs-deutschland-symposium-2027-mit-mitgliederversammlung',
  },
  {
    name: '7. ADHS-Tage',
    veranstalter: 'ADHS Deutschland e. V.',
    datum: '15. bis 17. Oktober 2027',
    ort: 'Hambrücken',
    text: 'Termin laut Veranstaltungskalender von ADHS Deutschland. Details sind laut Veranstalter noch nicht veröffentlicht.',
    quelle: 'https://adhs-deutschland.de/aktuelles/termine',
  },
  {
    name: '11. World Congress on ADHD',
    veranstalter: 'World Federation of ADHD',
    datum: 'Juni 2027 (genauer Tag laut Veranstalter noch offen)',
    ort: 'Kapstadt, Südafrika',
    text: 'Internationaler Fachkongress zu ADHS für Forschung und Praxis, überwiegend englischsprachig.',
    quelle: 'https://www.adhd-federation.org/congresses-meetings/international-congress.html',
  },
]

const openEvents = [
  {
    name: 'DGKJP Jahreskongress 2027',
    veranstalter: 'Deutsche Gesellschaft für Kinder- und Jugendpsychiatrie (DGKJP)',
    website: 'https://www.dgkjp.de',
  },
  {
    name: 'Jahrestagung BAH 2027',
    veranstalter: 'Bundesverband Aufmerksamkeit & Hyperaktivität (BAH)',
    website: 'https://www.bah-selbsthilfe.de',
  },
  {
    name: 'Fachtagung Zentrales ADHS-Netz 2027',
    veranstalter: 'Zentrales ADHS-Netz',
    website: 'https://www.zentrales-adhs-netz.de',
  },
]

export default function Veranstaltungen2027Page() {
  return (
    <>
      <AiNoticeBadge />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Veranstaltungen', path: '/veranstaltungen' },
          { name: 'Veranstaltungen 2027', path: '/veranstaltungen/2027' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/veranstaltungen" className="hover:text-neutral-700">Veranstaltungen</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">2027</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📅</span>
            <span className="text-xs font-semibold bg-adhasi-orange text-white px-3 py-1 rounded-full">
              Stand {STAND}
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS Veranstaltungen & Kongresse 2027
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Termine zu ADHS für Betroffene, Angehörige und Fachkräfte im Jahr 2027. Wir ergänzen die
            Seite, sobald Veranstalter weitere Termine veröffentlichen.
          </p>
        </div>
      </section>

      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 flex gap-3">
            <span className="text-xl shrink-0 mt-0.5">ℹ️</span>
            <p className="font-body text-sm text-amber-900 leading-relaxed">
              <strong>Hinweis:</strong> Alle Angaben ohne Gewähr, Stand {STAND}. Termine, Orte und
              Anmeldungen können sich ändern. Bitte prüfe vor einer Planung die Website des
              jeweiligen Veranstalters.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Bestätigte Termine 2027
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {confirmedEvents.map((ev) => (
              <div key={ev.name} className="border border-adhasi-border rounded-2xl p-5 sm:p-6 bg-white">
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1">{ev.name}</h3>
                <p className="font-body text-sm text-adhasi-green font-semibold mb-3">{ev.veranstalter}</p>
                <dl className="font-body text-sm text-neutral-700 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mb-3">
                  <dt className="font-semibold">Datum</dt>
                  <dd>{ev.datum}</dd>
                  <dt className="font-semibold">Ort</dt>
                  <dd>{ev.ort}</dd>
                </dl>
                <p className="font-body text-sm text-neutral-600 leading-relaxed mb-4">{ev.text}</p>
                <a
                  href={ev.quelle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-adhasi-green font-body font-semibold text-sm hover:underline"
                >
                  Quelle beim Veranstalter →
                </a>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
            Weitere Veranstalter: Termin noch offen
          </h2>
          <p className="font-body text-sm text-neutral-600 mb-4">
            Für diese Veranstaltungen lag uns im {STAND} kein bestätigter Termin für 2027 vor. Aktuelle
            Informationen finden Sie bei den Veranstaltern.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {openEvents.map((ev) => (
              <li key={ev.name} className="border border-adhasi-border rounded-2xl p-5 bg-white">
                <h3 className="font-heading text-base font-bold text-neutral-900 mb-0.5">{ev.name}</h3>
                <p className="font-body text-xs text-neutral-500 font-semibold mb-3">{ev.veranstalter}</p>
                <a
                  href={ev.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-adhasi-green font-body font-semibold text-sm hover:underline"
                >
                  Website besuchen →
                </a>
              </li>
            ))}
          </ul>

          <div className="bg-surface border border-adhasi-border rounded-xl px-5 py-4 mb-10">
            <p className="font-body text-sm text-neutral-600 leading-relaxed">
              <strong>Weitere Termine</strong> finden Sie bei den Fachverbänden, zum Beispiel bei{' '}
              <a href="https://adhs-deutschland.de/aktuelles/termine" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">ADHS Deutschland e. V.</a>,{' '}
              <a href="https://www.chadd.org" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">CHADD</a> und{' '}
              <a href="https://www.iacapap.org" target="_blank" rel="noopener noreferrer" className="text-adhasi-green hover:underline">IACAPAP</a>.
              Alle Links auf dieser Seite führen zu externen Websites. Die Termine von 2026 finden Sie
              auf der Seite <Link href="/veranstaltungen" className="text-adhasi-green hover:underline">Veranstaltungen 2026</Link>.
            </p>
          </div>

          <div>
            <p className="font-body text-sm font-semibold text-neutral-500 mb-4 uppercase tracking-wider">Weiterführende Themen</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/adhs-grundlagen" className="bg-surface border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
                <span className="text-2xl block mb-1">🧠</span>
                <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Grundlagen</span>
                <p className="font-body text-xs text-neutral-500 mt-0.5">Symptome, Diagnose & Subtypen</p>
              </Link>
              <Link href="/ratgeber/familienalltag-adhs" className="bg-surface border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
                <span className="text-2xl block mb-1">👨‍👩‍👧</span>
                <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">Familienalltag mit ADHS</span>
                <p className="font-body text-xs text-neutral-500 mt-0.5">Tipps und Tools für Eltern</p>
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
