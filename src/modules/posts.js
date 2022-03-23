import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_HOT_POSTS = 'posts/SET_HOT_POSTS';
const SET_POSTS = 'posts/SET_POSTS'; // 게시글 목록 데이터를 저장하는 액션 타입
const SET_POST = 'posts/SET_POST'; // 특정 id를 갖는 게시글 데이터를 저장하는 액션 타입
const SET_LIKE = 'posts/SET_LIKE';
const SET_SCRAP = 'posts/SET_SCRAP';
const DELETE_POST = 'posts/DELETE_POST';
const SET_SEARCH_RESULTS = 'posts/SET_SEARCH_RESULTS';

const initialState = {
  totalCount: 0,
  posts: [],
  hotPosts: [],
  nowPost: {},
  searchResults: {},
};

// 검색 결과를 불러와 저장
export const setSearchResults = (input, page) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/search`, {
      params: {
        keyword: input,
        page: page,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: SET_SEARCH_RESULTS, payload: res.data });
    })
    .catch((error) => alert(error));
};

// 핫게시글 목록을 불러오고, 스토어에 핫게시글 목록을 저장하는 액션 생성함수
export const setHotPosts = (boardType) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/board/hot/${boardType}`)
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
        `${process.env.REACT_APP_SERVER_URL}/board/list/${boardType}?page=${page}`
      )
      .then((res) => {
        dispatch({ type: SET_POSTS, payload: res.data });
      })
      .catch((error) => alert(error));
  };

// 특정 게시글을 불러오고, 스토어에 특정 게시글을 저장하는 액션 생성함수
export const setPost = (id) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/board/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SET_POST, payload: res.data });
    })
    .catch((error) => {
      window.alert('존재하지 않는 게시물입니다.');
      history.goBack();
    });
};

// 게시글 삭제
export const deletePost = (id, boardType) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_SERVER_URL}/board/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DELETE_POST });
      window.alert('게시글을 삭제했습니다.');
      history.push(`/${boardType}`);
    })
    .catch((error) => {
      window.alert('게시글 삭제를 실패했습니다.');
    });
};

// 좋아요 눌렀을 때 데이터 보내는 액션 생성함수
export const postLike = (id, like) => (dispatch, getState) => {
  let nowLikeCount = getState().posts.nowPost.likeCount;
  console.log(nowLikeCount);
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/board/like/${id}`,
      {
        like: like,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      nowLikeCount = res.data.like ? nowLikeCount + 1 : nowLikeCount - 1;
      dispatch({
        type: SET_LIKE,
        payload: { like: like, likeCount: nowLikeCount },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// 스크랩 눌렀을 때 데이터 보내는 액션 생성함수
export const postScrap = (id, scrap) => (dispatch, getState) => {
  let nowScrapCount = getState().posts.nowPost.scrapCount;
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/board/scrap/${id}`,
      {
        scrap: scrap,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      nowScrapCount = res.data.scrap ? nowScrapCount + 1 : nowScrapCount - 1;
      dispatch({
        type: SET_SCRAP,
        payload: { scrap: scrap, scrapCount: nowScrapCount },
      });
    });
};

export default handleActions(
  {
    [SET_SEARCH_RESULTS]: (state, action) => ({
      ...state,
      searchResults: { ...action.payload },
    }),
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
    [DELETE_POST]: (state, action) => ({
      ...state,
      nowPost: {},
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
