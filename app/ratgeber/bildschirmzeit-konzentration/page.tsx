import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Bildschirmzeit bei ADHS – Konzentration und Lernzeit richtig gestalten',
  description:
    'Wie viel Bildschirmzeit ist bei Kindern mit ADHS sinnvoll? Auswirkungen auf Konzentration, Empfehlungen und Alltagstipps für Eltern.',
  path: '/ratgeber/bildschirmzeit-konzentration',
})

export default function BildschirmzeitKonzentrationPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Bildschirmzeit und Konzentration beim Lernen',
          description: 'Auswirkungen von Bildschirmzeit auf Konzentration bei Kindern mit ADHS — Studien, Empfehlungen, Praxistipps.',
          path: '/ratgeber/bildschirmzeit-konzentration',
          datePublished: '2025-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Bildschirmzeit & Konzentration', path: '/ratgeber/bildschirmzeit-konzentration' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Wie viel Bildschirmzeit ist für Schulkinder empfohlen?', answer: 'Die Deutsche Gesellschaft für Kinder- und Jugendmedizin empfiehlt für 6–10-Jährige maximal 45–60 Minuten täglich Freizeit-Bildschirmzeit. Strukturierte Lernzeit mit Apps kann zusätzlich gewertet werden, sollte aber ebenfalls begrenzt werden.' },
          { question: 'Schadet Bildschirmzeit der Konzentration meines Kindes?', answer: 'Unstrukturierter Dauerkonsum (YouTube, Spiele) kann die Konzentrationsfähigkeit beeinträchtigen — besonders unmittelbar vor Lernphasen. Aktives Lernen mit einer Lern-App hat dagegen bei richtiger Dosierung keine negativen Effekte auf die Konzentration.' },
          { question: 'Wann sollte mein Kind aufhören, Bildschirm zu nutzen?', answer: 'Mindestens 60 Minuten vor dem Schlafen — blaues Licht und Reizüberflutung stören die Schlaf- und Gedächtniskonsolidierung. Geräte am besten außerhalb des Schlafzimmers laden.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Bildschirmzeit & Konzentration</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🕐</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Bildschirmzeit bei ADHS – Konzentration und Lernzeit richtig gestalten
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Bildschirme sind nicht automatisch schlecht für lernende Kinder — aber zu viel
            davon, zur falschen Zeit und ohne Struktur schadet der Konzentration nachweislich.
            Besonders für Kinder mit ADHS, die ohnehin mehr Aufmerksamkeitsressourcen fürs
            Lesen brauchen, ist eine bewusste Mediengestaltung entscheidend.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Was die Forschung sagt: Bildschirmzeit und kindliche Entwicklung</h2>
          <p>
            Die Studienlage zu Bildschirmzeit bei Kindern ist umfangreich, aber differenziert. Es
            kommt nicht allein auf die Menge der Bildschirmzeit an, sondern auf Art, Kontext und
            Begleitung durch Erwachsene.
          </p>
          <p>
            Die <strong>BLIKK-Studie</strong> (Bayerische Landesärztekammer, 2017), eine der größten
            deutschen Studien zum Thema, untersuchte über 5.000 Kinder und fand: Kleinkinder, die
            täglich mehr als eine Stunde am Bildschirm verbringen, zeigen häufiger Schlafprobleme,
            Konzentrationsschwierigkeiten und verzögerte Sprachentwicklung. Bei Schulkindern (6–12
            Jahre) war ein Zusammenhang zwischen hohem Medienkonsum und Aufmerksamkeitsproblemen
            nachweisbar — unabhängig vom Inhalt.
          </p>
          <p>
            Die <strong>KIM-Studie</strong> des Medienpädagogischen Forschungsverbunds Südwest zeigt,
            dass Grundschulkinder in Deutschland im Schnitt täglich rund 90 Minuten am Bildschirm
            verbringen — Tendenz steigend. Bei Jugendlichen (JIM-Studie) sind es mehrere Stunden täglich.
          </p>
          <p>
            Wichtig: Diese Studien messen Korrelationen, keine Kausalität. Kinder mit bestehenden
            Aufmerksamkeitsproblemen greifen möglicherweise häufiger zu Bildschirmen — nicht nur
            umgekehrt. Trotzdem ist die Botschaft eindeutig: <strong>Bewusste Dosierung ist besser
            als unstrukturierter Dauerkonsum</strong>.
          </p>

          <h2>Warum ADHS-Kinder besonders empfindlich reagieren</h2>
          <p>
            Kinder mit ADHS investieren beim konzentrierten Lernen deutlich mehr kognitive Energie
            als Kinder ohne ADHS. Das Arbeitsgedächtnis ist stärker ausgelastet, Impulskontrolle und
            Selbstregulation kosten konstant Energie. Das bedeutet: ADHS-Kinder ermüden beim Lernen
            schneller.
          </p>
          <p>
            Wenn ein solches Kind nach 20 Minuten konzentrierten Lernens auf ein Tablet wechselt,
            das YouTube-Empfehlungen, Benachrichtigungen und farbstarke Animationen zeigt, braucht
            das Gehirn erheblich länger, um wieder in einen Lernzustand zurückzukehren. Neurowissenschaftliche
            Studien sprechen von einer <strong>Aufmerksamkeits-Restschuld</strong>: Nach einer
            ablenkenden Mediennutzung benötigen Kinder 10–25 Minuten, um die volle Konzentration
            wiederherzustellen.
          </p>

          <h2>Passiver Konsum vs. aktives Lernen — ein entscheidender Unterschied</h2>
          <p>
            Nicht alle Bildschirmzeit ist gleich. Die Forschung unterscheidet zwischen:
          </p>
          <ul>
            <li>
              <strong>Passivem Konsum:</strong> YouTube-Videos schauen, Inhalte scrollen, Spiele
              spielen ohne Lernziel. Aktiviert das Gehirn auf eine Art, die Lernen im Anschluss
              erschwert.
            </li>
            <li>
              <strong>Ko-rezeptivem Konsum:</strong> Mit einem Elternteil gemeinsam einen Film
              schauen, darüber sprechen, Fragen stellen. Deutlich wertvoller als passives Alleinschauen.
            </li>
            <li>
              <strong>Aktivem Lernen:</strong> Mit einer Lern-App arbeiten, Texte mit Vorlese-Funktion
              mitlesen, interaktive Übungen. Hat bei richtiger Gestaltung nachgewiesene Lerneffekte.
            </li>
          </ul>
          <p>
            Für ADHS-Kinder gilt: Lernbezogene Bildschirmzeit ist sinnvoll, wenn sie strukturiert,
            kurzgehalten und von aktivem Mitmachen geprägt ist. Passiver Konsum unmittelbar vor
            oder nach einer Lerneinheit beeinträchtigt den Lerneffekt messbar.
          </p>

          <h2>Empfehlungen nach Alter</h2>
          <p>
            Die Bundeszentrale für gesundheitliche Aufklärung (BZgA) und die Deutsche Gesellschaft
            für Kinder- und Jugendmedizin (DGKJ) geben folgende Orientierungswerte:
          </p>
          <ul>
            <li><strong>Unter 3 Jahren:</strong> Möglichst kein Bildschirm außer Videotelefonaten mit Bezugspersonen.</li>
            <li><strong>3–6 Jahre:</strong> Maximal 30 Minuten täglich, in Begleitung Erwachsener.</li>
            <li><strong>6–10 Jahre:</strong> Maximal 45–60 Minuten täglich — aktives Lernen eingeschlossen.</li>
            <li><strong>Ab 10 Jahre:</strong> Gemeinsam ausgehandelte Regeln, Richtwert 1–2 Stunden ohne Lerninhalte.</li>
          </ul>
          <p>
            Diese Werte gelten für Freizeit-Bildschirmzeit. Zeit mit einer strukturierten Lern-App
            kann zusätzlich gewertet werden — allerdings nicht unbegrenzt: Auch Bildschirmlernen
            ermüdet Augen und Aufmerksamkeit.
          </p>

          <h2>Konkrete Tipps für einen lernfördernden Medienalltag</h2>
          <h3>Lernen zuerst, Bildschirm danach</h3>
          <p>
            Kinder konzentrieren sich am besten, wenn der Bildschirm erst nach der Lerneinheit
            zur Verfügung steht. Die Erwartung auf Freizeit-Medienzeit ist dann Motivation statt
            Ablenkung. Umgekehrt — Bildschirm zuerst, dann Hausaufgaben — führt regelmäßig zu Konflikten.
          </p>

          <h3>Geräte aus dem Schlafzimmer</h3>
          <p>
            Schlaf ist für die Gedächtniskonsolidierung essenziell — Lerninhalte werden in der Nacht
            verarbeitet und gefestigt. Bildschirmnutzung in den letzten 60 Minuten vor dem Einschlafen
            (blaues Licht, Reizüberflutung) stört diesen Prozess messbar. Ein Ladebereich im Flur
            statt im Kinderzimmer ist eine der wirksamsten und einfachsten Maßnahmen.
          </p>

          <h3>Medienzeiten gemeinsam festlegen</h3>
          <p>
            Regelungen, die Kinder mitgestalten, werden besser eingehalten. Ein Wochenplan, auf dem
            Lernzeiten, Freizeit-Bildschirmzeiten und bildschirmfreie Aktivitäten sichtbar sind,
            gibt Orientierung — und reduziert tägliche Konflikte.
          </p>

          <h3>Qualität statt Verbot</h3>
          <p>
            Totale Verbote erzeugen Reiz durch Verbotenes. Sinnvoller ist es, bewusst gute Inhalte
            anzubieten: Lern-Apps statt unstrukturierter Spielezeit, Hörbücher statt Dauervideos,
            gemeinsames Schauen statt Alleinkonsum.
          </p>

          <h2>Häufige Fragen zu Bildschirmzeit und Konzentration</h2>

          <h3>Wie viel Bildschirmzeit ist für Schulkinder empfohlen?</h3>
          <p>Die Deutsche Gesellschaft für Kinder- und Jugendmedizin empfiehlt für 6–10-Jährige maximal 45–60 Minuten täglich Freizeit-Bildschirmzeit. Strukturierte Lernzeit mit Apps kann zusätzlich gewertet werden, sollte aber ebenfalls begrenzt sein.</p>

          <h3>Schadet Bildschirmzeit der Konzentration?</h3>
          <p>Unstrukturierter Dauerkonsum kann die Konzentrationsfähigkeit beeinträchtigen — besonders unmittelbar vor Lernphasen. Aktives Lernen mit einer Lern-App hat dagegen bei richtiger Dosierung keine negativen Effekte.</p>

          <h3>Wann sollte mein Kind aufhören, Bildschirm zu nutzen?</h3>
          <p>Mindestens 60 Minuten vor dem Schlafen — blaues Licht und Reizüberflutung stören die Schlaf- und Gedächtniskonsolidierung. Geräte am besten außerhalb des Schlafzimmers laden lassen.</p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/medienkompetenz-bei-adhs" className="text-adhasi-green underline text-sm font-semibold">Medienkompetenz bei ADHS</Link>
            <Link href="/ratgeber/family-link-bildschirmzeit-apps" className="text-adhasi-green underline text-sm font-semibold">Family Link einrichten</Link>
            <Link href="/ratgeber/motivation-bei-schulfrust" className="text-adhasi-green underline text-sm font-semibold">Motivation bei Schulfrust</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: strukturiertes Lernen in kurzen Einheiten
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/medienkompetenz-bei-adhs" className="text-adhasi-green font-semibold hover:underline text-sm">← Medienkompetenz</Link>
            <Link href="/ratgeber/positive-erziehung-bei-lernschwierigkeiten" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Positive Erziehung →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
