import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_HOT_POSTS = 'posts/SET_HOT_POSTS';
const SET_POSTS = 'posts/SET_POSTS'; // 게시글 목록 데이터를 저장하는 액션 타입
const SET_POST = 'posts/SET_POST'; // 특정 id를 갖는 게시글 데이터를 저장하는 액션 타입
const SET_LIKE = 'posts/SET_LIKE';
const SET_SCRAP = 'posts/SET_SCRAP';

const initialState = {
  totalCount: 0,
  posts: [],
  hotPosts: [],
  nowPost: {},
};

// 핫게시글 목록을 불러오고, 스토어에 핫게시글 목록을 저장하는 액션 생성함수
export const setHotPosts = (boardType) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/hot/${boardType}`)
    .then((res) => {
      dispatch({ type: SET_HOT_POSTS, payload: res.data });
    })
    .catch((error) => alert(error));
};
// 게시글 목록을 불러오고, 스토어에 게시글 목록을 저장하는 액션 생성함수
export const setPosts =
  (boardType, page = 1) =>
  (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/board/list/${boardType}?page=${page}`
      )
      .then((res) => {
        //console.log(res.data.free);
        dispatch({ type: SET_POSTS, payload: res.data });
      })
      .catch((error) => alert(error));
  };

// 특정 게시글을 불러오고, 스토어에 특정 게시글을 저장하는 액션 생성함수
export const setPost = (id) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${id}`)
    .then((res) => {
      dispatch({ type: SET_POST, payload: res.data });
    })
    .catch((error) => alert(error));
};

// 좋아요 눌렀을 때 데이터 보내는 액션 생성함수
export const postLike = (id, user, like) => (dispatch, getState) => {
  let nowLikeCount = getState().posts.nowPost.likeCount;
  axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/like/${id}`, {
      nickname: user,
      lke: like,
    })
    .then((res) => {
      nowLikeCount = res.data.like ? nowLikeCount + 1 : nowLikeCount - 1;
      dispatch({
        type: SET_LIKE,
        payload: { ...res.data, likeCount: nowLikeCount },
      });
    });
};

// 스크랩 눌렀을 때 데이터 보내는 액션 생성함수
export const postScrap = (id, user, scrap) => (dispatch, getState) => {
  let nowScrapCount = getState().posts.nowPost.scrapCount;
  axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/scrap/${id}`, {
      nickname: user,
      scrap: scrap,
    })
    .then((res) => {
      console.log(res.data);
      nowScrapCount = res.data.scrap ? nowScrapCount + 1 : nowScrapCount - 1;
      dispatch({
        type: SET_SCRAP,
        payload: { ...res.data, scrapCount: nowScrapCount },
      });
    });
};

export default handleActions(
  {
    [SET_HOT_POSTS]: (state, action) => ({
      ...state,
      hotPosts: [...action.payload.list],
    }),
    [SET_POSTS]: (state, action) =>
      // (state = state.posts.concat(action.payload.free)),
      ({
        ...state,
        totalCount: action.payload.totalCount,
        posts: [...action.payload.list],
        nowPost: { ...state.nowPost },
      }),
    [SET_POST]: (state, action) => ({
      ...state,
      nowPost: {
        ...action.payload,
      },
    }),
    [SET_LIKE]: (state, action) => ({
      ...state,
      nowPost: {
        ...state.nowPost,
        like: action.payload.like,
        likeCount: action.payload.likeCount,
      },
    }),
    [SET_SCRAP]: (state, action) => ({
      ...state,
      nowPost: {
        ...state.nowPost,
        scrap: action.payload.scrap,
        scrapCount: action.payload.scrapCount,
      },
    }),
  },
  initialState
);
