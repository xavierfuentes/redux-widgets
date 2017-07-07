var createMiddleware, localStorage;
(function () {
  var _$0 = this;

  function _0(storeId) {
    _$0.localStorage.clear();

    function wrapAction(action, storeId) {
      var time = _$0.Date.now();

      return {
        action: action,
        storeId: storeId,
        time: time
      };
    }

    return function middleware(store) {
      return function (next) {
        return function (action) {
          // intercept only SDK actions
          if (typesArray.indexOf(action.type) > -1) {
            var event = new Event(constants.OB_STORE_SYNC_EVENT_NAME);
            var wrappedAction = wrapAction(action, storeId);

            var lastGlobalAction = _$0.JSON.parse(_$0.localStorage.getItem(storageKey));

            var lastOwnAction = _$0.JSON.parse(_$0.localStorage.getItem(storageKey + ':store:' + storeId));

            _$0.localStorage.setItem(storageKey + ':store:' + storeId, _$0.JSON.stringify(wrappedAction));

            if (!lastGlobalAction) {
              // if it's the first action ever...
              _$0.localStorage.setItem(storageKey, _$0.JSON.stringify(wrappedAction));

              _$0.window.dispatchEvent(event);
            } else {
              if (lastGlobalAction.storeId === storeId || lastGlobalAction.storeId !== storeId && lastGlobalAction.action.type !== wrappedAction.action.type || !!lastGlobalAction && !!lastOwnAction && lastGlobalAction.action.type !== lastOwnAction.action.type) {
                _$0.localStorage.setItem(storageKey, _$0.JSON.stringify(wrappedAction));

                _$0.window.dispatchEvent(event);
              }
            }
          } // dispatch the action


          next(action);
        };
      };
    };
  }

  function _2() {}

  function _3() {}

  function _4() {}

  function _6() {}

  createMiddleware = _0;
  localStorage = void 0;
  localStorage = {
    clear: _2,
    setItem: _3,
    getItem: _4
  };
  window = {
    dispatchEvent: _6
  };
}).call(this);