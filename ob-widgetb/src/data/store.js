import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { openbetStore } from 'ob-sdk';

import reducers from './reducers';

const configureStore = (initialState, storeId) => {
  const loggerMiddleware = createLogger({ collapsed: true });
  const openbetMiddleware = openbetStore.createMiddleware(storeId);
  const middlewares = [thunkMiddleware, loggerMiddleware, openbetMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

  // Extensions

  return store;
};

export default configureStore;
