import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

// 액션 타입 정의s
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const LOG_OUT = 'user/LOG_OUT';
const CHECK_NICKNAME = 'user/CHECK_NICKNAME';
const SET_NICKNAME = 'user/SET_NICKNAME';
const ADD_NICKNAME = 'user/ADD_NICKNAME';
//const SET_PROFILEIMG = 'user/SET_PROFILEIMG';

// 액션 생성 함수 정의(액션 생성자가 받아야 하는 파라미터를 주석으로 명시한다.)
// export const logOut = createAction(LOG_OUT); // 아직 잘 모르겠다.
// export const setProfileImg = createAction(SET_PROFILEIMG); // user.profileImg

// 로그인 시  user 정보를 받아오는 액션 생성함수
export const getUser = (token) => (dispatch) => {
  axios
    .get(
      'https://cd3a2b97-904a-4127-9c73-a01eb564a693.mock.pstmn.io/login/google',
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      res.data.isSignUp ? history.push('/') : history.push('/mypage/nickname');
    })
    .catch((error) => alert(error));
};

// nickname 중복 확인하는 액션 생성함수
export const setNickname = (nickname) => (dispatch) => {
  dispatch({ type: SET_NICKNAME, payload: nickname });
  axios
    .get(
      'https://cd3a2b97-904a-4127-9c73-a01eb564a693.mock.pstmn.io/mypage/nickname',
      {
        params: {
          nickname: nickname,
        },
      }
    )
    .then((res) => {
      dispatch({ type: CHECK_NICKNAME, payload: res.data });
    });
  //.catch((error) => alert(error));
};

// nickname 변경 시 닉네임을 서버로 보내는 액션 생성함수
export const addNickname = (nickname) => (dispatch) => {
  //dispatch({ type: ADD_NICKNAME, payload: nickname });
  axios
    .post(
      'https://cd3a2b97-904a-4127-9c73-a01eb564a693.mock.pstmn.io/mypage/nickname',
      { nickname: nickname }
    )
    .then(() => {
      window.alert('메인페이지로 이동합니다.');
      history.push('/');
    });
};
const initialState = {
  isSignUp: '',
  nickname: '',
  userType: '',
  profileImg: '',
  logMethod: '',
  email: '',
  isUnique: '',
};

// 리듀서 정의
export default handleActions(
  {
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SET_NICKNAME]: (state, action) => ({
      ...state,
      nickname: action.payload,
    }),
    [CHECK_NICKNAME]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);
