import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';
import { config } from '../config';

// 액션 타입 정의
const ADD_POST = 'post/ADD_POST';
const ADD_RENT_POST = 'post/ADD_RENT_POST';
const ADD_SELL_POST = 'post/ADD_SELL_POST';

const initialState = {};

// 게시판 글 포스팅
export const addPost = (boardType, title, content, files) => (dispatch) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  files.map((file) => formData.append('files', file));

  axios
    .post(`${config.SERVER_URL}/board/${boardType}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      history.push(`/${res.data.boardType}/${res.data.boardId}`);
    })
    .catch((error) => console.log(error));
};

// 대여 글 포스팅
export const addRentPost =
  (title, product, price, term, place, delivery, content, files) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('product', product);
    formData.append('price', price);
    formData.append('term', term);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    files.map((file) => formData.append('files', file));

    axios
      .post(`${config.SERVER_URL}/board/rent`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        history.push(`/${res.data.boardType}/${res.data.boardId}`);
      })
      .catch((error) => console.log(error));
  };

// 거래 글 포스팅
export const addSellPost =
  (title, product, price, place, delivery, content, files) => (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('product', product);
    formData.append('price', price);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    files.map((file) => formData.append('files', file));

    axios
      .post(`${config.SERVER_URL}/board/sell`, formData, {
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
