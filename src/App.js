import React from 'react';
import Navbar from './components/common/Navbar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';

import { Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <Navbar />
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
