import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
  // wrap the app with store to use Redux
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
