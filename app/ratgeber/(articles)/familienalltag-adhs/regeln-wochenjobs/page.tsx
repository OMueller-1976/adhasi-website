import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import Wochenjobs from '@/components/tools/Wochenjobs'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/familienalltag-adhs/regeln-wochenjobs'

export const metadata: Metadata = defaultMetadata({
  title: 'Liebevoll und konsequent erziehen bei ADHS — Regeln und Wochenjobs',
  description:
    'Erziehung bei ADHS: Klare Regeln, verlässliche Konsequenzen und kleine Wochenjobs für Kinder. Mit kostenlosem Wochenjobs-Planer für Eltern.',
  path: PATH,
})

const faq = [
  {
    question: 'Wie viele Regeln sind sinnvoll?',
    answer:
      'Lieber wenige, dafür klare Regeln. Drei bis fünf wichtige Familienregeln, positiv formuliert und gut sichtbar, sind für Kinder leichter zu merken als eine lange Liste.',
  },
  {
    question: 'Was sind Wochenjobs?',
    answer:
      'Wochenjobs sind kleine, überschaubare Aufgaben, die ein Kind regelmäßig übernimmt, zum Beispiel den Tisch abräumen oder die Pflanze gießen. Sie üben Verantwortung und schaffen Erfolgserlebnisse.',
  },
  {
    question: 'Wie reagiere ich, wenn Regeln gebrochen werden?',
    answer:
      'Reagieren Sie möglichst ruhig, zeitnah und so, wie vorher vereinbart. Konsequenzen sollten kurz, logisch und fair sein. Danach gilt: Neustart ohne Nachtragen.',
  },
]

export default function RegelnWochenjobsPage() {
  return (
    <FamilyArticleShell
      icon="🧭"
      title="Liebevoll und konsequent erziehen bei ADHS — Regeln und Wochenjobs"
      breadcrumbLabel="Regeln und Wochenjobs"
      intro="Kinder mit ADHS brauchen Orientierung und Wärme zugleich. So gelingen klare Regeln, verlässliche Konsequenzen und kleine Aufgaben, die Verantwortung üben lassen."
      description="Erziehung bei ADHS: klare Regeln, Konsequenzen und Wochenjobs für Kinder, mit kostenlosem Wochenjobs-Planer."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/familienalltag-adhs/eltern-entlastung', label: 'Eltern entlasten' }}
      tool={
        <ToolCard
          id="wochenjobs"
          title="Jobs der Woche"
          description="Legen Sie kleine Aufgaben fest und haken Sie ab, an welchen Tagen sie erledigt wurden. Zum Wochenstart setzen Sie das Raster zurück."
        >
          <Wochenjobs />
        </ToolCard>
      }
    >
      <h2>Orientierung und Wärme gehören zusammen</h2>
      <p>
        Viele Fachleute und Eltern beschreiben einen Erziehungsstil, der warm und zugleich klar ist:
        Das Kind soll sich angenommen fühlen und wissen, was gilt. Für Kinder mit ADHS, denen
        Selbststeuerung schwerer fällt, sind verlässliche Rahmen besonders hilfreich.
      </p>

      <h2>Regeln, die im Alltag funktionieren</h2>
      <ul>
        <li><strong>Wenige Regeln:</strong> Drei bis fünf wichtige Punkte genügen.</li>
        <li><strong>Positiv formuliert:</strong> „Wir reden freundlich miteinander“ statt „Schrei nicht“.</li>
        <li><strong>Konkret:</strong> „Schuhe stehen im Flur“ ist klarer als „Sei ordentlich“.</li>
        <li><strong>Sichtbar:</strong> Hängen Sie die Regeln auf, gern mit Bildern.</li>
        <li><strong>Gemeinsam besprochen:</strong> Ältere Kinder dürfen mitentscheiden.</li>
      </ul>

      <h2>Konsequenzen: kurz, logisch, fair</h2>
      <p>
        Wenn eine Regel gebrochen wird, wirkt eine ruhige und vorher bekannte Folge meist besser
        als ein Wutausbruch. Sie sollte zum Anlass passen und zeitnah erfolgen. Danach ist es wichtig,
        wieder neu zu beginnen und nichts nachzutragen. Wenn Sie merken, dass ein Gespräch
        eskaliert, ist eine Pause für alle Beteiligten oft die beste Lösung. Mehr zur Gesprächsführung
        lesen Sie im Beitrag{' '}
        <Link href="/ratgeber/kommunikation-mit-adhs-kind">Kommunikation mit dem ADHS-Kind</Link>.
      </p>

      <h2>Wochenjobs: Verantwortung in kleinen Schritten</h2>
      <p>
        Kleine, feste Aufgaben im Haushalt geben Kindern das Gefühl, gebraucht zu werden. Wählen Sie
        ein bis drei Jobs, die zum Alter und zu den Fähigkeiten Ihres Kindes passen. Besprechen Sie
        gemeinsam, wann und wie der Job erledigt wird. Der Planer unten, <a href="#wochenjobs">Jobs der Woche</a>, hilft beim Abhaken. Würdigen Sie
        erledigte Jobs mit einem Dank. Wer möchte, kombiniert das mit dem{' '}
        <Link href="/ratgeber/familienalltag-adhs/punkteplan">Punkteplan</Link>.
      </p>

      <h2>Wann zusätzliche Unterstützung sinnvoll ist</h2>
      <p>
        Wenn Konflikte trotz Bemühen sehr häufig oder heftig sind, sprechen Sie mit Ihrer Kinder- und
        Jugendarztpraxis oder einer Erziehungsberatungsstelle. Dort erhalten Sie persönliche
        Beratung, die diese allgemeinen Hinweise nicht ersetzen können.
      </p>
    </FamilyArticleShell>
  )
}
