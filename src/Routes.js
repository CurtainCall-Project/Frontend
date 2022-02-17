import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SignInPage from './pages/signin/SigninPage';
import PostWritePage from './pages/PostWritePage';
import RentWritePage from './pages/RentWritePage';
import SellWritePage from './pages/SellWritePage';
import FreeBoardPage from './pages/board/FreeBoardPage';
import SightBoardPage from './pages/board/SightBoardPage';
import NewBoardPage from './pages/board/NewBoardPage';
import RentBoardPage from './pages/board/RentBoardPage';
import SellBoardPage from './pages/board/SellBoardPage';
import NicknameSetPage from './pages/mypage/NicknameSetPage';

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
    path: '/board/write',
    component: PostWritePage,
  },
  {
    path: '/rent/write',
    component: RentWritePage,
  },
  {
    path: '/sell/write',
    component: SellWritePage,
  },
  {
    path: '/board/free',
    component: FreeBoardPage,
  },
  {
    path: '/board/sight',
    component: SightBoardPage,
  },
  {
    path: '/board/new',
    component: NewBoardPage,
  },
  {
    path: '/rent',
    component: RentBoardPage,
  },
  {
    path: '/sell',
    component: SellBoardPage,
  },
  {
    path: '/mypage/nickname',
    component: NicknameSetPage,
  },
];
