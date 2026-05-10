import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB für die ADHaSi-App — OneTitel / Oliver M. Müller, Kirchweiler.',
  path: '/agb',
  noIndex: true,
})

export default function AGBPage() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-sm text-neutral-500">
          Stand: April 2026 · OneTitel – Digital &amp; Business Solutions / Oliver M. Müller,
          Am Bruchborn 6, 54570 Kirchweiler
        </p>

        <h2>§ 1 Geltungsbereich</h2>
        <p>
          Diese AGB gelten für die Nutzung der ADHaSi-App (Android, iOS) sowie der Website adhasi.de,
          betrieben von OneTitel – Digital &amp; Business Solutions, Oliver M. Müller, Am Bruchborn 6,
          54570 Kirchweiler (nachfolgend „ADHaSi"). Mit der Nutzung der App akzeptiert der Nutzer diese AGB.
        </p>

        <h2>§ 2 Leistungsbeschreibung</h2>
        <p>
          ADHaSi ist eine Lern-App für Kinder mit ADHS im
          Alter von 8–16 Jahren. Die App bietet KI-gestützte Übungen, Fortschrittsanalysen und ein
          Eltern-Dashboard. ADHaSi ist kein Ersatz für eine therapeutische Behandlung oder schulische
          Förderung.
        </p>

        <h2>§ 3 Registrierung und Nutzerkonto</h2>
        <p>
          3.1 Die vollständige Nutzung erfordert ein Eltern-Konto (E-Mail + Passwort). Anonyme
          Testnutzung (7-Tage-Trial) ist ohne Registrierung möglich.
        </p>
        <p>
          3.2 Der Nutzer muss erziehungsberechtigt sein oder die Zustimmung der
          Erziehungsberechtigten eingeholt haben.
        </p>
        <p>3.3 Zugangsdaten sind vertraulich zu behandeln.</p>
        <p>3.4 ADHaSi behält sich vor, Konten bei AGB-Verstößen zu sperren.</p>

        <h2>§ 4 Abonnement und Zahlung (In-App-Käufe)</h2>
        <p>4.1 ADHaSi bietet folgende Modelle:</p>
        <ul>
          <li>
            <strong>7-Tage-Trial:</strong> kostenlos, voller Funktionsumfang, einmalig pro Gerät
          </li>
          <li>
            <strong>ADHaSi Pro Monatlich:</strong> Preis gemäß aktuellem Store-Listing
          </li>
          <li>
            <strong>ADHaSi Pro Jährlich:</strong> Preis gemäß aktuellem Store-Listing
          </li>
        </ul>
        <p>
          4.2 Zahlungen werden ausschließlich über Google Play Billing (Android) bzw. Apple App Store
          (iOS) abgewickelt. ADHaSi hat keinen Zugriff auf Zahlungsdaten.
        </p>
        <p>
          4.3 Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende
          des Abrechnungszeitraums gekündigt werden.
        </p>
        <p>4.4 Kündigung: ausschließlich über Google Play bzw. App Store Einstellungen.</p>
        <p>4.5 Preisänderungen werden mindestens 30 Tage vorab per E-Mail angekündigt.</p>

        <h2>§ 5 Widerrufsrecht</h2>
        <p>
          Das Widerrufsrecht für digitale Inhalte erlischt mit ausdrücklicher Zustimmung des Nutzers
          zum sofortigen Beginn der Leistungserbringung. Bei In-App-Käufen über Google Play / App Store
          gelten zusätzlich die jeweiligen Store-Bedingungen.
        </p>

        <h2>§ 6 Besondere Pflichten bei Kindernutzung (DSGVO Art. 8)</h2>
        <p>
          6.1 ADHaSi richtet sich an Kinder unter 16 Jahren. Die Registrierung und Einwilligung zur
          Datenverarbeitung erfordert die Zustimmung eines Erziehungsberechtigten.
        </p>
        <p>
          6.2 Erziehungsberechtigte sind verantwortlich für die Aufsicht der Nutzung durch das Kind.
        </p>
        <p>
          6.3 Kinderdaten werden ausschließlich zur Lernpersonalisierung verwendet, nicht zu
          Werbezwecken.
        </p>

        <h2>§ 7 Designed for Families (Google Play)</h2>
        <p>
          ADHaSi erfüllt die Anforderungen des Google Play „Designed for Families"-Programms:
        </p>
        <ul>
          <li>Keine verhaltensbasierte Werbung</li>
          <li>Keine Social-Media-Integration</li>
          <li>Kindgerechte Inhalte gemäß COPPA/DSGVO Art. 8</li>
          <li>Elterliche Kontrolle über Lernfortschritt und Einstellungen</li>
        </ul>

        <h2>§ 8 Nutzungsrechte und geistiges Eigentum</h2>
        <p>
          Alle Inhalte der App (Übungen, Texte, Grafiken, KI-generierte Inhalte) sind
          urheberrechtlich geschützt. Eine Vervielfältigung oder kommerzielle Nutzung ist ohne
          Genehmigung untersagt.
        </p>

        <h2>§ 9 Haftungsausschluss</h2>
        <p>9.1 ADHaSi haftet nicht für den Lernerfolg des Kindes.</p>
        <p>
          9.2 KI-generierte Übungsinhalte werden vor Veröffentlichung validiert, können aber Fehler
          enthalten. Eltern werden gebeten, auffällige Inhalte zu melden.
        </p>
        <p>
          9.3 Bei einfacher Fahrlässigkeit ist die Haftung auf vorhersehbare vertragstypische Schäden
          begrenzt.
        </p>
        <p>
          9.4 Die Gesamthaftung ist auf den in den letzten 12 Monaten gezahlten Betrag begrenzt.
        </p>

        <h2>§ 10 Datenschutz</h2>
        <p>
          Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung unter{' '}
          <a href="/datenschutz">adhasi.de/datenschutz</a>, die Bestandteil dieser AGB ist.
        </p>

        <h2>§ 11 Änderungen der AGB</h2>
        <p>
          Änderungen werden mindestens 30 Tage vorab per E-Mail angekündigt. Widerspruch innerhalb
          von 30 Tagen möglich.
        </p>

        <h2>§ 12 Kündigung</h2>
        <p>
          Abonnements können jederzeit über den jeweiligen App Store gekündigt werden. Die
          Datenlöschung kann per E-Mail an{' '}
          <a href="mailto:datenschutz@adhasi.de">datenschutz@adhasi.de</a> beantragt
          werden.
        </p>

        <h2>§ 13 Anzuwendendes Recht</h2>
        <p>Es gilt deutsches Recht. Gerichtsstand ist Köln für kaufmännische Nutzer.</p>

        <h2>§ 14 Salvatorische Klausel</h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden,
          berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen
          Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen
          Bestimmung am nächsten kommt.
        </p>
      </div>
    </section>
  )
}
