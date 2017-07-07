import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { openbetStore, openbetConstants } from 'ob-store-tools';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';

import App from './containers/App/App';

const initialState = {};
const storeId = Math.floor(Math.random() * 10000);
const store = configureStore(initialState, storeId);

// every time this event is fired we check for missing actions
window.addEventListener(openbetConstants.OB_STORE_SYNC_EVENT_NAME, openbetStore.synchroniser(store, storeId));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('widgetb')
);

registerServiceWorker();
