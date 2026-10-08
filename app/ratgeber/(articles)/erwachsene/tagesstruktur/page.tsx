import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import EisenhowerMatrix from '@/components/tools/EisenhowerMatrix'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/erwachsene/tagesstruktur'

export const metadata: Metadata = defaultMetadata({
  title: 'Tagesstruktur bei ADHS — Planen mit Eisenhower-Matrix und Puffer',
  description:
    'Wie Erwachsene mit ADHS ihren Tag strukturieren: feste Anker, Eisenhower-Matrix, Pufferzeiten und Kalender-Tipps. Mit kostenlosem Eisenhower-Tool zum Ausprobieren.',
  path: PATH,
})

const faq = [
  {
    question: 'Wie plane ich meinen Tag mit ADHS?',
    answer:
      'Beginnen Sie mit wenigen festen Ankerpunkten (Aufstehen, Mahlzeiten, Arbeitsbeginn), wählen Sie pro Tag nur zwei bis drei wichtige Aufgaben aus und planen Sie großzügig Pufferzeiten ein. Ein einziger Kalender mit Erinnerungen hilft, nichts zu übersehen.',
  },
  {
    question: 'Was ist die Eisenhower-Matrix?',
    answer:
      'Die Eisenhower-Matrix sortiert Aufgaben nach Wichtigkeit und Dringlichkeit in vier Felder: sofort erledigen, Termin einplanen, abgeben oder abkürzen und streichen. So wird sichtbar, was wirklich Vorrang hat.',
  },
  {
    question: 'Helfen Planungs-Apps bei ADHS?',
    answer:
      'Digitale Kalender und Aufgaben-Apps mit Erinnerungsfunktion können sehr entlasten, solange Sie nur ein System nutzen und es einfach halten. Zu viele Apps oder Listen erzeugen schnell neue Unübersichtlichkeit.',
  },
]

export default function TagesstrukturPage() {
  return (
    <AdultArticleShell
      icon="🗓️"
      title="Tagesstruktur bei ADHS — Planen mit Eisenhower-Matrix und Puffer"
      breadcrumbLabel="Tagesstruktur"
      intro="Ein verlässlicher Tagesablauf nimmt Entscheidungsdruck aus dem Alltag. So gelingt Struktur auch dann, wenn Planen sonst schwerfällt."
      description="Tagesstruktur bei ADHS: feste Anker, Eisenhower-Matrix, Pufferzeiten und Kalender-Tipps für Erwachsene."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      next={{ href: '/ratgeber/erwachsene/bewegung', label: 'Bewegung und Sport' }}
      tool={
        <ToolCard
          id="eisenhower-matrix"
          title="Eisenhower-Matrix: Aufgaben sortieren"
          description="Tragen Sie Ihre Aufgaben ein und ordnen Sie sie einem der vier Felder zu. Verschieben können Sie sie jederzeit über das Auswahlfeld."
        >
          <EisenhowerMatrix />
        </ToolCard>
      }
    >
      <h2>Warum Struktur bei ADHS entlastet</h2>
      <p>
        Viele Erwachsene mit ADHS erleben den Alltag als unvorhersehbar: Aufgaben verschwinden aus
        dem Blick, Termine rutschen durch, und am Abend bleibt das Gefühl, viel getan und wenig
        geschafft zu haben. Ein fester Rahmen wirkt dem entgegen. Er verringert die Zahl der
        Entscheidungen, die Sie täglich neu treffen müssen, und gibt dem Tag eine Form, an der Sie
        sich orientieren können.
      </p>
      <p>
        Struktur bedeutet dabei nicht, jede Minute zu verplanen. Es geht um wenige, verlässliche
        Fixpunkte, an denen sich alles Weitere ausrichtet.
      </p>

      <h2>Feste Anker setzen</h2>
      <p>
        Beginnen Sie mit drei bis vier Ankern, die jeden Tag etwa zur gleichen Zeit stattfinden:
        Aufstehen, erste Mahlzeit, Arbeitsbeginn, Feierabend-Ritual. Neue Gewohnheiten lassen sich
        leichter an einen bestehenden Anker koppeln, zum Beispiel: „Nach dem Frühstück schaue ich
        zehn Minuten in meinen Kalender.“
      </p>

      <h2>Prioritäten setzen mit der Eisenhower-Matrix</h2>
      <p>
        Wenn alles gleichzeitig wichtig erscheint, hilft die Eisenhower-Matrix. Sie unterscheidet
        zwei Fragen: Ist die Aufgabe wichtig? Ist sie dringend? Daraus ergeben sich vier Felder:
      </p>
      <ul>
        <li><strong>Wichtig und dringend:</strong> sofort erledigen, zum Beispiel eine Frist, die heute abläuft.</li>
        <li><strong>Wichtig, aber nicht dringend:</strong> einen festen Termin einplanen, zum Beispiel Steuerunterlagen sortieren oder ein Arztgespräch vereinbaren.</li>
        <li><strong>Dringend, aber weniger wichtig:</strong> abgeben oder kurz halten, zum Beispiel manche Anrufe oder Nachrichten.</li>
        <li><strong>Weder wichtig noch dringend:</strong> bewusst streichen.</li>
      </ul>
      <p>
        Das zweite Feld ist das wertvollste: Hier liegen die Aufgaben, die Ihnen langfristig
        Entlastung bringen, aber ohne festen Termin gern liegen bleiben. Probieren Sie die Matrix
        direkt im <a href="#eisenhower-matrix">Tool unten auf dieser Seite</a> aus.
      </p>

      <h2>Pufferzeiten einplanen</h2>
      <p>
        Viele Menschen mit ADHS schätzen den Zeitbedarf von Aufgaben zu optimistisch ein. Eine
        praktische Faustregel: Planen Sie pro Aufgabe etwa ein Drittel mehr Zeit ein, als Sie
        zunächst vermuten, und lassen Sie zwischen Terminen bewusst Lücken. Puffer fangen
        Unerwartetes auf und geben Raum für Pausen, ohne dass der ganze Plan kippt.
      </p>

      <h2>Kalender und Erinnerungen nutzen</h2>
      <ul>
        <li>Nutzen Sie einen einzigen Kalender für Beruf und Privates.</li>
        <li>Stellen Sie Erinnerungen so ein, dass sie vor dem Termin kommen, nicht erst zum Beginn, damit Sie Zeit zum Losgehen haben.</li>
        <li>Tragen Sie auch Pausen, Sport und Erholung als Termine ein.</li>
        <li>Planen Sie wöchentlich zehn Minuten für einen Rückblick und die kommende Woche.</li>
      </ul>

      <h2>Typische Stolperfallen</h2>
      <p>
        Zu volle Tagespläne, fehlende Puffer und der Anspruch, einen perfekten Plan zu haben,
        gehören zu den häufigsten Gründen, warum Struktur wieder aufgegeben wird. Starten Sie
        lieber mit einem Mini-Plan aus zwei oder drei Aufgaben und erweitern Sie ihn schrittweise.
        Ein Plan, der gelegentlich angepasst wird, ist besser als ein perfekter Plan, der nach drei
        Tagen verworfen wird.
      </p>
      <p>
        Wie Sie große Aufgaben in machbare Schritte zerlegen, lesen Sie im Artikel{' '}
        <Link href="/ratgeber/erwachsene/visualisierung">Visualisierung bei ADHS</Link>.
      </p>
    </AdultArticleShell>
  )
}
