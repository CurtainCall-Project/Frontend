import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import history from './history';
import { routerMiddleware } from 'connected-react-router';

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      routerMiddleware(history),
      logger
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
