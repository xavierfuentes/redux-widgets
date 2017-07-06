var types = require('./types');
var constants = require('./constants');

var typesArray = [];
for (var key in types) {
  typesArray.push(types[key]);
}

var storageKey = constants.OB_STORAGE_KEY;
var sourceId = Math.floor(Math.random() * 10000); // random id

function wrapAction(storeId, action) {
  return {
    action: action,
    sourceId: sourceId,
    storeId: storeId,
    time: Date.now(),
  };
}

function createMiddleware(storeId) {
  return function middleware(store) {
    return function(next) {
      return function(action) {
        // intercept only SDK actions
        if (typesArray.indexOf(action.type) > -1) {
          var event = new Event(constants.OB_STORE_SYNC_EVENT_NAME);
          var wrappedAction = wrapAction(storeId, action);
          localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
          // console.log('saving action ->', wrappedAction)
          // console.log('a global action is being dispatched from store: ', storeId);
          window.dispatchEvent(event);
        }
        next(action);
      };
    };
  };
}

function synchroniser(store, storeId) {
  return function() {
    var wrappedAction = JSON.parse(localStorage.getItem(storageKey));

    // different devices/tabs might have different stores
    // if (wrappedAction.storeId === storeId && wrappedAction.sourceId !== sourceId) {
    //   store.dispatch(wrappedAction.action);
    // }

    if (wrappedAction.storeId !== storeId) {
      // console.log('we should dispatch the action in the store: ', storeId);
      store.dispatch(wrappedAction.action);
    }
  };
}

module.exports = {
  createMiddleware: createMiddleware,
  synchroniser: synchroniser,
};
