import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPaedagogenSessionFromCookies } from '@/lib/paedagogenSession';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { categoryLabel } from '@/lib/exerciseLabels';
import LogoutButton from '../LogoutButton';

// ── RPC shapes ────────────────────────────────────────────────────────────────

interface AggCategoryRow {
  category:        string;
  n_children:      number;
  n_attempts:      number;
  avg_accuracy:    number;
  stddev_accuracy: number | null;
}

interface AggDiffRow {
  difficulty:   number;
  n_attempts:   number;
  avg_accuracy: number;
}

interface AggAgeBucket {
  age:        number | null;
  n_children: number;
}

interface AggStats {
  total_children:         number;
  total_attempts:         number;
  min_children_threshold: number;
  by_category:            AggCategoryRow[];
  difficulty_distribution: AggDiffRow[];
  age_buckets:            AggAgeBucket[];
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

// RPC returns jsonb — may be { benchmarks: [...] } or the array directly
type BenchmarkRpcResult =
  | BenchmarkRow[]
  | { benchmarks: BenchmarkRow[] }
  | null;

function extractBenchmarks(raw: BenchmarkRpcResult): BenchmarkRow[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'object' && 'benchmarks' in raw && Array.isArray(raw.benchmarks)) {
    return raw.benchmarks;
  }
  return [];
}

// AggStats may be the object directly or wrapped
type AggRpcResult = AggStats | { data: AggStats } | null;

const EMPTY_AGG: AggStats = {
  total_children: 0,
  total_attempts: 0,
  min_children_threshold: 3,
  by_category: [],
  difficulty_distribution: [],
  age_buckets: [],
};

function extractAgg(raw: AggRpcResult): AggStats {
  if (!raw) return EMPTY_AGG;
  // If top-level has by_category, treat as AggStats directly
  if (typeof raw === 'object' && 'by_category' in raw) return raw as AggStats;
  // Wrapped case
  if (typeof raw === 'object' && 'data' in raw) return (raw as { data: AggStats }).data ?? EMPTY_AGG;
  return EMPTY_AGG;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function AggregatePage() {
  const session = await getPaedagogenSessionFromCookies();
  if (!session) redirect('/paedagogen/login');

  const admin = getSupabaseAdmin();

  let agg: AggStats = EMPTY_AGG;
  let benchmarks: BenchmarkRow[] = [];
  let aggError: string | null = null;
  let benchError: string | null = null;

  try {
    const [aggResult, benchResult] = await Promise.all([
      admin.rpc('paedagogen_get_aggregate_stats', { p_min_children: 3 }),
      admin.rpc('paedagogen_get_benchmark', {
        p_child_id:     session.child_id,
        p_min_children: 3,
      }),
    ]);

    if (aggResult.error) {
      aggError = aggResult.error.message;
      console.error('[aggregat] agg RPC error', aggResult.error);
    } else {
      agg = extractAgg(aggResult.data as AggRpcResult);
    }

    if (benchResult.error) {
      benchError = benchResult.error.message;
      console.error('[aggregat] bench RPC error', benchResult.error);
    } else {
      benchmarks = extractBenchmarks(benchResult.data as BenchmarkRpcResult);
    }
  } catch (err) {
    console.error('[aggregat] fatal exception', err);
    aggError = 'Unerwarteter Fehler beim Laden der Daten.';
  }

  // Sort safely on copies (never mutate RPC data in-place)
  const sortedCategories = [...(agg.by_category ?? [])].sort(
    (a, b) => a.avg_accuracy - b.avg_accuracy
  );
  const sortedDifficulty = [...(agg.difficulty_distribution ?? [])].sort(
    (a, b) => a.difficulty - b.difficulty
  );
  const sortedAge = [...(agg.age_buckets ?? [])]
    .filter((b) => b.age !== null)
    .sort((a, b) => (a.age ?? 0) - (b.age ?? 0));
  const sortedBenchmarks = [...benchmarks].sort(
    (a, b) => a.child_accuracy - b.child_accuracy
  );

  const maxAgeBucketCount = sortedAge.length > 0
    ? Math.max(...sortedAge.map((x) => x.n_children))
    : 1;

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Logo.png" alt="ADHaSi" width={40} height={40} />
            <span className="font-semibold text-stone-900">ADHaSi Pädagog:innen</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-stone-600 hidden sm:inline">
              <strong className="text-stone-900">{session.child_name}</strong>
            </span>
            <LogoutButton />
          </div>
        </div>
        <nav className="border-t border-stone-100">
          <div className="max-w-6xl mx-auto px-6 flex gap-1 text-sm">
            <Link
              href="/paedagogen/dashboard"
              className="px-4 py-3 text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300"
            >
              Übersicht
            </Link>
            <Link
              href="/paedagogen/dashboard/aggregat"
              className="px-4 py-3 text-stone-700 border-b-2 border-stone-900 font-medium"
            >
              Anonymer Vergleich
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        {/* Intro */}
        <section>
          <h1 className="text-3xl font-semibold text-stone-900">Anonymer Vergleich</h1>
          <p className="text-stone-600 mt-2 max-w-2xl">
            Aggregierte Auswertung aller ADHaSi-Nutzer:innen — vollständig anonym und nur
            sichtbar wenn mindestens {agg.min_children_threshold} verschiedene Kinder
            in einem Bereich geübt haben.
          </p>
          {agg.total_children > 0 && (
            <p className="text-sm text-stone-500 mt-2">
              Datengrundlage:{' '}
              <strong>{(agg.total_attempts ?? 0).toLocaleString('de-DE')} Übungen</strong>{' '}
              von <strong>{agg.total_children} Kindern</strong>.
            </p>
          )}
        </section>

        {/* Global error */}
        {aggError && <ErrorCard message={aggError} />}

        {/* Benchmark */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-1">
            Benchmark: {session.child_name} im Vergleich
          </h2>
          <p className="text-sm text-stone-500 mb-5">
            Direkter Vergleich mit dem anonymen Durchschnitt der ADHaSi-Nutzer:innen
            in denselben Kategorien.
          </p>

          {benchError ? (
            <ErrorCard message={benchError} />
          ) : sortedBenchmarks.length === 0 ? (
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-sm text-stone-600">
              Noch nicht genug Kinder in denselben Kategorien für einen anonymen Vergleich.
              Schwelle: mind. {agg.min_children_threshold} Kinder pro Kategorie.
            </div>
          ) : (
            <div className="space-y-4">
              {sortedBenchmarks.map((b, i) => (
                <BenchmarkCard
                  key={`${b.category}-${i}`}
                  b={b}
                  childName={session.child_name}
                />
              ))}
            </div>
          )}
        </section>

        {/* Kategorie-Übersicht */}
        {sortedCategories.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-1">
              Kategorien-Übersicht (alle Nutzer:innen)
            </h2>
            <p className="text-sm text-stone-500 mb-4">
              Bereiche mit niedriger Durchschnitts-Genauigkeit zeigen systemische
              Schwächen an. Hohe Streuung bedeutet: einige Kinder bewältigen den
              Bereich gut, andere haben deutliche Schwierigkeiten.
            </p>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-stone-50 border-b border-stone-200">
                  <tr>
                    <th className="text-left px-5 py-3 text-stone-600 font-medium">Kategorie</th>
                    <th className="text-right px-5 py-3 text-stone-600 font-medium">Genauigkeit</th>
                    <th className="text-right px-5 py-3 text-stone-600 font-medium hidden sm:table-cell">Kinder</th>
                    <th className="text-right px-5 py-3 text-stone-600 font-medium hidden md:table-cell">Übungen</th>
                    <th className="text-right px-5 py-3 text-stone-600 font-medium hidden lg:table-cell">Streuung</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCategories.map((row, i) => (
                    <tr key={i} className="border-t border-stone-100 hover:bg-stone-50">
                      <td className="px-5 py-3 font-medium text-stone-900">
                        {categoryLabel(row.category)}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className={`font-semibold ${
                          row.avg_accuracy >= 80 ? 'text-emerald-600' :
                          row.avg_accuracy >= 65 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {row.avg_accuracy} %
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right text-stone-600 hidden sm:table-cell">
                        {row.n_children}
                      </td>
                      <td className="px-5 py-3 text-right text-stone-600 hidden md:table-cell">
                        {(row.n_attempts ?? 0).toLocaleString('de-DE')}
                      </td>
                      <td className="px-5 py-3 text-right text-stone-500 hidden lg:table-cell">
                        {row.stddev_accuracy != null
                          ? `± ${Math.round(row.stddev_accuracy)} %`
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Schwierigkeits-Verteilung */}
        {sortedDifficulty.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-1">
              Schwierigkeits-Verteilung
            </h2>
            <p className="text-sm text-stone-500 mb-4">
              Zeigt, wie Kinder im Aggregat mit steigender Schwierigkeit umgehen.
              Ein starker Abfall bei höheren Stufen ist normal.
            </p>
            <div className="space-y-3">
              {sortedDifficulty.map((d) => {
                const color =
                  d.avg_accuracy >= 80 ? 'bg-emerald-500' :
                  d.avg_accuracy >= 65 ? 'bg-yellow-400' :
                  d.avg_accuracy >= 50 ? 'bg-orange-400' : 'bg-red-500';
                return (
                  <div key={d.difficulty} className="bg-white rounded-xl border border-stone-200 p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <div>
                        <span className="font-medium text-stone-900">
                          Schwierigkeitsstufe {d.difficulty}
                        </span>
                        <span className="text-xs text-stone-500 ml-2">
                          {(d.n_attempts ?? 0).toLocaleString('de-DE')} Übungen
                        </span>
                      </div>
                      <span className="font-semibold text-stone-900">{d.avg_accuracy} %</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className={`h-full ${color}`} style={{ width: `${d.avg_accuracy}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Alters-Verteilung */}
        {sortedAge.length >= 2 && (
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-1">
              Alters-Verteilung
            </h2>
            <p className="text-sm text-stone-500 mb-4">
              Zusammensetzung der aktiven Nutzer:innen nach Alter.
            </p>
            <div className="space-y-2">
              {sortedAge.map((b) => {
                const pct = Math.round((b.n_children / maxAgeBucketCount) * 100);
                return (
                  <div key={b.age} className="flex items-center gap-3">
                    <div className="w-12 text-sm text-right text-stone-600 shrink-0">
                      {b.age} J.
                    </div>
                    <div className="flex-1 h-6 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-400 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="w-8 text-sm text-stone-700 shrink-0">{b.n_children}</div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Footer */}
        <p className="text-xs text-stone-400 text-center">
          Datenschutz: Keine Rückschlüsse auf einzelne Kinder möglich.
          Mindest-Schwelle: {agg.min_children_threshold} Kinder pro Kategorie.
        </p>
      </main>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function BenchmarkCard({ b, childName }: { b: BenchmarkRow; childName: string }) {
  const childColor =
    b.child_accuracy >= 80 ? 'bg-emerald-500' :
    b.child_accuracy >= 65 ? 'bg-yellow-400' :
    b.child_accuracy >= 50 ? 'bg-orange-400' : 'bg-red-500';

  const diffPositive = (b.diff_pct ?? 0) >= 0;
  const diffStr = `${diffPositive ? '+' : ''}${Math.round(b.diff_pct ?? 0)} %`;

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-medium text-stone-900">{categoryLabel(b.category)}</div>
          <div className="text-xs text-stone-500">{b.child_n} Übungen</div>
        </div>
        <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
          diffPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
        }`}>
          {diffStr}
        </span>
      </div>

      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs text-stone-600 mb-1">
            <span>{childName}</span>
            <span>{b.child_accuracy} %</span>
          </div>
          <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
            <div className={`h-full ${childColor}`} style={{ width: `${b.child_accuracy}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-stone-500 mb-1">
            <span>Durchschnitt ({b.benchmark_n_children} Kinder)</span>
            <span>{b.benchmark_accuracy} %</span>
          </div>
          <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-stone-400" style={{ width: `${b.benchmark_accuracy}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorCard({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
      <h2 className="font-semibold text-stone-900">Daten nicht verfügbar</h2>
      <p className="text-sm text-stone-700 mt-2">{message}</p>
    </div>
  );
}
