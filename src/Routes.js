import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SignInPage from './pages/signin/SigninPage';
import PostWritePage from './pages/PostWritePage';
import RentWritePage from './pages/RentWritePage';
import SellWritePage from './pages/SellWritePage';
import BoardPage from './pages/board/BoardPage';
import PostPage from './pages/PostPage';
import ReviewSearchPage from './pages/review/ReviewSearchPage';
import ReviewWritePage from './pages/review/ReviewWritePage';
import ReviewsPage from './pages/review/ReviewsPage';
import ReviewDetailPage from './pages/review/ReviewDetailPage';
import MyPage from './pages/mypage/MyPage';
import MyPostPage from './pages/mypage/MyPostPage';
import MyScrapPage from './pages/mypage/MyScrapPage';
import NicknameSetPage from './pages/mypage/NicknameSetPage';

export default [
  {
    path: 'http://localhost:3000?token=abcdefghijklmnopqrstuvwxyz',
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
    path: '/mypage/:id',
    component: MyPage,
  },
  {
    path: '/mypage/:id/my-post',
    component: MyPostPage,
  },
  {
    path: '/mypage/:id/scrapped-post',
    component: MyScrapPage,
  },
  {
    path: '/review/search',
    component: ReviewSearchPage,
  },
  {
    path: '/review/write/:id',
    component: ReviewWritePage,
  },
  {
    path: '/my-review',
    component: ReviewsPage,
  },
  {
    path: '/my-review/:id',
    component: ReviewDetailPage,
  },
];
