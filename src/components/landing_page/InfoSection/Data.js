// 랜딩 페이지 서비스 소개 섹션에 들어갈 각 서비스 객체
export const objOne = {
  id: 'board',
  grayBg: false,
  heading: '게시판',
  subTitle:
    '오늘 본 공연 이야기, 공연장 시야 이야기,\n초보 뮤덕의 고민까지!\n모두 커튼콜에서 나눠요',
  imgStart: false,
  img: require('../../../assets/landing_imgs/board_illust.svg').default,
  alt: 'board',
};

export const objTwo = {
  id: 'rent',
  grayBg: true,
  heading: '오페라글라스 대여',
  subTitle:
    '집에서 자고 있는 오페라글라스,\n커튼콜에서 다른 친구에게 빌려줄 수 있어요',
  imgStart: true,
  img: require('../../../assets/landing_imgs/rent_illust.svg').default,
  alt: 'rent',
};

export const objThree = {
  id: 'sell',
  grayBg: false,
  heading: '공연 굿즈 거래',
  subTitle:
    '굿즈 수집하는 사람들 모여라!\n커튼콜에서 공연 MD를 사고 팔 수 있어요',
  imgStart: false,
  img: require('../../../assets/landing_imgs/sell_illust.svg').default,
  alt: 'sell',
};

export const objFour = {
  id: 'review',
  grayBg: true,
  heading: '공연 후기 작성',
  subTitle:
    '오늘 본 공연 잊지 않고 기록하기!\n커튼콜에서 공연 후기를 모아서 작성할 수 있어요',
  imgStart: true,
  img: require('../../../assets/landing_imgs/review_illust.svg').default,
  alt: 'review',
};
