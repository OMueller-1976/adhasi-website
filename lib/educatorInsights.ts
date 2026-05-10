import type { EducatorChildOverview, StrengthWeakness } from './educatorAnalytics';

export type EducatorInsight = {
  level: 'observation' | 'concern' | 'strength';
  title: string;
  body: string;
};

export function buildEducatorInsights(o: EducatorChildOverview, sw: StrengthWeakness[]): EducatorInsight[] {
  const insights: EducatorInsight[] = [];
  const name = String(o.child.name ?? 'Das Kind');

  // Streak-Beobachtung
  if (o.streak >= 7) {
    insights.push({
      level: 'strength',
      title: `Hohe Konsistenz (${o.streak} Tage)`,
      body: `${name} übt regelmäßig — eine wichtige Voraussetzung für Fortschritte bei ADHS.`,
    });
  } else if (o.streak === 0 && o.lastActivityAt) {
    const daysSince = Math.floor(
      (Date.now() - new Date(o.lastActivityAt).getTime()) / (24 * 3600 * 1000)
    );
    if (daysSince >= 7) {
      insights.push({
        level: 'concern',
        title: `Längere Pause (${daysSince} Tage)`,
        body: 'Hier könnte eine Rücksprache mit den Eltern hilfreich sein, um die Ursache zu klären.',
      });
    }
  }

  // Genauigkeit
  if (o.accuracy30d !== null) {
    if (o.accuracy30d >= 80) {
      insights.push({
        level: 'strength',
        title: `Hohe Genauigkeit (${o.accuracy30d}%, 30 Tage)`,
        body: 'Schwierigkeitsstufe könnte schrittweise erhöht werden, um weiteres Wachstum zu fördern.',
      });
    } else if (o.accuracy30d < 50) {
      insights.push({
        level: 'concern',
        title: `Niedrige Genauigkeit (${o.accuracy30d}%, 30 Tage)`,
        body: 'Schwierigkeit eventuell zu hoch oder Lücken in den Grundlagen. Detail-Analyse der Schwächen empfohlen.',
      });
    }
  }

  // Schwächen
  const weakest = [...sw].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (weakest && weakest.accuracy < 60 && weakest.count >= 5) {
    insights.push({
      level: 'concern',
      title: `Förderschwerpunkt: ${weakest.subject} – ${weakest.category}`,
      body: `Genauigkeit aktuell ${weakest.accuracy}% bei ${weakest.count} Übungen. Gezielte Förderung in diesem Bereich könnte angezeigt sein.`,
    });
  }

  // Stärken
  const strongest = [...sw].sort((a, b) => b.accuracy - a.accuracy)[0];
  if (strongest && strongest.accuracy >= 85 && strongest.count >= 5) {
    insights.push({
      level: 'strength',
      title: `Stärke: ${strongest.subject} – ${strongest.category}`,
      body: `${strongest.accuracy}% Genauigkeit. Diese Stärke kann motivierend in Gespräche mit dem Kind eingebracht werden.`,
    });
  }

  if (insights.length === 0) {
    insights.push({
      level: 'observation',
      title: 'Noch wenig Datengrundlage',
      body: `${name} hat noch nicht genug geübt für belastbare Aussagen. Bitte in einigen Tagen erneut prüfen.`,
    });
  }

  return insights;
}
