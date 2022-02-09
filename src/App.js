import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
import NavbarContainer from './containers/NavbarContainer';

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
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <NavbarContainer />
          <Switch>
            {Routes.map((route) => {
              return (
                <Route key={route.path} exact path={route.path}>
                  <route.component />
                </Route>
              );
            })}
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
