import { Genre, ScriptEntry } from '../../types';

export const ENFP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 5, variations: [
        { text: "우와! 시작부터 터진다! 팝콘 와구와구!", emotion: 'happy' },
        { text: "대박 대박! 방금 봤어? 미쳤다!", emotion: 'happy' }
      ]
    },
    { time: 15, variations: [{ text: "나도 저런 초능력 갖고 싶다! 하늘을 날면 어떨까?", emotion: 'happy' }] },
    { time: 30, variations: [{ text: "헐 쟤네 둘이 사귀면 대박이겠다. 케미 미쳤음.", emotion: 'happy' }] },
    { time: 45, variations: [{ text: "갑자기 든 생각인데, 악당이 사실 주인공 아빠 아냐?", emotion: 'shocked' }] },
    { time: 55, variations: [{ text: "어? 저 배우 다른 영화에도 나왔는데! 그 뭐더라?", emotion: 'shocked' }] },
    { time: 65, variations: [{ text: "와 액션씬 예술이다! 나도 무술 배워볼까?", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "반전 소름 돋았어!! 내 팔 닭살 된 거 봐!!", emotion: 'shocked' }] },
    { time: 85, variations: [{ text: "포기하지 마! 할 수 있어! 아자아자!", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "속편 나오면 무조건 첫날 보러 갈 거야! 파티원 모집!", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 5, variations: [
        { text: "꺄악! 둘이 손 잡았어! 어떡해 어떡해!", emotion: 'happy' },
        { text: "어머어머! 오늘 잠 다 잤다!", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "분위기 너무 좋다... 나도 연애하고 싶어.", emotion: 'happy' }] },
    { time: 35, variations: [{ text: "나도 저런 데이트 하고 싶다! 당장 비행기 표 알아볼까?", emotion: 'shocked' }] },
    { time: 50, variations: [{ text: "어머, 서브 남주도 멋있어. 나였으면 둘 다 만남.", emotion: 'happy' }] },
    { time: 65, variations: [{ text: "아니 왜 거기서 오해를 해?! 당장 전화하라고!", emotion: 'angry' }] },
    { time: 75, variations: [{ text: "키스해! 키스해! (박수 치는 중)", emotion: 'happy' }] },
    { time: 85, variations: [{ text: "너무 감동적이야 ㅠㅠ 휴지 어딨어?", emotion: 'crying' }] },
    { time: 95, variations: [{ text: "해피엔딩 만세! 세상은 아직 아름다워!", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "무서운데 재밌어! 이게 바로 스릴이지!", emotion: 'happy' },
        { text: "심장 쫄깃쫄깃해! 짜릿해!", emotion: 'happy' }
      ]
    },
    { time: 15, variations: [{ text: "갑자기 튀어나오면 나 진짜 소리 지른다!!", emotion: 'shocked' }] },
    { time: 30, variations: [{ text: "저기 들어가지 마! 꼭 들어가는 애들이 먼저 죽더라!", emotion: 'angry' }] },
    { time: 45, variations: [{ text: "저 인형 눈동자가 움직인 거 같아! 봤어?!", emotion: 'shocked' }] },
    { time: 60, variations: [{ text: "으악! 깜짝이야! 팝콘 날아감 ㅋㅋㅋ", emotion: 'shocked' }] },
    { time: 75, variations: [{ text: "귀신 분장 쩐다. 할로윈 때 저거 해야지.", emotion: 'happy' }] },
    { time: 85, variations: [{ text: "살아서 다행이야... 심장 터지는 줄.", emotion: 'shocked' }] },
    { time: 95, variations: [{ text: "와 씨... 심장마비 걸릴 뻔. 놀이공원 귀신의 집 가고 싶다.", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 15, variations: [
        { text: "탐정 코트 너무 멋있다! 나도 사고 싶어!", emotion: "happy" },
        { text: "저 모자 어디서 팔지? 검색해봐야지.", emotion: "happy" }
      ]
    },
    { time: 30, variations: [{ text: "내가 범인 맞춰볼게! 저 피자 배달부 수상해!", emotion: "shocked" }] },
    { time: 50, variations: [{ text: "와 머리싸움 대박. 내 뇌가 따라가질 못해.", emotion: "shocked" }] },
    { time: 65, variations: [{ text: "나쁜 놈들 다 감옥 보내버려! 정의의 이름으로!", emotion: "angry" }] },
    { time: 80, variations: [{ text: "반전의 반전! 작가님 천재 아니야?", emotion: "happy" }] },
    { time: 90, variations: [{ text: "반전 대박! 입 벌리고 봄 ㅋㅋㅋ", emotion: "shocked" }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "앜ㅋㅋㅋㅋㅋ 미쳤나 봐 ㅋㅋㅋ", emotion: "happy" },
        { text: "배꼽 가출함 ㅋㅋㅋㅋ", emotion: "happy" }
      ]
    },
    { time: 25, variations: [{ text: "저 상황 나도 겪어봄 ㅋㅋㅋ 완전 공감!", emotion: "happy" }] },
    { time: 40, variations: [{ text: "저 캐릭터 내 친구 닮았어! 사진 찍어서 보내줘야지.", emotion: "happy" }] },
    { time: 60, variations: [{ text: "배꼽 빠질 거 같아. 숨을 못 쉬겠어.", emotion: "happy" }] },
    { time: 80, variations: [{ text: "역시 웃는 게 최고야. 우울할 때 또 봐야지.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "완전 힐링된다! 기분 최고!", emotion: "happy" }] }
  ]
};