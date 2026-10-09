import Link from 'next/link'
import type { Metadata } from 'next'
import FamilyArticleShell from '@/components/FamilyArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import Beobachtungsbogen from '@/components/tools/Beobachtungsbogen'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/familienalltag-adhs/adhs-beim-kind-verstehen'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS beim Kind verstehen — Grundlagen für Eltern mit Beobachtungsbogen',
  description:
    'ADHS beim Kind verstehen: Was hinter dem Verhalten steckt, warum Schimpfen selten hilft und wie ein Beobachtungsbogen Gespräche mit Schule und Arztpraxis erleichtert.',
  path: PATH,
})

const faq = [
  {
    question: 'Was ist ADHS bei Kindern?',
    answer:
      'ADHS steht für Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung. Typisch sind anhaltende Schwierigkeiten mit Aufmerksamkeit, Impulskontrolle und teilweise Bewegungsdrang, die den Alltag in mehreren Bereichen beeinträchtigen. Eine Diagnose stellen Fachärztinnen, Fachärzte oder Psychotherapeutinnen und Psychotherapeuten nach sorgfältiger Abklärung.',
  },
  {
    question: 'Ist mein Kind einfach nur unerzogen oder faul?',
    answer:
      'Bei ADHS liegt das Verhalten meist nicht an fehlendem Willen oder mangelnder Erziehung, sondern an Besonderheiten in der Selbststeuerung. Ob bei Ihrem Kind ADHS vorliegt, kann nur eine fachliche Abklärung klären.',
  },
  {
    question: 'Wie bereite ich ein Gespräch mit der Arztpraxis oder Schule vor?',
    answer:
      'Hilfreich sind konkrete Beobachtungen statt Bewertungen: Wann tritt etwas auf, wie reagiert das Kind, was hat geholfen? Der Beobachtungsbogen unten auf dieser Seite unterstützt Sie beim Sammeln.',
  },
]

export default function AdhsBeimKindVerstehenPage() {
  return (
    <FamilyArticleShell
      icon="🔍"
      title="ADHS beim Kind verstehen — Grundlagen für Eltern"
      breadcrumbLabel="ADHS verstehen"
      intro="Wer versteht, was hinter dem Verhalten steckt, reagiert oft gelassener. Dieser Beitrag erklärt die Grundlagen und zeigt, wie Sie Beobachtungen für Gespräche mit Schule und Praxis festhalten."
      description="ADHS beim Kind verstehen: Grundlagen für Eltern und ein Beobachtungsbogen für Gespräche mit Schule und Arztpraxis."
      path={PATH}
      readingTime="7 min"
      faq={faq}
      next={{ href: '/ratgeber/familienalltag-adhs/routinen-wochenplan', label: 'Routinen und Wochenplan' }}
      tool={
        <ToolCard
          id="beobachtungsbogen"
          title="Alltags-Beobachtungsbogen"
          description="Halten Sie Situationen fest, in denen es schwierig war oder gut lief. Aus den Notizen entsteht eine Grundlage für Gespräche mit Lehrkräften oder Ihrer Praxis."
        >
          <Beobachtungsbogen />
        </ToolCard>
      }
    >
      <h2>Was bei ADHS anders arbeitet</h2>
      <p>
        Bei ADHS fällt es Kindern schwer, ihre Aufmerksamkeit zu steuern, Impulse zu bremsen und
        Handlungen zu planen. Das zeigt sich zum Beispiel darin, dass Hausaufgaben ewig dauern, dass
        Dinge verloren gehen oder dass ein Kind mitten im Satz dazwischenruft. Schätzungen zufolge
        sind etwa 5 Prozent der Kinder und Jugendlichen betroffen. Die Ausprägung ist sehr
        unterschiedlich.
      </p>
      <p>
        Wichtig für den Alltag: Viele dieser Verhaltensweisen sind keine Absicht. Ein Kind, das
        „einfach nicht zuhört“, hat oft tatsächlich Mühe, die Aufmerksamkeit zu halten. Das
        entschuldigt nicht alles, hilft aber, Situationen anders einzuordnen.
      </p>

      <h2>Warum Schimpfen und Dauer-Erinnern selten reichen</h2>
      <p>
        Wiederholte Ermahnungen belasten Kind und Eltern, ohne dass sich oft viel ändert. Viele
        Familien berichten, dass klare, kurze Ansagen, feste Abläufe und sichtbare Hilfen besser
        funktionieren als lange Erklärungen. Mehr dazu lesen Sie in den Beiträgen{' '}
        <Link href="/ratgeber/familienalltag-adhs/routinen-wochenplan">Routinen und Wochenplan</Link> und{' '}
        <Link href="/ratgeber/kommunikation-mit-adhs-kind">Kommunikation mit dem ADHS-Kind</Link>.
      </p>

      <h2>Beobachten statt bewerten</h2>
      <p>
        Für Gespräche mit Lehrkräften, Kinder- und Jugendarztpraxis oder Beratungsstellen sind
        konkrete Beispiele wertvoller als allgemeine Urteile. Notieren Sie über ein bis zwei Wochen:
      </p>
      <ul>
        <li>In welcher Situation trat etwas auf (Ort, Uhrzeit, Tätigkeit)?</li>
        <li>Wie hat Ihr Kind reagiert?</li>
        <li>Was hat geholfen, und was hat es schlimmer gemacht?</li>
      </ul>
      <p>
        Mit dem <a href="#beobachtungsbogen">Beobachtungsbogen</a> unten halten Sie das fest und können
        die Einträge als Text kopieren. Muster sind oft erst nach einigen Tagen erkennbar, etwa dass
        Schwierigkeiten besonders nach der Schule oder bei Übergängen auftreten.
      </p>

      <h2>Diagnose und Unterstützung</h2>
      <p>
        Ob ADHS vorliegt, klärt eine fachliche Diagnostik. Ansprechpartner sind Kinder- und
        Jugendärztinnen und -ärzte, Kinder- und Jugendpsychiaterinnen und -psychiater sowie
        Psychotherapeutinnen und Psychotherapeuten. Die Unterstützung besteht häufig aus mehreren
        Bausteinen, etwa Aufklärung, Eltern- und Schulberatung und gegebenenfalls weiteren
        Maßnahmen. Was für Ihr Kind passt, entscheiden Sie gemeinsam mit den Fachleuten. Weitere
        Grundlagen finden Sie im Ratgeber <Link href="/ratgeber/adhs-verstehen">ADHS verstehen</Link>.
      </p>
    </FamilyArticleShell>
  )
}
