import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import WaitlistForm from './WaitlistForm'
import { defaultMetadata, breadcrumbJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Ratgeber für Eltern – Tipps, Methoden & Hilfe',
  description:
    'Fundierte Ratgeber-Artikel zu ADHS bei Kindern: Symptome, Lernmethoden, Alltag & Hilfsorganisationen.',
  path: '/ratgeber',
})

const articles = [
  {
    href: '/ratgeber/erwachsene',
    icon: '🌿',
    title: 'Tipps für Erwachsene mit ADHS',
    teaser: 'Tagesstruktur, Bewegung, Visualisierung, Achtsamkeit und Selbstakzeptanz — mit kostenlosen Tools zum Ausprobieren.',
    readingTime: '5 Artikel + Tools',
    category: 'Für Erwachsene',
  },
  {
    href: '/ratgeber/adhs-verstehen',
    icon: '🧠',
    title: 'ADHS verstehen',
    teaser: 'Was ist ADHS genau? Symptome, Ursachen, Diagnose und häufige Missverständnisse — wissenschaftlich fundiert erklärt.',
    readingTime: '8 min',
    category: 'Grundlagen',
  },
  {
    href: '/ratgeber/lernmethodik',
    icon: '📚',
    title: 'Lernmethodik bei ADHS',
    teaser: 'Pomodoro-Technik, Mikropausen, Hyperfokus nutzen, Token Economy — welche Methoden bei ADHS wirklich helfen.',
    readingTime: '7 min',
    category: 'Förderung',
  },
  {
    href: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten',
    icon: '💛',
    title: 'Positive Erziehung bei ADHS',
    teaser: 'Bestärken statt kritisieren, Autonomie fördern, Selbstwert aufbauen — mit konkreten Beispielen für den Alltag.',
    readingTime: '9 min',
    category: 'Erziehung',
  },
  {
    href: '/ratgeber/motivation-bei-schulfrust',
    icon: '🚀',
    title: 'Motivation bei Schulfrust',
    teaser: 'Wie intrinsische Motivation entsteht, kleine Erfolge sichtbar gemacht werden und was bei Verweigerung hilft.',
    readingTime: '7 min',
    category: 'Erziehung',
  },
  {
    href: '/ratgeber/kommunikation-mit-adhs-kind',
    icon: '💬',
    title: 'Über ADHS mit dem Kind sprechen',
    teaser: 'Wie erklärt man einem Kind seine ADHS? Altersgerechte Kommunikation, Diagnose besprechen, Geschwister einbeziehen.',
    readingTime: '7 min',
    category: 'Kommunikation',
  },
  {
    href: '/ratgeber/selbstwert-staerken',
    icon: '🌟',
    title: 'Selbstwert stärken',
    teaser: 'Warum ADHS das Selbstbild belastet und wie Eltern ein stabiles Selbstwertgefühl aufbauen — jenseits von Schulnoten.',
    readingTime: '7 min',
    category: 'Erziehung',
  },
  {
    href: '/ratgeber/medienkompetenz-bei-adhs',
    icon: '📱',
    title: 'Medienkompetenz bei ADHS',
    teaser: 'Chancen digitaler Lernhilfen, Grenzen von Bildschirmzeit, Balance zwischen App und analogem Lernen.',
    readingTime: '7 min',
    category: 'Medien',
  },
  {
    href: '/ratgeber/bildschirmzeit-konzentration',
    icon: '🕐',
    title: 'Bildschirmzeit & Konzentration',
    teaser: 'Was Studien zur Bildschirmzeit bei Kindern zeigen — und warum ADHS-Kinder besonders auf Medienbalance angewiesen sind.',
    readingTime: '7 min',
    category: 'Medien',
  },
  {
    href: '/ratgeber/family-link-bildschirmzeit-apps',
    icon: '📲',
    title: 'Family Link & Bildschirmzeit-Apps',
    teaser: 'Schritt-für-Schritt: Google Family Link und Apple Screen Time einrichten, Lernapps sinnvoll integrieren.',
    readingTime: '7 min',
    category: 'Medien',
  },
  {
    href: '/ratgeber/digitale-hilfsmittel-adhs',
    icon: '🔧',
    title: 'Digitale Hilfsmittel für ADHS',
    teaser: 'Voice Dream Reader, Voiceover, TalkBack, Rechtschreibkorrektur, Nachteilsausgleich — konkrete Tools erklärt.',
    readingTime: '7 min',
    category: 'Hilfsmittel',
  },
  {
    href: '/ratgeber/hilfsorganisationen',
    icon: '🤝',
    title: 'Hilfsorganisationen',
    teaser: 'Beratungsstellen, Verbände und Selbsthilfegruppen in Deutschland und Österreich — mit Kontaktmöglichkeiten.',
    readingTime: '4 min',
    category: 'Hilfe & Unterstützung',
  },
  {
    href: '/ratgeber/quellen',
    icon: '🔬',
    title: 'Quellen & Buchempfehlungen',
    teaser: 'Die wissenschaftlichen Grundlagen hinter diesem Ratgeber — Studien, Fachbücher, weiterführende Literatur.',
    readingTime: '3 min',
    category: 'Quellen',
  },
]

export default function RatgeberPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
        ])}
      />

      <section className="bg-surface py-12 sm:py-16 border-b border-adhasi-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Ratgeber</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS Ratgeber für Eltern
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl">
            ADHS betrifft 5–10 % aller Schulkinder. Dieser Ratgeber
            erklärt, was dahinter steckt, wie man fördert und welche Unterstützung es gibt —
            kostenlos, ohne Anmeldung, wissenschaftlich fundiert.
          </p>
          <p className="font-body text-sm text-neutral-400 mt-2">13 Beiträge · Lesezeit: 3–9 Minuten pro Artikel</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group bg-white rounded-2xl border border-adhasi-border p-6 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-xs text-neutral-400">{a.readingTime}</span>
                </div>
                <h2 className="font-heading text-xl font-semibold text-neutral-900 group-hover:text-adhasi-green transition-colors leading-snug mb-2">
                  {a.title}
                </h2>
                <p className="font-body text-sm text-neutral-500 leading-relaxed flex-1 line-clamp-2">{a.teaser}</p>
                <span className="text-adhasi-green font-body font-semibold text-sm mt-4">
                  Weiterlesen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App teaser */}
      <section className="py-12 bg-surface border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
            Ratgeber gelesen — jetzt üben lassen
          </h2>
          <p className="font-body text-neutral-600 mb-6">
            ADHaSi setzt die Methoden aus diesem Ratgeber spielerisch um — KI-gestützt, werbefrei, DSGVO-konform.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  )
}
