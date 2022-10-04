
const question = [
  {
    question:
      '때론 클래식한 차가 멋있을 때가 있고, 불같은 속도로 달리는 신형 차가 멋있을 때가 있어요! 당신은 어떤 것을 원하나요?',
    answer: { 0: '클래식', 1: '신형차', 2: '보통' },
    answerKey: 'OldFashionedness'
  },

  {
    question:
      '어릴 때는 빨리 어른이 되고 싶었고, 어른일 때는 아이로 돌아가고 싶기도 하죠. 당신은 어느쪽이 더 좋은가요?',
    answer: { 0: '어른', 1: '아이', 2: '모르겠다' },
    answerKey: 'Oldness'
  },

  {
    question:
      '결혼을 한다고 상상해보세요! 때론 격식있게 웨딩홀을 빌려서 결혼을 할 수 있지만 반대로 클럽 같은 곳을 빌려 신나게 결혼을 할 수 있어요. 당신의 선택은? ',
    answer: { 0: '웨딩홀', 1: '클럽', 2: '모르겠다' },
    answerKey: 'Formality'
  },

  {
    question:
      '가끔 왕이 되는 꿈을 꿔보신 적이 있나요? 왕이 된다면 그만큼의 부귀영화를 누리겠지만 한 편으로는 책임감, 부담감이 뒤따르기 마련이지요. 당신이라면 어떤 선택을 하실 건가요? ',
    answer: { 0: '왕이 되고 싶다', 1: '왕은 좀..', 2: '둘 다 좋다' },
    answerKey: 'Class'
  },

  {
    question:
      '화려한 조명이 비추는 도시의 삶, 맑은 공기와 이웃 간의 정다움이 뿜어져 나오는 시골, 당신이라면 어느 곳을 선택하실건가요?',
    answer: { 0: '도시', 1: '시골', 2: '둘 다 좋다' },
    answerKey: 'Urban-rural'
  },

  {
    question:
      '친한 친구의 여자친구가 클럽을 가다가 당신한테 걸렸네요. 이럴 때가 가장 난감한 상황인데요... 이럴 때 당신은 어떻게 할건가요?',
    answer: { 0: '비밀로한다', 1: '친구한테 말한다', 2: '모르겠다' },
    answerKey: 'Truthfulness'
  },

  {
    question:
      '스트레스가 잔뜩 쌓여 화가 난 당신, 오토바이를 때려 부수는 게임을 할까요? 아니면 건담을 조립할까요?',
    answer: { 0: '오토바이 부수기', 1: '건담 조립', 2: '둘 다 싫다' },
    answerKey: 'Extremly'
  },

  {
    question:
      '당신에게 공연 티켓이 생겼어요. 정제되고 섬세한 클래식 연주회, 거칠고 흥겨운 락 음악 당신에게 생긴 공연 티켓이 둘 중 어떤 것이였으면 좋겠나요?',
    answer: { 0: '클래식 연주회지!', 1: '락 콘서트지!', 2: '둘 다 좋다' },
    answerKey: 'Roughness'
  },

  {
    question:
      '평소에 자주 가던 산책길에 새로운 길이 뚫린 걸 본 당신! 당신이라면 어느 길로 갈 것인가요?',
    answer: { 0: '새로운 길로 간다', 1: '평소가던 길', 2: '모르겠다' },
    answerKey: 'Strangeness'
  },

  {
    question:
      '보기만 해도 어지럽게 생긴 퍼즐이 있어요! 당신이라면 이 퍼즐을 맞춰볼려고 노력할 것인가요?',
    answer: { 0: '시도해본다', 1: '쳐다도 안본다', 2: '고민해본다' },
    answerKey: 'Complexness'
  },

  {
    question:
      '친구로부터 두 개의 티켓을 받았어요. 하나는 클래식한 느낌의 연극 공연 티켓, 하나는 코미디빅리그 티켓. 당신이라면 어떤 티켓을 선택할 것인가요?',
    answer: { 0: '연극', 1: '코빅', 2: '둘 다 좋다' },
    answerKey: 'Seriousness'
  },

  {
    question: '어떤 성별의 이름을 추천 받고 싶으신가요?',
    answer: { 0: '남성적', 1: '여성적', 2: '중성적' },
    answerKey: 'Gender'
  },

  {
    question: '어떤 이름을 갖고 싶으신가요?',
    answer: { 0: '자주 사용되는 이름', 1: '중간 정도', 2: '흔하지 않은 이름' },
    answerKey: 'Rarity'
  },
];

export default question;
