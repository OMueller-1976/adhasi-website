export function categoryLabel(key: string): string {
  const map: Record<string, string> = {
    // Pool-Kategorien
    phonological: 'Laute hören',
    phoneme_grapheme: 'Laut-Buchstabe-Zuordnung',
    syllable_morpheme: 'Silben & Wortstamm',
    orthographic_rules: 'Rechtschreibregeln',
    reading: 'Lesen',
    sight_words: 'Merkwörter',
    english: 'Englisch',
    // Legacy exercise_sessions Kategorien
    decoding: 'Wörter erkennen',
    fluency: 'Lesefluss',
    comprehension: 'Leseverständnis',
    // Weitere Legacy-Varianten
    lesen: 'Lesen',
    rechtschreibung: 'Rechtschreibung',
    diktat: 'Diktat',
    phonologie: 'Phonologie',
    silben: 'Silben',
    woerter: 'Wörter',
    saetze: 'Sätze',
    mathematik: 'Mathematik',
  };
  return map[key] ?? capitalizeWithSpaces(key);
}

function capitalizeWithSpaces(s: string): string {
  if (!s) return s;
  const pretty = s.replace(/_/g, ' ');
  return pretty.charAt(0).toUpperCase() + pretty.slice(1);
}
