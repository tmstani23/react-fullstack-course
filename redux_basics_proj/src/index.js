import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

//create redux store and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    //provider is the redux component for sharing the store with the app
      //and handling store/state updating
      //Redux combined reducers are passed into the store
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
  document.getElementById('root')
);

