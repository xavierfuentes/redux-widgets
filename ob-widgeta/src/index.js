import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { openBetMiddleware } from 'ob-sdk';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';

import App from './containers/App/App';

const initialState = {};
const store = configureStore(initialState);
// const createOnStorage = openBetMiddleware.createOnStorage(store);

// window.addEventListener('ob-store-change', createOnStorage);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('widgeta')
);

registerServiceWorker();
