import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';
import { setCookie, deleteCookie, getCookie } from '../Cookie';
import { config } from '../config';

// 액션 타입 정의
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const LOG_OUT = 'user/LOG_OUT';
const CHECK_NICKNAME = 'user/CHECK_NICKNAME';
const ADD_NICKNAME = 'user/ADD_NICKNAME';
const SET_USER_POSTS = 'user/SET_USER_POSTS';
const SET_PROFILEIMG = 'user/SET_PROFILEIMG';

// 로그인 액션 생성함수
export const login = (token) => (dispatch) => {
  axios
    .post(`${config.SERVER_URL}/login/google`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      const bearerToken = res.data.token;
      setCookie('token', bearerToken);
      history.push('/');
    });
};

// 로그인 액션 생성함수
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  history.push('/');
};

// 사용자 정보를 가져오는 액션 생성함수
export const getUser = () => (dispatch) => {
  // 쿠키에서 서버와의 통신 시 사용할 토큰을 가져온다.
  const bearerToken = getCookie('token');
  // 서버와 통신시 헤더에 토큰을 기본값으로 넣는다
  axios.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
  axios
    .get(`${config.SERVER_URL}/user`)
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      if (!!bearerToken === true && !!res.data.nickname === false) {
        history.push('/mypage/nickname');
      }
    })
    .catch((error) => console.log(error));
};

// nickname 중복 확인하는 액션 생성함수
export const setNickname = (nickname) => (dispatch) => {
  axios
    .get(`${config.SERVER_URL}/mypage/nickname`, {
      params: {
        nickname: encodeURIComponent(nickname),
      },
    })
    .then((res) => {
      dispatch({ type: CHECK_NICKNAME, payload: res.data.unique });
    })
    .catch((error) => console.log(error));
};

// nickname 변경 시 닉네임을 서버로 보내는 액션 생성함수
export const addNickname = (nickname) => (dispatch) => {
  const bearerToken = getCookie('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
  axios
    .post(
      `${config.SERVER_URL}/mypage/nickname`,
      {
        nickname: nickname,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      dispatch({ type: ADD_NICKNAME, payload: res.data.nickname });
      history.goBack();
    })
    .catch((error) => alert('닉네임을 변경하는데 실패했습니다.'));
};

// 프로필 이미지 변경
export const addProfileImage = (file) => (dispatch) => {
  const formData = new FormData();
  formData.append('imgFile', file);
  axios
    .post(`${config.SERVER_URL}/mypage/profileImg`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      dispatch({ type: SET_PROFILEIMG, payload: res.data });
    })
    .catch((error) => alert('프로필 이미지를 변경하는데 실패했습니다.'));
};

// 내가 쓴글과 스크랩 가져와 저장
export const getUserPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.SERVER_URL}/mypage`);
    dispatch({ type: SET_USER_POSTS, payload: res.data });
  } catch (error) {
    alert('마이페이지 정보를 불러오는데 실패했습니다.');
  }
};

const initialUser = {
  userId: null,
  nickname: null,
  username: null,
  email: null,
  emailVerifiedYn: null,
  profileImg: null,
  providerType: null,
  roleType: null,
  createdAt: null,
  modifiedAt: null,
  isUnique: null,
  isLogin: false,
  userPosts: {
    myPost: [],
    myScrap: [],
  },
};

// 리듀서 정의
export default handleActions(
  {
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload,
      isLogin: true,
    }),
    [LOG_OUT]: (state, action) => ({
      ...state,
      userId: null,
      nickname: null,
      username: null,
      email: null,
      emailVerifiedYn: null,
      profileImg: null,
      providerType: null,
      roleType: null,
      createdAt: null,
      modifiedAt: null,
      isUnique: null,
      isLogin: false,
      userPosts: {
        myPost: [],
        myScrap: [],
      },
    }),
    [CHECK_NICKNAME]: (state, action) => ({
      ...state,
      isUnique: action.payload,
    }),
    [ADD_NICKNAME]: (state, action) => ({
      ...state,
      nickname: action.payload,
    }),
    [SET_USER_POSTS]: (state, action) => ({
      ...state,
      userPosts: {
        myPost: [...action.payload.myBoard],
        myScrap: [...action.payload.myScrap],
      },
    }),
    [SET_PROFILEIMG]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialUser
);
