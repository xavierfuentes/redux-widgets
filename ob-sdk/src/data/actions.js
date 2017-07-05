import { ADD_OUTCOME_REQUEST, ADD_OUTCOME_SUCCESS, ADD_OUTCOME_FAILURE } from './types';

export const placeBetRequest = () => ({
  type: ADD_OUTCOME_REQUEST,
});

export const placeBetSuccess = bet => ({
  type: ADD_OUTCOME_SUCCESS,
  payload: { bet },
});

export const placeBetFailure = error => ({
  type: ADD_OUTCOME_FAILURE,
  payload: { error },
});

// simulates some side effect or validation. It could be done asynchronously using thunks or sagas.
export const placeBet = betData => dispatch => {
  dispatch(placeBetRequest());
  if (!betData.id) {
    dispatch(placeBetFailure('An id parameter is required'));
  }
  dispatch(placeBetSuccess(betData));
};
