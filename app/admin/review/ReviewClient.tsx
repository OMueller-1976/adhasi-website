'use client';

import { useEffect, useState, useCallback } from 'react';

type Exercise = {
  id: string;
  exercise_type: string;
  exercise_category: string;
  difficulty: number;
  status: string;
  content: {
    question?: string;
    options?: { id: string; text: string }[];
    correct_id?: string;
    explanation?: string;
  };
  validator_report: {
    overall_quality_score?: number;
    recommendation?: string;
    [key: string]: unknown;
  } | null;
  created_at: string;
  reviewed_by_admin_at: string | null;
  block_reason: string | null;
};

type Stats = {
  total: number;
  validated: number;
  gold: number;
  blocked: number;
  draft: number;
  pending_review: number;
  reviewed: number;
  avg_quality: number;
  by_category: Record<string, number>;
};

type Filter = 'pending' | 'blocked' | 'reviewed' | 'all';

const STATUS_COLORS: Record<string, string> = {
  validated: 'bg-emerald-100 text-emerald-800',
  gold: 'bg-amber-100 text-amber-800',
  blocked: 'bg-red-100 text-red-800',
};

export default function ReviewClient() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [items, setItems] = useState<Exercise[]>([]);
  const [active, setActive] = useState<Exercise | null>(null);
  const [filter, setFilter] = useState<Filter>('pending');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [s, q] = await Promise.all([
      fetch('/api/admin/stats').then((r) => r.json()),
      fetch(`/api/admin/queue?filter=${filter}`).then((r) => r.json()),
    ]);
    setStats(s);
    const list: Exercise[] = q.items || [];
    setItems(list);
    setActive(list[0] ?? null);
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    load();
  }, [load]);

  async function act(action: 'approve' | 'block' | 'gold', reason?: string) {
    if (!active) return;
    await fetch('/api/admin/action', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action, id: active.id, reason }),
    });
    const next = items.filter((i) => i.id !== active.id);
    setItems(next);
    setActive(next[0] ?? null);
    fetch('/api/admin/stats').then((r) => r.json()).then(setStats);
  }

  function handleBlock() {
    const r = prompt('Block-Grund:');
    if (r) act('block', r);
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-xl font-bold">ADHaSi Review Dashboard</h1>
            {stats && (
              <div className="text-sm text-stone-600 mt-1 space-x-4">
                <span>Pool: <strong>{stats.total}</strong></span>
                <span className="text-emerald-700">Validated: {stats.validated}</span>
                <span className="text-amber-700">Gold: {stats.gold}</span>
                <span className="text-red-700">Blocked: {stats.blocked}</span>
                <span className="text-blue-700">Pending: {stats.pending_review}</span>
                <span>Ø Quality: {stats.avg_quality}</span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {(['pending', 'blocked', 'reviewed', 'all'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded text-sm ${
                  filter === f
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 hover:bg-stone-200'
                }`}
              >
                {f}
                {f === 'pending' && stats ? ` (${stats.pending_review})` : ''}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Left: List */}
        <div className="w-96 flex-shrink-0 space-y-1">
          {loading && <p className="text-stone-500">Lade…</p>}
          {!loading && items.length === 0 && (
            <p className="text-stone-500">Keine Einträge für diesen Filter.</p>
          )}
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => setActive(it)}
              className={`w-full text-left p-3 rounded border ${
                active?.id === it.id
                  ? 'bg-white border-stone-900'
                  : 'bg-white border-stone-200 hover:border-stone-400'
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <span className="font-mono text-xs text-stone-500">
                  {it.exercise_type}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    STATUS_COLORS[it.status] ?? 'bg-stone-100 text-stone-800'
                  }`}
                >
                  {it.status}
                </span>
              </div>
              <div className="text-sm mt-1 line-clamp-2">{it.content?.question}</div>
              <div className="text-xs text-stone-400 mt-1">
                {it.exercise_category} · d{it.difficulty} ·
                Q{it.validator_report?.overall_quality_score ?? '?'}
              </div>
            </button>
          ))}
        </div>

        {/* Right: Detail */}
        <div className="flex-1 min-w-0">
          {!active && (
            <p className="text-stone-500">Kein Eintrag ausgewählt.</p>
          )}
          {active && (
            <div className="bg-white rounded-lg border border-stone-200 p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-mono text-stone-500">
                    {active.exercise_type}
                  </div>
                  <h2 className="text-xl font-semibold mt-1">
                    {active.content?.question}
                  </h2>
                </div>
                <span
                  className={`shrink-0 text-xs px-2 py-1 rounded ${
                    STATUS_COLORS[active.status] ?? 'bg-stone-100 text-stone-800'
                  }`}
                >
                  {active.status}
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {(active.content?.options ?? []).map((o) => {
                  const isCorrect = o.id === active.content?.correct_id;
                  return (
                    <div
                      key={o.id}
                      className={`p-3 rounded border ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-300'
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <span className="font-mono text-xs text-stone-500 mr-2">
                        {o.id}
                      </span>
                      <span>{o.text}</span>
                      {isCorrect && (
                        <span className="ml-2 text-emerald-700 text-xs">
                          ✓ richtig
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="p-3 rounded bg-blue-50 border border-blue-200">
                <div className="text-xs font-medium text-blue-900 mb-1">
                  Erklärung
                </div>
                <div className="text-sm">{active.content?.explanation}</div>
              </div>

              {/* Validator report */}
              {active.validator_report && (
                <details className="text-sm">
                  <summary className="cursor-pointer text-stone-600 font-medium">
                    Validator Report (Score{' '}
                    {active.validator_report.overall_quality_score}/10,{' '}
                    {active.validator_report.recommendation})
                  </summary>
                  <pre className="mt-2 p-3 bg-stone-50 rounded text-xs overflow-auto max-h-80">
                    {JSON.stringify(active.validator_report, null, 2)}
                  </pre>
                </details>
              )}

              {/* Block reason */}
              {active.block_reason && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-sm">
                  <strong>Block-Grund:</strong> {active.block_reason}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-stone-200">
                {filter === 'pending' && (
                  <>
                    <button
                      onClick={() => act('approve')}
                      className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
                    >
                      ✓ Approve
                    </button>
                    <button
                      onClick={() => act('gold')}
                      className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                    >
                      ★ Promote to Gold
                    </button>
                    <button
                      onClick={handleBlock}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      ✗ Block
                    </button>
                  </>
                )}
                <div className="ml-auto text-xs text-stone-500 self-center">
                  {new Date(active.created_at).toLocaleString('de-DE')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
