import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import { defaultMetadata } from '@/lib/seo'
import { familyGuidePages, FAMILY_GUIDE_HUB } from '@/lib/familyGuide'

export const metadata: Metadata = defaultMetadata({
  title: 'Familienalltag mit ADHS — Tipps und Tools für Eltern',
  description:
    'Tipps für Eltern von Kindern mit ADHS: ADHS verstehen, Routinen, Wochenplan, Punkteplan, Entlastung und Regeln. Mit kostenlosen Tools für den Familienalltag.',
  path: FAMILY_GUIDE_HUB,
})

const faq = [
  {
    question: 'Ersetzt dieser Bereich ein Elterntraining oder eine Therapie?',
    answer:
      'Nein. Die Artikel und Tools sind allgemeine Informationen und Hilfen zur Alltagsorganisation. Ein Elterntraining oder eine Behandlung durch Fachleute ersetzen sie nicht. Welche Unterstützung für Ihre Familie sinnvoll ist, klären Sie am besten mit der Kinder- und Jugendarztpraxis oder einer Beratungsstelle.',
  },
  {
    question: 'Gibt es digitale Angebote für Eltern, die ärztlich verordnet werden?',
    answer:
      'Ja. Es gibt digitale Gesundheitsanwendungen (DiGA), die von Ärztinnen, Ärzten oder Psychotherapeutinnen und Psychotherapeuten verordnet werden können, auch im Bereich ADHS. ADHaSi ist keine DiGA und wird nicht verordnet. Ob so ein Angebot für Sie in Frage kommt, besprechen Sie bitte mit Ihrer Praxis.',
  },
  {
    question: 'Für welches Alter sind die Tipps gedacht?',
    answer:
      'Die Hinweise richten sich vor allem an Eltern von Kindern und Jugendlichen im Schulalter. Je nach Alter und Entwicklung Ihres Kindes müssen Sie Ideen wie Punkteplan oder Wochenjobs anpassen, bei Jugendlichen am besten gemeinsam.',
  },
  {
    question: 'Werden meine Eingaben in den Tools gespeichert?',
    answer:
      'Die Eingaben bleiben im lokalen Speicher Ihres Browsers auf Ihrem Gerät und werden nicht an uns übertragen. Wenn Sie die Browserdaten löschen, sind die Einträge weg. Tragen Sie bitte keine sensiblen Gesundheitsdaten ein.',
  },
]

export default function FamilienalltagHubPage() {
  return (
    <FamilyArticleShell
      icon="👨‍👩‍👧"
      title="Familienalltag mit ADHS — Tipps und Tools für Eltern"
      breadcrumbLabel="Familienalltag mit ADHS"
      intro="ADHS fordert die ganze Familie. Dieser Bereich bündelt fünf praxisnahe Themen für Eltern, jeweils mit einem kostenlosen Tool, das Sie sofort im Browser nutzen können."
      description="Tipps für Eltern von Kindern mit ADHS: Grundlagen, Routinen, Wochenplan, Punkteplan, Entlastung und Regeln mit kostenlosen Tools."
      path={FAMILY_GUIDE_HUB}
      readingTime="4 min"
      faq={faq}
      isHub
    >
      <h2>Warum der Familienalltag so viel Kraft kostet</h2>
      <p>
        Morgens aus dem Haus kommen, Hausaufgaben, Streit um Kleinigkeiten, abends Erschöpfung auf
        allen Seiten: Viele Eltern von Kindern mit ADHS kennen diese Tage. Das hat selten mit
        mangelnder Erziehung zu tun. Aufmerksamkeit, Impulskontrolle und Planung funktionieren bei
        ADHS anders, und das Umfeld muss sich darauf einstellen.
      </p>
      <p>
        Hier finden Sie Ideen, mit denen manche Familien ihren Alltag ruhiger gestalten. Jeder Beitrag
        erklärt kurz das Prinzip und endet mit einem Werkzeug zum Ausprobieren. Die Tipps sind
        Anregungen und nicht für jede Familie gleich passend.
      </p>

      <h2>Fünf Themen für den Alltag</h2>
      <ol>
        {familyGuidePages.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>
              <strong>{p.title}</strong>
            </Link>
            : {p.teaser}
          </li>
        ))}
      </ol>

      <h2>Kostenlose Tools für Eltern</h2>
      <p>
        Alle Tools laufen im Browser, ohne Anmeldung. Ihre Eingaben bleiben auf Ihrem Gerät.
      </p>
      <ul>
        {familyGuidePages.map((p) => (
          <li key={p.toolAnchor}>
            <Link href={`${p.href}#${p.toolAnchor}`}>{p.tool}</Link> (im Beitrag „{p.title}“)
          </li>
        ))}
      </ul>
      <p>
        Dazu passen unsere <Link href="/arbeitsblaetter">kostenlosen Arbeitsblätter</Link>, der
        Ratgeber <Link href="/ratgeber/adhs-verstehen">ADHS verstehen</Link> und der Beitrag{' '}
        <Link href="/ratgeber/kommunikation-mit-adhs-kind">Kommunikation mit dem ADHS-Kind</Link>.
      </p>

      <h2>Was dieser Bereich nicht ist</h2>
      <p>
        Die Beiträge und Tools sind weder Therapie noch Elterntraining im therapeutischen Sinn,
        keine digitale Gesundheitsanwendung und kein Medizinprodukt. Sie ersetzen keine Diagnose
        und keine Behandlung. Wenn Sie sich Sorgen um Ihr Kind machen oder Ihr Familienalltag dauerhaft
        stark belastet ist, wenden Sie sich bitte an Ihre Kinder- und Jugendarztpraxis, an eine
        Psychotherapeutin oder einen Psychotherapeuten oder an eine Beratungsstelle. Anlaufstellen
        finden Sie unter <Link href="/ratgeber/hilfsorganisationen">Hilfsorganisationen</Link>.
      </p>
    </FamilyArticleShell>
  )
}
