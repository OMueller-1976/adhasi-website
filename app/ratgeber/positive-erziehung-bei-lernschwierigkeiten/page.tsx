import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Positive Erziehung bei ADHS – Stärken sehen, Selbstwert aufbauen',
  description:
    'Positive Erziehung für ADHS-Kinder: Bestärken statt kritisieren, Autonomie fördern und Selbstwert aufbauen — mit Alltagsbeispielen.',
  path: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten',
})

export default function PositiveErziehungPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Positive Erziehung bei Lernschwierigkeiten',
          description: 'So stärken Eltern ihr Kind mit ADHS durch positive Erziehungsprinzipien.',
          path: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten',
          datePublished: '2025-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Positive Erziehung bei ADHS', path: '/ratgeber/positive-erziehung-bei-lernschwierigkeiten' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Wie erkläre ich meinem Kind, dass es ADHS hat?', answer: 'Ruhig, klar und wertschätzend — und am besten altersgerecht. Jüngere Kinder brauchen einfache Bilder und Vergleiche, ältere Kinder schätzen sachliche Erklärungen. Unser Artikel "Über ADHS mit dem Kind sprechen" gibt konkrete Formulierungsbeispiele.' },
          { question: 'Soll ich bei Hausaufgaben immer dabei sein?', answer: 'Nicht unbedingt. Ziel ist es, schrittweise Autonomie aufzubauen. Eltern erklären die Aufgabe, verlassen dann das Zimmer und kommen erst auf Nachfrage zurück. Das stärkt Selbstwirksamkeit mehr als ständige Begleitung.' },
          { question: 'Wann sollte ich professionelle Hilfe für mein Kind suchen?', answer: 'Wenn Schulfrust zu anhaltenden körperlichen Symptomen (Bauchschmerzen, Schlafprobleme) oder Schulverweigerung führt, ist eine schulpsychologische Beratung oder Kinderpsychotherapie sinnvoll.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Positive Erziehung bei ADHS</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💛</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">9 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Positive Erziehung bei ADHS – Stärken sehen, Selbstwert aufbauen
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Kinder mit ADHS erleben in der Schule häufiger Frustration und Misserfolg als ihre
            Mitschüler. Wie Eltern zuhause ein Gegengewicht schaffen — durch ein Klima, das
            Vertrauen aufbaut statt Druck erzeugt.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum ADHS das Selbstbild belastet</h2>
          <p>
            Schule ist für die meisten Kinder der Ort, an dem sie sich mit Gleichaltrigen vergleichen —
            täglich. Für ein Kind mit ADHS bedeutet das tägliche Erfahrung von Unterschieden: Die
            anderen lesen flüssiger, schreiben fehlerfreier, beenden Klassenarbeiten pünktlicher.
            Selbst wenn Lehrkräfte sensibel vorgehen, nehmen Kinder diese Unterschiede wahr.
          </p>
          <p>
            Über Monate und Jahre entsteht so ein Selbstbild, das mit Schriftsprache Anstrengung,
            Beschämung und Versagen verknüpft — nicht Erfolg und Kompetenz. Psychologen sprechen
            von <strong>erlernter Hilflosigkeit</strong>: Das Kind erlebt, dass seine Anstrengung
            wenig ändert, und stellt irgendwann das Bemühen ein. Schulfrust und Verweigerung sind
            häufige Folgen.
          </p>
          <p>
            Positive Erziehung kann diesen Kreislauf durchbrechen — nicht durch Beschönigung, sondern
            durch echte Anerkennung, klare Strukturen und das Sichtbarmachen von Stärken.
          </p>

          <h2>Grundprinzipien positiver Erziehung</h2>

          <h3>1. Das Kind in seiner Einzigartigkeit sehen</h3>
          <p>
            Jedes Kind ist mehr als seine Schulleistungen. Kinder mit ADHS zeigen oft ausgeprägte
            Fähigkeiten in Bereichen, die die Schule wenig bewertet: räumliches Denken, kreatives
            Problemlösen, soziale Empathie, handwerkliches Geschick, technisches Interesse.
            Diese Stärken aktiv sehen und benennen ist keine Beschönigung — es ist eine realistische
            Einschätzung eines vielseitigen Menschen.
          </p>
          <p>
            Formulierungen wie "Du bist so gut darin, dir Wege zu merken" oder "Ich beobachte, wie
            geduldig du anderen hilfst" richten den Blick auf echte Fähigkeiten — und zeigen dem
            Kind, dass es wahrgenommen wird.
          </p>

          <h3>2. Bemühen loben, nicht Ergebnis</h3>
          <p>
            Carol Dwecks Forschung zur <strong>Growth Mindset</strong> zeigt: Kinder, die für ihre
            Anstrengung gelobt werden ("Du hast sehr sorgfältig gearbeitet"), entwickeln eine
            langfristig stabilere Lernhaltung als Kinder, die ausschließlich für Talent oder
            Ergebnisse gelobt werden ("Du bist so klug").
          </p>
          <p>
            Für ADHS-Kinder ist das besonders relevant, weil die Ergebnisse lange hinter der
            aufgewendeten Mühe zurückbleiben. Wenn Eltern die Anstrengung anerkennen — unabhängig
            vom Diktatresultat — lernt das Kind: Mein Einsatz zählt, auch wenn das Ergebnis noch
            nicht perfekt ist.
          </p>

          <h3>3. Autonomie fördern, nicht überbehüten</h3>
          <p>
            Der Reflex vieler Eltern von Kindern mit ADHS ist, bei Hausaufgaben stets dabei zu sein,
            jede Aufgabe zu begleiten und jeden Fehler sofort zu korrigieren. Das ist verständlich —
            aber es sendet dem Kind die Botschaft: "Ich traue dir das alleine nicht zu."
          </p>
          <p>
            Wirkungsvoller ist es, Aufgaben schrittweise loszulassen. Eltern können eine Hausaufgabe
            erklären, dann aus dem Zimmer gehen und erst auf Nachfrage zurückkommen. Das Kind erlebt:
            "Ich kann anfangen. Ich hole Hilfe, wenn ich sie brauche" — eine grundlegende
            Selbstwirksamkeitserfahrung.
          </p>

          <h3>4. Struktur als Sicherheit, nicht als Kontrolle</h3>
          <p>
            Kinder brauchen Struktur — nicht als Mittel der Kontrolle, sondern als Orientierungshilfe.
            Feste Lernzeiten, ein ruhiger Platz ohne Ablenkung und ein vorhersehbarer Tagesablauf
            reduzieren die kognitive Last des Entscheidens: Das Kind muss nicht täglich neu
            verhandeln, wann es lernt und wo es sitzt.
          </p>
          <p>
            Gleichzeitig sollte Struktur nicht rigide werden. Wenn ein Kind an einem bestimmten Tag
            wirklich erschöpft ist, ist eine kurze Pause wirksamer als erzwungenes Sitzen.
            Eltern lernen, den Unterschied zwischen echtem Erschöpfungssignal und
            Widerstand durch Unlust zu erkennen.
          </p>

          <h2>Was man NICHT sagen sollte — und was besser wirkt</h2>
          <p>
            Bestimmte Formulierungen, die Eltern in Frustrationsmomenten benutzen, verankern sich
            tief im Selbstbild des Kindes. Hier einige häufige Sätze mit wirksameren Alternativen:
          </p>

          <h3>"Das ist doch ganz einfach."</h3>
          <p>
            Was das Kind hört: "Nur du findest das schwer. Du bist langsamer als andere."<br />
            Besser: "Ich sehe, dass dich das gerade fordert. Lass uns gemeinsam anschauen, welcher
            Teil dir schwerfällt."
          </p>

          <h3>"Wenn du dich mehr anstrengen würdest, wäre das kein Problem."</h3>
          <p>
            Was das Kind hört: "Deine Mühe zählt nicht. Du bist schuld an deinem Misserfolg."<br />
            Besser: "Ich sehe, wie viel du schon probiert hast. Manchmal hilft ein anderer Weg —
            wollen wir den mal ausprobieren?"
          </p>

          <h3>"Warum kannst du das nicht einfach wie die anderen?"</h3>
          <p>
            Was das Kind hört: "Du bist schlechter als andere. Du solltest anders sein."<br />
            Besser: "Du lernst anders, und das ist okay. ADHaSi und dein Förderlehrer helfen dir,
            deinen Weg zu finden."
          </p>

          <h3>"Wenn du so weitermachst, schaffst du die Klasse nicht."</h3>
          <p>
            Was das Kind hört: "Die Zukunft ist bedrohlich. Du wirst scheitern."<br />
            Besser: "Wir machen uns manchmal Sorgen um dich — und weil wir das tun, suchen wir
            zusammen nach dem, was dir hilft."
          </p>

          <h2>Praxisbeispiele: Positive Erziehung im Alltag</h2>

          <h3>Das Erfolgs-Tagebuch</h3>
          <p>
            Jeden Abend schreiben Kind und Elternteil gemeinsam auf (oder das Elternteil schreibt),
            was heute gut geklappt hat — egal wie klein. "Ich habe das Wort 'Schokolade' heute
            dreimal richtig geschrieben." "Ich habe 10 Minuten konzentriert gearbeitet." Diese
            Praxis lenkt den Aufmerksamkeitsfokus auf Fortschritt statt auf Defizite.
          </p>

          <h3>Die Stärken-Karte</h3>
          <p>
            Eine Postkarte oder ein kleines Bild, auf dem 5 Stärken des Kindes aufgeschrieben sind —
            selbst gewählt oder gemeinsam zusammengestellt. Sichtbar am Schreibtisch oder Spiegel
            aufgehängt. Kinder internalisieren, was sie täglich sehen.
          </p>

          <h3>Die 10-Minuten-Regel</h3>
          <p>
            Jeden Tag 10 Minuten, in denen das Kind bestimmt, was gespielt, gebaut oder erkundet
            wird — und der Elternteil mitmacht, ohne zu lenken, zu bewerten oder zu verbessern.
            Diese Qualitätszeit signalisiert: Ich bin gerne bei dir. Du bist gut genug, so wie du bist.
          </p>

          <h2>Häufige Fragen zu positiver Erziehung bei ADHS</h2>

          <h3>Wie erkläre ich meinem Kind, dass es ADHS hat?</h3>
          <p>Ruhig, klar und wertschätzend — altersgerecht. Jüngere Kinder brauchen einfache Bilder und Vergleiche. Unser Artikel <Link href="/ratgeber/kommunikation-mit-adhs-kind">Über ADHS mit dem Kind sprechen</Link> gibt konkrete Formulierungsbeispiele.</p>

          <h3>Soll ich bei Hausaufgaben immer dabei sein?</h3>
          <p>Nicht unbedingt. Ziel ist es, schrittweise Autonomie aufzubauen. Aufgabe erklären, Zimmer verlassen, erst auf Nachfrage zurückkommen — das stärkt Selbstwirksamkeit mehr als ständige Begleitung.</p>

          <h3>Wann brauche ich professionelle Hilfe?</h3>
          <p>Wenn Schulfrust zu anhaltenden körperlichen Symptomen (Bauchschmerzen, Schlafprobleme) oder Schulverweigerung führt, ist eine schulpsychologische Beratung oder Kinderpsychotherapie sinnvoll.</p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green underline text-sm font-semibold">Selbstwert stärken</Link>
            <Link href="/ratgeber/motivation-bei-schulfrust" className="text-adhasi-green underline text-sm font-semibold">Motivation bei Schulfrust</Link>
            <Link href="/ratgeber/kommunikation-mit-adhs-kind" className="text-adhasi-green underline text-sm font-semibold">Mit dem Kind über ADHS sprechen</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: spielerisches Üben ohne Schuldruck
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/bildschirmzeit-konzentration" className="text-adhasi-green font-semibold hover:underline text-sm">← Bildschirmzeit</Link>
            <Link href="/ratgeber/motivation-bei-schulfrust" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Motivation →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
