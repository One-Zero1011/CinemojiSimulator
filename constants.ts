import { Genre, MBTI, LogEntry, ScriptEntry } from './types';
import { MOVIE_SCRIPTS } from './data/scripts';
import { MBTI_MAP } from './data/mbtiMapping';

// This utility function pulls data from the "data" folder.
// It matches the requested Genre and MBTI to the correct script.
// It randomly selects one variation for each timestamp.

export const getMovieScript = (genre: Genre, mbti: MBTI, name: string): LogEntry[] => {
  // 1. Get the scripts for the specific genre
  const genreScripts = MOVIE_SCRIPTS[genre];
  
  if (!genreScripts) {
     console.error(`Script not found for Genre: ${genre}`);
     return [];
  }

  // 2. Try to find the specific MBTI script first (e.g., 'ISTJ')
  // If not found, fall back to the Archetype mapping (e.g., 'SENTINEL')
  const archetype = MBTI_MAP[mbti];
  let rawScript: ScriptEntry[] = genreScripts[mbti];

  // Fallback to archetype if specific script doesn't exist
  if (!rawScript && archetype) {
    rawScript = genreScripts[archetype];
  }

  // 3. Process the script: Resolve variations randomly
  const baseScript: LogEntry[] = (rawScript || []).map(entry => {
    // Pick a random variation
    const randomIndex = Math.floor(Math.random() * entry.variations.length);
    const selectedVariation = entry.variations[randomIndex];

    return {
      time: entry.time,
      text: selectedVariation.text,
      emotion: selectedVariation.emotion
    };
  });
  
  // 4. Add a personalized intro based on specific MBTI
  const intro: LogEntry = {
    time: 0,
    text: `[${name}] (${mbti}) 님 입장하셨습니다.`,
    emotion: 'neutral'
  };

  return [intro, ...baseScript];
};