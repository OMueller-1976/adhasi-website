import Link from 'next/link'
import BookCard from '@/components/BookCard'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Quellen & Literatur zu ADHS — wissenschaftliche Grundlagen',
  description:
    'Wissenschaftliche Quellen des ADHaSi-Ratgebers: Döpfner, Barkley, DGKJP-Leitlinien und internationale ADHS-Forschung.',
  path: '/ratgeber/quellen',
})

const books = [
  {
    title: 'ADHS bei Kindern und Jugendlichen',
    isbn: '978-3-8017-2695-0',
    description:
      'Das deutschsprachige Standardwerk zu ADHS bei Kindern. Umfassender Überblick über Diagnostik, Ursachen und evidenzbasierte Behandlungsansätze — für Eltern und Fachleute.',
    amazonUrl: 'https://www.amazon.de/dp/3801726959',
  },
  {
    title: 'Das ADHS-Handbuch für Eltern',
    isbn: '978-3-621-27605-8',
    description:
      'Russell Barkley, einer der weltweit führenden ADHS-Forscher, erklärt praxisnah wie Eltern ihrem Kind im Alltag helfen können. Mit konkreten Strategien für Schule, Hausaufgaben und Familienalltag.',
    amazonUrl: 'https://www.amazon.de/dp/3621276055',
  },
  {
    title: 'Zappelphilipp und Störenfrieda',
    isbn: '978-3-424-20108-3',
    description:
      'Praxisratgeber speziell für Eltern von ADHS-Kindern. Alltagsstrategien, Schule, Geschwister, Therapie — verständlich und ohne Fachjargon geschrieben.',
    amazonUrl: 'https://www.amazon.de/dp/342420108X',
  },
]

const references = [
  {
    authors: 'Döpfner, M., Frölich, J., & Lehmkuhl, G.',
    year: '2013',
    title: 'ADHS — Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung.',
    source: 'Hogrefe Verlag, Göttingen.',
  },
  {
    authors: 'Barkley, R. A.',
    year: '2015',
    title: 'Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.).',
    source: 'Guilford Press.',
  },
  {
    authors: 'Faraone, S. V., et al.',
    year: '2021',
    title: 'The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder.',
    source: 'Neuroscience & Biobehavioral Reviews, 128, 789–818.',
  },
  {
    authors: 'Cortese, S., et al.',
    year: '2018',
    title: 'Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis.',
    source: 'The Lancet Psychiatry, 5(9), 727–738.',
  },
  {
    authors: 'Polanczyk, G. V., et al.',
    year: '2015',
    title: 'ADHD prevalence estimates across three decades: an updated systematic review and meta-regression analysis.',
    source: 'International Journal of Epidemiology, 44(4), 1075–1087.',
  },
  {
    authors: 'World Health Organization',
    year: '2022',
    title: 'ICD-11: International Classification of Diseases, 11th Revision.',
    source: 'WHO. Kapitel 6A05: Attention deficit hyperactivity disorder.',
  },
  {
    authors: 'Deutsche Gesellschaft für Kinder- und Jugendpsychiatrie',
    year: '2017',
    title: 'S3-Leitlinie ADHS bei Kindern, Jugendlichen und Erwachsenen.',
    source: 'AWMF-Register Nr. 028-045.',
  },
  {
    authors: 'Sonuga-Barke, E., et al.',
    year: '2013',
    title: 'Nonpharmacological interventions for ADHD: systematic review and meta-analyses of randomized controlled trials of dietary and psychological treatments.',
    source: 'American Journal of Psychiatry, 170(3), 275–289.',
  },
]

export default function QuellenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Quellen & Literatur zu ADHS — wissenschaftliche Grundlagen',
          description: 'Wissenschaftliche Quellen des ADHaSi-Ratgebers: Döpfner, Barkley, DGKJP-Leitlinien und internationale ADHS-Forschung.',
          path: '/ratgeber/quellen',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Quellen', path: '/ratgeber/quellen' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Auf welchen wissenschaftlichen Quellen basiert dieser ADHS-Ratgeber?', answer: 'Der Ratgeber stützt sich auf internationale ADHS-Forschung, darunter den World Federation of ADHD Consensus Statement (Faraone et al., 2021), die S3-Leitlinie der DGKJP sowie Standardwerke von Russell Barkley und Manfred Döpfner.' },
          { question: 'Sind die Informationen auf adhasi.de medizinisch geprüft?', answer: 'Die Inhalte basieren auf aktueller wissenschaftlicher Literatur und wurden sorgfältig recherchiert. Sie ersetzen keine professionelle Diagnostik oder Therapie. Bei Verdacht auf ADHS wenden Sie sich an den Schulpsychologischen Dienst oder einen spezialisierten Kinder- und Jugendpsychologen.' },
          { question: 'Welches Buch empfehlen Sie als ersten Einstieg für Eltern?', answer: 'Das Standardwerk "ADHS bei Kindern und Jugendlichen" von Döpfner, Frölich und Lehmkuhl bietet einen umfassenden Überblick für Eltern und Fachleute. Für einen praxisnahen Einstieg empfiehlt sich "Das ADHS-Handbuch für Eltern" von Russell Barkley.' },
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
            <span className="text-neutral-700">Quellen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔬</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">3 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Quellen & Literatur zu ADHS
          </h1>
          <p className="font-body text-lg text-neutral-700">
            Die Inhalte dieses Ratgebers basieren auf aktueller Forschung und etablierten Fachwerken.
            Hier findest du alle verwendeten Quellen sowie Buchempfehlungen für Eltern und Fachleute.
          </p>
        </div>
      </section>

      {/* Books */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Buchempfehlungen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.isbn} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-10 sm:py-12 bg-surface border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Wissenschaftliche Quellen</h2>
          <ol className="flex flex-col gap-4">
            {references.map((ref, i) => (
              <li key={i} className="font-body text-sm text-neutral-700 leading-relaxed pl-6 relative">
                <span className="absolute left-0 top-0 text-adhasi-green font-bold">{i + 1}.</span>
                <span className="font-semibold">{ref.authors}</span> ({ref.year}). {ref.title}{' '}
                <em>{ref.source}</em>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-white border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
          <h2>Häufige Fragen zu Quellen und Literatur</h2>

          <h3>Auf welchen wissenschaftlichen Quellen basiert dieser Ratgeber?</h3>
          <p>
            Der Ratgeber stützt sich auf internationale ADHS-Forschung: den{' '}
            <em>World Federation of ADHD International Consensus Statement</em> (Faraone et al., 2021)
            mit 208 evidenzbasierten Aussagen, die <em>S3-Leitlinie ADHS</em> der Deutschen Gesellschaft
            für Kinder- und Jugendpsychiatrie (DGKJP, 2017) sowie Standardwerke von Russell Barkley
            und Manfred Döpfner.
          </p>

          <h3>Sind die Informationen auf adhasi.de medizinisch geprüft?</h3>
          <p>Die Inhalte basieren auf aktueller wissenschaftlicher Literatur. Sie ersetzen keine professionelle Diagnostik oder Therapie. Bei Verdacht auf ADHS wenden Sie sich an den Schulpsychologischen Dienst oder einen spezialisierten Kinder- und Jugendpsychologen.</p>

          <h3>Welches Buch empfehlen Sie als ersten Einstieg für Eltern?</h3>
          <p>
            Das Standardwerk <em>ADHS bei Kindern und Jugendlichen</em> von Döpfner, Frölich und
            Lehmkuhl (Hogrefe) bietet einen umfassenden Überblick für Eltern und Fachleute.
            Für einen praxisnahen Einstieg empfiehlt sich <em>Das ADHS-Handbuch für Eltern</em> von
            Russell Barkley — mit konkreten Strategien für Schule und Familienalltag.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/app" className="block mb-4 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: evidenzbasierte Förderung spielerisch erleben
          </Link>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green font-semibold hover:underline">
              ← Hilfsorganisationen
            </Link>
            <Link href="/buchempfehlungen" className="text-adhasi-green font-semibold hover:underline">
              Alle Buchempfehlungen →
            </Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
