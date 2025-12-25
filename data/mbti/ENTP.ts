import { Genre, ScriptEntry } from '../../types';

export const ENTP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 5, variations: [
        { text: "솔직히 악당이 더 매력적이지 않음? 사상이 맘에 드는데.", emotion: 'happy' },
        { text: "난 악당 편 할래. 주인공 너무 착해 빠졌어.", emotion: 'happy' }
      ] 
    },
    { time: 15, variations: [{ text: "저기서 갑자기 춤추면 웃기겠다.", emotion: 'happy' }] },
    { time: 25, variations: [{ text: "여기서 주인공이 죽으면 진짜 명작 인정한다. 제발 죽어라.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "왜 총알이 주인공만 피해 가? 자기장이라도 쓰나?", emotion: 'bored' }] },
    { time: 50, variations: [{ text: "와 폭발 퀄리티 미쳤고~ ㅋㅋㅋ 다 부숴!", emotion: 'shocked' }] },
    { time: 65, variations: [{ text: "나라면 저기서 항복하는 척하고 통수 쳤음.", emotion: 'happy' }] },
    { time: 70, variations: [{ text: "이거 클리셰 비틀기네. 작가 머리 좀 썼는데?", emotion: 'happy' }] },
    { time: 85, variations: [{ text: "엔딩 뻔하다 뻔해. 지루해.", emotion: 'bored' }] },
    { time: 90, variations: [{ text: "야, 끝나고 쿠키 영상 있는지 내기할 사람?", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "저거 가스라이팅 아님? ㅋㅋㅋ", emotion: 'happy' },
        { text: "사랑과 전쟁 찍네. 꿀잼.", emotion: 'happy' }
      ]
    },
    { time: 25, variations: [{ text: "저 상황에서 키스한다고? 입 냄새 날 텐데.", emotion: 'neutral' }] },
    { time: 40, variations: [{ text: "만약 저기서 서브 남주랑 이어지면 작가 천재 인정.", emotion: 'neutral' }] },
    { time: 55, variations: [{ text: "사랑 때문에 다 버린다고? 나라면 돈을 택함.", emotion: 'happy' }] },
    { time: 60, variations: [{ text: "사랑이 밥 먹여주냐? (팝콘을 먹으며)", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "싸워라! 싸워라! 파국이다!", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "으악 오글거려! 내 손발이 사라지고 있어!", emotion: 'shocked' }] },
    { time: 95, variations: [{ text: "현실 복귀 완료. 솔로가 최고다.", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "야, 귀신이랑 대화 시도해 보면 안 됨? 친구 먹을 수도.", emotion: 'happy' },
        { text: "귀신이랑 랩 배틀 뜨면 이길 자신 있는데.", emotion: 'happy' }
      ]
    },
    { time: 25, variations: [{ text: "귀신보다 집세가 더 무섭지 않냐?", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "하지 말라는 거 골라서 하는 거 봐 ㅋㅋㅋ 청개구리네.", emotion: 'happy' }] },
    { time: 50, variations: [{ text: "ㅋㅋㅋㅋ 표정 봐. 짤 생성 각이다.", emotion: 'happy' }] },
    { time: 65, variations: [{ text: "저 귀신 약점이 소금이면, 간장 뿌려도 되나?", emotion: 'neutral' }] },
    { time: 80, variations: [{ text: "나였으면 귀신이랑 유튜브 채널 팠다. 조회수 대박.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "반전이 좀 약한데? 나라면 주인공이 귀신이었다고 씀.", emotion: 'bored' }] }
  ],
  [Genre.CRIME]: [
    { time: 15, variations: [
        { text: "범죄도 예술이야. 설계가 아름답네.", emotion: "happy" },
        { text: "저런 아이디어는 어디서 나오는 거지?", emotion: "happy" }
      ]
    },
    { time: 20, variations: [{ text: "와, 저 사기 수법 기발한데? 메모해야지.", emotion: 'happy' }] },
    { time: 40, variations: [{ text: "경찰들 헛다리 짚는 거 개꿀잼 ㅋㅋ", emotion: "happy" }] },
    { time: 60, variations: [{ text: "법이라는 건 해석하기 나름이지. 변호사 잘 썼네.", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "이중 스파이의 이중 스파이? 머리 아픈데 재밌네.", emotion: "shocked" }] },
    { time: 90, variations: [{ text: "정의가 승리? 에이, 현실은 안 저래.", emotion: 'bored' }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "저 드립 수위 좀 센데? 맘에 들어 ㅋㅋㅋ", emotion: 'happy' },
        { text: "필터링 없는 드립 아주 칭찬해.", emotion: 'happy' }
      ]
    },
    { time: 35, variations: [{ text: "방금 대사는 좀 논란 되겠는데? 인터넷 불타겠군.", emotion: "happy" }] },
    { time: 50, variations: [{ text: "풍자 미쳤다 ㅋㅋ 감독이 천재네.", emotion: 'happy' }] },
    { time: 70, variations: [{ text: "여기서 진지해지면 안 되지! 계속 웃겨줘!", emotion: "angry" }] },
    { time: 90, variations: [{ text: "재밌었음. 근데 개연성은 개나 줬네.", emotion: 'happy' }] }
  ]
};