import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHaSi Begleiter – Support',
  description:
    'Hilfe und Kontakt zur iOS-App ADHaSi Begleiter: Pro-Kauf, Kauf wiederherstellen, Arzttermin-Mappe, Datenschutz.',
  path: '/begleiter-support',
})

export default function BegleiterSupportPage() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
        <h1>ADHaSi Begleiter – Support</h1>
        <p>
          „ADHaSi Begleiter“ ist die iOS-App für Erwachsene mit ADHS: Tagebuch, Fokus-Timer,
          Atemübungen und Muster-Analyse. Hier findest du Antworten auf häufige Fragen und den
          Kontakt zu uns.
        </p>

        <h2>Kontakt</h2>
        <p>
          Schreib uns an <a href="mailto:support@adhasi.de">support@adhasi.de</a>. Wir antworten in
          der Regel innerhalb von zwei Werktagen. Bitte nenne uns deine iOS-Version und – falls
          vorhanden – die angezeigte Fehlermeldung.
        </p>

        <h2>Häufige Fragen</h2>

        <h3>Was kostet ADHaSi Begleiter Pro?</h3>
        <p>
          Pro ist ein <strong>Einmalkauf (19,99 €)</strong> und kein Abo. Es entstehen keine
          weiteren Kosten. Pro schaltet zusätzliche Tools frei: Routinen, Zeitgefühl, Gewohnheiten,
          Fokus-Klänge und die Arzttermin-Mappe.
        </p>

        <h3>Der Kauf funktioniert nicht oder der Button ist grau</h3>
        <ul>
          <li>Prüfe deine Internetverbindung und tippe in der App auf „Erneut laden“.</li>
          <li>
            Prüfe in den iOS-Einstellungen, ob du mit deiner Apple-ID angemeldet bist und Käufe
            erlaubt sind (Bildschirmzeit → Inhalts- &amp; Datenschutzbeschränkungen → iTunes- &amp;
            App Store-Käufe).
          </li>
          <li>
            Der Kauf ist derzeit in Deutschland, Österreich, der Schweiz, den USA und Kanada
            verfügbar.
          </li>
          <li>Starte die App neu und versuche es erneut. Sonst schreib uns kurz.</li>
        </ul>

        <h3>Ich habe Pro schon gekauft und es ist nicht freigeschaltet</h3>
        <p>
          Öffne in der App einen gesperrten Bereich und tippe auf <strong>„Kauf wiederherstellen“</strong>.
          Verwende dafür dieselbe Apple-ID wie beim Kauf. Der Kauf gilt für alle Geräte mit dieser
          Apple-ID.
        </p>

        <h3>Wie erstelle ich die Arzttermin-Mappe?</h3>
        <p>
          In der App unter „Arzttermin-Mappe“ die gewünschten Einträge auswählen und als PDF
          teilen. Das PDF wird lokal auf deinem Gerät erzeugt. Ob und wohin du es teilst, bestimmst
          allein du.
        </p>

        <h3>Wo werden meine Daten gespeichert?</h3>
        <p>
          Deine Einträge (Tagebuch, Stimmung, Routinen, Notizen) liegen ausschließlich auf deinem
          Gerät. Die App benötigt kein Benutzerkonto. Wenn du die App löschst, werden die lokalen
          Daten mit entfernt. Details findest du in der{' '}
          <Link href="/datenschutz">Datenschutzerklärung</Link> (Abschnitt 3.4).
        </p>

        <h3>Ersetzt die App eine ärztliche oder therapeutische Behandlung?</h3>
        <p>
          Nein. ADHaSi Begleiter ist ein Alltagswerkzeug. Es ist keine medizinische Leistung, enthält
          kein Heilversprechen und ersetzt keine ärztliche oder therapeutische Behandlung.
        </p>

        <h3>Rückerstattung</h3>
        <p>
          Käufe werden von Apple abgewickelt. Eine Rückerstattung beantragst du direkt bei Apple
          unter <a href="https://reportaproblem.apple.com" rel="noopener noreferrer">reportaproblem.apple.com</a>.
        </p>

        <h2>Rechtliches</h2>
        <p>
          <Link href="/datenschutz">Datenschutz</Link> · <Link href="/impressum">Impressum</Link> ·{' '}
          <Link href="/agb">AGB</Link>
        </p>
      </div>
    </section>
  )
}
