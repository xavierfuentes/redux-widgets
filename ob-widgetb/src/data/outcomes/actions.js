import { REMOVE_OUTCOME, CLEAR_SLIP } from './types';
import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

export const removeOutcome = outcomeId => ({
  type: REMOVE_OUTCOME,
  payload: { outcomeId },
});

export const clearSlip = () => ({
  type: CLEAR_SLIP,
});

export const deleteOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  // dispatch ob-sdk action to addBet globally
  setTimeout(() => {
    dispatch(removeOutcome(outcomeId));
    dispatch(asyncRequestFinished());
  }, 1000);
  // on success dispatch a local action if needed
  // on error dispatch a local action if needed (and go back to the previous state?)
};

export const deleteAllOutcomes = () => dispatch => {
  dispatch(asyncRequestStarted());
  // dispatch ob-sdk action to addBet globally
  setTimeout(() => {
    dispatch(clearSlip());
    dispatch(asyncRequestFinished());
  }, 1000);
}