import { openbetActions } from 'ob-store-tools';

import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

export const addOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openbetActions.addOutcome(outcomeId)).then(result => {
    dispatch(asyncRequestFinished());
  });
  // todo: on error dispatch a local action if needed (and go back to the previous state?)
};
