import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';
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
      .get(`${config.SERVER_URL}/admin/boards?page=${page}`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch();
  };

export const deletePost = (id, page) => (dispatch) => {
  axios
    .delete(`${config.SERVER_URL}/admin/boards?boardId=${id}`)
    .then((res) => {
      dispatch({ type: DELETE_POST });
      axios
        .get(`${config.SERVER_URL}/admin/boards?page=${page}`)
        .then((res) => {
          dispatch({ type: GET_POSTS, payload: res.data });
        });
    });
};

export const deleteUser = (userId) => (dispatch) => {
  axios
    .delete(`${config.SERVER_URL}/admin/user?userId=${userId}`)
    .then((res) => {
      // 유저 삭제하면 어케할거야..?
    });
};

export default handleActions(
  {
    [GET_POSTS]: (state, action) => ({
      totalItemsCount: action.payload.totalCount,
      posts: [...action.payload.list],
    }),
    [DELETE_POST]: (state, action) => ({
      ...state,
    }),
  },
  state
);
