import { Genre, ScriptEntry } from '../../types';

export const ISTJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 10, variations: [
        { text: "경찰 신분증 패용 위치가 규정과 다른데.", emotion: 'neutral' },
        { text: "복장이 불량하군. 감점 대상이야.", emotion: 'neutral' }
      ] 
    },
    { time: 20, variations: [{ text: "작전 개시 시간은 엄수해야지. 1분 늦었어.", emotion: 'angry' }] },
    { time: 35, variations: [{ text: "저렇게 기물을 파손하면 세금은 누가 내지?", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "명령 체계를 무시하고 독단적으로 행동하다니. 징계감이야.", emotion: 'angry' }] },
    { time: 55, variations: [{ text: "탄창 교체도 안 하고 50발을 쏘네. 고증 엉망이군.", emotion: 'bored' }] },
    { time: 70, variations: [{ text: "증거 확보부터 해야지. 절차가 틀렸어.", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "그래, 절차대로 영장을 발부받았어야지.", emotion: 'neutral' }] },
    { time: 85, variations: [{ text: "범인 검거 후 미란다 원칙 고지했나?", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "권선징악. 가장 바람직한 결말이군.", emotion: 'neutral' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "사내 연애는 인사 고과에 부정적일 텐데.", emotion: 'neutral' },
        { text: "공과 사는 구분해야지.", emotion: 'neutral' }
      ]
    },
    { time: 25, variations: [{ text: "내일 출근해야 하는데 새벽까지 술을 마시네.", emotion: 'angry' }] },
    { time: 40, variations: [{ text: "약속 시간 늦는 건 예의가 아니지. 신뢰 문제야.", emotion: 'angry' }] },
    { time: 55, variations: [{ text: "저축 계획도 없이 결혼을 추진하다니 무모해.", emotion: 'neutral' }] },
    { time: 65, variations: [{ text: "오해를 풀려면 명확한 사실 관계 확인이 필요해.", emotion: 'neutral' }] },
    { time: 70, variations: [{ text: "결혼식장 예약은 1년 전에 해야 하는데... 현실성 없네.", emotion: 'neutral' }] },
    { time: 80, variations: [{ text: "책임감 있게 관계를 이어나가는 모습은 좋군.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "안정적인 가정을 꾸리는 결말은 보기 좋군.", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "부동산 계약 전에 등기부등본을 확인했어야지.", emotion: 'angry' },
        { text: "집값이 싼 데는 이유가 있는 법이야.", emotion: 'neutral' }
      ]
    },
    { time: 20, variations: [{ text: "출입 금지 구역에 들어가는 건 불법 침입이야.", emotion: 'neutral' }] },
    { time: 35, variations: [{ text: "배터리 잔량 확인 안 했나? 준비성이 부족해.", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "경찰에 신고부터 해. 왜 개인플레이를 하지?", emotion: 'angry' }] },
    { time: 65, variations: [{ text: "공포에 질려서 이성적인 판단을 못하고 있어.", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "문을 잠갔는지 더블 체크했어야지.", emotion: 'angry' }] },
    { time: 85, variations: [{ text: "살아남으려면 매뉴얼대로 행동해야 해.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "생존자 1명. 생존율 20%. 비효율적인 그룹이었어.", emotion: 'neutral' }] }
  ],
  [Genre.CRIME]: [
    { time: 10, variations: [
        { text: "범죄 현장 보존이 최우선이야.", emotion: "neutral" },
        { text: "폴리스 라인을 넘어가면 안 되지.", emotion: "angry" }
      ]
    },
    { time: 20, variations: [{ text: "증거물 관리가 엉망이군. 지문 다 묻었어.", emotion: 'angry' }] },
    { time: 40, variations: [{ text: "참고인 조사를 철저히 했으면 진작 잡았을 텐데.", emotion: "neutral" }] },
    { time: 60, variations: [{ text: "CCTV 확인부터 하는 게 기본 절차 아닌가?", emotion: 'angry' }] },
    { time: 75, variations: [{ text: "법대로 처리해야 사회 질서가 유지되지.", emotion: "neutral" }] },
    { time: 95, variations: [{ text: "법의 심판을 받는 결말. 적절해.", emotion: 'happy' }] }
  ],
  [Genre.COMEDY]: [
    { time: 15, variations: [
        { text: "저게 웃긴가? 논리적으로 말이 안 되는데.", emotion: 'neutral' },
        { text: "개연성이 너무 떨어지는 설정이야.", emotion: 'neutral' }
      ]
    },
    { time: 30, variations: [{ text: "직장에서 저렇게 행동하면 바로 해고야.", emotion: "shocked" }] },
    { time: 50, variations: [{ text: "공공장소에서 저런 민폐를 끼치다니.", emotion: 'angry' }] },
    { time: 70, variations: [{ text: "규칙을 어기니까 저런 사단이 나지.", emotion: "neutral" }] },
    { time: 85, variations: [{ text: "가볍게 보기엔 나쁘지 않군.", emotion: 'neutral' }] }
  ]
};