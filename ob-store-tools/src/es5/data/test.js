var localStorage = {
  clear: function() {},
  setItem: function() {},
  getItem: function() {},
};

var window = {
  dispatchEvent: function() {}
}

function createMiddleware(storeId) {
  localStorage.clear();

  function wrapAction(action, storeId) {
    var time = Date.now();
    return {
      action: action,
      storeId: storeId,
      time: time,
    };
  }

  return function middleware(store) {
    return function(next) {
      return function(action) {
        // intercept only SDK actions
        if (typesArray.indexOf(action.type) > -1) {
          var event = new Event(constants.OB_STORE_SYNC_EVENT_NAME);
          var wrappedAction = wrapAction(action, storeId);
          var lastGlobalAction = JSON.parse(localStorage.getItem(storageKey));
          var lastOwnAction = JSON.parse(localStorage.getItem(storageKey + ':store:' + storeId));

          localStorage.setItem(storageKey + ':store:' + storeId, JSON.stringify(wrappedAction));

          if (!lastGlobalAction) {
            // if it's the first action ever...
            localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
            window.dispatchEvent(event);
          } else {
            if (
              lastGlobalAction.storeId === storeId ||
              (lastGlobalAction.storeId !== storeId && lastGlobalAction.action.type !== wrappedAction.action.type) ||
              (!!lastGlobalAction && !!lastOwnAction && lastGlobalAction.action.type !== lastOwnAction.action.type)
            ) {
              localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
              window.dispatchEvent(event);
            }
          }
        }

        // dispatch the action
        next(action);
      };
    };
  };
}