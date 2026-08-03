import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Mit dem Kind über ADHS sprechen — einfühlsam und klar',
  description:
    'Wie erkläre ich meinem Kind seine ADHS-Diagnose? Altersgerechte Erklärungen, was Eltern vermeiden sollten und wie Lehrkräfte einbezogen werden.',
  path: '/ratgeber/kommunikation-mit-adhs-kind',
})

export default function KommunikationMitLrsKindPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Mit dem Kind über ADHS sprechen — einfühlsam und klar',
          description: 'Wie Eltern die ADHS-Diagnose altersgerecht erklären, was sie nicht sagen sollten und wie Geschwister und Lehrkräfte einbezogen werden.',
          path: '/ratgeber/kommunikation-mit-adhs-kind',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Mit ADHS-Kind kommunizieren', path: '/ratgeber/kommunikation-mit-adhs-kind' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Wie erkläre ich einem 7-jährigen Kind seine ADHS-Diagnose?', answer: 'Mit dem Supercomputer-Vergleich: "Dein Gehirn ist wie ein superschneller Computer — so schnell, dass er manchmal zu viele Programme gleichzeitig offen hat. Das macht es schwer, bei einer Sache zu bleiben. Das nennen Doktoren ADHS." Kinder brauchen die Botschaft: Du bist in Ordnung.' },
          { question: 'Was soll ich meinem Kind mit ADHS NICHT sagen?', answer: 'Vermeide: "Stell dich nicht so an", "Andere schaffen das doch auch", "Wenn du wolltest, könntest du dich konzentrieren", "Das ist doch keine richtige Krankheit". Diese Sätze signalisieren, dass das Kind schuld an seinen Schwierigkeiten ist — das ist falsch und schadet dem Selbstbild.' },
          { question: 'Wie bereite ich Lehrkräfte auf die ADHS-Diagnose vor?', answer: 'Ein kurzes schriftliches Informationsblatt mit den konkreten Auswirkungen für den Unterricht ist wirkungsvoller als ein Gespräch allein. Konkret benennen: Wo braucht das Kind Unterstützung? Welche Nachteilsausgleiche wurden beantragt? Was hilft konkret (z. B. Sitzplatz vorne, klare Aufgabenschritte).' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Mit ADHS-Kind kommunizieren</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💬</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Mit dem Kind über ADHS sprechen — einfühlsam und klar
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Wie man ein Kind über seine ADHS-Diagnose informiert — so, dass es sich nicht defekt
            fühlt, sondern verstanden. Mit altersgerechten Formulierungen, dem Supercomputer-Vergleich
            und konkreten Hinweisen zu Geschwistern und Lehrkräften.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum das Gespräch über ADHS so wichtig ist</h2>
          <p>
            Kinder wissen meistens, dass sie anders kämpfen als andere. Sie beobachten, dass
            Mitschüler ruhiger sitzen, Aufgaben leichter beenden und weniger oft in Schwierigkeiten
            geraten. Was ihnen fehlt, ist ein Rahmen — eine Erklärung, die das „Warum" beantwortet,
            ohne dass sie sich dumm oder kaputt fühlen.
          </p>
          <p>
            Eltern, die keine Erklärung geben, hinterlassen eine Lücke: Das Kind füllt diese Lücke
            selbst — oft mit negativen Selbstinterpretationen. „Ich bin faul", „Ich kann mich halt
            nicht konzentrieren", „Mit mir stimmt etwas nicht." Frühzeitige, klare und wertschätzende
            Kommunikation über ADHS verhindert genau diese Selbstabwertung.
          </p>
          <p>
            Eine ADHS-Diagnose kann für ein Kind auch eine <strong>Erleichterung</strong> sein — das
            wird oft unterschätzt. Viele Kinder haben jahrelang geglaubt, dass sie selbst schuld sind.
            „Endlich weiß ich, warum das so schwer ist" ist eine häufige erste Reaktion.
          </p>

          <h2>Wann ist der richtige Zeitpunkt?</h2>
          <p>
            Sobald eine Diagnose gestellt ist — oder auch schon bei begründetem Verdacht. Kinder
            merken, wenn Erwachsene um etwas herumreden. Vage Andeutungen machen Kindern mehr
            Angst als klare, ruhige Erklärungen.
          </p>
          <p>
            Idealerweise:
          </p>
          <ul>
            <li>An einem ruhigen Abend, nicht direkt nach einem Frustrations-Moment</li>
            <li>Wenn das Kind entspannt und offen ist — nicht nach einem langen, schweren Schultag</li>
            <li>Ohne Zeitdruck und ohne andere Kinder, die zuhören</li>
            <li>Ohne Handy auf dem Tisch — Augenkontakt signalisiert, dass das Gespräch wichtig ist</li>
          </ul>

          <h2>Der Supercomputer-Vergleich — für jüngere Kinder</h2>
          <p>
            Jüngere Kinder (ca. 6–10 Jahre) verstehen Erklärungen am besten durch Bilder und Vergleiche.
            Der Supercomputer-Vergleich ist bewährt und wird von Kinderpsychologen empfohlen:
          </p>
          <blockquote>
            „Stell dir vor, dein Gehirn ist wie ein superschneller Computer — viel schneller als
            die meisten anderen. So schnell, dass er manchmal zu viele Programme gleichzeitig
            offen hat. Dadurch wird es schwer, bei einer Sache zu bleiben, auch wenn du es möchtest.
            Das nennen Doktoren ADHS. Du bist nicht faul und du bist nicht dumm — dein Computer
            braucht nur manchmal Hilfe beim Sortieren."
          </blockquote>
          <p>
            Was dieser Vergleich leistet: Er macht ADHS zu etwas Neutralem und Erklärbarem. Er
            betont Fähigkeit statt Defizit. Und er gibt dem Kind Sprache für etwas, das es schon
            lange erlebt hat.
          </p>

          <h2>Altersgerechte Erklärungen</h2>

          <h3>6–8 Jahre: Einfach und konkret</h3>
          <blockquote>
            „Weißt du, warum manche Menschen Brillen tragen? Nicht weil ihre Augen schlecht sind —
            sondern weil sie anders sehen. Dein Gehirn ist so ähnlich. Es funktioniert toll, aber
            bei Aufmerksamkeit und Stillsitzen braucht es mehr Unterstützung als bei anderen.
            Das nennen Doktoren ADHS. Dafür gibt es Hilfe — und du bist genau richtig."
          </blockquote>

          <h3>9–12 Jahre: Mehr Zusammenhang</h3>
          <blockquote>
            „In deinem Gehirn gibt es Botenstoffe — Dopamin und Noradrenalin — die dabei helfen,
            Aufmerksamkeit zu steuern. Bei dir funktionieren diese Botenstoffe ein bisschen anders.
            Das nennt man ADHS. Es macht manche Dinge schwerer — aber auch manche einfacher.
            Viele bekannte Menschen haben ADHS. Wir lernen gemeinsam, damit gut umzugehen."
          </blockquote>

          <h3>12–16 Jahre: Sachlich und auf Augenhöhe</h3>
          <blockquote>
            „Du weißt schon länger, dass Konzentrieren und Dranbleiben dir anders vorkommt als anderen.
            Der Begriff dafür ist ADHS — eine neurobiologische Besonderheit im Dopaminsystem. Das ist
            keine Krankheit und kein Versagen. Es gibt gut erforschte Wege damit umzugehen. Ich möchte
            das gemeinsam mit dir anschauen — nicht über deinen Kopf hinweg."
          </blockquote>

          <h2>Was Eltern NICHT sagen sollten</h2>
          <p>
            Manche gut gemeinten Sätze richten Schaden an. Diese Formulierungen sollten vermieden werden:
          </p>
          <ul>
            <li>
              <strong>„Stell dich nicht so an."</strong> — Signalisiert: Du entscheidest dich, schwach
              zu sein. Das Gegenteil ist wahr — ADHS-Kinder kämpfen harder, nicht weniger.
            </li>
            <li>
              <strong>„Andere schaffen das doch auch."</strong> — Ungültiger Vergleich. Anderen
              kostet es neurobiologisch weniger Aufwand. Das ist kein Maßstab für dieses Kind.
            </li>
            <li>
              <strong>„Wenn du wolltest, könntest du dich konzentrieren."</strong> — Falsch.
              Konzentration bei ADHS ist keine Frage des Wollens. Dieser Satz erzeugt Scham.
            </li>
            <li>
              <strong>„Das ist doch keine richtige Krankheit."</strong> — Invalidiert die echten
              Schwierigkeiten des Kindes. ADHS ist anerkannt und neurobiologisch messbar.
            </li>
            <li>
              <strong>„Ich war auch so und bin damit klargekommen."</strong> — Schließt Hilfe aus
              und weckt falsche Erwartungen. Jedes Kind ist anders.
            </li>
          </ul>

          <h2>Die Diagnose als Erleichterung kommunizieren</h2>
          <p>
            Viele Kinder tragen jahrelang die Überzeugung mit sich: „Ich bin schuld, dass es so
            schwer ist." Eine ADHS-Diagnose kann dieses Gewicht nehmen. Eltern können diesen Moment
            aktiv gestalten:
          </p>
          <blockquote>
            „Weißt du, was ich jetzt fühle? Erleichterung. Nicht weil mit dir etwas nicht stimmt —
            sondern weil wir jetzt wissen, warum manche Dinge für dich so viel schwerer sind als
            für andere. Und weil wir jetzt gezielt helfen können."
          </blockquote>

          <h2>Geschwister einbeziehen</h2>
          <p>
            Geschwisterkinder beobachten, dass ein Kind mehr Förderung, mehr Aufmerksamkeit und
            manchmal andere Regeln bekommt. Ohne Erklärung entsteht Neid oder Missverständnis.
          </p>
          <p>
            Eine einfache, ehrliche Erklärung:
          </p>
          <blockquote>
            „Dein Geschwister braucht bei manchen Dingen mehr Unterstützung als du — genau wie
            du vielleicht bei anderen Dingen mehr Hilfe brauchst als er. Das ist kein Unrecht.
            Wir helfen jedem von euch dort, wo Hilfe gebraucht wird."
          </blockquote>
          <p>
            Wichtig: Geschwisterkinder nicht als Helfer oder Tutoren einsetzen. Das belastet die
            Beziehung. Förderung ist Elternaufgabe — Geschwister sind Spielkameraden.
          </p>

          <h2>Lehrkräfte vorbereiten</h2>
          <p>
            Ein Gespräch mit Lehrkräften über ADHS ist wichtig — aber ein kurzes schriftliches
            Informationsblatt ist oft wirkungsvoller als ein Gespräch allein. Konkret benennen:
          </p>
          <ul>
            <li>Welche konkreten Schwierigkeiten zeigt das Kind im Unterricht?</li>
            <li>Welche Nachteilsausgleiche wurden beantragt oder bewilligt?</li>
            <li>Was hilft konkret: Sitzplatz vorne, klare Aufgabenschritte, kurze Rückmeldungen?</li>
            <li>Wie soll die Lehrkraft auf Aufmerksamkeitsverlust reagieren — ohne Bloßstellung?</li>
          </ul>
          <p>
            Eltern, die gut vorbereitet ins Gespräch gehen, werden als kompetente Partner wahrgenommen
            — das verbessert die Zusammenarbeit erheblich.
          </p>

          <h2>Wenn das Kind nicht sprechen möchte</h2>
          <p>
            Nicht jedes Kind möchte über seine ADHS reden — besonders Jugendliche ziehen sich zurück.
            Das ist zu respektieren. Wichtig ist, dass die Tür offen bleibt:
          </p>
          <blockquote>
            „Du musst jetzt nicht darüber reden. Wenn du Fragen hast oder einfach nur erzählen
            möchtest, bin ich da."
          </blockquote>
          <p>
            Kein Druck. Kein Thematisieren vor anderen. Die Botschaft „Du bist in Ordnung und ich
            stehe hinter dir" muss nicht in Worten gesagt werden — sie zeigt sich im täglichen Umgang.
          </p>

          <h2>Häufige Fragen zur Kommunikation über ADHS</h2>

          <h3>Wie erkläre ich einem 7-jährigen Kind seine ADHS?</h3>
          <p>Mit dem Supercomputer-Vergleich: „Dein Gehirn ist wie ein superschneller Computer, der manchmal zu viele Programme gleichzeitig offen hat. Das nennen Doktoren ADHS." Die wichtigste Botschaft: Du bist in Ordnung.</p>

          <h3>Was soll ich NICHT sagen?</h3>
          <p>„Stell dich nicht so an", „Andere schaffen das auch", „Wenn du wolltest, könntest du dich konzentrieren." Diese Sätze signalisieren, dass das Kind schuld ist — das ist falsch und schadet dem Selbstbild nachhaltig.</p>

          <h3>Was sage ich Geschwistern?</h3>
          <p>Ehrlich und einfach: „Dein Geschwister braucht bei manchen Dingen mehr Hilfe. Wir helfen jedem von euch dort, wo Hilfe gebraucht wird." Geschwister nicht als Tutoren einsetzen.</p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green underline text-sm font-semibold">Selbstwert stärken</Link>
            <Link href="/ratgeber/adhs-verstehen" className="text-adhasi-green underline text-sm font-semibold">ADHS verstehen</Link>
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green underline text-sm font-semibold">Hilfsorganisationen</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Förderung ohne Schuldruck
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green font-semibold hover:underline text-sm">← Selbstwert stärken</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Lernmethodik →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
