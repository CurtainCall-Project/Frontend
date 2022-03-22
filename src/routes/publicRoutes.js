import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SignInPage from '../pages/signin/SigninPage';
import BoardPage from '../pages/board/BoardPage';
import PostPage from '../pages/board/PostPage';
import ReviewSearchPage from '../pages/review/ReviewSearchPage';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/signin',
    component: SignInPage,
  },
  {
    path: ['/free', '/sight', '/new', '/rent', '/sell'],
    component: BoardPage,
  },
  {
    path: ['/free/:id', '/sight/:id', '/new/:id', '/rent/:id', '/sell/:id'],
    component: PostPage,
  },
  {
    path: '/review/search',
    component: ReviewSearchPage,
  },
];
