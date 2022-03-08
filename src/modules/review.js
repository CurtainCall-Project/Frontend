import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const GET_MUSICAL = 'review/GET_MUSICAL';

const initialState = {
  searchResults: [],
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
      searchResults: [...action.payload],
    }),
  },
  initialState
);
