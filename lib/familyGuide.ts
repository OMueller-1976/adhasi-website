export interface FamilyGuidePage {
  slug: string
  href: string
  icon: string
  title: string
  teaser: string
  readingTime: string
  tool: string
  toolAnchor: string
}

export const FAMILY_GUIDE_HUB = '/ratgeber/familienalltag-adhs'

export const familyGuidePages: FamilyGuidePage[] = [
  {
    slug: 'adhs-beim-kind-verstehen',
    href: '/ratgeber/familienalltag-adhs/adhs-beim-kind-verstehen',
    icon: '🔍',
    title: 'ADHS beim Kind verstehen',
    teaser:
      'Was hinter dem Verhalten steckt, warum Schimpfen selten hilft und wie ein Beobachtungsbogen Gespräche mit Schule und Praxis erleichtert.',
    readingTime: '7 min',
    tool: 'Alltags-Beobachtungsbogen',
    toolAnchor: 'beobachtungsbogen',
  },
  {
    slug: 'routinen-wochenplan',
    href: '/ratgeber/familienalltag-adhs/routinen-wochenplan',
    icon: '🗓️',
    title: 'Routinen und Wochenplan bei ADHS',
    teaser:
      'Feste Abläufe am Morgen und Abend, ein sichtbarer Wochenplan und weniger Dauerstreit um Kleinigkeiten.',
    readingTime: '6 min',
    tool: 'Wochenplan für die Familie',
    toolAnchor: 'wochenplan',
  },
  {
    slug: 'punkteplan',
    href: '/ratgeber/familienalltag-adhs/punkteplan',
    icon: '⭐',
    title: 'Punkteplan bei ADHS',
    teaser:
      'Wie ein Punkte- und Belohnungssystem Motivation im Alltag unterstützen kann und worauf Sie dabei achten sollten.',
    readingTime: '6 min',
    tool: 'Punkteplan',
    toolAnchor: 'punkteplan-tool',
  },
  {
    slug: 'eltern-entlastung',
    href: '/ratgeber/familienalltag-adhs/eltern-entlastung',
    icon: '💛',
    title: 'Eltern entlasten und Beziehung stärken',
    teaser:
      'Eigenen Stress ernst nehmen, positive Momente sichtbar machen und die Beziehung zum Kind stärken.',
    readingTime: '7 min',
    tool: 'Positivtagebuch',
    toolAnchor: 'positivtagebuch',
  },
  {
    slug: 'regeln-wochenjobs',
    href: '/ratgeber/familienalltag-adhs/regeln-wochenjobs',
    icon: '🧭',
    title: 'Liebevoll und konsequent: Regeln und Wochenjobs',
    teaser:
      'Klare Regeln, kleine Aufgaben und verlässliche Konsequenzen: So üben Kinder Schritt für Schritt Verantwortung.',
    readingTime: '6 min',
    tool: 'Jobs der Woche',
    toolAnchor: 'wochenjobs',
  },
]
