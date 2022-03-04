import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import posts from './posts';
import comments from './comments';
import history from '../history';

export default combineReducers({
  user,
  post,
  posts,
  comments,
  router: connectRouter(history),
});
