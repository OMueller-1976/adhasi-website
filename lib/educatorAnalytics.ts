/**
 * Educator-specific analytics using raw Supabase queries with RLS.
 * Educators don't have a parent_id context, so we can't use the
 * parent_get_child_* RPCs. Access control is enforced by RLS via
 * teacher_child_access table.
 */
import type { SupabaseClient } from '@supabase/supabase-js';

export type EducatorChildOverview = {
  child: Record<string, unknown>;
  streak: number;
  longestStreak: number;
  lastActivityAt: string | null;
  accuracy30d: number | null;
};

export type StrengthWeakness = {
  category: string;
  subject: string;
  count: number;
  accuracy: number;
};

export type EducatorHeatmapEntry = {
  date: string;
  count: number;
};

export async function getChildOverviewForEducator(
  sb: SupabaseClient,
  child: Record<string, unknown>
): Promise<EducatorChildOverview> {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();

  const [{ data: streak }, { data: monthSessions }] = await Promise.all([
    sb
      .from('streaks')
      .select('current_streak, longest_streak, last_activity_date')
      .eq('child_id', child.id)
      .maybeSingle(),
    sb
      .from('exercise_sessions')
      .select('id, is_correct, created_at')
      .eq('child_id', child.id)
      .gte('created_at', thirtyDaysAgo),
  ]);

  const acc = (rows: { is_correct: boolean }[] | null | undefined): number | null => {
    if (!rows || rows.length === 0) return null;
    const correct = rows.filter((r) => r.is_correct).length;
    return Math.round((100 * correct) / rows.length);
  };

  return {
    child,
    streak: (streak as { current_streak?: number } | null)?.current_streak ?? 0,
    longestStreak: (streak as { longest_streak?: number } | null)?.longest_streak ?? 0,
    lastActivityAt:
      (monthSessions?.[0] as { created_at?: string } | undefined)?.created_at ?? null,
    accuracy30d: acc(monthSessions),
  };
}

export async function getStrengthsWeaknessesForEducator(
  sb: SupabaseClient,
  childId: string
): Promise<StrengthWeakness[]> {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
  const { data } = await sb
    .from('exercise_sessions')
    .select('category, subject, is_correct')
    .eq('child_id', childId)
    .gte('created_at', thirtyDaysAgo);

  if (!data) return [];

  const groups = new Map<
    string,
    { correct: number; total: number; category: string; subject: string }
  >();

  for (const r of data) {
    const key = `${r.subject ?? '?'}|${r.category ?? '?'}`;
    const g = groups.get(key) ?? {
      correct: 0,
      total: 0,
      category: r.category ?? '?',
      subject: r.subject ?? '?',
    };
    g.total += 1;
    if (r.is_correct) g.correct += 1;
    groups.set(key, g);
  }

  return Array.from(groups.values())
    .filter((g) => g.total >= 3)
    .map((g) => ({
      category: g.category,
      subject: g.subject,
      count: g.total,
      accuracy: Math.round((100 * g.correct) / g.total),
    }));
}

export async function getDailyHeatmapForEducator(
  sb: SupabaseClient,
  childId: string
): Promise<EducatorHeatmapEntry[]> {
  const start = new Date();
  start.setDate(start.getDate() - 41); // 42 days for 6×7 grid
  start.setHours(0, 0, 0, 0);

  const { data } = await sb
    .from('exercise_sessions')
    .select('created_at')
    .eq('child_id', childId)
    .gte('created_at', start.toISOString());

  const buckets = new Map<string, number>();
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    buckets.set(d.toISOString().slice(0, 10), 0);
  }
  for (const r of data ?? []) {
    const k = (r.created_at as string).slice(0, 10);
    if (buckets.has(k)) buckets.set(k, (buckets.get(k) ?? 0) + 1);
  }

  return Array.from(buckets.entries()).map(([date, count]) => ({ date, count }));
}
