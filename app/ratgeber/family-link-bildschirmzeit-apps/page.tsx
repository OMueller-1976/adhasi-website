import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Google Family Link bei ADHS – Bildschirmzeit & Lernapps richtig einrichten',
  description:
    'Schritt-für-Schritt: Google Family Link und Apple Screen Time einrichten — sinnvolle Lernapp-Integration für ADHS-Kinder.',
  path: '/ratgeber/family-link-bildschirmzeit-apps',
})

export default function FamilyLinkPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Google Family Link bei ADHS – Bildschirmzeit & Lernapps richtig einrichten',
          description: 'Praktische Anleitung zu Google Family Link und Apple Screen Time für Eltern von ADHS-Kindern.',
          path: '/ratgeber/family-link-bildschirmzeit-apps',
          datePublished: '2025-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Family Link & Bildschirmzeit', path: '/ratgeber/family-link-bildschirmzeit-apps' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Ist Google Family Link kostenlos?', answer: 'Ja, Google Family Link ist komplett kostenlos und für Android-Geräte verfügbar. Die Eltern-App und die Kind-App sind beide kostenlos aus dem Google Play Store erhältlich.' },
          { question: 'Funktioniert Family Link auch auf iPhones?', answer: 'Google Family Link funktioniert nur auf Android-Geräten. Für iPhones und iPads bietet Apple eine eigene Lösung: Bildschirmzeit (Screen Time), die unter Einstellungen → Bildschirmzeit eingerichtet wird.' },
          { question: 'Kann mein Kind Family Link umgehen?', answer: 'Mit Internetzugang und technischem Know-how gibt es Wege. Deshalb ist es wichtig, Family Link gemeinsam mit dem Kind einzurichten und die Gründe zu erklären — Transparenz und gemeinsame Regelvereinbarung sind wirksamer als reine Kontrolle.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Family Link & Bildschirmzeit</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📲</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Google Family Link bei ADHS – Bildschirmzeit & Lernapps richtig einrichten
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Technische Elternkontrollen helfen, den Medienalltag zu strukturieren — aber nur, wenn
            sie gemeinsam mit dem Kind eingerichtet werden. Eine praktische Anleitung für Android
            und iOS, plus Tipps für den Alltag mit Lernapps.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum Elternkontrollen kein Ersatz für Gespräche sind</h2>
          <p>
            Bevor es ans Technische geht, ein wichtiger Hinweis: Keine App, keine Zeitbegrenzung
            und kein Filter ersetzt das Gespräch mit dem Kind über Mediennutzung. Kinder, die die
            Regeln nur durchsetzen lassen, ohne sie zu verstehen, suchen nach Wegen, sie zu umgehen.
            Kinder, die die Gründe kennen und die Regeln mitgestalten, halten sie besser ein.
          </p>
          <p>
            Der Ansatz: Tools wie Family Link oder Screen Time als gemeinsame Entscheidung einrichten —
            nicht als Überwachungsmaßnahme. Das Prinzip: "Wir richten das gemeinsam ein, damit wir
            alle einen klaren Rahmen haben."
          </p>

          <h2>Google Family Link: Einrichtung Schritt für Schritt</h2>
          <p>
            Family Link ist Googles kostenlose Elternkontrolllösung für Android-Geräte. Sie
            funktioniert über zwei Apps: "Family Link für Eltern" (auf dem Eltern-Smartphone) und
            "Family Link für Kinder" (auf dem Kindergerät).
          </p>

          <h3>Schritt 1: Google-Konto für das Kind anlegen</h3>
          <p>
            Unter 13-Jährige brauchen ein vom Elternteil beaufsichtigtes Google-Konto. Das geht
            direkt in der Family-Link-Eltern-App oder über myaccount.google.com. Ihr habt die Wahl:
            neues Konto anlegen oder ein bestehendes Konto in die Familiengruppe aufnehmen.
          </p>

          <h3>Schritt 2: Eltern-App installieren und Familiengruppe erstellen</h3>
          <p>
            "Google Family Link" aus dem Play Store herunterladen (Eltern-App, nicht Kind-App).
            Unter "Familie verwalten" → "Familienmitglied hinzufügen" das Kind-Konto verknüpfen.
            Eine Verknüpfungsanfrage geht an das Kindergerät.
          </p>

          <h3>Schritt 3: App-Zeitlimits und Inhaltsfilter</h3>
          <p>
            In der Eltern-App unter "Aktivität" → "App-Limits" könnt ihr für jede App ein
            Tageslimit setzen. Zum Beispiel: YouTube 30 Minuten täglich, ADHaSi unbegrenzt.
            Unter "Inhaltsbeschränkungen" → "Google Play" lassen sich App-Altersfreigaben setzen
            (empfehlenswert: max. Freigabe 12 Jahre für Grundschulkinder).
          </p>

          <h3>Schritt 4: Schlafenszeiten und Gerätezeit</h3>
          <p>
            Unter "Steuerelemente" → "Schlafenszeitenplan" lassen sich Zeiten festlegen, zu denen
            das Gerät gesperrt wird. Zum Beispiel: werktags ab 20:00 Uhr, wochenends ab 21:00 Uhr.
            Diese Funktion ist besonders hilfreich, weil Kinder wissen, dass nicht die Eltern,
            sondern das System sperrt — das reduziert Konflikte.
          </p>

          <h3>Schritt 5: Standortfunktion (optional)</h3>
          <p>
            Family Link erlaubt Eltern, den Standort des Kindes zu sehen. Diese Funktion ist
            für Schulwege nützlich — sollte aber transparent kommuniziert werden: "Das Telefon
            zeigt mir, wo du bist, damit ich weiß, dass du gut angekommen bist."
          </p>

          <h2>Apple Screen Time: Grundlagen für iOS</h2>
          <p>
            Auf iPhones und iPads läuft Apples Bildschirmzeit-Funktion (Screen Time). Einrichtung:
            Einstellungen → Bildschirmzeit → "Dieses Gerät ist ein Kindergerät" oder über
            Familien-Sharing in den Einstellungen.
          </p>
          <p>
            Zentrale Funktionen:
          </p>
          <ul>
            <li><strong>App-Limits:</strong> Zeitkontingente pro App-Kategorie (z. B. "Unterhaltung: 45 Minuten täglich")</li>
            <li><strong>Kommunikationslimits:</strong> Wer darf das Kind anrufen oder Nachrichten schicken?</li>
            <li><strong>Ruhezeiten:</strong> Zeitfenster, in denen nur ausgewählte Apps nutzbar sind</li>
            <li><strong>Inhalts- und Datenschutzbeschränkungen:</strong> App-Store-Käufe sperren, Webfilter aktivieren</li>
          </ul>
          <p>
            Wichtig: Der Screen-Time-Passcode sollte nicht das gleiche Passwort wie das reguläre
            Gerätekennwort sein — sonst ist die Funktion leicht umgehbar.
          </p>

          <h2>Lernapps sinnvoll einbinden</h2>
          <p>
            Für Kinder mit ADHS ist die Frage nicht nur, wie lange ein Kind am Bildschirm ist —
            sondern womit. Lernapps verdienen einen anderen Platz im Tagesplan als Freizeit-Apps.
          </p>
          <ul>
            <li>
              <strong>Lernzeit vor Freizeitzeit:</strong> Die Lern-App läuft zuerst, dann folgen
              Freizeit-Apps. In Family Link und Screen Time lässt sich die Reihenfolge nicht direkt
              erzwingen, aber die Eltern-App erlaubt, Freischaltungen manuell zu genehmigen.
            </li>
            <li>
              <strong>Lernapps aus App-Limits ausschließen:</strong> In Google Family Link können
              bestimmte Apps von Tageslimits ausgenommen werden. So kann ADHaSi unbegrenzt genutzt
              werden, während YouTube sein Limit hat.
            </li>
            <li>
              <strong>Fortschritte gemeinsam anschauen:</strong> Das Eltern-Dashboard in ADHaSi
              zeigt Lernfortschritt — ein wöchentlicher Check-in von 5 Minuten genügt, um
              Fortschritte anzuerkennen.
            </li>
          </ul>

          <h2>Häufige Fragen zu Family Link und Bildschirmzeit-Apps</h2>

          <h3>Ist Google Family Link kostenlos?</h3>
          <p>Ja, Google Family Link ist komplett kostenlos und für Android-Geräte verfügbar. Eltern-App und Kind-App sind beide kostenlos im Play Store erhältlich.</p>

          <h3>Funktioniert Family Link auch auf iPhones?</h3>
          <p>Google Family Link funktioniert nur auf Android. Für iPhones bietet Apple die eigene Lösung Bildschirmzeit (Screen Time) unter Einstellungen → Bildschirmzeit.</p>

          <h3>Kann mein Kind Family Link umgehen?</h3>
          <p>Mit technischem Know-how gibt es theoretische Wege. Deshalb ist es wichtig, Family Link gemeinsam mit dem Kind einzurichten — Transparenz und gemeinsame Regelvereinbarung sind wirksamer als reine Kontrolle.</p>

          <h2>Regeln gemeinsam vereinbaren</h2>
          <p>
            Ein Mediennutzungsplan, der mit dem Kind erarbeitet wurde, ist nachhaltiger als
            einer, der diktiert wird. Eine einfache Vorlage für das Familiengespräch:
          </p>
          <ul>
            <li>"Welche Apps magst du am liebsten? Warum?"</li>
            <li>"Wie lange fühlst du dich nach dem Spielen gut — und ab wann müde oder gereizt?"</li>
            <li>"Zu welchen Zeiten soll das Telefon aus sein?"</li>
            <li>"Was passiert, wenn du dich nicht an die Abmachung hältst?"</li>
          </ul>
          <p>
            Diesen Plan schriftlich festhalten — z. B. auf einer Postkarte am Kühlschrank.
            Kinder nehmen selbst geschriebene Regeln ernster als auferlegte.
          </p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/bildschirmzeit-konzentration" className="text-adhasi-green underline text-sm font-semibold">Bildschirmzeit & Konzentration</Link>
            <Link href="/ratgeber/medienkompetenz-bei-adhs" className="text-adhasi-green underline text-sm font-semibold">Medienkompetenz bei ADHS</Link>
            <Link href="/ratgeber/digitale-hilfsmittel-adhs" className="text-adhasi-green underline text-sm font-semibold">Digitale Hilfsmittel</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Lernzeit sinnvoll gestalten
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/kommunikation-mit-adhs-kind" className="text-adhasi-green font-semibold hover:underline text-sm">← Mit Kind sprechen</Link>
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Selbstwert stärken →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
