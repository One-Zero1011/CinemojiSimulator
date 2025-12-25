import { MBTI } from '../types';

/**
 * MBTI 매핑 설정 (MBTI MAPPING CONFIGURATION)
 * ----------------------------------------
 * 이 파일은 어떤 MBTI 유형이 어떤 "아키타입(Archetype)" 스크립트를 사용할지 결정합니다.
 * 
 * 사용 가능한 아키타입:
 * - 'ANALYST': 논리적, 비판적, 플롯 중심 (예: INTJ, INTP)
 * - 'DIPLOMAT': 감성적, 공감적, 캐릭터 중심 (예: INFP, ENFJ)
 * - 'SENTINEL': 규칙 준수, 현실적, 디테일 중심 (예: ISTJ, ESTJ)
 * - 'EXPLORER': 에너제틱, 행동 중심, 감각적 (예: ESTP, ISFP)
 * 
 * 캐릭터의 반응 스타일을 바꾸려면 오른쪽의 값을 변경하세요.
 */

export const MBTI_MAP: Record<MBTI, string> = {
  // 분석가형 (Analysts)
  INTJ: 'ANALYST', 
  INTP: 'ANALYST', 
  ENTJ: 'ANALYST', 
  ENTP: 'ANALYST',

  // 외교관형 (Diplomats)
  INFJ: 'DIPLOMAT', 
  INFP: 'DIPLOMAT', 
  ENFJ: 'DIPLOMAT', 
  ENFP: 'DIPLOMAT',

  // 관리자형 (Sentinels)
  ISTJ: 'SENTINEL', 
  ISFJ: 'SENTINEL', 
  ESTJ: 'SENTINEL', 
  ESFJ: 'SENTINEL',

  // 탐험가형 (Explorers)
  ISTP: 'EXPLORER', 
  ISFP: 'EXPLORER', 
  ESTP: 'EXPLORER', 
  ESFP: 'EXPLORER'
};
