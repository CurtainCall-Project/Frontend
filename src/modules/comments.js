import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_COMMENT = 'comments/SET_COMMENT';
const ADD_COMMENT = 'comments/ADD_COMMENT';

const initialState = {
  commentList: [],
};

// 댓글 추가하는 액션 생성함수
const addComment = (replyContent, parentId, secret, postId) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/reply/${postId}`, {
      replyContent: replyContent,
      parentId: parentId,
      secret: secret,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_COMMENT, payload: res.data });
    });
};

export default handleActions({
  [SET_COMMENT]: (state, action) => ({}),
  [ADD_COMMENT]: (state, action) => ({
    commentList: state.commentList.concat(action.payload),
  }),
});
