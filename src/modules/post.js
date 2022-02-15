import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

// 액션 타입 정의
const ADD_POST = 'post/ADD_POST';
const ADD_RENT_POST = 'post/ADD_RENT_POST';
const ADD_SELL_POST = 'post/ADD_SELL_POST';

const initialState = {};

// 게시판 글 포스팅
export const addPost =
  (boardType, title, content, imgFiles, nickname) => (dispatch) => {
    const formData = new FormData();
    formData.append('boardType', boardType);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('imgFiles', imgFiles);
    formData.append('nickname', nickname);

    for (var value of formData.values()) {
      console.log(value);
    }
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL}/board/write`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log('게시글을 저장했습니다!');
        console.log(res.data);
        history.push('/');
      })
      .catch((error) => console.log(error));
  };

// 대여 글 포스팅
export const addRentPost =
  (title, item, price, period, place, delivery, content, imgFiles, nickname) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('item', item);
    formData.append('price', price);
    formData.append('period', period);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    formData.append('imgFiles', imgFiles);
    formData.append('nickname', nickname);

    for (var value of formData.values()) {
      console.log(value);
    }
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL}/rent/write`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log('게시글을 저장했습니다!');
        console.log(res.data);
        history.push('/');
      })
      .catch((error) => console.log(error));
  };

// 거래 글 포스팅
export const addSellPost =
  (title, item, price, place, delivery, content, imgFiles, nickname) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('item', item);
    formData.append('price', price);
    formData.append('place', place);
    formData.append('delivery', delivery);
    formData.append('content', content);
    formData.append('imgFiles', imgFiles);
    formData.append('nickname', nickname);

    for (var value of formData.values()) {
      console.log(value);
    }
    axios
      .post(`${process.env.REACT_APP_MOCK_SERVER_URL}/sell/write`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log('게시글을 저장했습니다!');
        console.log(res.data);
        history.push('/');
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
