import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SignInPage from './pages/SignInPage';
import FreeBoardPage from './pages/FreeBoardPage';
import SightBoardPage from './pages/SightBoardPage';
import NewBoardPage from './pages/NewBoardPage';
import RentPage from './pages/RentPage';
import MarketPage from './pages/MarketPage';

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
    path: '/rent',
    component: RentPage,
  },
  {
    path: '/market',
    component: MarketPage,
  },
];
