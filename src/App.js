import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
import NavbarContainer from './containers/NavbarContainer';
import Footer from './components/common/Footer';
import { Switch } from 'react-router-dom';

import { getCookie } from './Cookie';
import { useDispatch } from 'react-redux';
import { getUser } from './modules/user';

const App = () => {
  const dispatch = useDispatch();
  const cookie = getCookie('token');

  useEffect(() => {
    if (cookie) {
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <div className="wrapper">
            <NavbarContainer />
            <section>
              <Switch>
                {privateRoutes.map((route) => (
                  <PrivateRoute
                    key={route.path}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ))}
                {publicRoutes.map((route) => (
                  <PublicRoute
                    key={route.path}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
            </section>
            <Footer />
          </div>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
