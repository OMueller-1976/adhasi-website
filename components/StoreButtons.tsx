import Image from 'next/image'

const APP_STORE_URL =
  'https://apps.apple.com/de/app/adhasi-lern-app-f%C3%BCr-adhs/id6766468944'


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
        href="https://play.google.com/store/apps/details?id=de.adhasi.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ADHaSi bei Google Play herunterladen"
      >
        <img
          src="/badge-googleplay.png"
          alt="Get it on Google Play"
          width={140}
          height={42}
          style={{ display: 'block' }}
        />
      </a>
    </div>
  )
}
