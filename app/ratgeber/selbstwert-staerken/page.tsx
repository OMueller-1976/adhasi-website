import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Selbstwert stärken bei ADHS — Stärken sehen, Nachteilsausgleich nutzen',
  description:
    'Wie Eltern den Selbstwert von ADHS-Kindern stärken: ADHS-typische Stärken (Kreativität, Hyperfokus), bekannte Persönlichkeiten und Nachteilsausgleich nutzen.',
  path: '/ratgeber/selbstwert-staerken',
})

export default function SelbstwertStaerkenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Selbstwert stärken bei ADHS — Stärken sehen, Nachteilsausgleich nutzen',
          description: 'ADHS-typische Stärken sichtbar machen, Selbstwertgefühl aufbauen und Nachteilsausgleich als Werkzeug nutzen — Praxistipps für Eltern.',
          path: '/ratgeber/selbstwert-staerken',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Selbstwert stärken', path: '/ratgeber/selbstwert-staerken' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Welche Stärken haben Kinder mit ADHS?', answer: 'Kinder mit ADHS zeigen oft außergewöhnliche Kreativität, Hyperfokus bei Lieblingsthemen, hohe Energie, ausgeprägte Empathie und Risikobereitschaft. Diese Eigenschaften werden in der Schule selten bewertet, sind aber im späteren Leben wertvolle Ressourcen.' },
          { question: 'Wie stärke ich das Selbstwertgefühl meines ADHS-Kindes?', answer: 'Durch echte Erfolgserlebnisse außerhalb der Schule, konkretes Lob für spezifische Leistungen, aktives Benennen von ADHS-typischen Stärken und den Nachteilsausgleich als Werkzeug — nicht als Makel — erklären.' },
          { question: 'Was ist Nachteilsausgleich bei ADHS und wer hat Anspruch darauf?', answer: 'Mit einer formalen ADHS-Diagnose haben Kinder in Deutschland Anspruch auf Nachteilsausgleich: verlängerte Prüfungszeiten, Pausen während Klassenarbeiten, ruhigerer Sitzplatz, mündliche statt schriftliche Prüfungen. Der Schulpsychologische Dienst berät kostenlos.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Selbstwert stärken</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌟</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Selbstwert stärken bei ADHS — Stärken sehen, Nachteilsausgleich nutzen
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Kinder mit ADHS erleben Schule oft als Ort, an dem sie täglich scheitern. Wie Eltern
            ein stabiles Selbstwertgefühl aufbauen können — und welche außergewöhnlichen Stärken
            ADHS mit sich bringt.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum ADHS-Kinder besonders anfällig für Selbstwertprobleme sind</h2>
          <p>
            Das Schulsystem bewertet Selbstregulation, Ausdauer und ruhiges Sitzen — genau die
            Fähigkeiten, die bei ADHS neurobiologisch bedingt schwerer fallen. Das Ergebnis: täglich
            negative Rückmeldungen, schlechte Noten trotz Intelligenz, Konflikte mit Lehrkräften und
            Mitschülern. Kinder mit ADHS erhalten im Schnitt deutlich mehr kritische Korrekturen pro Tag
            als ihre Mitschüler — das hinterlässt Spuren.
          </p>
          <p>
            Das erzeugt ein Selbstbild, das um Defizite gebaut ist — nicht um Fähigkeiten. Eltern
            können diesen Spiegel aktiv gegensteuern. Nicht mit falschem Lob, sondern indem sie
            die echten Stärken ihres Kindes sichtbar und erlebbar machen.
          </p>

          <h2>Die Stärken von ADHS — ernst genommen</h2>
          <p>
            ADHS ist keine reine Störung. Es ist ein neurobiologisches Profil, das neben
            Herausforderungen auch charakteristische Stärken mitbringt. Diese werden in der Schule
            selten bewertet — im späteren Leben sind es oft genau diese Eigenschaften, die Menschen
            mit ADHS erfolgreich machen.
          </p>

          <h3>Kreativität</h3>
          <p>
            Viele Kinder mit ADHS denken außerhalb üblicher Bahnen. Das Gehirn springt zwischen
            Ideen, kombiniert Unerwartetes und produziert unkonventionelle Lösungen. Kreativität
            und divergentes Denken sind wissenschaftlich mit ADHS-Mustern korreliert. Kinder, die
            im Unterricht zu viel denken, sind oft diejenigen mit den originellsten Ideen.
          </p>

          <h3>Hyperfokus</h3>
          <p>
            ADHS bedeutet nicht immer zu wenig Aufmerksamkeit — es bedeutet unregulierte
            Aufmerksamkeit. Wenn ein Thema das Kind begeistert, kann es stundenlang mit extremer
            Konzentration arbeiten: Hyperfokus. Eltern können diesen Zustand gezielt fördern,
            indem sie Themen entdecken, die das Kind wirklich interessieren.
          </p>

          <h3>Energie und Begeisterungsfähigkeit</h3>
          <p>
            Kinder mit ADHS bringen eine natürliche Energie und Begeisterung mit, die ansteckend
            sein kann. Sie werfen sich kopfüber in neue Projekte, sind für Abenteuer offen und
            motivieren andere durch ihre Lebhaftigkeit. Diese Energie ist kein Problem — sie braucht
            nur die richtigen Kanäle.
          </p>

          <h3>Empathie</h3>
          <p>
            Viele Kinder mit ADHS sind hochsensibel für die Gefühle anderer. Sie spüren Stimmungen
            in Gruppen, reagieren stark auf Ungerechtigkeit und kümmern sich intensiv um Freunde.
            Diese emotionale Tiefe ist eine Stärke, die in sozialen Berufen und Beziehungen
            außerordentlich wertvoll ist.
          </p>

          <h3>Risikobereitschaft</h3>
          <p>
            ADHS-Kinder überlegen weniger lang und handeln öfter. Das führt zu Impulsivitätsproblemen —
            aber auch zu Mut, Entscheidungsfreude und Unternehmergeist. Viele erfolgreiche Unternehmer
            und Pioniere haben genau diese Eigenschaft.
          </p>

          <h2>Bekannte Menschen mit ADHS</h2>
          <p>
            Kinder und Jugendliche brauchen Vorbilder — Menschen, die mit ADHS Außerordentliches
            geleistet haben. Einige bekannte Beispiele:
          </p>
          <ul>
            <li><strong>Albert Einstein</strong> — Nach heutigen Kriterien möglicherweise ADHS; revolutionäre Physik durch unkonventionelles Denken</li>
            <li><strong>Leonardo da Vinci</strong> — Beschrieben als extrem impulsiv, sprang zwischen Projekten; gilt als eines der größten Genies der Geschichte</li>
            <li><strong>Richard Branson</strong> — Virgin-Gründer, offen über seine ADHS-Diagnose; nutzte Risikobereitschaft und Energie als unternehmerische Stärke</li>
            <li><strong>Simone Biles</strong> — Mehrfache Olympiasiegerin im Turnen, spricht offen über ihre ADHS und Methylphenidat-Medikation</li>
            <li><strong>Justin Timberlake</strong> — Musiker und Schauspieler mit ADHS; Hyperfokus auf Musik und Performance als Schlüssel zum Erfolg</li>
          </ul>
          <p>
            Diese Liste ist keine Garantie. Aber sie zeigt: ADHS ist kein Deckel, der über einem
            Menschen liegt. Es ist ein Aspekt, mit dem man lernen kann umzugehen — und manchmal
            Antrieb für außergewöhnliche Leistungen.
          </p>

          <h2>Nachteilsausgleich als Werkzeug — nicht als Makel</h2>
          <p>
            Viele Eltern zögern beim Thema Nachteilsausgleich, weil sie fürchten, ihr Kind zu
            stigmatisieren. Das ist verständlich — aber das Gegenteil ist richtig. Gut erklärt
            ist Nachteilsausgleich ein <strong>Werkzeug, das faire Bedingungen schafft</strong>.
          </p>
          <p>
            Eine gute Erklärung für das Kind: „Ein Sportler mit gebrochener Hand bekommt
            beim Klavierspiel mehr Zeit. Nicht weil er schlechter ist — sondern weil er unter
            anderen Bedingungen spielt. Du bekommst mehr Zeit bei Klassenarbeiten, damit dein
            Gehirn die Chance hat zu zeigen, was es weiß."
          </p>

          <h3>Welche Nachteilsausgleiche gibt es?</h3>
          <ul>
            <li><strong>Verlängerte Prüfungszeit</strong> — häufig 25–50 % mehr Zeit bei Klassenarbeiten</li>
            <li><strong>Pausen während Prüfungen</strong> — kurze Bewegungspausen, die die Konzentration zurückbringen</li>
            <li><strong>Ruhiger Sitzplatz</strong> — vorne, mit weniger Ablenkung, ggf. separater Raum für Prüfungen</li>
            <li><strong>Aufgaben aufteilen</strong> — große Aufgaben in kleinere Teilschritte aufgebrochen</li>
            <li><strong>Mündliche statt schriftliche Prüfungen</strong> — wenn Schreiben die Leistung unverhältnismäßig behindert</li>
          </ul>
          <p>
            Voraussetzung ist eine <strong>formale ADHS-Diagnose</strong>. Der Schulpsychologische
            Dienst berät kostenlos und hilft beim Antrag.
          </p>

          <h2>Konkrete Übungen für zuhause</h2>

          <h3>Die Stärkenliste</h3>
          <p>
            Setzt euch gemeinsam hin: Was kann dieses Kind gut? Was macht es gerne? Worüber
            staunen andere? Das Kind darf eigene Vorschläge machen, Eltern ergänzen. Die Liste
            wird sichtbar aufgehängt — Spiegel oder Schreibtisch. Kein Lobbrief, sondern eine
            realistische Bestandsaufnahme von Fähigkeiten jenseits von Schulnoten.
          </p>

          <h3>Das Mutbuch</h3>
          <p>
            Jeden Abend eine Zeile: Was habe ich heute ausprobiert, obwohl es schwer war?
            „Ich habe gefragt, obwohl ich Angst hatte, falsch zu liegen." Mut ist eine Fähigkeit,
            die geübt werden kann. Kinder mit ADHS, die ihren eigenen Mut sehen, trauen sich mehr.
          </p>

          <h3>Erfolge außerhalb der Schule schaffen</h3>
          <p>
            Kochen, Backen, Reparieren, Sport, Musik, Programmieren — Aktivitäten, bei denen das
            Kind etwas Konkretes schafft und das Ergebnis sieht. „Wir haben heute zusammen den
            Fahrradreifen geflickt" bleibt als Erfolgserlebnis, egal was die nächste Klassenarbeit
            ergibt.
          </p>

          <h2>Häufige Fragen zum Selbstwert bei ADHS</h2>

          <h3>Welche Stärken haben Kinder mit ADHS?</h3>
          <p>Kreativität, Hyperfokus bei Interessensthemen, hohe Energie, ausgeprägte Empathie und Risikobereitschaft. Diese Eigenschaften werden in der Schule selten bewertet — sind im späteren Leben aber wertvolle Ressourcen.</p>

          <h3>Wie stärke ich das Selbstwertgefühl meines Kindes?</h3>
          <p>Durch echte Erfolgserlebnisse außerhalb der Schule, spezifisches Lob für konkrete Leistungen und das aktive Benennen von ADHS-typischen Stärken. Unechtes Lob hilft nicht — Kinder spüren, wenn es falsch ist.</p>

          <h3>Wann brauche ich professionelle Unterstützung?</h3>
          <p>Wenn das Kind anhaltend von sich selbst als „ich bin doof" oder „niemand mag mich" spricht, wenn körperliche Symptome (Bauchschmerzen, Schlafprobleme) auftreten oder Schulverweigerung entsteht — dann ist schulpsychologische Beratung oder Kinderpsychotherapie angebracht.</p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/kommunikation-mit-adhs-kind" className="text-adhasi-green underline text-sm font-semibold">Mit dem Kind über ADHS sprechen</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green underline text-sm font-semibold">Hilfsorganisationen</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Selbstwirksamkeit durch Erfolgserlebnisse
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green font-semibold hover:underline text-sm">← Lernmethodik</Link>
            <Link href="/ratgeber/digitale-hilfsmittel-adhs" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Digitale Hilfsmittel →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
