import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
import NavbarContainer from './containers/NavbarContainer';
import Footer from './components/common/Footer';
import { Router, Switch, Route } from 'react-router-dom';

import { getCookie } from './Cookie';
import { useDispatch } from 'react-redux';
import { getUser } from './modules/user';

const App = () => {
  const dispatch = useDispatch();
  const cookie = getCookie('isLogin');

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
                {Routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      component={route.component}>
                      {/* <route.component /> */}
                    </Route>
                  );
                })}
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
