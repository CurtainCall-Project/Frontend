import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const GET_MUSICAL = 'review/GET_MUSICAL';
const GET_MUSICAL_DETAIL = 'review/GET_MUSICAL_DETAIL';
const ADD_REVIEW = 'review/ADD_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const GET_MY_REVIEW = 'review/GET_MY_REVIEW';
const GET_REVIEW_DETAIL = 'review/GET_REVIEW_DETAIL';

const initialState = {
  searchResults: [],
  nowMusical: {},
  nowReview: {},
  myReviews: [],
  reviewDetail: {},
};

// 상세 리뷰 가져오기
export const getReviewDetail = (reviewId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/review/${reviewId}`)
    .then((res) => {
      dispatch({ type: GET_REVIEW_DETAIL, payload: res.data });
    })
    .catch((error) => {
      window.alert('존재하지 않는 리뷰입니다.');
      history.goBack();
    });
};

// 나의 리뷰 리스트 가져오기
export const getMyReview = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/review/myreview`)
    .then((res) => {
      dispatch({ type: GET_MY_REVIEW, payload: res.data.reviewList });
    })
    .catch((error) => console.log(error));
};

// 리뷰 수정하기
export const editReview =
  (
    reviewId,
    mname,
    musicalId,
    userId,
    rating,
    viewingDate,
    casting,
    content,
    files,
    deletedImages
  ) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('reviewId', reviewId);
    formData.append('mname', mname);
    formData.append('userId', userId);
    formData.append('rating', rating);
    formData.append('viewingDate', viewingDate);
    formData.append('cast', casting);
    formData.append('content', content);
    formData.append('imgFiles', files);
    formData.append('boardImgs', deletedImages);

    axios
      .put(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/review/${musicalId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      .then((res) => {
        history.push('/my-review');
      })
      .catch((error) => console.log(error));
  };

// 리뷰 추가하기
export const addReview =
  (mname, musicalId, userId, rating, viewingDate, casting, content, files) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('mname', mname);
    formData.append('userId', userId);
    formData.append('rating', rating);
    formData.append('viewingDate', viewingDate);
    formData.append('cast', casting);
    formData.append('content', content);
    formData.append('imgFiles', files);
    axios
      .post(
        `${process.env.REACT_APP_MOCK_SERVER_URL2}/review/${musicalId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      .then((res) => {
        dispatch({ type: ADD_REVIEW, payload: res.data });
        history.push('/my-review');
      })
      .catch((error) => alert(error));
  };

// 리뷰 글 삭제 하기
export const deleteReview = (reviewId) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_MOCK_SERVER_URL2}/review/${reviewId}`)
    .then((res) => {
      dispatch({ type: DELETE_REVIEW });
      window.alert('게시글을 삭제했습니다.');
      history.push('/my-review');
    })
    .catch((error) => {
      window.alert('게시글 삭제를 실패했습니다.');
      history.goBack();
    });
};

// 상세 뮤지컬 정보 가져오기
export const getMusicalDetail = (musicalId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/musical/${musicalId}`)
    .then((res) => {
      dispatch({ type: GET_MUSICAL_DETAIL, payload: res.data.dbs.db });
    })
    .catch((error) => console.log(error));
};

// 뮤지컬 검색 결과 가져오기
export const getMusical = (input, page) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/musical`, {
      params: {
        keyword: input,
        page: page,
      },
    })
    .then((res) => {
      if (res.data.dbs.db.length === 0) {
        window.alert('마지막 페이지입니다.');
      }
      dispatch({ type: GET_MUSICAL, payload: res.data.dbs.db });
    })
    .catch((error) => console.log(error));
};

export default handleActions(
  {
    [GET_MUSICAL]: (state, action) => ({
      ...state,
      searchResults: action.payload,
    }),
    [GET_MUSICAL_DETAIL]: (state, action) => ({
      ...state,
      nowMusical: { ...action.payload },
    }),
    [ADD_REVIEW]: (state, action) => ({
      ...state,
      nowReview: { ...action.payload },
    }),
    [DELETE_REVIEW]: (state, action) => ({
      ...state,
      nowReview: {},
    }),
    [GET_MY_REVIEW]: (state, action) => ({
      ...state,
      myReviews: [...action.payload],
    }),
    [GET_REVIEW_DETAIL]: (state, action) => ({
      ...state,
      reviewDetail: { ...action.payload },
    }),
  },
  initialState
);
