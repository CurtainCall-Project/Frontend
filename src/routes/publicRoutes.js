import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SignInPage from '../pages/signin/SigninPage';
import BoardPage from '../pages/board/BoardPage';
import PostPage from '../pages/PostPage';
import ReviewSearchPage from '../pages/review/ReviewSearchPage';
import NicknameSetPage from '../pages/mypage/NicknameSetPage';

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
    path: '/mypage/nickname',
    component: NicknameSetPage,
  },
  {
    path: '/reviews/search',
    component: ReviewSearchPage,
  },
];
