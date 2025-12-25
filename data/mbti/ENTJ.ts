import { Genre, ScriptEntry } from '../../types';

export const ENTJ_SCRIPTS: Record<Genre, ScriptEntry[]> = {
  [Genre.ACTION]: [
    { time: 10, variations: [
        { text: "지휘 체계가 엉망이군. 리더가 누구야?", emotion: 'angry' },
        { text: "오합지졸이 따로 없군. 통제가 필요해.", emotion: 'angry' }
      ]
    },
    { time: 25, variations: [{ text: "저런 식이면 예산 초과야. 효율적으로 부수라고.", emotion: 'neutral' }] },
    { time: 40, variations: [{ text: "효율적으로 움직여! 대각선으로 포위했어야지!", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "지금 공격 타이밍인데 머뭇거리다니. 답답하네.", emotion: 'angry' }] },
    { time: 60, variations: [{ text: "나였으면 저 상황에서 협상을 시도해서 손실을 줄였어.", emotion: 'neutral' }] },
    { time: 75, variations: [{ text: "플랜 B가 없나? 대비책을 세워뒀어야지.", emotion: 'neutral' }] },
    { time: 80, variations: [{ text: "그래, 희생 없이는 승리도 없는 법이지.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "적의 보스를 포섭하는 게 더 이득이었을 텐데.", emotion: 'neutral' }] },
    { time: 98, variations: [{ text: "이 영화의 교훈: 유능한 리더를 따르라.", emotion: 'happy' }] }
  ],
  [Genre.ROMANCE]: [
    { time: 15, variations: [
        { text: "데이트 코스가 너무 비효율적이야. 동선을 다시 짜야 해.", emotion: 'neutral' },
        { text: "시간 낭비가 심하군. 예약은 필수지.", emotion: 'angry' }
      ]
    },
    { time: 20, variations: [{ text: "저 남자는 야망이 없어. 여자가 아까워.", emotion: 'angry' }] },
    { time: 35, variations: [{ text: "감정에 휘둘려서 중요한 미팅을 놓치다니.", emotion: 'angry' }] },
    { time: 50, variations: [{ text: "사랑 싸움할 시간에 커리어 관리를 했으면 성공했을 텐데.", emotion: 'neutral' }] },
    { time: 65, variations: [{ text: "조건을 명확히 하고 만나는 게 서로에게 좋아.", emotion: 'neutral' }] },
    { time: 70, variations: [{ text: "관계를 주도적으로 리드해야지! 답답하네.", emotion: 'angry' }] },
    { time: 85, variations: [{ text: "서로 윈윈하는 관계가 이상적이지.", emotion: 'happy' }] },
    { time: 95, variations: [{ text: "성공적인 파트너십 체결이군. 축하한다.", emotion: 'happy' }] }
  ],
  [Genre.HORROR]: [
    { time: 10, variations: [
        { text: "상황 파악부터 해! 패닉에 빠지면 죽는다고.", emotion: 'angry' },
        { text: "침착해! 감정에 휘둘리지 마.", emotion: 'angry' }
      ]
    },
    { time: 15, variations: [{ text: "따로 다니지 말라고! 뭉쳐야 산다고 몇 번 말해!", emotion: 'angry' }] },
    { time: 30, variations: [{ text: "리더가 없으니까 오합지졸이네.", emotion: 'neutral' }] },
    { time: 45, variations: [{ text: "함정을 파서 역공을 해야지. 도망만 갈 거야?", emotion: 'angry' }] },
    { time: 55, variations: [{ text: "무기를 들어! 도망가지 말고 맞서 싸워!", emotion: 'angry' }] },
    { time: 70, variations: [{ text: "공포를 통제해. 멘탈 관리가 생존의 핵심이야.", emotion: 'neutral' }] },
    { time: 85, variations: [{ text: "약한 자는 도태되는군. 냉혹한 현실이야.", emotion: 'neutral' }] },
    { time: 90, variations: [{ text: "드디어 처치했군. 효율적인 퇴마였어.", emotion: 'happy' }] }
  ],
  [Genre.CRIME]: [
    { time: 20, variations: [
        { text: "자금 세탁 루트가 너무 뻔해. 금방 잡히겠군.", emotion: "neutral" },
        { text: "꼬리 자르기를 했어야지.", emotion: "neutral" }
      ]
    },
    { time: 30, variations: [{ text: "조직 관리가 안 되니까 배신자가 나오지.", emotion: "angry" }] },
    { time: 45, variations: [{ text: "정보력이 곧 권력이야. 도청 장치를 확인했어야지.", emotion: "neutral" }] },
    { time: 60, variations: [{ text: "협상은 저렇게 하는 게 아니야. 우위를 점해야지.", emotion: "angry" }] },
    { time: 80, variations: [{ text: "보스의 자질이 부족해. 교체될 만했어.", emotion: "neutral" }] },
    { time: 95, variations: [{ text: "승자 독식. 깔끔한 결말이네.", emotion: "happy" }] }
  ],
  [Genre.COMEDY]: [
    { time: 10, variations: [
        { text: "시간 때우기용으론 적절해.", emotion: "neutral" },
        { text: "효율적인 휴식 시간이군.", emotion: "neutral" }
      ]
    },
    { time: 30, variations: [{ text: "저런 멍청한 실수를 하다니... 이해 불가.", emotion: "bored" }] },
    { time: 50, variations: [{ text: "성공하려면 저런 친구는 멀리해야 해.", emotion: "neutral" }] },
    { time: 70, variations: [{ text: "의외로 교훈적인 메시지가 있군.", emotion: "happy" }] },
    { time: 90, variations: [{ text: "해피엔딩은 언제나 긍정적이지. 에너지를 얻었어.", emotion: "happy" }] }
  ]
};