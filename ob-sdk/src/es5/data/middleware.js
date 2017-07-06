var types = require('./types');

var typesArray = []
for(var key in types) {
  typesArray.push(types[key])
}

var storageKey = 'ob-store-sync';
var sourceId = Math.floor(Math.random() * 10000); // random id

function wrapAction(action) {
  return {
    action: action,
    sourceId: sourceId,
    time: Date.now(),
  };
}

function middleware(store) {
  return function(next) {
    return function(action) {
      // notify only for SD actions
      if (typesArray.indexOf(action.type) > -1) {
        var wrappedAction = wrapAction(action);
        localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
        console.log('saving action ->', wrappedAction)
        window.dispatchEvent(new Event('ob-store-change'));
      }
      next(action);
    };
  };
}

function createOnStorage(store) {
  return function() {
    var wrappedAction = JSON.parse(localStorage.getItem(storageKey));

    if (wrappedAction.sourceId !== sourceId) {
      console.log('dispatching action ->', wrappedAction)
      store.dispatch(wrappedAction.action);
    }
  };
}

module.exports = {
  middleware: middleware,
  createOnStorage: createOnStorage,
};
