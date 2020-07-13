import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
//Redux based imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './store/reducers';
//redux store with middleware
const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)))
//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

