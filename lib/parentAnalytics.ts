import { getSupabaseServer } from './supabaseServer';
import { categoryLabel } from './exerciseLabels';

// ── Types from parent_get_child_overview RPC ──────────────────────────────────

export type ChildOverview = {
  total_exercises: number;
  total_correct: number;
  accuracy_pct: number;
  total_stars: number;
  total_coins: number;
  current_streak: number;
  longest_streak: number;
  last_active_at: string | null;
};

// ── Types from parent_get_child_category_breakdown RPC ────────────────────────

export type CategoryRow = {
  exercise_category: string;
  total_count: number;
  correct_count: number;
  accuracy_pct: number;
};

export type StrengthsWeaknessesResult = {
  strengths: CategoryRow[];
  weaknesses: CategoryRow[];
  raw: CategoryRow[];
};

// ── Types from parent_get_child_daily_heatmap RPC ─────────────────────────────

export type HeatmapEntry = {
  activity_date: string;
  exercise_count: number;
};

export type Recommendation = {
  level: 'positive' | 'info' | 'warning';
  title: string;
  body: string;
};

// ── RPC-based data fetchers ───────────────────────────────────────────────────

/** Returns null if child has no data yet (RPC returns empty SETOF). */
export async function getChildOverview(
  childId: string,
  parentId: string
): Promise<ChildOverview | null> {
  const supabase = await getSupabaseServer();
  const { data, error } = await supabase.rpc('parent_get_child_overview', {
    p_child_id: childId,
    p_parent_id: parentId,
  });
  if (error) {
    console.error('parent_get_child_overview:', error.message);
    return null;
  }
  return (data as ChildOverview[] | null)?.[0] ?? null;
}

export async function getStrengthsWeaknesses(
  childId: string,
  parentId: string
): Promise<StrengthsWeaknessesResult> {
  const supabase = await getSupabaseServer();
  const { data, error } = await supabase.rpc('parent_get_child_category_breakdown', {
    p_child_id: childId,
    p_parent_id: parentId,
  });
  if (error) {
    console.error('parent_get_child_category_breakdown:', error.message);
    return { strengths: [], weaknesses: [], raw: [] };
  }

  const rows = (data as CategoryRow[] | null) ?? [];
  const withEnoughData = rows.filter((r) => Number(r.total_count) >= 5);
  const sorted = [...withEnoughData].sort(
    (a, b) => Number(b.accuracy_pct) - Number(a.accuracy_pct)
  );
  return {
    strengths: sorted.slice(0, 3),
    weaknesses: [...sorted].reverse().slice(0, 3),
    raw: rows,
  };
}

export async function getDailyHeatmap(
  childId: string,
  parentId: string,
  days = 42
): Promise<HeatmapEntry[]> {
  const supabase = await getSupabaseServer();
  const { data, error } = await supabase.rpc('parent_get_child_daily_heatmap', {
    p_child_id: childId,
    p_parent_id: parentId,
    p_days: days,
  });
  if (error) {
    console.error('parent_get_child_daily_heatmap:', error.message);
    return [];
  }
  return (data as HeatmapEntry[] | null) ?? [];
}

// ── Recommendations ───────────────────────────────────────────────────────────

export function buildRecommendations(
  o: ChildOverview,
  sw: CategoryRow[],
  childName: string
): Recommendation[] {
  const recs: Recommendation[] = [];
  const name = childName || 'Ihr Kind';

  if (o.current_streak >= 5) {
    recs.push({
      level: 'positive',
      title: `${name} hält durch — ${o.current_streak} Tage in Folge!`,
      body: 'Konsistenz ist der wichtigste Erfolgsfaktor bei ADHS. Bleiben Sie dran.',
    });
  }

  if (o.accuracy_pct < 50 && o.total_exercises >= 5) {
    recs.push({
      level: 'warning',
      title: 'Genauigkeit unter 50 %',
      body: 'Vielleicht ist die Schwierigkeit aktuell zu hoch. Schauen Sie in die Stärken/Schwächen, welcher Bereich besonders schwerfällt.',
    });
  }

  const withEnough = sw.filter((r) => Number(r.total_count) >= 5);

  const weakest = [...withEnough].sort(
    (a, b) => Number(a.accuracy_pct) - Number(b.accuracy_pct)
  )[0];
  if (weakest && Number(weakest.accuracy_pct) < 60) {
    recs.push({
      level: 'info',
      title: `Schwerpunkt: ${categoryLabel(weakest.exercise_category)}`,
      body: `${name} bewältigt diesen Bereich derzeit mit ${weakest.accuracy_pct} % Genauigkeit. Eventuell hilft gezieltes Üben.`,
    });
  }

  const strongest = [...withEnough].sort(
    (a, b) => Number(b.accuracy_pct) - Number(a.accuracy_pct)
  )[0];
  if (strongest && Number(strongest.accuracy_pct) >= 85) {
    recs.push({
      level: 'positive',
      title: `Stark in ${categoryLabel(strongest.exercise_category)}`,
      body: `${strongest.accuracy_pct} % Genauigkeit — Erfolg sichtbar machen wirkt motivierend.`,
    });
  }

  if (o.last_active_at) {
    const daysSince = Math.floor(
      (Date.now() - new Date(o.last_active_at).getTime()) / (24 * 3600 * 1000)
    );
    if (daysSince >= 4) {
      recs.push({
        level: 'warning',
        title: `Lange nicht geübt (${daysSince} Tage)`,
        body: 'Eine kleine, kurze Einheit hilft, den Faden wiederaufzunehmen. Schon 5 Minuten machen einen Unterschied.',
      });
    }
  }

  if (recs.length === 0) {
    recs.push({
      level: 'info',
      title: 'Noch zu wenig Daten für Empfehlungen',
      body: 'Sobald Ihr Kind ein paar Übungen abgeschlossen hat, erscheinen hier persönliche Hinweise.',
    });
  }

  return recs;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

export function formatLastActive(dateStr: string | null): string {
  if (!dateStr) return '—';
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / (60 * 1000));
  if (diff < 60) return 'vor weniger als 1 Stunde';
  const hours = Math.floor(diff / 60);
  if (hours < 24) return `vor ${hours} Stunde${hours === 1 ? '' : 'n'}`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'gestern';
  return `vor ${days} Tagen`;
}

/** Zero-filled ChildOverview for children with no attempts yet. */
export const emptyOverview: ChildOverview = {
  total_exercises: 0,
  total_correct: 0,
  accuracy_pct: 0,
  total_stars: 0,
  total_coins: 0,
  current_streak: 0,
  longest_streak: 0,
  last_active_at: null,
};
