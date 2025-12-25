import { Genre, ScriptEntry } from '../types';
import { INTJ_SCRIPTS } from './mbti/INTJ/index';
import { INTP_SCRIPTS } from './mbti/INTP/index';
import { ENTJ_SCRIPTS } from './mbti/ENTJ';
import { ENTP_SCRIPTS } from './mbti/ENTP';
import { INFJ_SCRIPTS } from './mbti/INFJ/index';
import { INFP_SCRIPTS } from './mbti/INFP/index';
import { ENFJ_SCRIPTS } from './mbti/ENFJ';
import { ENFP_SCRIPTS } from './mbti/ENFP';
import { ISTJ_SCRIPTS } from './mbti/ISTJ';
import { ISFJ_SCRIPTS } from './mbti/ISFJ';
import { ESTJ_SCRIPTS } from './mbti/ESTJ';
import { ESFJ_SCRIPTS } from './mbti/ESFJ';
import { ISTP_SCRIPTS } from './mbti/ISTP';
import { ISFP_SCRIPTS } from './mbti/ISFP';
import { ESTP_SCRIPTS } from './mbti/ESTP';
import { ESFP_SCRIPTS } from './mbti/ESFP';

// All scripts aggregated by MBTI type
const ALL_MBTI_DATA: Record<string, Record<Genre, ScriptEntry[]>> = {
  INTJ: INTJ_SCRIPTS,
  INTP: INTP_SCRIPTS,
  ENTJ: ENTJ_SCRIPTS,
  ENTP: ENTP_SCRIPTS,
  INFJ: INFJ_SCRIPTS,
  INFP: INFP_SCRIPTS,
  ENFJ: ENFJ_SCRIPTS,
  ENFP: ENFP_SCRIPTS,
  ISTJ: ISTJ_SCRIPTS,
  ISFJ: ISFJ_SCRIPTS,
  ESTJ: ESTJ_SCRIPTS,
  ESFJ: ESFJ_SCRIPTS,
  ISTP: ISTP_SCRIPTS,
  ISFP: ISFP_SCRIPTS,
  ESTP: ESTP_SCRIPTS,
  ESFP: ESFP_SCRIPTS,
};

/**
 * MOVIE SCRIPTS DATA (영화 스크립트 데이터)
 * --------------------------------------
 * 16가지 MBTI 유형별 상세 반응 데이터베이스입니다.
 * 구조: Record<Genre, Record<MBTI, ScriptEntry[]>>
 * 
 * 데이터는 'data/mbti' 폴더의 개별 파일에서 불러와서
 * 장르별로 그룹화하여 내보냅니다.
 */
export const MOVIE_SCRIPTS: Record<string, Record<string, ScriptEntry[]>> = {};

// Initialize Genre keys
Object.values(Genre).forEach(genre => {
  MOVIE_SCRIPTS[genre] = {};
});

// Transform Data Structure: MBTI -> Genre  ===>  Genre -> MBTI
Object.keys(ALL_MBTI_DATA).forEach((mbti) => {
  const mbtiScripts = ALL_MBTI_DATA[mbti];
  Object.keys(mbtiScripts).forEach((genreKey) => {
    // Ensure the genre key exists in the target object
    if (!MOVIE_SCRIPTS[genreKey]) {
      MOVIE_SCRIPTS[genreKey] = {};
    }
    MOVIE_SCRIPTS[genreKey][mbti] = mbtiScripts[genreKey as Genre];
  });
});