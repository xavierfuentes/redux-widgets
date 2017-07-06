import { openbetActions } from 'ob-sdk';

import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';

export const removeOutcome = outcomeId => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openbetActions.removeOutcome(outcomeId)).then(result => {
    dispatch(asyncRequestFinished());
  });
  // todo: on error dispatch a local action if needed (and go back to the previous state?)
};

export const removeAllOutcomes = () => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(openbetActions.removeAllOutcomes()).then(result => {
    dispatch(asyncRequestFinished());
  });
}