import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

// 액션 타입 정의
const ADD_POST = 'post/ADD_POST';
const ADD_RENT_POST = 'post/ADD_RENT_POST';
const ADD_SELL_POST = 'post/ADD_SELL_POST';

const initialState = {};

// 게시판 글 포스팅
export const addPost = (boardType, title, content, imgFiles) => (dispatch) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('files', imgFiles);
  axios
    .post(
      `${process.env.REACT_APP_MOCK_SERVER_URL2}/board/${boardType}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    .then((res) => {
      history.push(`/${res.data.boardType}/${res.data.boardId}`);
    })
    .catch((error) => console.log(error));
};

// 대여 글 포스팅
export const addRentPost =
  (title, product, price, term, place, delivery, content, imgFiles) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('product', product);
    formData.append('price', price);
    formData.append('term', term);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    formData.append('files', imgFiles);
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/rent`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        history.push(`/${res.data.boardType}/${res.data.boardId}`);
      })
      .catch((error) => console.log(error));
  };

// 거래 글 포스팅
export const addSellPost =
  (title, product, price, place, delivery, content, imgFiles) => (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('product', product);
    formData.append('price', price);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    formData.append('files', imgFiles);
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL2}/board/sell`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        history.push(`/${res.data.boardType}/${res.data.boardId}`);
      })
      .catch((error) => console.log(error));
  };

// 리듀서 정의
export default handleActions(
  {
    [ADD_POST]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ADD_RENT_POST]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ADD_SELL_POST]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);
