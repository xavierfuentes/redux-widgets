import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { openbetStore, openbetConstants } from 'ob-sdk';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';

import App from './containers/App/App';

const initialState = {};
const storeId = Math.floor(Math.random() * 10000); // random id
const store = configureStore(initialState, storeId);
console.log(`identifying widgetb's store as ${storeId}`);
// the synchroniser will check what actions this store is missing and dispatch them
const sync = openbetStore.synchroniser(store, storeId);
// every time this event is fired we check for missing actions
window.addEventListener(openbetConstants.OB_STORE_SYNC_EVENT_NAME, sync);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('widgetb')
);

registerServiceWorker();
