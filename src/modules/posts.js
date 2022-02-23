import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_POSTS = 'posts/SET_POSTS'; // 게시글 목록 데이터를 저장하는 액션 타입
const SET_POST = 'posts/SET_POST'; // 특정 id를 갖는 게시글 데이터를 저장하는 액션 타입
const SET_LIKE = 'posts/SET_LIKE';
const SET_SCRAP = 'posts/SET_SCRAP';

const initialState = {
  totalCount: 0,
  posts: [],
  nowPost: {},
};

// 게시글 목록을 불러오고, 스토어에 게시글 목록을 저장하는 액션 생성함수
export const setPosts =
  (boardType, page = 1) =>
  (dispatch) => {
    // console.log(
    //   `보내려는 게시판의 uri는 ${boardType}이고, 페이지 번호는 ${page}이다.`
    // );
    axios
      .get(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${boardType}?page=${page}`
      )
      .then((res) => {
        //console.log(res.data.free);
        dispatch({ type: SET_POSTS, payload: res.data });
      })
      .catch((error) => alert(error));
  };

// 특정 게시글을 불러오고, 스토어에 특정 게시글을 저장하는 액션 생성함수
export const setPost = (boardType, id) => (dispatch) => {
  console.log(boardType);
  console.log(id);
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${boardType}/${id}`)
    .then((res) => {
      dispatch({ type: SET_POST, payload: res.data });
      console.log(res.data);
    })
    .catch((error) => alert(error));
};

// 좋아요 눌렀을 때 데이터 보내는 액션 생성함수
export const postLike =
  (boardType, id, user, isLike) => (dispatch, getState) => {
    let nowLikeCount = getState().posts.nowPost.likeCount;
    console.log(nowLikeCount);
    axios
      .post(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${boardType}/like/${id}`,
        {
          nickname: user,
          isLke: isLike,
        }
      )
      .then((res) => {
        console.log(res.data);
        nowLikeCount = res.data.isLike ? nowLikeCount + 1 : nowLikeCount - 1;
        dispatch({
          type: SET_LIKE,
          payload: { ...res.data, likeCount: nowLikeCount },
        });
      });
  };

// 좋아요 눌렀을 때 데이터 보내는 액션 생성함수
export const postScrap =
  (boardType, id, user, isScrap) => (dispatch, getState) => {
    let nowScrapCount = getState().posts.nowPost.scrapCount;
    console.log(nowScrapCount);
    axios
      .post(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${boardType}/scrap/${id}`,
        {
          nickname: user,
          isScrap: isScrap,
        }
      )
      .then((res) => {
        console.log(res.data);
        nowScrapCount = res.data.isLike ? nowScrapCount + 1 : nowScrapCount - 1;
        dispatch({
          type: SET_SCRAP,
          payload: { ...res.data, scrapCount: nowScrapCount },
        });
      });
  };

export default handleActions(
  {
    [SET_POSTS]: (state, action) =>
      // (state = state.posts.concat(action.payload.free)),
      ({
        totalCount: action.payload.totalCount,
        posts: [...action.payload.list],
        nowPost: {},
      }),
    [SET_POST]: (state, action) => ({
      ...state,
      nowPost: action.payload,
    }),
    [SET_LIKE]: (state, action) => ({
      ...state,
      nowPost: {
        ...state.nowPost,
        isLike: action.payload.isLike,
        likeCount: action.payload.likeCount,
      },
    }),
    [SET_SCRAP]: (state, action) => ({
      ...state,
      nowPost: {
        ...state.nowPost,
        isScrap: action.payload.isScrap,
        scrapCount: action.payload.scrapCount,
      },
    }),
  },
  initialState
);
