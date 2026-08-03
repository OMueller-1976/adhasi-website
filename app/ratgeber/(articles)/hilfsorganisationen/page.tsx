import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Hilfsorganisationen & Beratung bei ADHS — Verbände, Therapeuten & Selbsthilfe',
  description:
    'Wichtigste ADHS-Hilfsorganisationen: ADHS Deutschland e.V., Selbsthilfegruppen, Schulberatung und Tipps zur Therapeuten-Suche.',
  path: '/ratgeber/hilfsorganisationen',
})

const orgs = [
  {
    name: 'ADHS Deutschland e. V.',
    url: 'https://www.adhs-deutschland.de',
    description:
      'Größter deutscher Selbsthilfeverband für Menschen mit ADHS. Bietet bundesweite Beratungsstellensuche, Informationsmaterial, Selbsthilfegruppen und politische Interessenvertretung.',
    tags: ['Verband', 'Beratungssuche', 'Elterninfo'],
  },
  {
    name: 'Bundesverband Aufmerksamkeit & Hyperaktivität (BAH)',
    url: 'https://www.bah-selbsthilfe.de',
    description:
      'Bundesverband der ADHS-Selbsthilfegruppen. Vernetzt Betroffene und Familien, bietet Gruppensuche und Informationen zu Therapie und Alltagsstrategien.',
    tags: ['Selbsthilfe', 'Eltern', 'Beratung'],
  },
  {
    name: 'Zentrales ADHS-Netz',
    url: 'https://www.zentrales-adhs-netz.de',
    description:
      'Netzwerk von Wissenschaftlern, Ärzten und Therapeuten. Bietet evidenzbasierte Informationen zu Diagnostik und Therapie sowie Fortbildungen für Fachkräfte.',
    tags: ['Forschung', 'Fachkräfte', 'Diagnostik'],
  },
  {
    name: 'BZgA – Bundeszentrale für gesundheitliche Aufklärung',
    url: 'https://www.bzga.de',
    description:
      'Staatliche Aufklärungsbehörde mit kostenlosem Informationsmaterial zu ADHS für Eltern und Lehrkräfte. Telefonische Beratung unter 0221 892031.',
    tags: ['Kostenlos', 'Öffentlich', 'Beratung'],
  },
  {
    name: 'Schulpsychologischer Dienst (öffentlich)',
    url: 'https://www.kmk.org',
    description:
      'In jedem Bundesland gibt es kostenlose schulpsychologische Beratungsstellen für Diagnostik, Förderempfehlungen und Beratung bei ADHS. Zugang über Schulsekretariat oder Schulbehörde.',
    tags: ['Kostenlos', 'Schule', 'Diagnostik'],
  },
  {
    name: 'ÖGKJP – Österreichische Gesellschaft für Kinder- und Jugendpsychiatrie',
    url: 'https://www.oegkjp.at',
    description:
      'Österreichische Fachgesellschaft für Kinder- und Jugendpsychiatrie. Bietet Therapeutensuche und Informationen zu ADHS-Diagnostik und -Therapie in Österreich.',
    tags: ['Österreich', 'Diagnostik', 'Therapie'],
  },
]

export default function HilfsorganisationenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Hilfsorganisationen & Beratung bei ADHS',
          description:
            'Übersicht der wichtigsten ADHS-Hilfsorganisationen in Deutschland: Verbände, Beratung, Selbsthilfe und Therapeutensuche.',
          path: '/ratgeber/hilfsorganisationen',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Hilfsorganisationen', path: '/ratgeber/hilfsorganisationen' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Welche ADHS-Hilfsorganisation ist die wichtigste in Deutschland?', answer: 'ADHS Deutschland e. V. (adhs-deutschland.de) ist der größte Selbsthilfeverband mit bundesweiter Beratungsstellensuche, Selbsthilfegruppen und Elterninformationen. Für evidenzbasierte Fachinformationen empfiehlt sich zusätzlich das Zentrale ADHS-Netz.' },
          { question: 'Hat mein Kind mit ADHS Anspruch auf Nachteilsausgleich in der Schule?', answer: 'Ja. Mit einer formalen ADHS-Diagnose haben Kinder in Deutschland einen Anspruch auf Nachteilsausgleich — z. B. verlängerte Bearbeitungszeit, ruhige Sitzplatzwahl und Pausen während Klassenarbeiten. Der Schulpsychologische Dienst berät kostenlos.' },
          { question: 'Gibt es Hilfsorganisationen für ADHS in Österreich?', answer: 'Ja, die ÖGKJP (Österreichische Gesellschaft für Kinder- und Jugendpsychiatrie, oegkjp.at) bietet Therapeutensuche und Informationen zu ADHS-Diagnostik und -Therapie in Österreich.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-adhasi-green">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Hilfsorganisationen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🤝</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">5 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Hilfsorganisationen & Beratung bei ADHS
          </h1>
          <p className="font-body text-lg text-neutral-700">
            Du bist nicht allein. In Deutschland gibt es zahlreiche Organisationen, Verbände und
            Beratungsangebote, die Familien mit ADHS-betroffenen Kindern gezielt unterstützen —
            viele davon kostenlos.
          </p>
        </div>
      </section>

      {/* Orgs */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-neutral-600 mb-8 text-sm">
            <strong>Hinweis:</strong> Die Links führen zu externen Websites. ADHaSi ist mit keiner der
            genannten Organisationen wirtschaftlich verbunden. Die Auflistung ist redaktionell und
            erhebt keinen Anspruch auf Vollständigkeit.
          </p>
          <div className="flex flex-col gap-6">
            {orgs.map((org) => (
              <article
                key={org.name}
                className="bg-surface rounded-2xl border border-adhasi-border p-6"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {org.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-surface text-adhasi-green-700 border border-adhasi-border px-2 py-0.5 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading text-xl font-semibold text-neutral-900 mb-2">{org.name}</h2>
                <p className="font-body text-sm text-neutral-600 leading-relaxed mb-4">{org.description}</p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-adhasi-green font-semibold text-sm hover:underline"
                >
                  Website besuchen →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-10 bg-white border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
          <h2>Häufige Fragen zu Hilfsangeboten bei ADHS</h2>

          <h3>Welche ADHS-Hilfsorganisation ist die wichtigste in Deutschland?</h3>
          <p>
            <a href="https://www.adhs-deutschland.de" target="_blank" rel="noopener noreferrer">ADHS Deutschland e. V.</a> ist
            der größte Selbsthilfeverband mit bundesweiter Beratungsstellensuche, Selbsthilfegruppen und Elterninformationen.
            Für evidenzbasierte Fachinformationen zu Diagnostik und Therapie empfiehlt sich zusätzlich das{' '}
            <a href="https://www.zentrales-adhs-netz.de" target="_blank" rel="noopener noreferrer">Zentrale ADHS-Netz</a>.
          </p>

          <h3>Hat mein Kind mit ADHS Anspruch auf Nachteilsausgleich in der Schule?</h3>
          <p>
            Ja. Mit einer formalen ADHS-Diagnose können Eltern Nachteilsausgleich beantragen — zum Beispiel
            verlängerte Bearbeitungszeit, ruhige Sitzplatzwahl und Pausen während Klassenarbeiten. Der
            zuständige Schulpsychologische Dienst berät kostenlos und hilft beim Antrag.
          </p>

          <h3>Gibt es Hilfsorganisationen für ADHS in Österreich?</h3>
          <p>
            Ja, die{' '}
            <a href="https://www.oegkjp.at" target="_blank" rel="noopener noreferrer">ÖGKJP (Österreichische Gesellschaft für Kinder- und Jugendpsychiatrie)</a>{' '}
            bietet Therapeutensuche und Informationen zu ADHS-Diagnostik und -Therapie in Österreich.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link href="/ratgeber/adhs-verstehen" className="text-adhasi-green underline text-sm font-semibold">ADHS verstehen</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
            <Link href="/ratgeber/digitale-hilfsmittel-adhs" className="text-adhasi-green underline text-sm font-semibold">Digitale Hilfsmittel</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mb-2 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mb-6 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Förderung nach wissenschaftlichen Methoden
          </Link>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green font-semibold hover:underline">
              ← Lernmethodik
            </Link>
            <Link href="/ratgeber/quellen" className="text-adhasi-green font-semibold hover:underline">
              Weiter: Quellen & Literatur →
            </Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
