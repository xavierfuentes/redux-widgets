var types = require('./types');
var merge = require('../helpers/mergeObjects');

var outcomesInitialState = {
  outcomes: [
    { id: '1', name: 'FC Barcelona', price: '2/1', status: 'active', description: 'very long descrition' },
    { id: '2', name: 'Real Madrid CF', price: '4/1', status: 'active', description: 'very long descrition' },
    { id: '3', name: 'Manchester United FC', price: '6/1', status: 'active', description: 'very long descrition' },
    { id: '4', name: 'Arsenal FC', price: '6/1', status: 'active', description: 'very long descrition' },
    { id: '4', name: 'Chelsea FC', price: '10/1', status: 'active', description: 'very long descrition' },
    { id: '4', name: 'Betis FC', price: '15/2', status: 'active', description: 'very long descrition' },
  ],
  active: [],
  fetching: false,
};

function outcomesReducer(state, action) {
  if (!state) state = outcomesInitialState;

  switch (action.type) {
    case types.REMOVE_OUTCOME_REQUEST:
    case types.ADD_OUTCOME_REQUEST: {
      return merge(state, { fetching: true });
    }

    case types.ADD_OUTCOME_SUCCESS: {
      return merge(state, { fetching: false, active: state.active.concat(action.payload.outcomeId) });
    }

    case types.REMOVE_OUTCOME_SUCCESS: {
      return merge(state, {
        fetching: false,
        active: state.active.filter(function(outcome) {
          return outcome.id !== action.payload.outcomeId;
        }),
      });
    }

    case types.REMOVE_OUTCOME_FAILURE:
    case types.ADD_OUTCOME_FAILURE: {
      return merge(state, { fetching: false });
    }

    default: {
      return state;
    }
  }
}

module.exports = outcomesReducer;
