import { handleActions } from 'redux-actions';
import axios from 'axios';

const SET_COMMENT = 'comments/SET_COMMENT';
const ADD_COMMENT = 'comments/ADD_COMMENT';

const initialState = {
  commentList: [],
};

// 댓글 추가하는 액션 생성함수
export const addComment =
  (replyContent, parentId, postId, secret = false) =>
  (dispatch) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/board/reply/${postId}`,
        {
          replyContent: replyContent,
          parentId: parentId,
          secret: secret,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {
        const newComment = {
          id: res.data.id,
          registerDate: res.data.registerDate,
          replyContent: res.data.replyContent,
          secret: res.data.secret,
          nickname: res.data.user.nickname,
          profileImg: res.data.user.profileImageUrl,
          parentReply: res.data.parentReply,
          depth: res.data.depth,
          likeCount: res.data.likeCount,
        };
        dispatch({ type: ADD_COMMENT, payload: newComment });
      });
  };

// 댓글 리스트 불러오는 액션 생성함수
export const setComment = (postId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/board/reply/${postId}`)
    .then((res) => {
      dispatch({ type: SET_COMMENT, payload: res.data.comments });
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
