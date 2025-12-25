import { Genre, ScriptEntry } from '../../types';

export const ESFJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 5, variations: [
        { text: "주인공 옷 핏이 너무 좋다. 어디 브랜드지?", emotion: 'happy' },
        { text: "어머, 저 배우 스타일 너무 좋다.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "다들 사이좋게 지내면 안 되나? 왜 싸워...", emotion: 'shocked' }] },
    { time: 35, variations: [{ text: "세상에, 친구를 배신하다니 인간도 아니야!", emotion: 'angry' }] },
    { time: 55, variations: [{ text: "다들 힘을 합치는 거 봐. 뭉클하다 ㅠㅠ", emotion: 'crying' }] },
    { time: 65, variations: [{ text: "저 조연 캐릭터 너무 호감이다. 인스타 팔로우해야지.", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "나였으면 무서워서 벌써 도망갔을 거야.", emotion: 'shocked' }] },
    { time: 85, variations: [{ text: "다친 데는 괜찮나? 흉터 남으면 안 되는데.", emotion: 'shocked' }] },
    { time: 95, variations: [{ text: "친구들이랑 다 같이 보니까 더 재밌다! 그치?", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "어머, 저 레스토랑 분위기 너무 좋다. 어디지?", emotion: 'happy' },
        { text: "나도 저런 데서 데이트하고 싶어.", emotion: 'happy' }
      ]
    },
    { time: 25, variations: [{ text: "남자가 센스가 있네. 저런 선물을 준비하다니.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "친구들한테 다 말하고 다니네 ㅋㅋ 귀여워.", emotion: 'happy' }] },
    { time: 55, variations: [{ text: "주변 사람들 축복받으면서 연애하는 거 부러워.", emotion: 'happy' }] },
    { time: 70, variations: [{ text: "내가 다 설렌다. 오늘 잠 못 자겠어.", emotion: 'happy' }] },
    { time: 80, variations: [{ text: "친구들이 도와줘서 잘 된 거야. 역시 의리!", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "결혼식 장면 너무 예뻐! 나도 저런 드레스 입고 싶다.", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "얘들아 우리도 나중에 더블 데이트 하자!", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "꺄악! 깜짝이야! 너도 놀랐어?", emotion: 'shocked' },
        { text: "엄마야! 심장 떨어질 뻔했네.", emotion: 'shocked' }
      ]
    },
    { time: 20, variations: [{ text: "무서워 ㅠㅠ 나 손 좀 잡아줘.", emotion: 'shocked' }] },
    { time: 35, variations: [{ text: "저기 가지 마! 위험하다고!", emotion: 'shocked' }] },
    { time: 50, variations: [{ text: "주인공 친구 죽으면 나 진짜 울 거야.", emotion: 'crying' }] },
    { time: 65, variations: [{ text: "어떻게 저렇게 잔인할 수가 있어? 끔찍해.", emotion: 'shocked' }] },
    { time: 80, variations: [{ text: "다들 무사해서 정말 다행이야 ㅠㅠ", emotion: 'crying' }] },
    { time: 95, variations: [{ text: "무서워서 혼 났네. 우리 밝은 거 보러 가자.", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 20, variations: [
        { text: "저 사기꾼, 말은 청산유수네.", emotion: "neutral" },
        { text: "말 하나는 진짜 잘한다.", emotion: "neutral" }
      ]
    },
    { time: 40, variations: [{ text: "형사님 너무 고생한다. 밥은 먹고 다니나?", emotion: "shocked" }] },
    { time: 60, variations: [{ text: "주변 사람들이 도와줘야 잡을 수 있어.", emotion: "neutral" }] },
    { time: 80, variations: [{ text: "가족들 생각해서라도 죄짓지 말아야지.", emotion: "neutral" }] },
    { time: 95, variations: [{ text: "권선징악이라 마음이 편해.", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 15, variations: [
        { text: "어머어머 쟤네 봐 ㅋㅋ", emotion: "happy" },
        { text: "진짜 웃긴다 ㅋㅋㅋ", emotion: "happy" }
      ]
    },
    { time: 30, variations: [{ text: "나도 저런 파티 가보고 싶다.", emotion: "happy" }] },
    { time: 50, variations: [{ text: "주인공 너무 웃겨. 완전 분위기 메이커네.", emotion: "happy" }] },
    { time: 70, variations: [{ text: "다 같이 하하 호호 웃으니까 스트레스 풀려.", emotion: "happy" }] },
    { time: 85, variations: [{ text: "친구들 불러서 파티하고 싶다!", emotion: "happy" }] }
  ]
};