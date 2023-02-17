const table = document.querySelector('table');
const guestMovieList = document.querySelector('.guestMovieList');

const BEST_MOVIE_INFO = [
  {
    title: '기생충',
    imageSrc: '../images/parasite.png',
    description:
      '줄거리 기택네는 반지하에 사는 전원 백수 가족이다. 옆집 와이파이를 훔쳐 쓰고, 동네 피자집 박스 접기 아르바이트로 근근이 생활한다. 장남 기우는 명문대생 친구 민혁과 만나 재물운을 가져다준다는 비싼 수석을 선물받고 술자리를 함께한다.',
    href: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=161967',
    value: 'Parasite',
  },
  {
    title: '트루먼쇼',
    imageSrc: '../images/truman.jpg',
    description:
      '현실처럼 꾸며진 스튜디오 안에 살고 있다는 사실을 인식하지 못하는 한 남자의 인생 연대를 전세계 사람들에게 쉬지 않고 방영하는 텔레비전 쇼와, 주인공이 그 사실을 조금씩 인지해가고 자신의 삶의 진실을 발견하려고 파고드는 이야기이다.',
    href: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=19099',
    value: 'The Truman Show',
  },
  {
    title: '인사이드아웃',
    imageSrc: '../images/insideOut.jpg',
    description:
      '라일리를 사랑하는 감정들과 좋은 부모님, 좋은 친구와 좋은 환경 덕에 소녀 라일리는 가족과 친구를 사랑하고 정직하면서도 엉뚱발랄한 면이 있는, 하키를 좋아하는 평범한 소녀로 자라나며 매우 행복한 어린 시절을 보낸다.',
    href: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=115622',
    value: 'Inside Out',
  },
  {
    title: '어거스트 러쉬',
    imageSrc: '../images/augustRush.jpg',
    description:
      "영화 <어거스트 러쉬(August Rush)>는 꿈보다 아름답던 뉴욕에서의 단 하룻밤, 그로부터 11년 후, 눈을 감으면 세상의 모든 소리가 음악이 되는 천재 소년 '에반'이 세상과 소통하며 부모님을 찾아 떠나는 기적 같은 이야기를 그려 낸 감동 음악을 펼친 작품이다.",
    href: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=66158',
    value: 'August Rush',
  },
  {
    title: '포레스트검프',
    imageSrc: '../images/forrestGump.jpg',
    description:
      " '인생은 초콜릿 상자와 같은 거야. 네가 무엇을 고를지 아무도 모른단다…' 불편한 다리, 남들보다 조금 떨어지는 지능을 가진 외톨이 소년 ‘포레스트 검프’ 헌신적이고 강인한 어머니의 보살핌과 콩깍지 첫사랑 소녀 ‘제니’와의 만남으로 사회의 편견과 괴롭힘 속에서도 따뜻하고 순수한 마음을 지니고 성장한다. 여느 날과 같이 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫고 늘 달리는 삶을 살아간다. 포레스트의 재능을 발견한 대학에서 그를 미식축구 선수로 발탁하고, 졸업 후에도 뛰어난 신체능력으로 군에 들어가 누구도 예상치 못한 성과를 거둬 무공훈장을 수여받는 등 탄탄한 인생 가도에 오르게 된 포레스트. 하지만 영원히 행복할 것만 같았던 시간도 잠시, 어머니가 병에 걸려 죽음을 맞이하고 첫사랑 제니 역시 그의 곁을 떠나가며 다시 한번 인생의 전환점을 맞이하게 되는데… 과연, 포레스트는 진정한 삶의 행복을 발견할 수 있을까?",
    href: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=17159',
    value: 'Forrest Gump',
  },
];

const drawMovieInfo = (rank, { title, imageSrc, description, href }) => {
  const tr = document.createElement('tr');
  const rankTd = document.createElement('td');
  const titleTd = document.createElement('td');
  const posterTd = document.createElement('td');
  const poster = document.createElement('img');
  const descriptionTd = document.createElement('td');
  const h3 = document.createElement('h3');
  const linkTd = document.createElement('td');
  const link = document.createElement('a');

  rankTd.innerText = rank;
  titleTd.innerText = title;
  descriptionTd.innerText = description;
  poster.src = imageSrc;

  link.href = href;
  link.target = '_blank';
  link.innerText = '영화 바로가기';

  posterTd.appendChild(poster);

  tr.appendChild(rankTd);
  titleTd.appendChild(h3);
  tr.appendChild(titleTd);
  tr.appendChild(posterTd);
  tr.appendChild(descriptionTd);
  linkTd.appendChild(link);
  tr.appendChild(linkTd);

  table.appendChild(tr);
};

const drawGuestMovieList = ({ value, title }) => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');

  label.htmlFor = value;
  input.id = value;
  input.value = value;
  input.type = 'checkbox';

  span.innerText = title;
  label.appendChild(input);
  label.appendChild(span);

  guestMovieList.appendChild(label);
};

BEST_MOVIE_INFO.forEach((movieInfo, index) => {
  drawMovieInfo(index + 1, movieInfo);
  drawGuestMovieList(movieInfo);
});
