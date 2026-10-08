import Link from 'next/link'
import type { Metadata } from 'next'
import AdultArticleShell from '@/components/AdultArticleShell'
import ToolCard from '@/components/tools/ToolCard'
import AufgabenZerleger from '@/components/tools/AufgabenZerleger'
import { defaultMetadata } from '@/lib/seo'

const PATH = '/ratgeber/erwachsene/visualisierung'

export const metadata: Metadata = defaultMetadata({
  title: 'Visualisierung bei ADHS — Mindmap, Wochenplan & Aufgaben-Zerleger',
  description:
    'Wie Visualisierung Erwachsenen mit ADHS im Alltag hilft: Mindmaps, Wochenplan, Kanban und Checklisten. Mit kostenlosem Tool, das große Aufgaben in Schritte zerlegt.',
  path: PATH,
})

const faq = [
  {
    question: 'Welche Visualisierung eignet sich bei ADHS?',
    answer:
      'Bewährt haben sich ein sichtbarer Wochenplan, Checklisten, einfache Mindmaps für Ideen und ein Kanban-Board mit den Spalten Offen, In Arbeit und Erledigt. Wichtig ist, dass die Darstellung dort hängt oder liegt, wo Sie sie täglich sehen, und dass sie nicht überladen ist.',
  },
  {
    question: 'Wie fange ich bei einer großen Aufgabe an?',
    answer:
      'Zerlegen Sie die Aufgabe in kleine Schritte, die jeweils nur wenige Minuten dauern, und beginnen Sie mit dem kleinsten. Sobald der erste Schritt erledigt ist, fällt der nächste meist leichter.',
  },
  {
    question: 'Warum helfen sichtbare Pläne bei ADHS?',
    answer:
      'Was nur im Kopf gehalten wird, belastet das Arbeitsgedächtnis. Sichtbare Pläne und Erinnerungen nehmen diese Last ab und machen Fortschritte sichtbar, was die Motivation unterstützt.',
  },
]

export default function VisualisierungPage() {
  return (
    <AdultArticleShell
      icon="🗺️"
      title="Visualisierung bei ADHS — Mindmap, Wochenplan und Aufgaben-Zerleger"
      breadcrumbLabel="Visualisierung"
      intro="Was Sie sehen, behalten Sie im Blick. Visuelle Hilfsmittel entlasten das Arbeitsgedächtnis und machen aus einem unübersichtlichen Berg einzelne, greifbare Schritte."
      description="Visualisierung bei ADHS: Mindmaps, Wochenplan, Kanban und Checklisten für Erwachsene, plus Tool zum Zerlegen großer Aufgaben."
      path={PATH}
      readingTime="6 min"
      faq={faq}
      prev={{ href: '/ratgeber/erwachsene/bewegung', label: 'Bewegung' }}
      next={{ href: '/ratgeber/erwachsene/achtsamkeit', label: 'Achtsamkeit' }}
      tool={
        <ToolCard
          id="aufgaben-zerleger"
          title="Aufgaben-Zerleger: Große Aufgaben in kleine Schritte teilen"
          description="Tragen Sie eine Aufgabe ein, zerlegen Sie sie in kleine Schritte und haken Sie sie ab. Der Fortschrittsbalken zeigt, wie weit Sie schon sind."
        >
          <AufgabenZerleger />
        </ToolCard>
      }
    >
      <h2>Warum Visualisierung bei ADHS hilft</h2>
      <p>
        Viele Menschen mit ADHS berichten, dass Dinge „aus dem Sinn“ sind, sobald sie aus dem Blick
        geraten. Visuelle Hilfsmittel setzen genau hier an: Sie verlagern Informationen aus dem Kopf
        nach außen. Das entlastet das Arbeitsgedächtnis und senkt die mentale Grundlast, die
        entsteht, wenn man ständig versucht, alles gleichzeitig im Kopf zu behalten.
      </p>
      <p>
        Zudem machen Bilder, Farben und Strukturen komplexe Zusammenhänge schneller erfassbar als
        lange Textlisten. Das hilft bei der Planung und beim Treffen von Entscheidungen.
      </p>

      <h2>Bewährte Methoden im Überblick</h2>
      <ul>
        <li><strong>Mindmap:</strong> Ideen und Zusammenhänge frei sammeln, bevor Sie sortieren. Gut für Projektstart und Brainstorming.</li>
        <li><strong>Wochenplan an der Wand:</strong> Termine und feste Aufgaben auf einen Blick, dort aufgehängt, wo Sie täglich vorbeikommen.</li>
        <li><strong>Kanban-Board:</strong> drei Spalten (Offen, In Arbeit, Erledigt) mit Haftnotizen. Das Verschieben in die letzte Spalte belohnt.</li>
        <li><strong>Checklisten:</strong> für wiederkehrende Abläufe wie Morgenroutine, Wocheneinkauf oder Reisepacken.</li>
        <li><strong>Farben als Orientierung:</strong> eine Farbe pro Lebensbereich, aber sparsam, damit es nicht unruhig wird.</li>
      </ul>

      <h2>Große Aufgaben in Schritte zerlegen</h2>
      <p>
        Eine Aufgabe wie „Steuererklärung machen“ wirkt wie ein einziger riesiger Block, und genau
        deshalb fällt der Anfang schwer. Zerlegt in Schritte sieht sie anders aus:
      </p>
      <ol>
        <li>Ordner und Belege auf den Tisch legen (fünf Minuten)</li>
        <li>Belege nach Kategorien sortieren</li>
        <li>Zugangsdaten für das Online-Portal heraussuchen</li>
        <li>Einen Abschnitt des Formulars ausfüllen</li>
        <li>Fehlende Belege notieren und anfordern</li>
      </ol>
      <p>
        Wichtig ist, dass der erste Schritt klein genug ist, um ihn auch an einem schlechten Tag zu
        schaffen. Mit dem <a href="#aufgaben-zerleger">Aufgaben-Zerleger</a> unten können Sie das
        direkt ausprobieren.
      </p>

      <h2>Tipps für wirksame Visualisierung</h2>
      <ul>
        <li>Platzieren Sie Pläne sichtbar: am Kühlschrank, am Bildschirmrand oder an der Tür.</li>
        <li>Weniger ist mehr. Drei bis fünf Punkte pro Tag sind übersichtlicher als zwanzig.</li>
        <li>Machen Sie Fortschritt sichtbar, zum Beispiel durch Abhaken oder einen Balken.</li>
        <li>Überprüfen Sie wöchentlich, was noch passt, und räumen Sie Überholtes weg.</li>
      </ul>
      <p>
        Passende Vorlagen finden Sie in unseren <Link href="/arbeitsblaetter">kostenlosen
        Arbeitsblättern</Link>. Wie Sie visuelle Pläne mit festen Zeiten verbinden, lesen Sie im
        Artikel <Link href="/ratgeber/erwachsene/tagesstruktur">Tagesstruktur bei ADHS</Link>.
      </p>
    </AdultArticleShell>
  )
}
