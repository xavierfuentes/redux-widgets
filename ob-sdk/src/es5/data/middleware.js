var types = require('./types');

function openBetMiddleware(store) {
  return function(next) {
    return function(action) {
      switch (action.type) {
        case types.ADD_OUTCOME_REQUEST: {
          // do something cool every time this action is dispatched
          console.info('OpenBet middleware taking control of the ADD_OUTCOME_REQUEST!', action);
          return next(action);
        }

        case types.REMOVE_OUTCOME_REQUEST: {
          // do something cool every time this action is dispatched
          console.info('OpenBet middleware taking control of the REMOVE_OUTCOME_REQUEST!', action);
          return next(action);
        }

        default: {
          return next(action);
        }
      }
    };
  };
}

module.exports = openBetMiddleware;
