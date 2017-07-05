var types = require('./types');
var merge = require('../helpers/mergeObjects');

var initialState = {
  bet: null,
  error: null,
  fetching: false,
};

var outcomesInitialState = {
  all: [],
  active: [],
};

function outcomesReducer(state, action) {
  if (!state) state = outcomesInitialState;

  switch (action.type) {
    case types.ADD_OUTCOME_REQUEST: {
      return merge(state, { fetching: true });
    }

    case types.ADD_OUTCOME_SUCCESS: {
      return merge(state, { fetching: false, active: payload.outcomeId });
    }

    // case types.ADD_OUTCOME_FAILURE: {
    //   var newState = { fetching: false, error: payload.error };
    //   return merge(state, newState);
    // }

    default: {
      return state;
    }
  }
}

module.exports = outcomesReducer;
