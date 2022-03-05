import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_COMMENT = 'comments/SET_COMMENT';
const ADD_COMMENT = 'comments/ADD_COMMENT';

const initialState = {
  commentList: [],
};

// 댓글 추가하는 액션 생성함수
export const addComment =
  (replyContent, parentId, postId, secret = null) =>
  (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/reply/${postId}`, {
        replyContent: replyContent,
        parentId: parentId,
        secret: secret,
      })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: res.data });
      });
  };

// 댓글 리스트 불러오는 액션 생성함수
export const setComment = (postId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/reply/${postId}`)
    .then((res) => {
      dispatch({ type: SET_COMMENT, payload: res.data });
    });
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => ({
      commentList: [...action.payload],
    }),
    [ADD_COMMENT]: (state, action) => ({
      commentList: [action.payload, ...state.commentList],
    }),
  },
  initialState
);
