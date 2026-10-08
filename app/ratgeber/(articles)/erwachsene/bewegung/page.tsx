import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import FokusTimer from '@/components/tools/FokusTimer'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/erwachsene/bewegung'

export const metadata: Metadata = defaultMetadata({
  title: 'Bewegung und Sport bei ADHS — Welche Aktivität passt? Mit Fokus-Timer',
  description:
    'Wie Bewegung bei ADHS im Erwachsenenalter entlasten kann: passende Sportarten, kleine Bewegungspausen und Tipps zum Dranbleiben. Mit kostenlosem Fokus-Timer.',
  path: PATH,
})

const faq = [
  {
    question: 'Welcher Sport ist bei ADHS am besten?',
    answer:
      'Es gibt nicht die eine beste Sportart. Ausdauersport wie Joggen, Schwimmen oder Radfahren, Kampfsport mit klaren Regeln, Yoga oder Tai-Chi und Teamsport werden häufig als hilfreich beschrieben. Entscheidend ist, dass die Aktivität Ihnen Freude macht, denn nur dann bleiben Sie dauerhaft dabei.',
  },
  {
    question: 'Wie viel Bewegung ist sinnvoll?',
    answer:
      'Die Weltgesundheitsorganisation empfiehlt Erwachsenen allgemein mindestens 150 Minuten moderate Bewegung pro Woche. Für den Einstieg reichen auch kurze Einheiten von zehn Minuten, die Sie über den Tag verteilen.',
  },
  {
    question: 'Kann Sport Medikamente bei ADHS ersetzen?',
    answer:
      'Nein. Bewegung kann Konzentration, Stimmung und Stressempfinden positiv beeinflussen, ersetzt aber keine ärztliche Behandlung. Änderungen an einer bestehenden Therapie sollten Sie immer mit Ihrer behandelnden Ärztin oder Ihrem Arzt besprechen.',
  },
]

export default function BewegungPage() {
  return (
    <AdultArticleShell
      icon="🏃"
      title="Bewegung und Sport bei ADHS — Welche Aktivität passt?"
      breadcrumbLabel="Bewegung"
      intro="Bewegung hilft vielen Erwachsenen mit ADHS, überschüssige Energie abzubauen und den Kopf freizubekommen. So finden Sie eine Form, die zu Ihnen passt und im Alltag funktioniert."
      description="Bewegung und Sport bei ADHS: passende Sportarten, Bewegungspausen und Tipps zum Dranbleiben für Erwachsene."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/erwachsene/tagesstruktur', label: 'Tagesstruktur' }}
      next={{ href: '/ratgeber/erwachsene/visualisierung', label: 'Visualisierung' }}
      tool={
        <ToolCard
          id="fokus-timer"
          title="Fokus-Timer mit Bewegungspause"
          description="Arbeiten Sie in festen Blöcken und nutzen Sie die Pausen bewusst für Bewegung. Wählen Sie ein Zeitmodell und starten Sie."
          showPrivacyNote={false}
        >
          <FokusTimer />
        </ToolCard>
      }
    >
      <h2>Warum Bewegung bei ADHS helfen kann</h2>
      <p>
        Körperliche Aktivität beeinflusst Botenstoffe im Gehirn wie Dopamin, die bei ADHS eine Rolle
        spielen. Studien deuten darauf hin, dass regelmäßige Bewegung Aufmerksamkeit, Stimmung und
        den Umgang mit Stress verbessern kann. Die Effekte unterscheiden sich von Person zu Person,
        und Bewegung ersetzt keine Behandlung. Als Ergänzung ist sie aber eine der einfachsten und
        nebenwirkungsärmsten Möglichkeiten, den Alltag zu erleichtern.
      </p>
      <p>
        Hinzu kommt ein praktischer Effekt: Wer sich bewegt, baut innere Unruhe ab und schläft
        häufig besser, was wiederum die Konzentration am nächsten Tag unterstützt.
      </p>

      <h2>Welche Sportart passt zu Ihnen?</h2>
      <ul>
        <li><strong>Ausdauersport</strong> (Joggen, Schwimmen, Radfahren): baut Energie ab und ist gut in den Alltag integrierbar.</li>
        <li><strong>Kampfsport</strong> (zum Beispiel Karate oder Boxen): klare Regeln und Rituale fördern Disziplin und Körperkontrolle.</li>
        <li><strong>Yoga und Tai-Chi:</strong> schulen die Körperwahrnehmung und können beim Abschalten helfen.</li>
        <li><strong>Teamsport und Gruppenkurse:</strong> feste Termine und soziale Verbindlichkeit erleichtern das Dranbleiben.</li>
      </ul>
      <p>
        Wählen Sie nicht, was „am besten“ sein soll, sondern was Ihnen Freude macht. Diese
        persönliche Motivation entscheidet langfristig darüber, ob Sie dabeibleiben.
      </p>

      <h2>Bewegung in den Alltag einbauen</h2>
      <p>
        Es muss nicht gleich das Fitnessstudio sein. Schon kurze Einheiten zeigen Wirkung:
      </p>
      <ul>
        <li>Zehn Minuten Bewegung direkt nach dem Aufstehen oder in der Mittagspause.</li>
        <li>Treppe statt Aufzug, Telefonate im Gehen.</li>
        <li>Nach jedem Arbeitsblock eine Bewegungspause von zwei bis fünf Minuten.</li>
        <li>Verabredungen mit Freunden zum Spazierengehen statt zum Sitzen im Café.</li>
      </ul>
      <p>
        Der <a href="#fokus-timer">Fokus-Timer</a> unten verbindet beides: Er strukturiert Ihre
        Arbeitsphasen und erinnert Sie in der Pause an eine kleine Bewegungsübung.
      </p>

      <h2>Dranbleiben: Was in der Praxis hilft</h2>
      <ul>
        <li>Legen Sie feste Zeiten fest und tragen Sie sie in den Kalender ein (siehe <Link href="/ratgeber/erwachsene/tagesstruktur">Tagesstruktur</Link>).</li>
        <li>Verabreden Sie sich mit jemandem. Verbindlichkeit hilft.</li>
        <li>Starten Sie klein: lieber dreimal zehn Minuten als einmal eine Stunde, die dann ausfällt.</li>
        <li>Halten Sie einen Plan B bereit für Tage mit wenig Energie, etwa einen Spaziergang um den Block.</li>
        <li>Wechseln Sie die Aktivität, wenn es langweilig wird. Abwechslung ist erlaubt.</li>
      </ul>
    </AdultArticleShell>
  )
}
