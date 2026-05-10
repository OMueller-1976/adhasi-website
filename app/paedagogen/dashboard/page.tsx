import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPaedagogenSessionFromCookies } from '@/lib/paedagogenSession';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { categoryLabel } from '@/lib/exerciseLabels';
import { getOrGenerateAssessment, type AssessmentInput } from '@/lib/childAssessment';
import LogoutButton from './LogoutButton';

// ── RPC shapes (shared with kind/[id]/page.tsx) ───────────────────────────────

interface ChildDetail {
  child: { id: string; name: string; age: number | null; grade: number | null };
  overview: {
    total_exercises: number;
    accuracy_pct:    number | null;
    current_streak:  number;
    longest_streak:  number;
    active_days_30:  number;
    last_active_at:  string | null;
  };
  by_category: Array<{
    subject:      string;
    category:     string;
    n_exercises:  number;
    accuracy_pct: number;
  }>;
  heatmap: Record<string, number>;
  response_times: { n: number; avg_ms: number | null; p50_ms: number | null };
}

interface BenchmarkRow {
  subject:              string;
  category:             string;
  child_n:              number;
  child_accuracy:       number;
  benchmark_n_children: number;
  benchmark_accuracy:   number;
  diff_pct:             number;
}

type BenchmarkRpcResult = BenchmarkRow[] | { benchmarks: BenchmarkRow[] } | null;

function extractBenchmarks(raw: BenchmarkRpcResult): BenchmarkRow[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'object' && 'benchmarks' in raw && Array.isArray(raw.benchmarks))
    return raw.benchmarks;
  return [];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function relativeDate(iso: string | null): string {
  if (!iso) return '—';
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (diff === 0) return 'heute';
  if (diff === 1) return 'vor 1 Tag';
  if (diff < 7)  return `vor ${diff} Tagen`;
  if (diff < 14) return 'vor 1 Woche';
  return `vor ${Math.floor(diff / 7)} Wochen`;
}

function statusLabel(active: number): string {
  if (active >= 20) return 'Sehr regelmäßig';
  if (active >= 10) return 'Regelmäßig';
  if (active >= 5)  return 'Gelegentlich';
  if (active >= 1)  return 'Selten';
  return 'Inaktiv';
}

function barColorClass(pct: number): string {
  if (pct >= 80) return 'bg-emerald-500';
  if (pct >= 65) return 'bg-yellow-500';
  if (pct >= 50) return 'bg-orange-500';
  return 'bg-red-500';
}

function rtLabel(avgMs: number): string {
  if (avgMs < 3000)  return 'sehr schnell — eventuell auf Impulsivität achten';
  if (avgMs < 6000)  return 'im Durchschnittsbereich';
  if (avgMs < 10000) return 'überdurchschnittlich lang — erhöhter kognitiver Aufwand möglich';
  return 'deutlich verlangsamt — gezielter Rückblick auf einzelne Übungen ratsam';
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PaedagogenDashboardPage() {
  const session = await getPaedagogenSessionFromCookies();
  if (!session) redirect('/paedagogen/login');

  const admin = getSupabaseAdmin();

  // Fetch data in parallel
  const [detailResult, benchResult] = await Promise.all([
    admin.rpc('paedagogen_get_child_detail', { p_child_id: session.child_id }),
    admin.rpc('paedagogen_get_benchmark', {
      p_child_id:     session.child_id,
      p_min_children: 3,
    }),
  ]);

  if (detailResult.error || !detailResult.data) {
    console.error('[dashboard] detail RPC error', detailResult.error?.message);
  }
  if (benchResult.error) {
    console.error('[dashboard] bench RPC error', benchResult.error?.message);
  }

  const detail     = (detailResult.data ?? null) as ChildDetail | null;
  const benchmarks = extractBenchmarks(benchResult.data as BenchmarkRpcResult);

  const child      = detail?.child;
  const overview   = detail?.overview;
  const byCategory = detail?.by_category ?? [];
  const heatmap    = detail?.heatmap ?? {};
  const rt         = detail?.response_times ?? null;

  // Assessment (cached or generated)
  let assessmentText:   string | null = null;
  let assessmentSource: 'llm' | 'heuristic' | null = null;
  let assessmentCached  = false;

  if (detail && overview) {
    try {
      const input: AssessmentInput = {
        childId:      session.child_id,
        child:        { name: child!.name, age: child!.age, grade: child!.grade },
        overview: {
          total_exercises: overview.total_exercises,
          accuracy_pct:    overview.accuracy_pct ?? 0,
          active_days_30:  overview.active_days_30,
          current_streak:  overview.current_streak,
        },
        byCategory: byCategory.map((c) => ({
          subject:      c.subject,
          category:     c.category,
          accuracy_pct: c.accuracy_pct,
          n_exercises:  c.n_exercises,
        })),
        benchmarks: benchmarks.map((b) => ({
          subject:            b.subject,
          category:           b.category,
          child_accuracy:     b.child_accuracy,
          benchmark_accuracy: b.benchmark_accuracy,
          diff_pct:           b.diff_pct,
        })),
        responseTimes:
          rt && rt.n >= 10 && rt.avg_ms !== null
            ? { avg_ms: rt.avg_ms, median_ms: rt.p50_ms ?? rt.avg_ms, n: rt.n }
            : null,
      };

      const result = await getOrGenerateAssessment(input, admin);
      assessmentText   = result.text;
      assessmentSource = result.source;
      assessmentCached = result.isFromCache;
    } catch (err) {
      console.error('[dashboard] assessment error', err);
    }
  }

  // Stärken / Förderbedarf
  const strengths  = [...byCategory].filter((c) => c.accuracy_pct >= 80)
                                    .sort((a, b) => b.accuracy_pct - a.accuracy_pct)
                                    .slice(0, 4);
  const weaknesses = [...byCategory].filter((c) => c.accuracy_pct < 65)
                                    .sort((a, b) => a.accuracy_pct - b.accuracy_pct)
                                    .slice(0, 4);

  const sortedBenchmarks = [...benchmarks].sort((a, b) => a.child_accuracy - b.child_accuracy);

  const subtitleParts: string[] = [];
  if (child?.age)   subtitleParts.push(`${child.age} Jahre`);
  if (child?.grade) subtitleParts.push(`Klasse ${child.grade}`);

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── Header ── */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Logo.png" alt="ADHaSi" width={36} height={36} />
            <span className="font-semibold text-stone-900">ADHaSi Pädagog:innen</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <LogoutButton />
          </div>
        </div>
        <nav className="border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6 flex gap-1 text-sm">
            <Link
              href="/paedagogen/dashboard"
              className="px-4 py-3 text-stone-700 border-b-2 border-stone-900 font-medium"
            >
              Übersicht
            </Link>
            <Link
              href="/paedagogen/dashboard/aggregat"
              className="px-4 py-3 text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300"
            >
              Anonymer Vergleich
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* ── 1. Hero ── */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold text-stone-900">
            Lernstand: {child?.name ?? session.child_name}
          </h1>
          {subtitleParts.length > 0 && (
            <p className="text-stone-500 mt-1">{subtitleParts.join(' · ')}</p>
          )}
        </section>

        {/* ── 2. Stat tiles ── */}
        {overview && (
          <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatTile
              label="Übungen (30 Tage)"
              value={String(overview.total_exercises)}
            />
            <StatTile
              label="Genauigkeit"
              value={overview.accuracy_pct !== null ? `${overview.accuracy_pct} %` : '—'}
            />
            <StatTile
              label="Streak"
              value={`${overview.current_streak} Tage`}
              sub={`Bestmarke: ${overview.longest_streak}`}
            />
            <StatTile
              label="Status"
              value={statusLabel(overview.active_days_30)}
              sub={`Letzte Aktivität: ${relativeDate(overview.last_active_at)}`}
            />
          </section>
        )}

        {/* ── 3. Assessment ── */}
        {assessmentText && (
          <section className="mb-10 border border-stone-200 rounded-xl p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-stone-900">Pädagogische Einschätzung</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                assessmentSource === 'llm'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-stone-100 text-stone-600'
              }`}>
                {assessmentSource === 'llm' ? 'KI-generiert' : 'Regel-basiert'}
                {assessmentCached && ' · gecacht'}
              </span>
            </div>
            <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {assessmentText}
            </div>
          </section>
        )}

        {/* ── 4. Stärken | Förderbedarf ── */}
        {byCategory.length > 0 && (
          <section className="mb-10 grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">Stärken</h2>
              <div className="space-y-3">
                {strengths.length === 0
                  ? <p className="text-sm text-stone-500">Noch keine Kategorie mit ≥ 80 %.</p>
                  : strengths.map((c) => (
                      <CategoryBar key={c.category} category={c.category} pct={c.accuracy_pct} n={c.n_exercises} />
                    ))
                }
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">Förderbedarf</h2>
              <div className="space-y-3">
                {weaknesses.length === 0
                  ? <p className="text-sm text-stone-500">Keine Kategorie unter 65 % — gut!</p>
                  : weaknesses.map((c) => (
                      <CategoryBar key={c.category} category={c.category} pct={c.accuracy_pct} n={c.n_exercises} />
                    ))
                }
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Benchmark ── */}
        <section className="mb-10 border border-stone-200 rounded-xl p-6 bg-white">
          <h2 className="text-xl font-bold text-stone-900 mb-1">
            Vergleich zur anonymen Peer-Gruppe
          </h2>
          <p className="text-sm text-stone-600 mb-1">
            Wie steht {child?.name ?? session.child_name} im Vergleich zur anonymen
            ADHaSi-Nutzer:innen-Gruppe? Die folgenden Werte zeigen die Genauigkeit pro
            Kategorie, verglichen mit dem Durchschnitt aller Kinder (mindestens 3 pro
            Kategorie).
          </p>
          <p className="text-xs text-stone-400 mb-5">
            Datenschutz: Der Vergleichswert ist vollständig anonym aggregiert.
            Rückschlüsse auf einzelne Kinder sind nicht möglich.
          </p>

          {sortedBenchmarks.length === 0 ? (
            <p className="text-sm text-stone-500 italic">
              Noch nicht genug Vergleichsdaten in der Peer-Gruppe. Mindestens 3 Kinder
              pro Kategorie nötig.
            </p>
          ) : (
            <div className="space-y-5">
              {sortedBenchmarks.map((b, i) => {
                const diffPositive = b.diff_pct > 0;
                const diffNeutral  = b.diff_pct === 0;
                const diffColor    = diffNeutral
                  ? 'bg-stone-100 text-stone-700'
                  : diffPositive
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-red-100 text-red-800';
                const diffSign = b.diff_pct > 0 ? '+' : '';
                return (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-2">
                      <div className="font-medium text-stone-900">
                        {categoryLabel(b.category)}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${diffColor}`}>
                        {diffSign}{Math.round(b.diff_pct)} %
                      </span>
                    </div>
                    {/* Kind bar */}
                    <div className="mb-1.5">
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>{child?.name ?? session.child_name}</span>
                        <span className="font-semibold">{b.child_accuracy} %</span>
                      </div>
                      <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${barColorClass(b.child_accuracy)}`}
                          style={{ width: `${b.child_accuracy}%` }}
                        />
                      </div>
                    </div>
                    {/* Benchmark bar */}
                    <div>
                      <div className="flex justify-between text-xs text-stone-400 mb-1">
                        <span>Durchschnitt ({b.benchmark_n_children} Kinder)</span>
                        <span>{b.benchmark_accuracy} %</span>
                      </div>
                      <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-stone-400"
                          style={{ width: `${b.benchmark_accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── 6. Heatmap ── */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-1">
            Aktivität letzte 6 Wochen
          </h2>
          <p className="text-sm text-stone-500 mb-4">
            Jeder Block steht für einen Tag. Je dunkler, desto mehr Übungen an diesem Tag.
          </p>
          <HeatmapGrid heatmap={heatmap} />
          <div className="flex items-center gap-2 mt-3 text-xs text-stone-500">
            <span>weniger</span>
            <div className="w-3 h-3 rounded bg-stone-100" />
            <div className="w-3 h-3 rounded bg-emerald-200" />
            <div className="w-3 h-3 rounded bg-emerald-400" />
            <div className="w-3 h-3 rounded bg-emerald-600" />
            <span>mehr</span>
          </div>
        </section>

        {/* ── 7. Response time ── */}
        {rt && rt.n >= 10 && rt.avg_ms !== null && (
          <section className="mb-10 border border-stone-200 rounded-xl p-6 bg-white">
            <h2 className="text-xl font-bold text-stone-900 mb-2">
              Verarbeitungsgeschwindigkeit
            </h2>
            <p className="text-sm text-stone-500 mb-4">
              Wie lange braucht {child?.name ?? session.child_name} im Schnitt pro Übung?
              Ein Indikator für den kognitiven Aufwand beim Bearbeiten.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-stone-500">Durchschnitt</div>
                <div className="text-2xl font-bold text-stone-900">
                  {(rt.avg_ms / 1000).toFixed(1)}s
                </div>
              </div>
              <div>
                <div className="text-xs text-stone-500">Median</div>
                <div className="text-2xl font-bold text-stone-900">
                  {((rt.p50_ms ?? rt.avg_ms) / 1000).toFixed(1)}s
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-700">
              Einordnung:{' '}
              <span className="font-medium">{rtLabel(rt.avg_ms)}</span>
            </p>
          </section>
        )}

        {/* ── 8. Navigation cards ── */}
        <section className="mb-10 grid md:grid-cols-2 gap-4">
          <Link
            href={`/paedagogen/dashboard/kind/${session.child_id}`}
            className="border border-stone-200 rounded-xl p-5 bg-white hover:shadow-sm transition block"
          >
            <h3 className="font-bold text-lg text-stone-900 mb-1">Detail-Auswertung</h3>
            <p className="text-sm text-stone-600">
              Noch tiefer einsteigen: Alle Kategorien im Detail, vollständige
              Heatmap, pädagogische Beobachtungen.
            </p>
            <div className="mt-3 text-sm text-orange-600 font-medium">Öffnen →</div>
          </Link>
          <Link
            href="/paedagogen/dashboard/aggregat"
            className="border border-stone-200 rounded-xl p-5 bg-white hover:shadow-sm transition block"
          >
            <h3 className="font-bold text-lg text-stone-900 mb-1">Anonymer Vergleich</h3>
            <p className="text-sm text-stone-600">
              Wie sehen die Lernfortschritte aller ADHaSi-Nutzer:innen im Aggregat aus?
              Benchmarks, Schwierigkeits-Verteilung und mehr.
            </p>
            <div className="mt-3 text-sm text-orange-600 font-medium">Öffnen →</div>
          </Link>
        </section>

        {/* ── 9. Footer ── */}
        <footer className="text-xs text-stone-400 border-t border-stone-200 pt-6">
          Daten aktualisiert: {new Date().toLocaleString('de-DE')}.{' '}
          {overview
            ? `Einschätzung basierend auf ${overview.total_exercises} Übungen der letzten 30 Tage. `
            : ''}
          Datenschutz: Sie sehen ausschließlich Kinder, für die Ihnen die Eltern
          einen Zugangscode ausgestellt haben.
        </footer>

      </main>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4">
      <div className="text-xs text-stone-500 uppercase tracking-wide">{label}</div>
      <div className="text-xl font-bold text-stone-900 mt-1">{value}</div>
      {sub && <div className="text-xs text-stone-400 mt-1">{sub}</div>}
    </div>
  );
}

function CategoryBar({
  category,
  pct,
  n,
}: {
  category: string;
  pct:      number;
  n:        number;
}) {
  const color = barColorClass(pct);
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4">
      <div className="flex justify-between items-baseline mb-1">
        <div>
          <div className="font-medium text-stone-900">{categoryLabel(category)}</div>
          <div className="text-xs text-stone-500">{n} Übungen</div>
        </div>
        <div className="font-semibold text-stone-900 ml-2">{pct} %</div>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function HeatmapGrid({ heatmap }: { heatmap: Record<string, number> }) {
  const days: { date: string; count: number }[] = [];
  for (let i = 41; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    days.push({ date: iso, count: heatmap[iso] ?? 0 });
  }

  const intensityClass = (n: number): string => {
    if (n === 0) return 'bg-stone-100';
    if (n <= 3)  return 'bg-emerald-200';
    if (n <= 7)  return 'bg-emerald-400';
    return 'bg-emerald-600';
  };

  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((d, i) => (
        <div
          key={i}
          className={`aspect-square rounded ${intensityClass(d.count)}`}
          title={`${d.date}: ${d.count} Übungen`}
        />
      ))}
    </div>
  );
}
