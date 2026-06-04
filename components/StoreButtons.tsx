import Image from 'next/image'

const APP_STORE_URL =
  'https://apps.apple.com/de/app/adhasi-lern-app-f%C3%BCr-adhs/id6766468944'

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=de.adhasi.app'

export default function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ADHaSi im App Store herunterladen"
      >
        <Image
          src="/badge-appstore.svg"
          alt="Download on the App Store"
          width={140}
          height={42}
          priority
        />
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ADHaSi bei Google Play herunterladen"
      >
        <Image
          src="/badge-googleplay.svg"
          alt="Get it on Google Play"
          width={140}
          height={42}
          priority
        />
      </a>
    </div>
  )
}
