import { Genre, ScriptEntry } from '../../types';

export const ISFP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 10, variations: [
        { text: "배경 색감이 너무 예쁘다... 느와르 분위기 쩔어.", emotion: 'happy' },
        { text: "조명 연출이 대박이야. 분위기 있어.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "주인공 옷 스타일 완전 힙하다.", emotion: 'happy' }] },
    { time: 35, variations: [{ text: "음악이 너무 긴박해서 심장 터질 거 같아.", emotion: 'shocked' }] },
    { time: 50, variations: [{ text: "싸우는 장면인데 춤추는 것 같아. 아름다워.", emotion: 'happy' }] },
    { time: 60, variations: [{ text: "주인공 눈빛이 너무 슬퍼 보여...", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "다치지 말고 평화롭게 해결했으면 좋겠는데.", emotion: 'crying' }] },
    { time: 80, variations: [{ text: "그냥 다 같이 행복하게 살면 안 되나?", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "엔딩 장면 구도가 완벽해. 엽서 같아.", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "영상미 대박. 캡처해서 배경화면 해야지.", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "저 배우 눈빛이 너무 아련해...", emotion: 'neutral' },
        { text: "분위기에 취한다...", emotion: 'neutral' }
      ]
    },
    { time: 25, variations: [{ text: "풍경이 너무 예뻐서 나도 저기 가보고 싶어.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "BGM 선정 미쳤다... 플레이리스트에 추가.", emotion: 'happy' }] },
    { time: 55, variations: [{ text: "사랑의 감정이 색깔로 표현된 것 같아.", emotion: 'happy' }] },
    { time: 70, variations: [{ text: "나도 저런 사랑 받을 자격이 있을까?", emotion: 'crying' }] },
    { time: 85, variations: [{ text: "해피엔딩이라 마음이 놓여. 다행이다.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "여운이 길게 남을 것 같아...", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 15, variations: [
        { text: "분위기가 너무 기괴해... 소름 돋아.", emotion: 'shocked' },
        { text: "미술 감독 상 줘야 돼. 진짜 무섭게 잘 꾸몄어.", emotion: 'shocked' }
      ]
    },
    { time: 30, variations: [{ text: "소리가 너무 리얼해서 귀 막고 싶어.", emotion: 'shocked' }] },
    { time: 45, variations: [{ text: "괴물 디자인이 독창적이면서 혐오스러워.", emotion: 'shocked' }] },
    { time: 55, variations: [{ text: "미장센이 예술이네. 공포와 아름다움은 종이 한 장 차이.", emotion: 'neutral' }] },
    { time: 70, variations: [{ text: "제발 아무도 죽지 마...", emotion: 'crying' }] },
    { time: 85, variations: [{ text: "끝나서 다행이야. 기 빨려.", emotion: 'neutral' }] },
    { time: 95, variations: [{ text: "꿈에 나올까 봐 무서운데 묘하게 끌려.", emotion: 'neutral' }] }
  ],
  [Genre.CRIME]: [
    { time: 20, variations: [
        { text: "느와르 특유의 칙칙한 색감이 좋아.", emotion: "happy" },
        { text: "회색빛 도시 풍경이 쓸쓸해 보여.", emotion: "neutral" }
      ]
    },
    { time: 40, variations: [{ text: "주인공의 고뇌가 느껴져서 마음 아파.", emotion: "neutral" }] },
    { time: 60, variations: [{ text: "배신당했을 때 표정 연기 대박이다.", emotion: "shocked" }] },
    { time: 80, variations: [{ text: "너무 잔인해... 못 보겠어.", emotion: "shocked" }] },
    { time: 90, variations: [{ text: "쓸쓸한 결말이라 더 기억에 남을 듯.", emotion: "neutral" }] }
  ],
  [Genre.COMEDY]: [
    { time: 20, variations: [
        { text: "소소하게 웃겨서 좋아.", emotion: "happy" },
        { text: "잔잔한 웃음이 좋네.", emotion: "happy" }
      ]
    },
    { time: 40, variations: [{ text: "캐릭터들이 다 개성 있고 귀여워.", emotion: "happy" }] },
    { time: 60, variations: [{ text: "편하게 볼 수 있어서 좋다.", emotion: "happy" }] },
    { time: 80, variations: [{ text: "저런 친구들이랑 여행 가면 재밌겠다.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "기분 전환 제대로 했다.", emotion: "happy" }] }
  ]
};