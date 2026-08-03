import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Motivation bei ADHS und Schulfrust – Wie Eltern ihr Kind begleiten',
  description:
    'Warum ADHS-Kinder häufig Schulfrust erleben und wie Motivation entsteht — mit Tipps für Verweigerung und den Schulalltag.',
  path: '/ratgeber/motivation-bei-schulfrust',
})

export default function MotivationBeiSchulfrustPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Motivation aufbauen bei Schulfrust',
          description: 'Lernmotivation und Selbstwirksamkeit stärken bei Kindern mit ADHS.',
          path: '/ratgeber/motivation-bei-schulfrust',
          datePublished: '2025-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Motivation bei Schulfrust', path: '/ratgeber/motivation-bei-schulfrust' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Warum verlieren Kinder mit ADHS die Lernmotivation?', answer: 'Weil das Verhältnis zwischen Aufwand und Ergebnis dauerhaft ungünstig ist: ADHS-Kinder investieren viel Energie und erhalten trotzdem schlechtere Ergebnisse als Mitschüler. Das führt zu erlernter Hilflosigkeit — dem Gefühl, dass Anstrengung sinnlos ist.' },
          { question: 'Helfen Belohnungssysteme bei ADHS-Kindern?', answer: 'Kurzfristig ja, langfristig nur wenn sie Kompetenzerleben auslösen. Belohnungen für Anstrengung (nicht Ergebnisse) und für erreichbare Schritte sind wirksamer als allgemeine Lobreize.' },
          { question: 'Was tun wenn das Kind Hausaufgaben komplett verweigert?', answer: 'Nicht eskalieren. Kurze Pause gewähren, dann ruhig zurückkehren. Aufgabe auf ein erreichbares Minimum reduzieren. Hinter der Verweigerung steckt meistens die Angst vor erneutem Scheitern — nicht Trotz.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Motivation bei Schulfrust</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🚀</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Motivation bei ADHS und Schulfrust – Wie Eltern ihr Kind begleiten
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Wenn Lernen täglich mit Anstrengung und Misserfolg verbunden ist, erlöscht die
            Lernfreude — manchmal langsam, manchmal plötzlich. Wie Eltern gegensteuern können,
            ohne Druck aufzubauen.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum ADHS-Kinder besonders oft Schulfrust entwickeln</h2>
          <p>
            Die Schule ist ein Ort, an dem Lesen und Schreiben in fast jedem Fach gebraucht werden.
            Für Kinder mit ADHS ist das keine selbstverständliche Grundlage, sondern täglich zu
            überwindende Hürde. Aus jeder Lesekontrolle, jedem Diktat und jeder Aufsatzaufgabe
            entsteht die Gelegenheit für eine Frustrationserfahrung.
          </p>
          <p>
            Besonders problematisch ist das Verhältnis zwischen Aufwand und Ergebnis: ADHS-Kinder
            lernen oft stundenlang für ein Diktat und schreiben trotzdem mehr Fehler als Mitschüler,
            die kaum gelernt haben. Die logische Schlussfolgerung aus Kinderperspektive:
            "Egal wie sehr ich mich anstrenge — es nützt nichts." Psychologen nennen das
            <strong> erlernte Hilflosigkeit</strong>, einen Zustand, in dem das Kind aufhört,
            Zusammenhänge zwischen eigenem Handeln und Ergebnissen zu sehen.
          </p>

          <h2>Intrinsische vs. extrinsische Motivation</h2>
          <p>
            Nicht alle Motivation ist gleich wertvoll. Die Motivationspsychologie unterscheidet:
          </p>
          <ul>
            <li>
              <strong>Extrinsische Motivation:</strong> Das Kind tut etwas, um eine externe
              Belohnung zu erhalten oder eine Strafe zu vermeiden. Noten, Lob von Erwachsenen,
              Taschengeld, Bildschirmzeit. Funktioniert kurzfristig gut, hält aber nicht stabil.
            </li>
            <li>
              <strong>Intrinsische Motivation:</strong> Das Kind tut etwas, weil es selbst Interesse
              daran hat, sich kompetent fühlt und Autonomie erlebt. Stabiler, nachhaltiger und
              mit besseren Lernergebnissen verbunden.
            </li>
          </ul>
          <p>
            Das Ziel ist nicht, extrinsische Motivatoren völlig zu vermeiden — Belohnungssysteme
            in Maßen können sinnvoll sein — sondern langfristig den Übergang zu intrinsischer
            Motivation zu unterstützen. Ein Kind, das ADHaSi spielt, weil es die Fortschrittsanzeige
            liebt, übt trotzdem Konzentration und Selbststeuerung — und kann dabei langsam erleben, dass es
            besser wird. Dieses Erleben von Kompetenz ist der erste Schritt zur intrinsischen Motivation.
          </p>

          <h2>Selbstwirksamkeit — der Schlüsselbegriff</h2>
          <p>
            Der Psychologe Albert Bandura prägte den Begriff <strong>Selbstwirksamkeitserwartung</strong>:
            die Überzeugung eines Menschen, dass er durch sein eigenes Handeln Ergebnisse beeinflussen
            kann. Kinder mit hoher Selbstwirksamkeit geben bei Schwierigkeiten nicht auf, suchen
            nach Lösungen und erholen sich schneller von Misserfolgen.
          </p>
          <p>
            Für ADHS-Kinder ist Selbstwirksamkeit erschüttert — nicht durch Schwäche, sondern durch
            Erfahrung. Der Wiederaufbau gelingt nur durch echte Erfolgserlebnisse, keine
            aufgemunternden Worte. Das Kind muss tatsächlich etwas schaffen, das es bisher nicht
            konnte — egal wie klein.
          </p>

          <h2>Kleine Erfolge sichtbar machen</h2>

          <h3>Fortschritts-Messungen statt Noten</h3>
          <p>
            Noten vergleichen das Kind mit einem Klassendurchschnitt — für ein ADHS-Kind fast immer
            frustrierend. Eltern können stattdessen individuelle Fortschrittsmessung einführen:
            "Du hast letzte Woche 7 von 10 Wörtern mit ck richtig geschrieben. Diese Woche sind es
            9 von 10." Dieser Vergleich mit der eigenen Vorwoche ist motivierender als jede Note.
          </p>

          <h3>Aufgaben in Stufen aufteilen</h3>
          <p>
            Eine große Aufgabe wie "übe Diktat" ist abstrakt und bedrohlich. Aufgeteilt in kleine
            Schritte — "lies heute 5 Wörter mit ck laut vor" — wird sie bewältigbar. Jeder erledigte
            Schritt ist ein echter Erfolg, der das Belohnungszentrum aktiviert und Weitermachen
            motiviert.
          </p>

          <h3>Das Fortschritts-Heft</h3>
          <p>
            Ein einfaches Heft, in dem Kind und Elternteil gemeinsam eintragen, was heute neu
            gelernt oder besser gemacht wurde. Kein Fokus auf Fehler — nur auf Fortschritt.
            Nach einigen Wochen ist das Heft ein sichtbarer Beleg dafür, dass Lernen wirkt.
          </p>

          <h2>Was tun bei Verweigerung?</h2>
          <p>
            Manchmal reagiert ein Kind auf Lernaufforderungen mit komplettem Rückzug: "Ich mach das
            nicht", Wutausbrüche, Weinen oder stumme Verweigerung. Das ist kein Trotz, sondern ein
            Signal — meist von Überforderung, Erschöpfung oder tief sitzender Frustration.
          </p>
          <h3>Nicht eskalieren</h3>
          <p>
            Ein Machtkampf über Hausaufgaben macht das Kind nicht lernwilliger, sondern verknüpft
            Lernen mit Konflikt. Besser: kurze Auszeit gewähren ("Wir machen in 15 Minuten weiter"),
            dann ruhig und ohne Druck zurückkehren.
          </p>
          <h3>Hinter die Verweigerung schauen</h3>
          <p>
            Oft steckt hinter "Ich will nicht" ein "Ich schaffe das nicht und möchte nicht wieder
            scheitern." Ein ruhiges Gespräch — nicht über Hausaufgaben, sondern über das Gefühl
            dahinter — kann den Knoten lösen. "Du wirkst gerade ziemlich erschöpft davon.
            Was ist das Schwerste daran?"
          </p>
          <h3>Aufgaben anpassen statt beharren</h3>
          <p>
            Manchmal ist die Aufgabe einfach zu groß für diesen Tag. Eine Rechtschreibübung
            von 20 Wörtern auf 5 zu kürzen ist keine Kapitulation — es ist Förderplanung.
            Ein Kind, das 5 Wörter übt und danach stolz ist, lernt mehr als eines, das an 20
            Wörtern scheitert und aufgibt.
          </p>

          <h2>Häufige Fragen zu Lernmotivation und Schulfrust</h2>

          <h3>Warum verlieren Kinder mit ADHS die Lernmotivation?</h3>
          <p>Weil das Verhältnis zwischen Aufwand und Ergebnis dauerhaft ungünstig ist: ADHS-Kinder investieren viel Energie und erhalten trotzdem schlechtere Ergebnisse als Mitschüler. Das führt zu erlernter Hilflosigkeit — dem Gefühl, dass Anstrengung sinnlos ist.</p>

          <h3>Helfen Belohnungssysteme bei ADHS-Kindern?</h3>
          <p>Kurzfristig ja — langfristig nur wenn sie echtes Kompetenzerleben auslösen. Belohnungen für Anstrengung (nicht Ergebnisse) und für erreichbare kleine Schritte sind wirksamer als allgemeine Lobreize.</p>

          <h3>Was tun, wenn das Kind Hausaufgaben komplett verweigert?</h3>
          <p>Nicht eskalieren. Kurze Pause gewähren, dann ruhig zurückkehren. Aufgabe auf ein erreichbares Minimum reduzieren. Hinter der Verweigerung steckt meistens Angst vor erneutem Scheitern — nicht Trotz.</p>

          <h2>Die Rolle der Eltern: Begleitung statt Druck</h2>
          <p>
            Der wichtigste Motivator für Kinder ist nicht die Lern-App, nicht der Förderlehrer und
            nicht das Belohnungssystem — es sind die Eltern. Kinder lernen eher und besser, wenn
            sie spüren: "Meine Eltern glauben an mich. Sie sind auf meiner Seite, nicht auf der
            Seite der Noten."
          </p>
          <p>
            Das bedeutet: Weniger Fragen nach Ergebnissen, mehr Interesse am Prozess. Nicht
            "Was hast du heute in der Schule falsch gemacht?", sondern "Was war heute interessant?"
            oder "Worüber habt ihr heute in Sachkunde geredet?" ADHS ist ein Teil des Kindes —
            aber es ist nicht das Wichtigste, über das geredet wird.
          </p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/positive-erziehung-bei-lernschwierigkeiten" className="text-adhasi-green underline text-sm font-semibold">Positive Erziehung bei ADHS</Link>
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green underline text-sm font-semibold">Selbstwert stärken</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Lernfortschritt sichtbar machen
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/positive-erziehung-bei-lernschwierigkeiten" className="text-adhasi-green font-semibold hover:underline text-sm">← Positive Erziehung</Link>
            <Link href="/ratgeber/kommunikation-mit-adhs-kind" className="text-adhasi-green font-semibold hover:underline text-sm">Weiter: Mit Kind sprechen →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
