
export enum Genre {
  ROMANCE = '로맨스',
  ACTION = '액션',
  CRIME = '범죄/느와르',
  HORROR = '공포',
  COMEDY = '코미디'
}

export const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
] as const;

export type MBTI = typeof MBTI_TYPES[number];

export type Emotion = 'neutral' | 'shocked' | 'happy' | 'crying' | 'angry' | 'bored';

// The resolved single log entry used by the Theater
export type LogEntry = {
  time: number; // Seconds into the movie
  text: string;
  emotion: Emotion;
};

// Data structure for the script files supporting random variations
export type ScriptVariation = {
  text: string;
  emotion: Emotion;
};

export type ScriptEntry = {
  time: number;
  variations: ScriptVariation[];
};

export interface Character {
  id: string;
  name: string;
  image: string;
  mbti: MBTI;
  role: string; // e.g. "Protagonist", "Villain", "Extra"
}

export interface Relationship {
  id: string;
  fromId: string;
  toId: string;
  label: string; // e.g. "친구", "연인", "라이벌"
}

export interface SimulationLog extends LogEntry {
  characterId: string;
}

export interface SimulationState {
  isActive: boolean;
  isFinished: boolean;
  movieProgress: number; // 0 to 100
  currentLogIndex: number;
}

export interface CreditEntry {
  role: string;
  name: string;
}
