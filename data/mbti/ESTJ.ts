import { Genre, ScriptEntry } from '../../types';

export const ESTJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 10, variations: [
        { text: "작전 브리핑이 너무 허술해. 실패할 게 뻔해.", emotion: 'angry' },
        { text: "준비가 부족해. 계획대로 안 될 거야.", emotion: 'angry' }
      ] 
    },
    { time: 25, variations: [{ text: "팀의 규율을 해치는 행동은 용납할 수 없어.", emotion: 'angry' }] },
    { time: 30, variations: [{ text: "명령 불복종? 바로 징계감이지.", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "화력 지원 요청했어야지! 답답하네 진짜.", emotion: 'angry' }] },
    { time: 60, variations: [{ text: "리더가 결단력이 없어. 빨리 지시를 내려야지.", emotion: 'angry' }] },
    { time: 70, variations: [{ text: "그래, 이렇게 체계적으로 밀고 들어가야지.", emotion: 'happy' }] },
    { time: 80, variations: [{ text: "임무 완수가 최우선이야. 감정은 배제해.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "질서가 회복되었군. 아주 좋아.", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "보고서 작성할 게 산더미겠군.", emotion: 'neutral' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 20, variations: [
        { text: "데이트 비용은 더치페이가 합리적이지 않나?", emotion: 'neutral' },
        { text: "경제 관념이 바로 잡힌 사람을 만나야 해.", emotion: 'neutral' }
      ]
    },
    { time: 35, variations: [{ text: "결혼하려면 현실적인 조건도 따져봐야지.", emotion: 'neutral' }] },
    { time: 50, variations: [{ text: "감정적으로 행동하지 말고 대화로 해결해!", emotion: 'angry' }] },
    { time: 60, variations: [{ text: "직장 생활에 지장을 주면 안 되지.", emotion: 'angry' }] },
    { time: 75, variations: [{ text: "약속은 지키라고 있는 거야. 신뢰가 깨졌어.", emotion: 'angry' }] },
    { time: 80, variations: [{ text: "책임감 있는 모습, 아주 바람직해.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "양가 부모님 허락부터 받는 게 순서지.", emotion: 'neutral' }] },
    { time: 95, variations: [{ text: "결혼은 현실이야. 집은 구했나?", emotion: 'neutral' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "일단 인원 점검부터 해. 흩어지지 말고.", emotion: 'neutral' },
        { text: "인원수 파악해. 낙오자 없도록.", emotion: 'neutral' }
      ]
    },
    { time: 15, variations: [{ text: "비명 지르지 마! 상황 파악하고 침착해!", emotion: 'angry' }] },
    { time: 35, variations: [{ text: "패닉에 빠지면 다 죽어. 정신 차려!", emotion: 'angry' }] },
    { time: 55, variations: [{ text: "지도를 그려가면서 이동해야 길을 안 잃지.", emotion: 'angry' }] },
    { time: 70, variations: [{ text: "리더의 말을 안 들으니까 변을 당하지.", emotion: 'angry' }] },
    { time: 80, variations: [{ text: "무기 챙겨. 내 몸은 내가 지켜야 해.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "규칙을 어긴 자들은 다 죽었군. 당연한 결과야.", emotion: 'neutral' }] },
    { time: 95, variations: [{ text: "상황 종료. 생존자 보고해.", emotion: 'neutral' }] }
  ],
  [Genre.CRIME]: [
    { time: 20, variations: [
        { text: "경찰이 무능하군. 시스템 개혁이 필요해.", emotion: "angry" },
        { text: "저런 식이면 범인 절대 못 잡아.", emotion: "angry" }
      ]
    },
    { time: 30, variations: [{ text: "법 집행은 엄격해야 해. 봐주면 안 돼.", emotion: "angry" }] },
    { time: 50, variations: [{ text: "조직 내 배신자는 즉결 처분해야 기강이 서지.", emotion: "neutral" }] },
    { time: 70, variations: [{ text: "증거 확보해서 합법적으로 체포해.", emotion: "neutral" }] },
    { time: 90, variations: [{ text: "사회 정의 구현 완료.", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 20, variations: [
        { text: "일할 땐 일하고 놀 땐 놀아야지.", emotion: "neutral" },
        { text: "공사 구분이 확실하군.", emotion: "neutral" }
      ]
    },
    { time: 40, variations: [{ text: "저런 실수는 용납이 안 되는데. 웃어넘길 일이 아니야.", emotion: "angry" }] },
    { time: 60, variations: [{ text: "그래도 마무리는 훈훈해서 다행이군.", emotion: "happy" }] },
    { time: 80, variations: [{ text: "사회 생활 잘하네. 저건 배워야 해.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "스트레스 해소용으로 적합.", emotion: "happy" }] }
  ]
};