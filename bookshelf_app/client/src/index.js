import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './css/style.css';
//Redux based imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './store/reducers';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faSignOutAlt, faClipboard, faPlus, faHome, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
//add icons to library
library.add(faSignOutAlt, faClipboard, faPlus, faSignInAlt, faHome);


//redux store with middleware
const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)))
//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

