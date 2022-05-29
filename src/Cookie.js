// 쿠키에 토큰을 저장하는 함수
export const setCookie = (name, value, exp = 1) => {
  let date = new Date();

  // 쿠키 유효기간 설정 (3시간)
  date.setTime(date.getTime() + exp * 1000 * 60 * 60 * 5);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 쿠키를 삭제하는 함수
export const deleteCookie = (name) => {
  // 쿠키의 값을 비우고, expires의 값을 지난 날로 설정한다.
  document.cookie = name + '=; expires=Thu, 01 Jan 2000 00:00:00 GMT;';
};

// 쿠키를 가져오는 함수
export const getCookie = (name) => {
  const cookies = '; ' + document.cookie;
  // isLogin를 구분자로 문자열을 나눈다.
  const parts = cookies.split(`; ${name}=`);
  // isLogin 의 값을 리턴한다.
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
