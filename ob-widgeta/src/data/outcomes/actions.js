import { ADD_OUTCOME } from './types';
import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

import { openBetActions } from 'ob-sdk';

export const activateOutcome = outcomeId => ({
  type: ADD_OUTCOME,
  payload: { outcomeId },
});

export const addOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openBetActions.addOutcome()).then(result => {
    dispatch(asyncRequestFinished());
    dispatch(activateOutcome(outcomeId));
  });
  // todo: on error dispatch a local action if needed (and go back to the previous state?)
};
