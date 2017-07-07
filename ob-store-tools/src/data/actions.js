import * as types from './types';

const callApi = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000);
  });
};

const addOutcomeRequest = () => ({ type: types.ADD_OUTCOME_REQUEST });
const addOutcomeSuccess = outcomeId => ({ type: types.ADD_OUTCOME_SUCCESS, payload: { outcomeId: outcomeId } });
const addOutcomeFailure = error => ({ type: types.ADD_OUTCOME_FAILURE, payload: { error: error } });
const removeOutcomeRequest = () => ({ type: types.REMOVE_OUTCOME_REQUEST });
const removeOutcomeSuccess = outcomeId => ({ type: types.REMOVE_OUTCOME_SUCCESS, payload: { outcomeId: outcomeId } });
const removeOutcomeFailure = error => ({ type: types.REMOVE_OUTCOME_FAILURE, payload: { error: error } });
const removeAllOutcomesRequest = () => ({ type: types.REMOVE_ALL_OUTCOMES_REQUEST });
const removeAllOutcomesSuccess = () => ({ type: types.REMOVE_ALL_OUTCOMES_SUCCESS });
const removeAllOutcomesFailure = error => ({ type: types.REMOVE_ALL_OUTCOMES_FAILURE, payload: { error: error } });

export const addOutcome = outcomeId => dispatch => {
  dispatch(addOutcomeRequest());

  return callApi().then(result => dispatch(addOutcomeSuccess(outcomeId)), error => dispatch(addOutcomeFailure(error)));
};

export const removeOutcome = outcomeId => dispatch => {
  dispatch(removeOutcomeRequest());

  return callApi().then(
    result => dispatch(removeOutcomeSuccess(outcomeId)),
    error => dispatch(removeOutcomeFailure(error))
  );
};

export const removeAllOutcomes = outcomeId => dispatch => {
  dispatch(removeAllOutcomesRequest());

  return callApi().then(
    result => dispatch(removeAllOutcomesSuccess(outcomeId)),
    error => dispatch(removeAllOutcomesFailure(error))
  );
};
