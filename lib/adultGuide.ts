export interface AdultGuidePage {
  slug: string
  href: string
  icon: string
  title: string
  teaser: string
  readingTime: string
  tool: string
  toolAnchor: string
}

export const ADULT_GUIDE_HUB = '/ratgeber/erwachsene'

export const adultGuidePages: AdultGuidePage[] = [
  {
    slug: 'tagesstruktur',
    href: '/ratgeber/erwachsene/tagesstruktur',
    icon: '🗓️',
    title: 'Tagesstruktur bei ADHS',
    teaser:
      'Feste Anker, Prioritäten und Pufferzeiten: So wird ein Tagesablauf zum verlässlichen Rahmen statt zum Dauerstress.',
    readingTime: '6 min',
    tool: 'Eisenhower-Matrix',
    toolAnchor: 'eisenhower-matrix',
  },
  {
    slug: 'bewegung',
    href: '/ratgeber/erwachsene/bewegung',
    icon: '🏃',
    title: 'Bewegung und Sport bei ADHS',
    teaser:
      'Warum Bewegung entlasten kann, welche Sportarten sich anbieten und wie Sie kleine Bewegungspausen fest einplanen.',
    readingTime: '6 min',
    tool: 'Fokus-Timer mit Bewegungspause',
    toolAnchor: 'fokus-timer',
  },
  {
    slug: 'visualisierung',
    href: '/ratgeber/erwachsene/visualisierung',
    icon: '🗺️',
    title: 'Visualisierung bei ADHS',
    teaser:
      'Mindmaps, Wochenpläne und Checklisten: Was sichtbar ist, bleibt im Kopf und entlastet das Arbeitsgedächtnis.',
    readingTime: '6 min',
    tool: 'Aufgaben-Zerleger',
    toolAnchor: 'aufgaben-zerleger',
  },
  {
    slug: 'achtsamkeit',
    href: '/ratgeber/erwachsene/achtsamkeit',
    icon: '🧘',
    title: 'Achtsamkeit und Meditation bei ADHS',
    teaser:
      'Fünf Minuten genügen für den Einstieg: Praktische Übungen für mehr innere Ruhe, auch wenn Stillsitzen schwerfällt.',
    readingTime: '6 min',
    tool: 'Achtsamkeits-Übungen',
    toolAnchor: 'achtsamkeits-uebungen',
  },
  {
    slug: 'selbstakzeptanz',
    href: '/ratgeber/erwachsene/selbstakzeptanz',
    icon: '💚',
    title: 'Selbstakzeptanz bei ADHS',
    teaser:
      'Stärken sehen, Fehler als Lernchance nutzen und freundlicher mit sich selbst umgehen: ohne Schönfärberei.',
    readingTime: '7 min',
    tool: 'Stärken-Check',
    toolAnchor: 'staerken-check',
  },
]
