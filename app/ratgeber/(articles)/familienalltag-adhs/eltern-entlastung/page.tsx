import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import Positivtagebuch from '@/components/tools/Positivtagebuch'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/familienalltag-adhs/eltern-entlastung'

export const metadata: Metadata = defaultMetadata({
  title: 'Eltern von ADHS-Kindern entlasten — Stress abbauen, Beziehung stärken',
  description:
    'Eltern von Kindern mit ADHS entlasten: Eigenen Stress ernst nehmen, positive Momente festhalten und die Beziehung zum Kind stärken. Mit kostenlosem Positivtagebuch.',
  path: PATH,
})

const faq = [
  {
    question: 'Ist es normal, als Elternteil erschöpft zu sein?',
    answer:
      'Ja. Der Alltag mit einem Kind mit ADHS kann sehr fordernd sein. Erschöpfung ist kein Zeichen von Versagen. Wenn sie über längere Zeit anhält, holen Sie sich bitte Unterstützung.',
  },
  {
    question: 'Was ist ein Positivtagebuch?',
    answer:
      'Im Positivtagebuch halten Eltern täglich fest, was gut geklappt hat, wobei sich das Kind angestrengt hat oder was ein schöner Moment war. Der Blick fällt dadurch häufiger auf Gelungenes.',
  },
  {
    question: 'Wo finde ich Unterstützung für mich als Elternteil?',
    answer:
      'Anlaufstellen sind Erziehungsberatungsstellen, Selbsthilfegruppen, die Kinder- und Jugendarztpraxis und Psychotherapeutinnen und Psychotherapeuten. Eine Übersicht finden Sie auf unserer Seite Hilfsorganisationen. In akuten Krisen erreichen Sie die Telefonseelsorge kostenfrei unter 0800 111 0 111.',
  },
]

export default function ElternEntlastungPage() {
  return (
    <FamilyArticleShell
      icon="💛"
      title="Eltern von ADHS-Kindern entlasten — Stress abbauen, Beziehung stärken"
      breadcrumbLabel="Eltern entlasten"
      intro="Wer sich um ein Kind mit ADHS kümmert, trägt viel. Dieser Beitrag zeigt, wie Sie den eigenen Stress ernst nehmen und die Beziehung zu Ihrem Kind durch kleine, positive Momente stärken."
      description="Eltern von Kindern mit ADHS entlasten: Stress abbauen, Beziehung stärken und ein kostenloses Positivtagebuch."
      path={PATH}
      readingTime="7 min"
      faq={faq}
      prev={{ href: '/ratgeber/familienalltag-adhs/punkteplan', label: 'Punkteplan' }}
      next={{ href: '/ratgeber/familienalltag-adhs/regeln-wochenjobs', label: 'Regeln und Wochenjobs' }}
      tool={
        <ToolCard
          id="positivtagebuch"
          title="Positivtagebuch für Eltern"
          description="Halten Sie täglich ein bis drei gelungene Momente fest. Das Tagebuch bleibt auf Ihrem Gerät."
        >
          <Positivtagebuch />
        </ToolCard>
      }
    >
      <h2>Ihre Belastung ist real</h2>
      <p>
        Wenn jeder Morgen ein Kraftakt ist und Gespräche mit der Schule Sorgen auslösen, bleibt oft
        wenig Energie für sich selbst. Das ist kein persönliches Versagen. Viele Eltern berichten von
        Erschöpfung, Schuldgefühlen und dem Gefühl, ständig bewertet zu werden. Sich das einzugestehen
        ist ein erster Schritt.
      </p>

      <h2>Kleine Entlastungen im Alltag</h2>
      <ul>
        <li><strong>Pausen einplanen:</strong> Auch 10 Minuten am Tag nur für sich zählen.</li>
        <li><strong>Aufgaben teilen:</strong> Mit Partnerin, Partner, Großeltern oder Freunden.</li>
        <li><strong>Erwartungen anpassen:</strong> Nicht jeder Tag muss perfekt laufen.</li>
        <li><strong>Austausch suchen:</strong> Gespräche mit anderen Eltern entlasten oft spürbar.</li>
        <li><strong>Hilfe annehmen:</strong> Beratungsstellen und Fachleute sind dafür da.</li>
      </ul>

      <h2>Die Beziehung stärken: Der Blick auf das Gelungene</h2>
      <p>
        Kinder mit ADHS hören im Alltag oft Korrekturen. Positive Rückmeldungen gehen dabei leicht
        unter. Ein bewährter Ansatz ist, bewusst auf Gelungenes zu achten und es zu benennen: „Ich
        habe gesehen, wie du dich angestrengt hast.“ Wenn Sie dazu jeden Tag kurz aufschreiben, was
        gut lief, verändert sich bei vielen Eltern der Blick. Probieren Sie es mit dem{' '}
        <a href="#positivtagebuch">Positivtagebuch</a> unten aus, und erzählen Sie Ihrem Kind ab und zu
        davon.
      </p>
      <p>
        Auch gemeinsame Zeit ohne Aufgaben stärkt die Verbindung: 10 bis 15 Minuten, in denen Ihr Kind
        bestimmt, was gespielt wird. Mehr dazu finden Sie im Beitrag{' '}
        <Link href="/ratgeber/selbstwert-staerken">Selbstwert stärken</Link>.
      </p>

      <h2>Wann Sie sich Hilfe holen sollten</h2>
      <p>
        Wenn Sie sich über längere Zeit niedergeschlagen, ausgebrannt oder überfordert fühlen, sprechen
        Sie bitte mit Ihrer Hausarztpraxis oder einer Beratungsstelle. Auch als Elternteil dürfen Sie
        Unterstützung in Anspruch nehmen. Anlaufstellen finden Sie unter{' '}
        <Link href="/ratgeber/hilfsorganisationen">Hilfsorganisationen</Link>.
      </p>
    </FamilyArticleShell>
  )
}
