import { Genre, ScriptEntry } from '../../types';

export const ENFJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 8, variations: [
        { text: "우리 다 같이 정의가 승리하는 걸 지켜보자! 파이팅!", emotion: 'happy' },
        { text: "할 수 있어! 포기하지 마!", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "팀워크가 깨지면 안 돼! 서로 믿어야지!", emotion: 'angry' }] },
    { time: 38, variations: [{ text: "동료를 버리지 않는 모습, 저게 진짜 리더십이지.", emotion: 'happy' }] },
    { time: 50, variations: [{ text: "악당에게도 교화의 기회를 주면 안 될까?", emotion: 'neutral' }] },
    { time: 58, variations: [{ text: "여러분, 이 장면은 정말 중요한 교훈을 담고 있어요.", emotion: 'neutral' }] },
    { time: 70, variations: [{ text: "다들 다치지 말아야 할 텐데... 걱정돼.", emotion: 'shocked' }] },
    { time: 78, variations: [{ text: "배신자도 용서하다니... 주인공 인성 뭐야? 대박.", emotion: 'crying' }] },
    { time: 85, variations: [{ text: "세상을 구하는 건 한 명의 영웅이 아니라 우리 모두야.", emotion: 'happy' }] },
    { time: 98, variations: [{ text: "해피엔딩이라 너무 다행이다! 모두 수고했어!", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 10, variations: [
        { text: "사랑에 빠지는 순간은 정말 마법 같아.", emotion: 'happy' },
        { text: "온 세상이 핑크빛으로 물드는 기분이야.", emotion: 'happy' }
      ]
    },
    { time: 20, variations: [{ text: "그래, 솔직하게 마음을 표현하는 게 중요해!", emotion: 'happy' }] },
    { time: 35, variations: [{ text: "상대방의 입장에서 생각해봐야지. 배려가 부족했어.", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "주변 친구들이 도와주는 거 봐. 역시 인복이 중요해.", emotion: 'happy' }] },
    { time: 65, variations: [{ text: "사랑은 서로 맞춰가는 과정이야. 힘내!", emotion: 'happy' }] },
    { time: 80, variations: [{ text: "서로 성장하게 해주는 관계가 진짜 사랑이지.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "두 사람의 앞날을 축복해주고 싶어.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "사랑의 힘은 위대해! 모두 사랑하세요!", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 15, variations: [
        { text: "무서워하지 마! 우리가 뭉치면 이길 수 있어!", emotion: 'happy' },
        { text: "서로 의지하면 두려움도 극복할 수 있어.", emotion: 'happy' }
      ]
    },
    { time: 30, variations: [{ text: "얘들아 괜찮아? 손 잡아 줄까?", emotion: 'happy' }] },
    { time: 45, variations: [{ text: "이기적인 행동은 결국 모두를 위험에 빠트려.", emotion: 'angry' }] },
    { time: 60, variations: [{ text: "희생된 사람들을 위해서라도 살아야 해.", emotion: 'crying' }] },
    { time: 70, variations: [{ text: "동료를 구하려고 다시 들어가다니... 감동적이야.", emotion: 'crying' }] },
    { time: 85, variations: [{ text: "악은 결국 선을 이길 수 없어.", emotion: 'neutral' }] },
    { time: 95, variations: [{ text: "무서웠지만 우리가 함께라서 버틸 수 있었어!", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 20, variations: [
        { text: "범죄자를 교화시킬 방법은 없었을까?", emotion: "neutral" },
        { text: "그 사람도 처음부터 나쁘진 않았을 텐데.", emotion: "neutral" }
      ]
    },
    { time: 35, variations: [{ text: "사회 시스템의 부조리가 사람을 벼랑 끝으로 몰았어.", emotion: "angry" }] },
    { time: 55, variations: [{ text: "진실을 밝히려는 용기가 대단해.", emotion: "happy" }] },
    { time: 70, variations: [{ text: "나쁜 짓을 하면 결국 돌아오게 되어 있어.", emotion: "neutral" }] },
    { time: 80, variations: [{ text: "정의로운 사회를 만들어야 해.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "피해자들의 아픔을 잊지 말아야 해.", emotion: "neutral" }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "다 같이 웃으니까 너무 좋다!", emotion: "happy" },
        { text: "웃음 바이러스가 퍼지고 있어!", emotion: "happy" }
      ]
    },
    { time: 20, variations: [{ text: "하하하! 정말 유쾌한 친구들이네!", emotion: "happy" }] },
    { time: 45, variations: [{ text: "긍정적인 에너지가 넘쳐서 보기 좋아.", emotion: "happy" }] },
    { time: 65, variations: [{ text: "실수해도 괜찮아. 서로 격려해주는 모습이 멋져.", emotion: "happy" }] },
    { time: 80, variations: [{ text: "우리도 저렇게 사이좋게 지내자.", emotion: "happy" }] }
  ]
};