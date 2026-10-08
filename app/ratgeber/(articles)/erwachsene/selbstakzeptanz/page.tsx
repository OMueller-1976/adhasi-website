import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import StaerkenCheck from '@/components/tools/StaerkenCheck'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/erwachsene/selbstakzeptanz'

export const metadata: Metadata = defaultMetadata({
  title: 'Selbstakzeptanz bei ADHS — Stärken sehen, freundlicher mit sich sein',
  description:
    'Selbstakzeptanz bei ADHS im Erwachsenenalter: Stärken erkennen, Fehler als Lernchance nutzen und den inneren Kritiker leiser stellen. Mit kostenlosem Stärken-Check.',
  path: PATH,
})

const faq = [
  {
    question: 'Bedeutet Selbstakzeptanz, ADHS einfach hinzunehmen?',
    answer:
      'Nein. Selbstakzeptanz heißt nicht aufzugeben, sondern sich selbst mit Stärken und Schwächen anzunehmen. Genau das schafft oft die Grundlage, um passende Strategien und bei Bedarf Behandlung anzugehen.',
  },
  {
    question: 'Wie finde ich meine Stärken?',
    answer:
      'Fragen Sie sich: Was gelingt mir leicht? Wofür bitten mich andere um Hilfe? Wann vergesse ich die Zeit? Auch Rückmeldungen von Freunden und Kollegen helfen. Ein Stärken-Check hält die Antworten fest und macht sie sichtbar.',
  },
  {
    question: 'Wann sollte ich professionelle Hilfe suchen?',
    answer:
      'Wenn Selbstzweifel, Niedergeschlagenheit oder Überforderung über längere Zeit anhalten oder Ihren Alltag stark beeinträchtigen, sprechen Sie mit einer Ärztin, einem Arzt oder einer Psychotherapeutin bzw. einem Psychotherapeuten. In akuten Krisen erreichen Sie die Telefonseelsorge kostenfrei und rund um die Uhr unter 0800 111 0 111.',
  },
]

export default function SelbstakzeptanzPage() {
  return (
    <AdultArticleShell
      icon="💚"
      title="Selbstakzeptanz bei ADHS — Stärken sehen, freundlicher mit sich sein"
      breadcrumbLabel="Selbstakzeptanz"
      intro="Viele Erwachsene mit ADHS haben jahrelang vor allem ihre Schwierigkeiten gehört. Selbstakzeptanz ist der Schritt, auch die eigenen Stärken ernst zu nehmen und mit sich selbst fairer umzugehen."
      description="Selbstakzeptanz bei ADHS: Stärken erkennen, Fehler als Lernchance und ein leiserer innerer Kritiker. Mit Stärken-Check."
      path={PATH}
      readingTime="7 min"
      faq={faq}
      prev={{ href: '/ratgeber/erwachsene/achtsamkeit', label: 'Achtsamkeit' }}
      tool={
        <ToolCard
          id="staerken-check"
          title="Stärken-Check: Was kann ich gut?"
          description="Wählen Sie die Stärken aus, die Sie wiedererkennen, und ergänzen Sie ein Beispiel aus Ihrem Alltag. Daraus entsteht Ihre persönliche Stärkenliste."
        >
          <StaerkenCheck />
        </ToolCard>
      }
    >
      <h2>Akzeptanz ist keine Resignation</h2>
      <p>
        Sich selbst anzunehmen bedeutet nicht, Probleme kleinzureden oder sich mit ihnen
        abzufinden. Es bedeutet, die eigene Art zu denken und zu handeln als Teil von sich zu
        sehen, statt sie ständig zu bekämpfen. Dieser innere Kampf kostet Energie, die Sie für
        Veränderung gut gebrauchen können.
      </p>

      <h2>Stärken sehen</h2>
      <p>
        Menschen mit ADHS richten ihren Blick häufig auf das, was nicht klappt. Gezielte
        Selbstreflexion hilft, das Bild auszugleichen. Viele Betroffene berichten von Stärken wie
        Kreativität, Begeisterungsfähigkeit, Spontaneität, Energie, der Fähigkeit zu intensivem
        Fokus bei Interesse und einem feinen Gespür für andere. Nicht jede Eigenschaft trifft auf
        jede Person zu, aber die Frage lohnt sich: Was zeichnet mich aus? Wo liegen meine besonderen
        Begabungen?
      </p>
      <p>
        Mit dem <a href="#staerken-check">Stärken-Check</a> unten halten Sie Ihre Antworten fest.
        Hängen Sie die Liste sichtbar auf. An schwierigen Tagen ist sie eine gute Erinnerung.
      </p>

      <h2>Fehler als Lernchance</h2>
      <p>
        Fehler gehören zu jedem Leben. Bei ADHS passieren sie manchmal häufiger, etwa durch
        Vergessen oder Impulsivität, und die Reaktionen des Umfelds können das Selbstbild belasten.
        Hilfreich ist eine Haltung, die Verantwortung übernimmt, ohne sich in Vorwürfen zu verlieren:
        Was ist passiert? Was kann ich beim nächsten Mal anders machen? Diese Fragen führen zu
        Lösungen, während Selbstvorwürfe nur Energie binden.
      </p>

      <h2>Wenn der innere Kritiker laut wird</h2>
      <p>
        Der innere Kritiker formuliert oft absolut: „Ich schaffe nie etwas.“ Probieren Sie, diese
        Sätze vorsichtig umzuformulieren:
      </p>
      <ul>
        <li>Statt „Ich bin chaotisch“ eher „Organisation fällt mir schwerer, deshalb nutze ich Hilfsmittel.“</li>
        <li>Statt „Das habe ich wieder vergeigt“ eher „Das ist schiefgelaufen, und das nehme ich daraus mit.“</li>
        <li>Statt „Andere schaffen das mühelos“ eher „Ich brauche dafür einen anderen Weg.“</li>
      </ul>
      <p>
        Fragen Sie sich außerdem, wie Sie mit einer guten Freundin oder einem guten Freund sprechen
        würden, der dasselbe erlebt. Meist ist dieser Ton freundlicher als der gegenüber sich selbst.
        Achtsamkeitsübungen können dabei helfen, Gedanken zu beobachten, statt ihnen zu glauben
        (siehe <Link href="/ratgeber/erwachsene/achtsamkeit">Achtsamkeit bei ADHS</Link>).
      </p>

      <h2>Unterstützung holen</h2>
      <p>
        Austausch mit anderen Betroffenen, Coaching oder Psychotherapie können den Weg zur
        Selbstakzeptanz erleichtern. Anlaufstellen und Selbsthilfegruppen finden Sie auf unserer
        Seite <Link href="/ratgeber/hilfsorganisationen">Hilfsorganisationen</Link>. Wenn
        Niedergeschlagenheit oder Hoffnungslosigkeit anhalten, holen Sie sich bitte ärztliche
        oder psychotherapeutische Hilfe.
      </p>
    </AdultArticleShell>
  )
}
