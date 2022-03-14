import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';
import { setCookie, deleteCookie, getCookie } from '../Cookie';

// 액션 타입 정의
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const LOG_OUT = 'user/LOG_OUT';
const CHECK_NICKNAME = 'user/CHECK_NICKNAME';
const SET_NICKNAME = 'user/SET_NICKNAME';
const SET_USER_POSTS = 'user/SET_USER_POSTS';
const SET_PROFILEIMG = 'user/SET_PROFILEIMG';

// 로그인 액션 생성함수
export const login = (token) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/login/google`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      const jwtToken = res.data.token;
      setCookie('isLogin', jwtToken);
      // 서버와 통신시 헤더에 토큰을 기본값으로 넣는다
      axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
      // 처음 로그인 시 닉네임 설정 페이지로 이동
      axios
        .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/login/user`)
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_USER_SUCCESS, payload: res.data });
          res.data.nickname
            ? history.push('/')
            : history.push('/mypage/nickname');
        })
        .catch((error) => alert('사용자 정보를 불러오는데 실패했습니다.'));
    });
};

// 로그인 액션 생성함수
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  deleteCookie('isLogin');
  history.replace('/');
};

// 사용자 정보를 가져오는 액션 생성함수
export const getUser = () => (dispatch) => {
  // 쿠키에서 서버와의 통신 시 사용할 토큰을 가져온다.
  const jwtToken = getCookie('isLogin');
  // 서버와 통신시 헤더에 토큰을 기본값으로 넣는다
  axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/login/user`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => alert(error));
};

// nickname 중복 확인하는 액션 생성함수
export const setNickname = (nickname) => (dispatch) => {
  dispatch({ type: SET_NICKNAME, payload: nickname });
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/mypage/nickname`, {
      params: {
        nickname: nickname,
      },
    })
    .then((res) => {
      dispatch({ type: CHECK_NICKNAME, payload: res.data });
    })
    .catch((error) => alert(error));
};

// nickname 변경 시 닉네임을 서버로 보내는 액션 생성함수
export const addNickname = (nickname, userId) => (dispatch) => {
  //dispatch({ type: ADD_NICKNAME, payload: nickname });
  axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/mypage/nickname`, {
      nickname: nickname,
      userId: userId,
    })
    .then(() => {
      window.alert('메인페이지로 이동합니다.');
      history.push('/');
      //history.goBack();
    });
};

// 프로필 이미지 변경
export const addProfileImage = (file) => (dispatch) => {
  const formData = new FormData();
  formData.append('imgFile', file);
  axios
    .post(
      `${process.env.REACT_APP_MOCK_SERVER_URL2}/mypage/profileImg`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    .then((res) => {
      dispatch({ type: SET_PROFILEIMG, payload: res.data });
    });
};

// 내가 쓴글과 스크랩 가져와 저장
export const getUserPosts = (userId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/mypage/${userId}`)
    .then((res) => {
      dispatch({ type: SET_USER_POSTS, payload: res.data });
    })
    .catch((error) => alert(error));
};

const initialUser = {
  nickname: null,
  userId: null,
  profileImg: null,
  email: null,
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
      nickname: null,
      email: null,
      profileImg: null,
      isUnique: null,
      isLogin: false,
      userPosts: {
        myPost: [],
        myScrap: [],
      },
    }),
    [SET_NICKNAME]: (state, action) => ({
      ...state,
      nickname: action.payload,
    }),
    [CHECK_NICKNAME]: (state, action) => ({
      ...state,
      ...action.payload,
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
