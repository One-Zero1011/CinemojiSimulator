import { Genre, ScriptEntry } from '../../types';

export const ESFP_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 5, variations: [
        { text: "꺅! 시작부터 깜짝 놀랐잖아!", emotion: 'shocked' },
        { text: "우와! 스케일 미쳤다!", emotion: 'shocked' }
      ]
    },
    { time: 15, variations: [{ text: "주인공 너무 멋있다! 팬클럽 가입해야지.", emotion: 'happy' }] },
    { time: 30, variations: [{ text: "헐 대박, 저 상황 진짜 웃기지 않아? ㅋㅋㅋ", emotion: 'happy' }] },
    { time: 50, variations: [{ text: "어떡해 어떡해! 쟤 죽나봐!!", emotion: 'shocked' }] },
    { time: 65, variations: [{ text: "음악 너무 신나! 둠칫둠칫.", emotion: 'happy' }] },
    { time: 75, variations: [{ text: "와 진짜 멋있다! 나도 액션 배우 할까?", emotion: 'happy' }] },
    { time: 85, variations: [{ text: "이겼다!! 소리 질러!!", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "완전 꿀잼! 별 다섯 개!", emotion: 'happy' }] },
    { time: 99, variations: [{ text: "끝나고 노래방 갈 사람? 흥이 안 가라앉아!", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 5, variations: [
        { text: "꺅! 너무 잘생겼어! 내 스타일이야!", emotion: 'happy' },
        { text: "어머어머! 얼굴이 복지네.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "어머어머, 눈 마주쳤어! 내가 다 떨려.", emotion: 'happy' }] },
    { time: 35, variations: [{ text: "웃겨 죽겠어 ㅋㅋㅋ 저 상황 완전 시트콤이야.", emotion: 'happy' }] },
    { time: 50, variations: [{ text: "왜 말을 못 해! 답답해 죽겠네!", emotion: 'angry' }] },
    { time: 65, variations: [{ text: "어떡해 눈물 나 ㅠㅠ 휴지 좀 줘.", emotion: 'crying' }] },
    { time: 80, variations: [{ text: "키스신 대박! 사진 찍고 싶다.", emotion: 'happy' }] },
    { time: 90, variations: [{ text: "너무 로맨틱해... 나도 사랑받고 싶다.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "나도 연애하고 싶다!! 소개팅 좀!!", emotion: 'shocked' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "엄마야!! 나 방금 팝콘 쏟았어 ㅠㅠ", emotion: 'shocked' },
        { text: "꺅!! 깜짝이야!!", emotion: 'shocked' }
      ]
    },
    { time: 25, variations: [{ text: "귀신 얼굴 봤어? 꿈에 나올까 무서워.", emotion: 'shocked' }] },
    { time: 40, variations: [{ text: "아 진짜! 깜짝 놀랐잖아!", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "가지 마! 뒤에 있다고! 뒤!!", emotion: 'shocked' }] },
    { time: 65, variations: [{ text: "나 무서워... 집에 갈래 ㅠㅠ", emotion: 'crying' }] },
    { time: 80, variations: [{ text: "손에 땀 난 거 봐. 진짜 무서웠어.", emotion: 'shocked' }] },
    { time: 95, variations: [{ text: "목 다 쉬었어. 소리 너무 질렀나 봐 ㅋㅋㅋ", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 10, variations: [
        { text: "와 분위기 살벌한데?", emotion: "shocked" },
        { text: "긴장감 대박이다.", emotion: "shocked" }
      ]
    },
    { time: 30, variations: [{ text: "저 사람 사기꾼 관상이야. 딱 봐도 알아.", emotion: "neutral" }] },
    { time: 50, variations: [{ text: "주인공 위기야! 도망쳐!", emotion: "shocked" }] },
    { time: 60, variations: [{ text: "추격전 꿀잼! 팝콘 순삭!", emotion: "happy" }] },
    { time: 80, variations: [{ text: "나쁜 놈 잡아서 다행이다!", emotion: "happy" }] },
    { time: 95, variations: [{ text: "영화 끝나고 뭐 먹으러 갈까?", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "푸하하하! 아 배 아파 ㅋㅋㅋ", emotion: 'happy' },
        { text: "미치겠다 ㅋㅋㅋ", emotion: 'happy' }
      ]
    },
    { time: 25, variations: [{ text: "저거 유행어 될 거 같아 ㅋㅋㅋ", emotion: "happy" }] },
    { time: 40, variations: [{ text: "저 표정 좀 봐 ㅋㅋㅋ 짤로 저장!", emotion: 'happy' }] },
    { time: 60, variations: [{ text: "너무 웃겨서 눈물 나 ㅋㅋㅋ", emotion: "crying" }] },
    { time: 90, variations: [{ text: "아 너무 웃어서 광대 아파. 최고야!", emotion: 'happy' }] }
  ]
};