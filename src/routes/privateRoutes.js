import PostWritePage from '../pages/PostWritePage';
import RentWritePage from '../pages/RentWritePage';
import SellWritePage from '../pages/SellWritePage';
import MyPage from '../pages/mypage/MyPage';
import MyPostPage from '../pages/mypage/MyPostPage';
import MyScrapPage from '../pages/mypage/MyScrapPage';
import ReviewWritePage from '../pages/review/ReviewWritePage';
import ReviewsPage from '../pages/review/ReviewsPage';
import ReviewPage from '../pages/review/ReviewPage';

export default [
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
