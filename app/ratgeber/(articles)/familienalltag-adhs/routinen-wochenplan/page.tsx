import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import Wochenplan from '@/components/tools/Wochenplan'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/familienalltag-adhs/routinen-wochenplan'

export const metadata: Metadata = defaultMetadata({
  title: 'Routinen und Wochenplan bei ADHS — Struktur im Familienalltag',
  description:
    'Routinen und Wochenplan bei ADHS: Wie feste Abläufe am Morgen und Abend und ein sichtbarer Wochenplan den Familienalltag entlasten können. Mit kostenlosem Wochenplan zum Ausdrucken.',
  path: PATH,
})

const faq = [
  {
    question: 'Welche Routinen sind bei ADHS im Alltag sinnvoll?',
    answer:
      'Besonders hilfreich sind wiederkehrende Abläufe am Morgen (aufstehen, anziehen, frühstücken, Ranzen packen) und am Abend (Hausaufgaben, essen, waschen, Vorlesen). Wichtig ist, dass sie einfach, sichtbar und möglichst jeden Tag ähnlich sind.',
  },
  {
    question: 'Wie lange dauert es, bis eine Routine funktioniert?',
    answer:
      'Das ist von Familie zu Familie verschieden. Starten Sie mit einer einzigen Routine und geben Sie ihr einige Wochen Zeit, bevor Sie die nächste hinzunehmen. Rückschläge sind normal.',
  },
  {
    question: 'Sollen Kinder den Wochenplan selbst mitgestalten?',
    answer:
      'Ja, wenn möglich. Wer mitplant, fühlt sich dem Plan eher verbunden. Bei jüngeren Kindern helfen Bilder statt Text, ältere Kinder und Jugendliche können Teile selbst eintragen.',
  },
]

export default function RoutinenWochenplanPage() {
  return (
    <FamilyArticleShell
      icon="🗓️"
      title="Routinen und Wochenplan bei ADHS — Struktur im Familienalltag"
      breadcrumbLabel="Routinen und Wochenplan"
      intro="Wenn der Ablauf klar ist, muss weniger verhandelt werden. So bauen Sie Routinen und einen sichtbaren Wochenplan auf, ohne dass der Alltag zum Zeitplan-Stress wird."
      description="Routinen und Wochenplan bei ADHS: feste Abläufe, sichtbare Pläne und ein kostenloses Wochenplan-Tool für Familien."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/familienalltag-adhs/adhs-beim-kind-verstehen', label: 'ADHS verstehen' }}
      next={{ href: '/ratgeber/familienalltag-adhs/punkteplan', label: 'Punkteplan' }}
      tool={
        <ToolCard
          id="wochenplan"
          title="Wochenplan für die Familie"
          description="Tragen Sie feste Termine und Abläufe für morgens, nachmittags und abends ein. Sie können den Plan ausdrucken und gut sichtbar aufhängen."
        >
          <Wochenplan />
        </ToolCard>
      }
    >
      <h2>Warum feste Abläufe entlasten</h2>
      <p>
        Kinder mit ADHS haben oft Mühe, Handlungen zu planen und in die richtige Reihenfolge zu
        bringen. Wenn der Ablauf jeden Tag ähnlich ist, muss das Kind nicht jedes Mal neu überlegen,
        was als Nächstes kommt. Das nimmt Druck aus Situationen, die sonst oft in Streit enden.
      </p>

      <h2>Morgen- und Abendroutine aufbauen</h2>
      <ol>
        <li>Wählen Sie eine Situation, die besonders anstrengend ist, zum Beispiel den Morgen.</li>
        <li>Schreiben oder zeichnen Sie 4 bis 6 Schritte auf, jeweils kurz und konkret.</li>
        <li>Hängen Sie die Liste dort auf, wo sie gebraucht wird (Zimmertür, Bad).</li>
        <li>Üben Sie die Abfolge zunächst gemeinsam und loben Sie, was klappt.</li>
        <li>Erweitern Sie erst nach einigen Wochen um eine weitere Routine.</li>
      </ol>
      <p>
        Hilfreich sind außerdem Zeitgeber wie eine Sanduhr oder ein Küchenwecker. Planen Sie
        großzügig, denn Hetze verstärkt oft das Chaos.
      </p>

      <h2>Der Wochenplan als Überblick</h2>
      <p>
        Ein sichtbarer Wochenplan zeigt auf einen Blick, was in der Woche ansteht: Schule, Training,
        Verabredungen, feste Hausaufgabenzeiten. Er kann auch helfen, wiederkehrende Stressquellen zu
        erkennen, etwa Tage, an denen zu viel hintereinander liegt. Mit dem{' '}
        <a href="#wochenplan">Wochenplan-Tool</a> unten erstellen Sie ihn direkt im Browser und drucken
        ihn aus.
      </p>

      <h2>Typische Stolpersteine</h2>
      <ul>
        <li><strong>Zu viel auf einmal:</strong> Lieber mit einer Routine starten.</li>
        <li><strong>Kein Puffer:</strong> Lassen Sie bewusst Lücken im Plan.</li>
        <li><strong>Plan hängt unsichtbar:</strong> Sichtbarkeit ist entscheidend.</li>
        <li><strong>Ausnahmen:</strong> Ferien und Krankheit durcheinander? Planen Sie danach neu und ohne Vorwürfe.</li>
      </ul>
      <p>
        Wie Sie gute Leistungen und Mithilfe zusätzlich sichtbar machen, lesen Sie im Beitrag{' '}
        <Link href="/ratgeber/familienalltag-adhs/punkteplan">Punkteplan bei ADHS</Link>.
      </p>
    </FamilyArticleShell>
  )
}
