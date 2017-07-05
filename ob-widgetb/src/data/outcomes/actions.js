import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

import { openBetActions } from 'ob-sdk';

export const removeOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openBetActions.removeOutcome(outcomeId)).then(result => {
    dispatch(asyncRequestFinished());
  });
  // todo: on error dispatch a local action if needed (and go back to the previous state?)
};

export const removeAllOutcomes = () => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openBetActions.removeAllOutcomes()).then(result => {
    dispatch(asyncRequestFinished());
  });
}