import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import Punkteplan from '@/components/tools/Punkteplan'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/familienalltag-adhs/punkteplan'

export const metadata: Metadata = defaultMetadata({
  title: 'Punkteplan bei ADHS — Belohnungssystem für Kinder im Alltag',
  description:
    'Punkteplan bei ADHS: Wie ein Punkte- und Belohnungssystem Kinder im Alltag motivieren kann, worauf Eltern achten sollten und ein kostenloses Punkteplan-Tool zum Ausprobieren.',
  path: PATH,
})

const faq = [
  {
    question: 'Was ist ein Punkteplan?',
    answer:
      'Ein Punkteplan ist ein einfaches Belohnungssystem: Ihr Kind sammelt für vereinbarte Aufgaben oder Verhaltensweisen Punkte und kann sie gegen vorher festgelegte Belohnungen einlösen. Er macht Fortschritte sichtbar und gibt Rückmeldung.',
  },
  {
    question: 'Ab welchem Alter eignet sich ein Punkteplan?',
    answer:
      'Das hängt vom Kind ab. Grundschulkinder profitieren häufig von sehr einfachen Plänen mit wenigen Aufgaben. Bei älteren Kindern und Jugendlichen funktioniert er meist nur, wenn sie ihn mitgestalten.',
  },
  {
    question: 'Was tun, wenn der Punkteplan nach einiger Zeit nicht mehr wirkt?',
    answer:
      'Das passiert bei vielen Familien. Dann können neue Belohnungen, andere Aufgaben oder eine kurze Pause helfen. Sprechen Sie mit Ihrem Kind darüber, was es motivieren würde.',
  },
]

export default function PunkteplanPage() {
  return (
    <FamilyArticleShell
      icon="⭐"
      title="Punkteplan bei ADHS — Belohnungssystem für Kinder im Alltag"
      breadcrumbLabel="Punkteplan"
      intro="Kinder mit ADHS brauchen oft schnelle, sichtbare Rückmeldungen. Ein Punkteplan kann dabei unterstützen, wenn er fair, einfach und gemeinsam vereinbart ist."
      description="Punkteplan bei ADHS: Aufbau, Tipps und ein kostenloses Punkteplan-Tool für Familien."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/familienalltag-adhs/routinen-wochenplan', label: 'Routinen und Wochenplan' }}
      next={{ href: '/ratgeber/familienalltag-adhs/eltern-entlastung', label: 'Eltern entlasten' }}
      tool={
        <ToolCard
          id="punkteplan-tool"
          title="Punkteplan: Aufgaben, Punkte und Belohnungen"
          description="Legen Sie gemeinsam mit Ihrem Kind Aufgaben und Belohnungen fest. Gesammelte Punkte können eingelöst werden."
        >
          <Punkteplan />
        </ToolCard>
      }
    >
      <h2>Warum Rückmeldung so wichtig ist</h2>
      <p>
        Viele Kinder mit ADHS können mit Belohnungen, die weit in der Zukunft liegen, wenig anfangen.
        Sofortige, sichtbare Rückmeldung ist oft motivierender. Ein Punkteplan nutzt das: Jede
        geschaffte Aufgabe bringt einen Punkt, und der Fortschritt ist direkt zu sehen. Ob und wie
        gut das bei Ihrem Kind funktioniert, ist von Familie zu Familie verschieden.
      </p>

      <h2>So bauen Sie einen Punkteplan auf</h2>
      <ol>
        <li><strong>Wenige Ziele wählen:</strong> zwei bis drei konkrete Verhaltensweisen, zum Beispiel „Ranzen packen“ oder „Zähne putzen ohne Erinnerung“.</li>
        <li><strong>Positiv formulieren:</strong> Was soll Ihr Kind tun, statt was es lassen soll?</li>
        <li><strong>Belohnungen gemeinsam festlegen:</strong> Zeit mit Ihnen wirkt oft besser als Dinge, etwa ein gemeinsames Spiel oder ein Ausflug.</li>
        <li><strong>Kleine Etappen:</strong> Erste Belohnungen sollten schnell erreichbar sein.</li>
        <li><strong>Verlässlich bleiben:</strong> Vereinbarte Punkte werden nicht nachträglich abgezogen.</li>
      </ol>
      <p>
        Im <a href="#punkteplan-tool">Punkteplan-Tool</a> unten legen Sie Aufgaben und Belohnungen an und
        zählen die Punkte mit.
      </p>

      <h2>Worauf Sie achten sollten</h2>
      <ul>
        <li>Der Plan ist Unterstützung, keine Strafe: Punkte werden gesammelt, nicht entzogen.</li>
        <li>Loben Sie zusätzlich mit Worten. Der Plan ersetzt nicht Ihre Aufmerksamkeit.</li>
        <li>Prüfen Sie nach zwei bis drei Wochen, ob Aufgaben und Belohnungen noch passen.</li>
        <li>Für Jugendliche eignen sich Vereinbarungen auf Augenhöhe mehr als ein Punktesystem.</li>
      </ul>
      <p>
        Mehr zur positiven Begleitung lesen Sie im Ratgeber{' '}
        <Link href="/ratgeber/positive-erziehung-bei-lernschwierigkeiten">Positive Erziehung</Link> und
        zum Thema Motivation im Beitrag{' '}
        <Link href="/ratgeber/motivation-bei-schulfrust">Motivation bei Schulfrust</Link>.
      </p>
    </FamilyArticleShell>
  )
}
