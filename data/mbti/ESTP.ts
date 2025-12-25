import { Genre, ScriptEntry } from '../../types';

export const ESTP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 8, variations: [
        { text: "와씨! 저거 봤냐? 방금 오토바이 점프?", emotion: 'shocked' },
        { text: "액션 쾌감 쩐다! 이거지!", emotion: 'happy' }
      ]
    },
    { time: 15, variations: [{ text: "나도 저거 할 수 있을 거 같은데? 몸이 근질거린다.", emotion: 'happy' }] },
    { time: 28, variations: [{ text: "야야, 오른쪽으로 피했어야지! 내가 했으면 살았다.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "저런 차는 얼마냐? 갖고 싶네.", emotion: 'happy' }] },
    { time: 48, variations: [{ text: "지루한 대화 파트 스킵 좀. 걍 싸워!", emotion: 'bored' }] },
    { time: 68, variations: [{ text: "터진다! 터진다! 콰광! ㅋㅋㅋㅋ", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "주인공 피지컬 지리네. 운동 자극 된다.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "스트레스 다 풀리네. 끝나고 맥주 콜?", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "다음엔 4DX로 보자. 의자 흔들려야 제맛이지.", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "진도 너무 느린데? 답답하다.", emotion: 'bored' },
        { text: "빨리빨리 좀 해라.", emotion: 'bored' }
      ]
    },
    { time: 25, variations: [{ text: "저런 이벤트 준비하려면 돈 많이 깨질 텐데.", emotion: 'neutral' }] },
    { time: 40, variations: [{ text: "나였으면 저기서 바로 고백 박았음.", emotion: 'happy' }] },
    { time: 55, variations: [{ text: "질질 끌지 말고 화끈하게 키스해!", emotion: 'angry' }] },
    { time: 70, variations: [{ text: "이벤트 스케일 보소. 돈 좀 썼겠네.", emotion: 'shocked' }] },
    { time: 85, variations: [{ text: "잘 됐네 잘 됐어. 이제 밥 먹으러 가자.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "해피엔딩 굿. 이제 술 마시러 가자.", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "저거 다 분장이야. 쫄지 마.", emotion: 'happy' },
        { text: "가짜 피 티 나네.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "귀신? 한판 붙어. 내가 이김.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "깜짝이야! 소리 좀 줄여라.", emotion: 'shocked' }] },
    { time: 60, variations: [{ text: "야 저거 가짜 티 너무 난다 ㅋㅋㅋ", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "나라면 저 귀신 엎어치기로 제압함.", emotion: 'happy' }] },
    { time: 85, variations: [{ text: "생각보다 시시한데? 더 센 거 없나?", emotion: 'bored' }] },
    { time: 95, variations: [{ text: "스릴 쩔었다. 근데 현실에선 내가 주인공임.", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 15, variations: [
        { text: "형사 주먹 좀 쓰네. 타격감 굿.", emotion: 'happy' },
        { text: "싸움은 저렇게 해야지.", emotion: 'happy' }
      ]
    },
    { time: 30, variations: [{ text: "도박판은 저런 맛이지. 올인!", emotion: "happy" }] },
    { time: 55, variations: [{ text: "나였으면 차 버리고 오토바이로 튀었다.", emotion: 'happy' }] },
    { time: 70, variations: [{ text: "총격전 개꿀잼! 리얼하네.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "화끈하네. 남자의 영화다.", emotion: 'happy' }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "이거 완전 내 얘기 아니냐? ㅋㅋ", emotion: "happy" },
        { text: "나 보는 줄 ㅋㅋㅋ", emotion: "happy" }
      ]
    },
    { time: 30, variations: [{ text: "저 배우 드립력 미쳤네 ㅋㅋㅋ", emotion: "happy" }] },
    { time: 50, variations: [{ text: "아 웃겨서 배 아파 ㅋㅋㅋ", emotion: "happy" }] },
    { time: 70, variations: [{ text: "인생 뭐 있어? 즐기며 사는 거지.", emotion: "happy" }] },
    { time: 95, variations: [{ text: "존잼. 2편 나오면 본다.", emotion: "happy" }] }
  ]
};