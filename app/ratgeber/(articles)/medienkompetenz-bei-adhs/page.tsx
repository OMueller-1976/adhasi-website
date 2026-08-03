import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Medienkompetenz bei ADHS — Bildschirmzeit, Dopamin & kluge Mediennutzung',
  description:
    'Warum ADHS-Kinder besonders anfällig für Mediensucht sind und wie Eltern mit Struktur eine gesunde Mediennutzung fördern können.',
  path: '/ratgeber/medienkompetenz-bei-adhs',
})

export default function MedienkompetenzBeiLrsPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Medienkompetenz bei ADHS — Bildschirmzeit, Dopamin & kluge Mediennutzung',
          description: 'Warum ADHS-Kinder besonders anfällig für Mediensucht sind und wie Eltern mit Struktur statt Verboten helfen.',
          path: '/ratgeber/medienkompetenz-bei-adhs',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Medienkompetenz bei ADHS', path: '/ratgeber/medienkompetenz-bei-adhs' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Warum sind Kinder mit ADHS anfälliger für Mediensucht?', answer: 'Bei ADHS ist das Dopaminsystem verändert — sofortige, starke Belohnungsreize wie YouTube oder TikTok überwältigen das Gehirn mit Dopamin. Das macht Medien für ADHS-Kinder besonders schwer loszulassen. Gleichzeitig fällt die Selbstregulation (aufhören, wenn es Zeit ist) schwerer.' },
          { question: 'Wie viel Bildschirmzeit ist für Kinder mit ADHS sinnvoll?', answer: 'Aktive Lernzeit mit Apps: 15–20 Minuten täglich sind wirksamer als lange Sessions. Passiver Konsum (YouTube, Spiele) sollte klar von Lernzeit getrennt sein. Wichtiger als die Minutenzahl ist die Qualität: aktive, strukturierte Nutzung ist besser als passiver Konsum.' },
          { question: 'Wie helfe ich meinem Kind mit ADHS beim Beenden von Medienzeit?', answer: 'Übergangsrituale helfen: 5-Minuten-Vorwarnung ("Gleich ist Schluss"), dann ein kurzes Abschluss-Ritual (z. B. Gerät zusammen weglegen, kurz erzählen was gespielt wurde). ADHS-Kinder brauchen mehr Zeit für Übergänge — abruptes Beenden führt fast immer zu Konflikten.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Medienkompetenz bei ADHS</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📱</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Medienkompetenz bei ADHS — Bildschirmzeit, Dopamin & kluge Mediennutzung
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Kinder mit ADHS sind besonders anfällig für exzessive Mediennutzung — und gleichzeitig
            können die richtigen digitalen Tools ihre Lernerfolge erheblich steigern. Worauf es
            ankommt, erklärt dieser Artikel.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum ADHS-Kinder besonders anfällig für Mediensucht sind</h2>
          <p>
            Der Zusammenhang ist neurobiologisch: Bei ADHS ist das <strong>Dopaminsystem verändert</strong>.
            Dopamin ist der Botenstoff, der bei Belohnung, Vorfreude und Erfolgserlebnissen ausgeschüttet
            wird — und bei ADHS liegt der Grundspiegel oft niedriger als bei Kindern ohne ADHS.
          </p>
          <p>
            Das hat eine direkte Konsequenz: Das Gehirn sucht aktiv nach Quellen sofortiger
            Dopaminausschüttung. Und genau das liefern YouTube, TikTok und Videospiele in nahezu
            unbegrenzter Menge: <strong>sofortige, intensive Belohnungsreize</strong> im Sekundentakt.
            Ein neues Video, ein neues Level, ein neuer Kommentar — jeder dieser Momente aktiviert
            das Belohnungszentrum.
          </p>
          <p>
            Gleichzeitig fällt ADHS-Kindern die <strong>Selbstregulation</strong> — also das freiwillige
            Aufhören, wenn es Zeit ist — deutlich schwerer als anderen Kindern. Das Zusammenspiel aus
            verstärkter Dopaminsuche und schwächerer Impulskontrolle macht Medien für ADHS-Kinder
            zu einer besonderen Herausforderung.
          </p>

          <h2>Passive vs. aktive Mediennutzung: Ein wichtiger Unterschied</h2>
          <p>
            Nicht alle Bildschirmzeit ist gleich. Entscheidend ist die <strong>Qualität der Nutzung</strong>:
          </p>

          <h3>Passive Mediennutzung: YouTube, TikTok, Streaming</h3>
          <p>
            Passiver Konsum — endlos scrollendes Video-Feed, Autoplay-Serien, algorithmisierte
            Kurzvideos — ist für ADHS-Kinder besonders problematisch. Diese Formate sind explizit
            darauf ausgelegt, die Aufmerksamkeit so lange wie möglich zu binden. Jeder Schnitt,
            jede neue Szene ist ein neuer Dopaminreiz. Das Gehirn lernt, dass Stimulation immer
            unmittelbar und intensiv sein muss — was schulisches Lernen, das naturgemäß langsamer
            und weniger stimulierend ist, danach noch frustrierender erscheinen lässt.
          </p>

          <h3>Aktive Mediennutzung: Lern-Apps, kreative Tools</h3>
          <p>
            Aktive Nutzung hingegen — eine Lern-App bedienen, ein Video drehen, ein Spiel strategisch
            spielen, Programmieren lernen — fordert das Kind heraus und stärkt Fähigkeiten. Gut
            gestaltete Lern-Apps für ADHS nutzen Gamification sinnvoll: Belohnungen kommen
            als Reaktion auf echte Leistung, nicht als passiver Konsum.
          </p>

          <h2>Wie Bildschirmzeit ADHS-Symptome verstärken kann</h2>
          <p>
            Mehrere Mechanismen spielen zusammen:
          </p>
          <ul>
            <li>
              <strong>Reizüberflutung:</strong> Intensive Mediennutzung erhöht den Reizpegel, auf
              den das Gehirn reagiert. Danach erscheinen alltägliche Aktivitäten (Hausaufgaben,
              Gespräche, Spielen ohne Bildschirm) noch langweiliger und schwerer erträglich.
            </li>
            <li>
              <strong>Schlafstörungen:</strong> Bildschirmnutzung kurz vor dem Schlafen — besonders
              mit blauen Licht-Geräten — stört die Melatoninproduktion. Kinder mit ADHS haben
              ohnehin häufig Schlafprobleme, die durch späte Bildschirmzeit erheblich verstärkt werden.
              Schlechter Schlaf wiederum verschlimmert ADHS-Symptome am nächsten Tag.
            </li>
            <li>
              <strong>Übergangsprobleme:</strong> Beim Beenden von Medienzeit kommt es bei ADHS-Kindern
              häufig zu starken emotionalen Reaktionen — Wutausbrüche, Weinen, Verweigerung. Das ist
              keine Trotzreaktion, sondern eine neurologische Schwierigkeit mit Übergängen (Transitionen),
              die bei ADHS typisch ist.
            </li>
          </ul>

          <h2>Empfehlungen: Struktur statt Verbote</h2>
          <p>
            Verbote funktionieren bei ADHS-Kindern selten. Was wirkt, ist <strong>Struktur</strong> —
            klare, vorhersehbare Regeln, die konsequent eingehalten werden.
          </p>

          <h3>Feste Medienzeiten einführen</h3>
          <p>
            Legt feste Zeiten fest, in denen Medien erlaubt sind — und haltet diese konsequent ein.
            Beispiel: Nach den Hausaufgaben und vor dem Abendessen 30 Minuten Bildschirmzeit.
            Unbedingt: Diese Zeit jeden Tag gleichzeitig anbieten und beenden — Vorhersehbarkeit
            reduziert die Übergangsproblematik erheblich.
          </p>

          <h3>Gemeinsame Nutzung bevorzugen</h3>
          <p>
            Wenn immer möglich: Medien gemeinsam nutzen. Nicht als Überwachung, sondern als
            Interesse — was schaut das Kind, was spielt es, worüber lacht es? Gemeinsame Nutzung
            schafft Gesprächsanlässe, gibt Orientierung und hält den Konsum bewusster.
          </p>

          <h3>Gute Apps bewusst auswählen</h3>
          <p>
            Nicht alle Apps sind gleich. Wählt gezielt Apps, die kurze Einheiten, klare Strukturen
            und sinnvolle Belohnungssysteme haben. Für Lernzwecke: Apps mit 5–15 Minuten-Einheiten
            und sofortigem Feedback. Vermeidet Apps mit Autoplay, Endlos-Scroll und algorithmisiertem
            Feed.
          </p>

          <h2>ADHS-gerechte Mediennutzung: Übergangsrituale</h2>
          <p>
            Das Beenden von Medienzeit ist für viele ADHS-Kinder der schwierigste Moment. Abruptes
            Abschalten führt fast immer zu Konflikten. Was hilft:
          </p>
          <ul>
            <li>
              <strong>5-Minuten-Vorwarnung:</strong> „In 5 Minuten ist Schluss" — und dann wirklich
              in 5 Minuten. Keine Verlängerungen, keine Ausnahmen. Verlässlichkeit ist entscheidend.
            </li>
            <li>
              <strong>Abschluss-Ritual:</strong> Gerät gemeinsam weglegen, kurz erzählen was gespielt
              wurde, dann sofort zur nächsten Aktivität übergehen. Keine leere Übergangszeit.
            </li>
            <li>
              <strong>Nächste Aktivität direkt anbieten:</strong> „Gleich ist Schluss — danach essen
              wir zusammen." Ein konkreter Anschluss reduziert den Widerstand erheblich.
            </li>
            <li>
              <strong>Timer sichtbar machen:</strong> Stellt einen sichtbaren Countdown auf — wenn
              das Kind sehen kann, wie viel Zeit noch verbleibt, sinkt die Frustration beim Beenden.
            </li>
          </ul>

          <h2>ADHS-gerechte Lern-Apps: Was zu beachten ist</h2>
          <p>
            Für den Lernbereich gilt: Kurze Einheiten, klare Regeln, kein Autoplay. Eine Lern-App
            für ADHS-Kinder sollte nach der Übungseinheit von selbst aufhören — nicht weiterlaufen
            und zur nächsten Einheit locken. Fortschritt sollte sichtbar, aber nicht aufdringlich
            sein. Das Kind soll das Gerät mit einem Erfolgserlebnis weglegen, nicht mit dem Gefühl,
            aufgehört zu haben bevor es fertig war.
          </p>

          <h2>Häufige Fragen zu Medienkompetenz und ADHS</h2>

          <h3>Warum sind Kinder mit ADHS anfälliger für Mediensucht?</h3>
          <p>
            Das veränderte Dopaminsystem bei ADHS sucht aktiv nach sofortigen Belohnungsreizen —
            und genau das liefern YouTube, TikTok und Spiele in unbegrenzter Menge. Gleichzeitig
            fällt Selbstregulation (aufhören, wenn es Zeit ist) bei ADHS grundsätzlich schwerer.
          </p>

          <h3>Wie viel Bildschirmzeit ist für Kinder mit ADHS sinnvoll?</h3>
          <p>
            Aktive Lernzeit mit strukturierten Apps: 15–20 Minuten täglich sind wirksamer als lange
            Sessions. Passiver Konsum sollte klar begrenzt und zeitlich getrennt von Lernzeit sein.
            Wichtiger als die Minutenzahl ist die Qualität der Nutzung.
          </p>

          <h3>Wie helfe ich meinem Kind beim Beenden der Medienzeit?</h3>
          <p>
            5-Minuten-Vorwarnung, dann ein kurzes Abschluss-Ritual (Gerät gemeinsam weglegen,
            kurz erzählen was gespielt wurde) und sofort zur nächsten Aktivität übergehen.
            Sichtbare Timer reduzieren die Frustration beim Beenden erheblich.
          </p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/bildschirmzeit-konzentration" className="text-adhasi-green underline text-sm font-semibold">Bildschirmzeit & Konzentration</Link>
            <Link href="/ratgeber/digitale-hilfsmittel-adhs" className="text-adhasi-green underline text-sm font-semibold">Digitale Hilfsmittel für ADHS</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: ADHS-gerechte Lerneinheiten ohne Ablenkung
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber" className="text-adhasi-green font-semibold hover:underline text-sm">← Alle Artikel</Link>
            <Link href="/ratgeber/bildschirmzeit-konzentration" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Bildschirmzeit →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
