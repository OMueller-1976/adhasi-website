import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/erwachsene/achtsamkeit'

export const metadata: Metadata = defaultMetadata({
  title: 'Achtsamkeit und Meditation bei ADHS — Einstieg in 5 Minuten',
  description:
    'Achtsamkeit und Meditation bei ADHS im Erwachsenenalter: Was die Forschung sagt, wie der Einstieg in fünf Minuten gelingt und was hilft, wenn Stillsitzen schwerfällt.',
  path: PATH,
})

const faq = [
  {
    question: 'Hilft Meditation bei ADHS?',
    answer:
      'Erste Studien mit achtsamkeitsbasierten Programmen bei Erwachsenen mit ADHS berichten von Verbesserungen bei Aufmerksamkeit und emotionalem Wohlbefinden. Die Studienlage ist aber noch begrenzt, und Achtsamkeit ersetzt keine ärztliche Behandlung. Als Ergänzung kann sie dennoch lohnend sein.',
  },
  {
    question: 'Wie lange sollte ich meditieren?',
    answer:
      'Für den Einstieg genügen fünf bis zehn Minuten. Wichtiger als die Dauer ist die Regelmäßigkeit: Besser täglich fünf Minuten als einmal pro Woche eine Stunde.',
  },
  {
    question: 'Was tun, wenn ich nicht stillsitzen kann?',
    answer:
      'Probieren Sie Gehmeditation, Achtsamkeit bei Alltagstätigkeiten wie Zähneputzen oder sehr kurze Atemübungen. Achtsamkeit bedeutet nicht, keine Gedanken zu haben, sondern sie wahrzunehmen und zur Atmung zurückzukehren, so oft es nötig ist.',
  },
]

export default function AchtsamkeitPage() {
  return (
    <AdultArticleShell
      icon="🧘"
      title="Achtsamkeit und Meditation bei ADHS — Einstieg in fünf Minuten"
      breadcrumbLabel="Achtsamkeit"
      intro="Von der äußeren Ordnung zur inneren Ruhe: Achtsamkeit kann helfen, Gedanken und Gefühle wahrzunehmen, ohne von ihnen überrollt zu werden. Der Einstieg ist einfacher, als viele denken."
      description="Achtsamkeit und Meditation bei ADHS: Was die Forschung sagt, Einstieg in fünf Minuten und Tipps bei innerer Unruhe."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/erwachsene/visualisierung', label: 'Visualisierung' }}
      next={{ href: '/ratgeber/erwachsene/selbstakzeptanz', label: 'Selbstakzeptanz' }}
      tool={
        <ToolCard
          id="achtsamkeits-uebungen"
          title="Achtsamkeits-Übungen auf ADHaSi"
          description="Im Bereich Achtsamkeit finden Sie Übungen, Atemtechniken und ein Tagebuch, die Sie direkt im Browser nutzen können."
          showPrivacyNote={false}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/achtsamkeit/ubungen"
              className="rounded-xl bg-adhasi-green px-5 py-3 text-center font-body text-sm font-semibold text-white hover:opacity-90"
            >
              Zu den Übungen
            </Link>
            <Link
              href="/achtsamkeit/atemubungen-kinder"
              className="rounded-xl border border-adhasi-border bg-white px-5 py-3 text-center font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
            >
              Atemübungen (auch für Kinder)
            </Link>
            <Link
              href="/achtsamkeit"
              className="rounded-xl border border-adhasi-border bg-white px-5 py-3 text-center font-body text-sm font-semibold text-neutral-700 hover:border-adhasi-green"
            >
              Bereich Achtsamkeit
            </Link>
          </div>
        </ToolCard>
      }
    >
      <h2>Was Achtsamkeit bedeutet</h2>
      <p>
        Achtsamkeit heißt, den gegenwärtigen Moment bewusst und ohne Bewertung wahrzunehmen. Bei
        ADHS, wo Gedanken oft springen und Impulse schnell handeln, kann das eine wertvolle
        Gegenübung sein: Sie trainieren, kurz innezuhalten, bevor Sie reagieren, und Gedanken zu
        beobachten, statt ihnen sofort zu folgen.
      </p>

      <h2>Was die Forschung sagt</h2>
      <p>
        Kleinere Studien mit achtsamkeitsbasierten Programmen bei Erwachsenen mit ADHS berichten von
        Verbesserungen bei Aufmerksamkeit, Stressempfinden und emotionaler Regulation. Die
        Studienlage ist allerdings noch begrenzt, und die Ergebnisse sind nicht bei allen gleich.
        Achtsamkeit ist deshalb eine sinnvolle Ergänzung, aber keine Behandlung.
      </p>

      <h2>Einstieg in fünf Minuten</h2>
      <p>Eine einfache Atemübung für den Anfang:</p>
      <ol>
        <li>Setzen Sie sich bequem hin und stellen Sie einen Timer auf fünf Minuten.</li>
        <li>Lenken Sie die Aufmerksamkeit auf Ihren Atem: Wie fühlt sich das Ein- und Ausatmen an?</li>
        <li>Wenn die Gedanken abschweifen, bemerken Sie das ohne Ärger und kehren zum Atem zurück.</li>
        <li>Beenden Sie die Übung langsam und nehmen Sie kurz wahr, wie Sie sich fühlen.</li>
      </ol>
      <p>
        Dass die Gedanken abschweifen, ist kein Scheitern. Jedes Zurückkehren zum Atem ist die
        eigentliche Übung.
      </p>

      <h2>Die Routine verankern</h2>
      <ul>
        <li><strong>Fester Zeitpunkt:</strong> zum Beispiel direkt nach dem Aufwachen oder vor dem Schlafengehen.</li>
        <li><strong>Ruhiger Ort:</strong> ein Platz ohne Ablenkung, möglichst immer derselbe.</li>
        <li><strong>Kurz starten:</strong> fünf bis zehn Minuten genügen, um nicht überfordert zu sein.</li>
        <li><strong>Anleitung nutzen:</strong> geführte Meditationen oder Apps erleichtern den Einstieg.</li>
      </ul>

      <h2>Wenn Stillsitzen schwerfällt</h2>
      <p>
        Bei innerer Unruhe sind bewegte Formen oft leichter: Gehmeditation, bei der Sie auf jeden
        Schritt achten, einen kurzen Body-Scan im Liegen oder Achtsamkeit bei Alltagstätigkeiten wie
        Zähneputzen oder Teekochen. Auch Ihre Bewegungsgewohnheiten spielen hinein, mehr dazu im
        Artikel <Link href="/ratgeber/erwachsene/bewegung">Bewegung und Sport bei ADHS</Link>.
      </p>
    </AdultArticleShell>
  )
}
