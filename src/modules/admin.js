import { handleActions } from 'redux-actions';
import axios from 'axios';
import { config } from '../config';

const GET_POSTS = 'admin/GET_POSTS';
const DELETE_POST = 'admin/DELETE_POST';
const DELETE_USER = 'admmin/DELETE_USER';

const state = {
  totalItemsCount: 0,
  posts: [],
};

export const setPosts =
  (page = 1) =>
  (dispatch) => {
    axios
      .get(`${config.SERVER_URL}/boards/all?page=${page}`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch();
  };

export const deletePost = (id, page) => (dispatch) => {
  axios.delete(`${config.SERVER_URL}/deletePost?boardId=${id}`).then((res) => {
    dispatch({ type: DELETE_POST });
    window.location.replace('/admin');
  });
};

export const deleteUser = (nickname, page) => (dispatch) => {
  axios
    .put(`${config.SERVER_URL}/deleteUser/${encodeURIComponent(nickname)}`)
    .then((res) => {
      dispatch({ type: DELETE_USER });
      window.location.replace('/admin');
    });
};

export default handleActions(
  {
    [GET_POSTS]: (state, action) => ({
      totalItemsCount: action.payload.totalCount,
      posts: [...action.payload.allPosts],
    }),
    [DELETE_POST]: (state, action) => ({
      ...state,
    }),
    [DELETE_USER]: (state, action) => ({
      ...state,
    }),
  },
  state
);
