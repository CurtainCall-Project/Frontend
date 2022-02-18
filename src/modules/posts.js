import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_POSTS = 'SET_POSTS'; // 게시글 목록을 불러오는 함수

const initialState = {
  totalCount: 0,
  posts: [],
};

export const setPosts =
  (boardType, page = 1) =>
  (dispatch) => {
    // console.log(
    //   `보내려는 게시판의 uri는 ${boardType}이고, 페이지 번호는 ${page}이다.`
    // );
    axios
      .get(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/${boardType}?page=${page}`
      )
      .then((res) => {
        //console.log(res.data.free);
        dispatch({ type: SET_POSTS, payload: res.data });
      })
      .catch((error) => alert(error));
  };

export default handleActions(
  {
    [SET_POSTS]: (state, action) =>
      // (state = state.posts.concat(action.payload.free)),
      ({
        totalCount: action.payload.totalCount,
        posts: [...action.payload.list],
      }),
  },
  initialState
);
