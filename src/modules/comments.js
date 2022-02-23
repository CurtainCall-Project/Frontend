import { handleActions } from 'redux-actions';
import axios from 'axios';
import history from '../history';

const SET_COMMENT = 'comments/SET_COMMENT';
const ADD_COMMENT = 'comments/ADD_COMMENT';

export default handleActions({
  [SET_COMMENT]: (state, action) => ({}),
  [ADD_COMMENT]: (state, action) => ({}),
});
