import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SignInPage from './pages/signin/SigninPage';
import PostWritePage from './pages/PostWritePage';
import RentWritePage from './pages/RentWritePage';
import SellWritePage from './pages/SellWritePage';
import FreeBoardPage from './pages/FreeBoardPage';
import SightBoardPage from './pages/SightBoardPage';
import NewBoardPage from './pages/NewBoardPage';
import RentPage from './pages/RentPage';
import MarketPage from './pages/MarketPage';
import ReviewSearchPage from './pages/review/ReviewSearchPage';
import ReviewWritePage from './pages/review/ReviewWritePage';
import ReviewsPage from './pages/review/ReviewsPage';
import ReviewPage from './pages/review/ReviewPage';
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
    path: '/free_board',
    component: FreeBoardPage,
  },
  {
    path: '/sight_board',
    component: SightBoardPage,
  },
  {
    path: '/new_board',
    component: NewBoardPage,
  },
  {
    path: '/market',
    component: MarketPage,
  },
  {
    path: '/mypage/nickname',
    component: NicknameSetPage,
  },
  {
    path: '/reviews/search',
    component: ReviewSearchPage,
  },
  {
    path: '/reviews/write/:id',
    component: ReviewWritePage,
  },
  {
    path: '/reviews',
    component: ReviewsPage,
  },
  {
    path: '/reviews/:id',
    component: ReviewPage,
  },
];
