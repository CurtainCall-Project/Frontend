import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';
import Routes from './Routes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
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
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
