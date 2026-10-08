import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import { defaultMetadata } from '@/lib/seo'
import { adultGuidePages, ADULT_GUIDE_HUB } from '@/lib/adultGuide'

export const metadata: Metadata = defaultMetadata({
  title: 'Tipps für Erwachsene mit ADHS — Alltag, Struktur & Selbstakzeptanz',
  description:
    'Praktische Tipps für Erwachsene mit ADHS: Tagesstruktur, Bewegung, Visualisierung, Achtsamkeit und Selbstakzeptanz — mit kostenlosen Tools zum Ausprobieren.',
  path: ADULT_GUIDE_HUB,
})

const faq = [
  {
    question: 'Gibt es ADHS auch bei Erwachsenen?',
    answer:
      'Ja. ADHS bleibt bei vielen Menschen über das Kindesalter hinaus bestehen. Schätzungen gehen von etwa 2 bis 4 Prozent der Erwachsenen aus. Die Symptome zeigen sich oft anders als bei Kindern: weniger als sichtbare Zappeligkeit, häufiger als innere Unruhe, Vergesslichkeit und Schwierigkeiten bei der Organisation.',
  },
  {
    question: 'Wo bekomme ich als Erwachsener eine ADHS-Diagnose?',
    answer:
      'Ansprechpartner sind Fachärztinnen und Fachärzte für Psychiatrie und Psychotherapie, spezialisierte Ambulanzen und teilweise Psychologische Psychotherapeutinnen und -therapeuten. Ihre Hausarztpraxis kann Sie beraten und bei Bedarf überweisen. Eine Selbstdiagnose aus dem Internet ersetzt die fachliche Abklärung nicht.',
  },
  {
    question: 'Helfen die Tipps auch ohne Diagnose?',
    answer:
      'Struktur, Bewegung, Visualisierung und Achtsamkeit sind allgemein hilfreiche Strategien, die auch Menschen ohne ADHS-Diagnose entlasten können. Wenn Sie vermuten, dass hinter Ihren Schwierigkeiten ADHS steckt, lohnt sich eine fachliche Abklärung.',
  },
]

export default function ErwachseneHubPage() {
  return (
    <AdultArticleShell
      icon="🌿"
      title="Tipps für Erwachsene mit ADHS — Alltag, Struktur und Selbstakzeptanz"
      breadcrumbLabel="Für Erwachsene"
      intro="ADHS endet nicht mit der Kindheit. Dieser Bereich bündelt fünf praxisnahe Ansätze für einen entspannteren Alltag, jeweils mit einem kostenlosen Tool zum direkten Ausprobieren."
      description="Praktische Tipps für Erwachsene mit ADHS: Tagesstruktur, Bewegung, Visualisierung, Achtsamkeit und Selbstakzeptanz — mit kostenlosen Tools."
      path={ADULT_GUIDE_HUB}
      readingTime="4 min"
      faq={faq}
      isHub
    >
      <h2>ADHS im Erwachsenenalter: Was sich verändert</h2>
      <p>
        Bei Kindern fällt ADHS meist durch Zappeligkeit und Unruhe auf. Bei Erwachsenen verlagert
        sich das Bild: Die Hyperaktivität zeigt sich häufiger als innere Rastlosigkeit, während
        Konzentrationsschwierigkeiten, Vergesslichkeit und Probleme mit Organisation und
        Zeitplanung in den Vordergrund rücken. Impulsive Entscheidungen und schwankende Stimmungen
        können Beruf, Beziehungen und Finanzen belasten.
      </p>
      <p>
        Manche Erwachsene erkennen sich erst wieder, wenn bei ihrem eigenen Kind ADHS festgestellt
        wird. Deshalb gehört dieser Bereich auch zu ADHaSi: Was Eltern selbst für sich tun, wirkt
        sich auf den ganzen Familienalltag aus.
      </p>

      <h2>Fünf Ansätze für einen entspannteren Alltag</h2>
      <p>
        Die folgenden Artikel bauen aufeinander auf. Sie können sie der Reihe nach lesen oder direkt
        mit dem Thema beginnen, das Sie gerade am meisten beschäftigt.
      </p>
      <ol>
        {adultGuidePages.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>
              <strong>{p.title}</strong>
            </Link>
            : {p.teaser}
          </li>
        ))}
      </ol>

      <h2>Kostenlose Tools zum Ausprobieren</h2>
      <p>
        Jeder Artikel endet mit einem Werkzeug, das Sie sofort im Browser nutzen können, ohne
        Anmeldung und ohne Datenübertragung:
      </p>
      <ul>
        {adultGuidePages.map((p) => (
          <li key={p.toolAnchor}>
            <Link href={`${p.href}#${p.toolAnchor}`}>{p.tool}</Link> (im Artikel „{p.title}“)
          </li>
        ))}
      </ul>
      <p>
        Weitere Hilfen finden Sie in unseren <Link href="/arbeitsblaetter">kostenlosen
        Arbeitsblättern</Link> und im Bereich <Link href="/achtsamkeit">Achtsamkeit</Link>.
      </p>

      <h2>Wann professionelle Unterstützung sinnvoll ist</h2>
      <p>
        Selbsthilfe-Strategien sind eine Ergänzung, kein Ersatz für Diagnostik und Behandlung. Wenn
        Ihr Alltag dauerhaft stark beeinträchtigt ist, wenn Sie sich anhaltend niedergeschlagen
        fühlen oder wenn Beruf und Beziehungen leiden, sprechen Sie mit einer Fachperson.
        Anlaufstellen finden Sie auf unserer Seite{' '}
        <Link href="/ratgeber/hilfsorganisationen">Hilfsorganisationen</Link>.
      </p>
    </AdultArticleShell>
  )
}
