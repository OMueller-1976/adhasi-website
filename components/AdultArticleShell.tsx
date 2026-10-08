import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import { adultGuidePages, ADULT_GUIDE_HUB } from '@/lib/adultGuide'

interface Faq {
  question: string
  answer: string
}

interface NavLink {
  href: string
  label: string
}

interface AdultArticleShellProps {
  icon: string
  title: string
  breadcrumbLabel: string
  intro: string
  description: string
  path: string
  readingTime: string
  faq: Faq[]
  isHub?: boolean
  prev?: NavLink
  next?: NavLink
  tool?: React.ReactNode
  children: React.ReactNode
}

export default function AdultArticleShell({
  icon,
  title,
  breadcrumbLabel,
  intro,
  description,
  path,
  readingTime,
  faq,
  isHub = false,
  prev,
  next,
  tool,
  children,
}: AdultArticleShellProps) {
  const breadcrumb = isHub
    ? [
        { name: 'Startseite', path: '/' },
        { name: 'Ratgeber', path: '/ratgeber' },
        { name: breadcrumbLabel, path },
      ]
    : [
        { name: 'Startseite', path: '/' },
        { name: 'Ratgeber', path: '/ratgeber' },
        { name: 'Für Erwachsene', path: ADULT_GUIDE_HUB },
        { name: breadcrumbLabel, path },
      ]

  const others = adultGuidePages.filter((p) => p.href !== path)

  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title,
          description,
          path,
          datePublished: '2026-10-08',
        })}
      />
      <StructuredData data={breadcrumbJsonLd(breadcrumb)} />
      <StructuredData data={faqJsonLd(faq)} />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            {isHub ? (
              <span className="text-neutral-600">{breadcrumbLabel}</span>
            ) : (
              <>
                <Link href={ADULT_GUIDE_HUB} className="hover:text-neutral-700">Für Erwachsene</Link>
                <span className="mx-2">/</span>
                <span className="text-neutral-600">{breadcrumbLabel}</span>
              </>
            )}
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{icon}</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">
              {readingTime} Lesezeit
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {title}
          </h1>
          <p className="font-body text-lg text-neutral-600">{intro}</p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
          {children}

          <h2>Häufige Fragen</h2>
          {faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {tool && <div className="max-w-3xl mx-auto px-4 sm:px-6">{tool}</div>}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-8">
          <aside className="rounded-xl border border-adhasi-border bg-surface p-4 font-body text-sm text-neutral-600">
            <strong>Hinweis:</strong> Dieser Artikel dient der allgemeinen Information und ersetzt
            keine ärztliche Diagnose, Beratung oder Behandlung. Bei Fragen zu Ihrer Gesundheit
            sprechen Sie bitte mit einer Ärztin, einem Arzt oder einer Psychotherapeutin bzw. einem
            Psychotherapeuten.
          </aside>
        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Mehr aus dem Bereich Für Erwachsene:</p>
          <div className="flex flex-wrap gap-3">
            {!isHub && (
              <Link href={ADULT_GUIDE_HUB} className="text-adhasi-green underline text-sm font-semibold">
                Übersicht: Tipps für Erwachsene mit ADHS
              </Link>
            )}
            {others.map((p) => (
              <Link key={p.href} href={p.href} className="text-adhasi-green underline text-sm font-semibold">
                {p.title}
              </Link>
            ))}
          </div>
          <Link href="/arbeitsblaetter" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Kostenlose Arbeitsblätter
          </Link>
          <Link href="/ratgeber/hilfsorganisationen" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → Hilfsorganisationen und Beratungsstellen
          </Link>
          {(prev || next) && (
            <div className="flex justify-between mt-6">
              {prev ? (
                <Link href={prev.href} className="text-adhasi-green font-semibold hover:underline text-sm">
                  ← {prev.label}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={next.href} className="text-adhasi-green font-semibold hover:underline text-sm">
                  Weiter: {next.label} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          )}
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
