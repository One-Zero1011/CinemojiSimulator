import { Genre, ScriptEntry } from '../../types';

export const ISTP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 12, variations: [
        { text: "차 추격씬 앵글 좋네. 배기음 리얼하다.", emotion: 'happy' },
        { text: "카메라 워킹 예술이네. 박진감 넘쳐.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "저 총은 반동이 심해서 한 손으로 못 쏠 텐데.", emotion: 'neutral' }] },
    { time: 32, variations: [{ text: "말이 너무 많아. 그냥 쏘면 되잖아.", emotion: 'bored' }] },
    { time: 45, variations: [{ text: "와이어 액션 티 너무 난다.", emotion: 'bored' }] },
    { time: 52, variations: [{ text: "저거 C4 아니고 다이너마이트 같은데?", emotion: 'neutral' }] },
    { time: 65, variations: [{ text: "오토바이 기종 뭐지? 튜닝 잘 됐네.", emotion: 'happy' }] },
    { time: 72, variations: [{ text: "오, 저 기술은 좀 쓸만한데? 나중에 해봐야지.", emotion: 'neutral' }] },
    { time: 85, variations: [{ text: "폭발할 때 뒤도 안 돌아보는 거 국룰이지.", emotion: 'happy' }] },
    { time: 92, variations: [{ text: "액션 좋았음. 스토리는 기억 안 남.", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 15, variations: [
        { text: "오토바이 헬멧 안 쓰면 벌금인데.", emotion: 'neutral' },
        { text: "안전 불감증이네.", emotion: 'neutral' }
      ]
    },
    { time: 30, variations: [{ text: "그냥 좋다고 말하면 되지 왜 빙빙 돌려?", emotion: 'bored' }] },
    { time: 45, variations: [{ text: "밀당 귀찮게 왜 저래? 좋으면 좋다 해라.", emotion: 'bored' }] },
    { time: 60, variations: [{ text: "저 차 연비 안 좋을 텐데 기름값 감당 되나.", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "오, 키스신 조명은 잘 썼네.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "결말은 예상대로네. 특별한 건 없어.", emotion: 'neutral' }] },
    { time: 95, variations: [{ text: "끝났냐? 나가자.", emotion: 'neutral' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "문고리 고장 난 거 고쳐주고 싶네.", emotion: 'neutral' },
        { text: "WD-40 뿌리면 해결될 소리인데.", emotion: 'neutral' }
      ]
    },
    { time: 20, variations: [{ text: "전기톱 시동 거는 법도 모르네. 답답하다.", emotion: 'bored' }] },
    { time: 35, variations: [{ text: "저기서 왜 넘어져? 운동 신경 제로네.", emotion: 'bored' }] },
    { time: 50, variations: [{ text: "무기를 쓰려면 제대로 된 걸 집어야지.", emotion: 'neutral' }] },
    { time: 60, variations: [{ text: "그냥 불 지르면 해결되잖아. 탄소는 탄다.", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "귀신보다 사람이 더 무서운 법이지.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "특수분장 퀄리티 좋네. 피 텍스처 리얼함.", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "생각보다 안 무서운데?", emotion: 'neutral' }] }
  ],
  [Genre.CRIME]: [
    { time: 15, variations: [
        { text: "잠금 장치 해제하는 도구, 저거 아님.", emotion: "neutral" },
        { text: "고증이 좀 아쉽네.", emotion: "neutral" }
      ]
    },
    { time: 35, variations: [{ text: "금고 따는 기술, 저거 실제로 안 통함.", emotion: "neutral" }] },
    { time: 50, variations: [{ text: "도주 경로를 하수구로 잡은 건 똑똑하네.", emotion: "happy" }] },
    { time: 65, variations: [{ text: "저격 위치 선정이 좋았어. 풍향 고려했군.", emotion: "happy" }] },
    { time: 75, variations: [{ text: "총기 파지법이 아주 교과서적이네.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "깔끔하게 처리했네. 군더더기 없어.", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "몸개그는 인정.", emotion: "happy" },
        { text: "피지컬로 웃기네.", emotion: "happy" }
      ]
    },
    { time: 30, variations: [{ text: "저 상황에서 저런 임기응변이 나오네.", emotion: "happy" }] },
    { time: 40, variations: [{ text: "ㅋㅋㅋ", emotion: "happy" }] },
    { time: 60, variations: [{ text: "억지 감동은 좀 빼지.", emotion: "bored" }] },
    { time: 80, variations: [{ text: "방금 넘어진 거 연기 아님. 진짜 아플 듯.", emotion: "happy" }] }
  ]
};