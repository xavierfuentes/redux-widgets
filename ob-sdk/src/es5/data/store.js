var types = require('./types');
var constants = require('./constants');

var typesArray = [];
for (var key in types) {
  typesArray.push(types[key]);
}

var storageKey = constants.OB_STORAGE_KEY;
var sourceId = Math.floor(Math.random() * 10000); // random id
var lastActionDispatched;

function wrapAction(action) {
  var time = Date.now();
  return {
    action: action,
    sourceId: sourceId,
    time: time,
  };
}

function middleware(store) {
  return function(next) {
    return function(action) {
      // intercept only SDK actions
      if (typesArray.indexOf(action.type) > -1) {
        var event = new Event(constants.OB_STORE_SYNC_EVENT_NAME);
        var wrappedAction = wrapAction(action);

        lastActionDispatched = wrappedAction;
        localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
        window.dispatchEvent(event);
      }

      // dispatch the action
      next(action);
    };
  };
}

function synchroniser(store, storeId) {
  return function() {
    var wrappedAction = JSON.parse(localStorage.getItem(storageKey));

    if (wrappedAction.sourceId !== sourceId || lastActionDispatched.time === wrappedAction.time) {
      store.dispatch(wrappedAction.action);
    }
  };
}

module.exports = {
  middleware: middleware,
  synchroniser: synchroniser,
};
