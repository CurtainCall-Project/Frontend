import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/index';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import history from './history';
import { routerMiddleware } from 'connected-react-router';

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(
        applyMiddleware(
          thunk.withExtraArgument({ history }),
          routerMiddleware(history)
        )
      )
    : composeWithDevTools(
        applyMiddleware(
          thunk.withExtraArgument({ history }),
          routerMiddleware(history),
          logger
        )
      );

// 스토어 생성
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
