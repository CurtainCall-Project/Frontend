import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import history from '../history';

export default combineReducers({
  user,
  post,
  router: connectRouter(history),
});
