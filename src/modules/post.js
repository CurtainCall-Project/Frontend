import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

// 액션 타입 정의
const ADD_POST = 'post/ADD_POST';

const initialState = {};

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

// 리듀서 정의
export default handleActions(
  {
    [ADD_POST]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);
