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

function addOutcome(outcomeId) {
  return function(dispatch) {
    dispatch(addOutcomeRequest());

    return callApi().then(
      function(sauce) {
        return dispatch(addOutcomeSuccess(outcomeId));
      },
      function(error) {
        return dispatch(addOutcomeFailure(error));
      }
    );
  };
}

module.exports = {
  addOutcome: addOutcome,
};
