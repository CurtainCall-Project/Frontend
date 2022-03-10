import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const GET_MUSICAL = 'review/GET_MUSICAL';
const ADD_REVIEW = 'review/ADD_REVIEW';
const GET_MY_REVIEW = 'review/GET_MY_REVIEW';
const GET_REVIEW_DETAIL = 'review/GET_REVIEW_DETAIL';

const initialState = {
  searchResults: [],
  nowReview: {},
  myReviews: [],
  reviewDetail: {},
};

export const getReviewDetail = (reviewId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/review/${reviewId}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_REVIEW_DETAIL, payload: res.data });
    })
    .catch((error) => alert(error));
};

export const getMyReview = (userId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/review/myreview/${userId}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_MY_REVIEW, payload: res.data });
    })
    .catch((error) => alert(error));
};

export const addReview =
  (musicalId, userId, rating, viewingDate, casting, content, files) =>
  (dispatch) => {
    console.log(rating, viewingDate, casting, content, files);
    console.log(files);
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('rating', rating);
    formData.append('viewingDate', viewingDate);
    formData.append('casting', casting);
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
        console.log(res.data);
        dispatch({ type: ADD_REVIEW, payload: res.data });
        history.push('/my-review');
      })
      .catch((error) => alert(error));
  };

export const getMusical = (input) => (dispatch) => {
  console.log(input);
  axios
    .get(`${process.env.REACT_APP_MOCK_SERVER_URL2}/musical`, {
      params: {
        keyword: input,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_MUSICAL, payload: res.data });
    })
    .catch((error) => alert(error));
};

export default handleActions(
  {
    [GET_MUSICAL]: (state, action) => ({
      ...state,
      searchResults: [...action.payload],
    }),
    [ADD_REVIEW]: (state, action) => ({
      ...state,
      nowReview: { ...action.payload },
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
