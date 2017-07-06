var types = require('./types');

function callApi() {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000);
  });
}

function addOutcomeRequest() {
  return { type: types.ADD_OUTCOME_REQUEST };
}

function addOutcomeSuccess(outcomeId) {
  return { type: types.ADD_OUTCOME_SUCCESS, payload: { outcomeId: outcomeId } };
}

function addOutcomeFailure(error) {
  return { type: types.ADD_OUTCOME_FAILURE, payload: { error: error } };
}

function removeOutcomeRequest() {
  return { type: types.REMOVE_OUTCOME_REQUEST };
}

function removeOutcomeSuccess(outcomeId) {
  return { type: types.REMOVE_OUTCOME_SUCCESS, payload: { outcomeId: outcomeId } };
}

function removeOutcomeFailure(error) {
  return { type: types.REMOVE_OUTCOME_FAILURE, payload: { error: error } };
}

function removeAllOutcomesRequest() {
  return { type: types.REMOVE_ALL_OUTCOMES_REQUEST };
}

function removeAllOutcomesSuccess(outcomeId) {
  return { type: types.REMOVE_ALL_OUTCOMES_SUCCESS };
}

function removeAllOutcomesFailure(error) {
  return { type: types.REMOVE_ALL_OUTCOMES_FAILURE };
}

function addOutcome(outcomeId) {
  return function(dispatch) {
    dispatch(addOutcomeRequest());

    return callApi().then(
      function(result) {
        return dispatch(addOutcomeSuccess(outcomeId));
      },
      function(error) {
        return dispatch(addOutcomeFailure(error));
      }
    );
  };
}

function removeOutcome(outcomeId) {
  return function(dispatch) {
    dispatch(removeOutcomeRequest());

    return callApi().then(
      function(result) {
        return dispatch(removeOutcomeSuccess(outcomeId));
      },
      function(error) {
        return dispatch(removeOutcomeFailure(error));
      }
    );
  };
}

function removeAllOutcomes(outcomeId) {
  return function(dispatch) {
    dispatch(removeOutcomeRequest());

    return callApi().then(
      function(result) {
        return dispatch(removeOutcomeSuccess(outcomeId));
      },
      function(error) {
        return dispatch(removeOutcomeFailure(error));
      }
    );
  };
}

module.exports = {
  addOutcome: addOutcome,
  removeOutcome: removeOutcome,
  removeAllOutcomes: removeAllOutcomes,
};
