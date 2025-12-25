import { Genre, ScriptEntry } from '../../types';

export const ISFJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 15, variations: [
        { text: "어머, 너무 위험해 보여. 헬멧이라도 쓰지.", emotion: 'shocked' },
        { text: "보호 장비 없이 저렇게 다니면 어떡해...", emotion: 'shocked' }
      ]
    },
    { time: 25, variations: [{ text: "저기 부서진 가게 주인은 얼마나 속상할까...", emotion: 'crying' }] },
    { time: 40, variations: [{ text: "다치면 어떡해... 보는 내가 다 조마조마하네.", emotion: 'shocked' }] },
    { time: 55, variations: [{ text: "동료가 다쳤는데 치료부터 해야지!", emotion: 'shocked' }] },
    { time: 60, variations: [{ text: "가족사진 보여주면 사망 플래그인데... 안 돼...", emotion: 'crying' }] },
    { time: 70, variations: [{ text: "서로 돕는 모습이 참 보기 좋다.", emotion: 'happy' }] },
    { time: 80, variations: [{ text: "동료들이 도와줘서 정말 다행이야.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "큰일 없이 끝나서 다행이다. 휴.", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 15, variations: [
        { text: "저렇게 챙겨주는 사람 만나야 해. 자상하다.", emotion: 'happy' },
        { text: "따뜻한 말 한마디가 참 중요한데.", emotion: 'happy' }
      ]
    },
    { time: 30, variations: [{ text: "도시락 싸주는 정성 봐. 감동이야.", emotion: 'happy' }] },
    { time: 45, variations: [{ text: "부모님이 반대하시면 힘들 텐데... 걱정되네.", emotion: 'shocked' }] },
    { time: 60, variations: [{ text: "말 한마디라도 예쁘게 하지. 상처받았겠다.", emotion: 'crying' }] },
    { time: 75, variations: [{ text: "오래된 연인의 믿음이 느껴져서 뭉클해.", emotion: 'crying' }] },
    { time: 85, variations: [{ text: "가족들도 축하해주니 너무 좋다.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "오래오래 행복하게 살았으면 좋겠다.", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "분위기가 너무 으스스해. 집에 가고 싶다.", emotion: 'shocked' },
        { text: "나 무서운 거 못 보는데...", emotion: 'shocked' }
      ]
    },
    { time: 20, variations: [{ text: "어린애는 건드리지 마... 제발 ㅠㅠ", emotion: 'crying' }] },
    { time: 35, variations: [{ text: "저 사람 혼자 남았어. 어떡해.", emotion: 'shocked' }] },
    { time: 50, variations: [{ text: "누가 좀 도와줬으면 좋겠는데...", emotion: 'crying' }] },
    { time: 60, variations: [{ text: "내가 뒤에 있을게. 너무 무서워.", emotion: 'shocked' }] },
    { time: 75, variations: [{ text: "다친 곳은 괜찮나? 감염되면 안 되는데.", emotion: 'shocked' }] },
    { time: 95, variations: [{ text: "해피엔딩이라 다행이야. 다친 사람 치료부터 하자.", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 25, variations: [
        { text: "피해자 가족들은 어떡해 ㅠㅠ", emotion: "crying" },
        { text: "남겨진 사람들이 너무 안쓰러워.", emotion: "crying" }
      ]
    },
    { time: 40, variations: [{ text: "나쁜 사람들... 어떻게 저런 짓을 할 수 있지?", emotion: "angry" }] },
    { time: 60, variations: [{ text: "형사님 무리하시다가 다치시면 안 되는데.", emotion: "shocked" }] },
    { time: 85, variations: [{ text: "나쁜 짓 하면 벌 받는 거야.", emotion: "neutral" }] },
    { time: 90, variations: [{ text: "이제 평화가 찾아왔으면 좋겠다.", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 15, variations: [
        { text: "저런 친구 있으면 진짜 든든하겠다.", emotion: "happy" },
        { text: "나도 저런 우정 쌓고 싶어.", emotion: "happy" }
      ]
    },
    { time: 30, variations: [{ text: "다치지 않아서 다행이야.", emotion: "happy" }] },
    { time: 50, variations: [{ text: "너무 심한 장난은 아닌가? 기분 나쁘겠다.", emotion: "shocked" }] },
    { time: 70, variations: [{ text: "화해해서 다행이야. 싸우면 안 좋아.", emotion: "happy" }] },
    { time: 80, variations: [{ text: "가족끼리 보기 좋은 영화네.", emotion: "happy" }] }
  ]
};