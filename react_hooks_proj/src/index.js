import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App initialCount = {0}/>
  </React.StrictMode>,
  document.getElementById('root')
);

