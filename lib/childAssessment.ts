import type { SupabaseClient } from '@supabase/supabase-js';
import { categoryLabel } from '@/lib/exerciseLabels';

// ── Types ─────────────────────────────────────────────────────────────────────

export type AssessmentInput = {
  childId: string;
  child: {
    name:  string;
    age:   number | null;
    grade: number | null;
  };
  overview: {
    total_exercises: number;
    accuracy_pct:    number;
    active_days_30:  number;
    current_streak:  number;
  };
  byCategory: Array<{
    subject:      string;
    category:     string;
    accuracy_pct: number;
    n_exercises:  number;
  }>;
  benchmarks: Array<{
    subject:            string;
    category:           string;
    child_accuracy:     number;
    benchmark_accuracy: number;
    diff_pct:           number;
  }>;
  responseTimes: {
    avg_ms:    number;
    median_ms: number;
    n:         number;
  } | null;
};

export type AssessmentResult = {
  text:          string;
  generatedAt:   Date;
  isFromCache:   boolean;
  source:        'llm' | 'heuristic';
};

interface CachedAssessmentRow {
  assessment_text: string;
  generated_at:    string;
  model:           string | null;
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function getOrGenerateAssessment(
  input: AssessmentInput,
  adminClient: SupabaseClient
): Promise<AssessmentResult> {
  // 1. Check cache
  const { data: cached } = await adminClient.rpc('paedagogen_get_cached_assessment', {
    p_child_id:     input.childId,
    p_max_age_days: 7,
  });

  const cachedRow = cached as CachedAssessmentRow | null;
  if (cachedRow?.assessment_text) {
    return {
      text:        cachedRow.assessment_text,
      generatedAt: new Date(cachedRow.generated_at),
      isFromCache: true,
      source:      cachedRow.model?.startsWith('claude') ? 'llm' : 'heuristic',
    };
  }

  // 2. Generate
  let text: string;
  let source: 'llm' | 'heuristic' = 'heuristic';
  let model = 'heuristic-v1';

  if (process.env.ANTHROPIC_API_KEY) {
    try {
      text   = await callAnthropicAPI(input);
      source = 'llm';
      model  = 'claude-haiku-4-5-20251001';
    } catch (err) {
      console.error('[assessment] LLM failed, using heuristic', err);
      text = generateHeuristicAssessment(input);
    }
  } else {
    text = generateHeuristicAssessment(input);
  }

  // 3. Persist to cache (non-fatal)
  try {
    await adminClient.rpc('paedagogen_save_assessment', {
      p_child_id:            input.childId,
      p_assessment_text:     text,
      p_based_on_exercises:  input.overview.total_exercises,
      p_based_on_accuracy:   input.overview.accuracy_pct,
      p_model:               model,
    });
  } catch (saveErr) {
    console.error('[assessment] cache save failed', saveErr);
  }

  return { text, generatedAt: new Date(), isFromCache: false, source };
}

// ── Anthropic call ────────────────────────────────────────────────────────────

async function callAnthropicAPI(input: AssessmentInput): Promise<string> {
  const system =
    'Du bist erfahrene Förderschul-Pädagogin mit Schwerpunkt ADHS. ' +
    'Erstelle eine professionelle, wertschätzende Einschätzung für eine Lehrkraft in 180-220 Wörtern. ' +
    'Struktur: Absatz 1 "Beobachtung" (was die Daten zeigen), ' +
    'Absatz 2 "Stärken" (was gut läuft), ' +
    'Absatz 3 "Förderansatz" (konkrete Handlungsempfehlungen mit Methodennennung). ' +
    'Neutrale Sprache, KEINE Diagnose, KEINE medizinischen Begriffe. ' +
    'Schreibe in ganzen Sätzen, keine Bullet-Points, keine Markdown-Formatierung.';

  const userMsg = buildUserPrompt(input);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:  'POST',
    headers: {
      'x-api-key':          process.env.ANTHROPIC_API_KEY!,
      'anthropic-version':  '2023-06-01',
      'content-type':       'application/json',
    },
    body: JSON.stringify({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 700,
      system,
      messages:   [{ role: 'user', content: userMsg }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API ${response.status}: ${await response.text()}`);
  }

  const json = await response.json() as {
    content?: Array<{ type: string; text?: string }>;
  };
  const text = json.content?.[0]?.text?.trim();
  if (!text) throw new Error('Leere Antwort von Anthropic');
  return text;
}

// ── Prompt builder ────────────────────────────────────────────────────────────

function buildUserPrompt(input: AssessmentInput): string {
  const { child, overview, byCategory, benchmarks, responseTimes } = input;

  const catLines = byCategory
    .map((c) => `- ${categoryLabel(c.category)}: ${c.accuracy_pct}% (${c.n_exercises} Übungen)`)
    .join('\n');

  const bmLines = benchmarks
    .map((b) => {
      const diff = b.diff_pct > 0 ? `+${b.diff_pct}` : `${b.diff_pct}`;
      return `- ${categoryLabel(b.category)}: ${b.child_accuracy}% (Peer-Durchschnitt ${b.benchmark_accuracy}%, Diff ${diff}%)`;
    })
    .join('\n');

  const rtLine =
    responseTimes && responseTimes.n >= 10
      ? `Verarbeitungszeit: Ø ${Math.round(responseTimes.avg_ms / 1000)}s pro Übung ` +
        `(Median ${Math.round(responseTimes.median_ms / 1000)}s).`
      : '';

  return `Kinddaten:
Name: ${child.name}
Klasse: ${child.grade ?? 'unbekannt'}, Alter: ${child.age ?? 'unbekannt'}

Lernaktivität (30 Tage):
- Übungen gesamt: ${overview.total_exercises}
- Genauigkeit: ${overview.accuracy_pct}%
- Aktive Tage: ${overview.active_days_30}
- Aktuelle Streak: ${overview.current_streak}

Kategorien-Performance:
${catLines || '(keine Daten)'}

Vergleich zur anonymen Peer-Gruppe:
${bmLines || '(noch nicht genug Daten)'}

${rtLine}

Erstelle eine pädagogische Einschätzung nach den Vorgaben.`.trim();
}

// ── Heuristic fallback ────────────────────────────────────────────────────────

const FOERDER_METHODEN: Record<string, string> = {
  phonological:      'Anlaut-Übungen mit Bildkarten, Silbenklatschen und Reime-Spiele',
  phoneme_grapheme:  'Buchstaben-Laut-Zuordnung über Bewegung und Gesten',
  syllable_morpheme: 'Silbenbögen-Methode und Morphem-Schieberegeln',
  orthographic_rules:'Regel-Plakate und Wortfamilien-Übungen',
  reading:           'Lautlese-Verfahren, Paartandem-Lesen und chorisches Lesen',
  sight_words:       'Merkwort-Trainings und Blitzkarten',
  english:           'spielerische Phonics-Übungen',
  fluency:           'wiederholtes Lesen bekannter Texte',
  comprehension:     'Leseverständnis-Fragen zu kurzen Absätzen',
  decoding:          'Silbenlesen und Wortkarten-Übungen',
};

function generateHeuristicAssessment(input: AssessmentInput): string {
  const { child, overview, byCategory, benchmarks } = input;

  const valid  = byCategory.filter((c) => c.n_exercises >= 3);
  const sorted = [...valid].sort((a, b) => b.accuracy_pct - a.accuracy_pct);
  const strongest = sorted[0] ?? null;
  const weakest   = sorted[sorted.length - 1] ?? null;

  const actLabel =
    overview.active_days_30 >= 20 ? 'sehr regelmäßig' :
    overview.active_days_30 >= 10 ? 'regelmäßig'      :
    overview.active_days_30 >= 5  ? 'gelegentlich'    : 'nur sporadisch';

  // Absatz 1 — Beobachtung
  const p1 =
    `${child.name} hat in den letzten 30 Tagen ${overview.total_exercises} Übungen absolviert ` +
    `und dabei eine Gesamt-Genauigkeit von ${overview.accuracy_pct}% erreicht. ` +
    `An ${overview.active_days_30} Tagen war ${child.name} aktiv — die Nutzung war ${actLabel}. ` +
    `Die aktuelle Streak liegt bei ${overview.current_streak} Tag${overview.current_streak === 1 ? '' : 'en'}.`;

  // Absatz 2 — Stärken
  let p2: string;
  if (strongest && strongest.accuracy_pct >= 80) {
    const bm = benchmarks.find((b) => b.category === strongest.category);
    const bonus =
      bm && bm.diff_pct > 10
        ? ` Hier liegt ${child.name} deutlich über dem Peer-Durchschnitt (+${bm.diff_pct}%).`
        : '';
    p2 =
      `Besondere Stärken zeigen sich im Bereich „${categoryLabel(strongest.category)}" ` +
      `(${strongest.accuracy_pct}%).${bonus} ` +
      `Diese Kompetenz kann als Anker für den weiteren Lernaufbau genutzt werden.`;
  } else {
    p2 =
      `${child.name} zeigt über die verschiedenen Kategorien eine vergleichbare Grundleistung ` +
      `ohne klare Spitzenbereiche. Der weitere Aufbau sollte breit angelegt bleiben.`;
  }

  // Absatz 3 — Förderansatz
  let p3: string;
  if (weakest && weakest.accuracy_pct < 65) {
    const methode =
      FOERDER_METHODEN[weakest.category] ?? 'gezielte Übungen im Bereich';
    p3 =
      `Deutlicher Förderbedarf besteht im Bereich „${categoryLabel(weakest.category)}" ` +
      `(${weakest.accuracy_pct}% bei ${weakest.n_exercises} Übungen). ` +
      `Konkret empfehlen sich: ${methode}. ` +
      `Eine tägliche Fördereinheit von 10–15 Minuten über 4–6 Wochen ist oft ausreichend, ` +
      `um sichtbaren Fortschritt zu erzielen.`;
  } else {
    p3 =
      `Aktuell zeigt sich kein einzelner Förderschwerpunkt mit deutlichem Abstand zu den anderen Bereichen. ` +
      `Empfehlenswert ist kontinuierliches Üben über die breitere Kategorien-Palette, ` +
      `um den aktuellen Leistungsstand zu festigen.`;
  }

  return [p1, p2, p3].join('\n\n');
}
