import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

import { openBetActions } from 'ob-sdk';

export const addOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openBetActions.addOutcome(outcomeId)).then(result => {
    dispatch(asyncRequestFinished());
  });
  // todo: on error dispatch a local action if needed (and go back to the previous state?)
};
