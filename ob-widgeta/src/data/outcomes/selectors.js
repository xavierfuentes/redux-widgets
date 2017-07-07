import { createSelector } from 'reselect';
import { openbetHelpers } from 'ob-store-tools';

import { AMOUNT_OF_OUTCOMES_TO_LIST } from './constants';

const globalState = state => state.openbet;

export const allOutcomesSelector = createSelector(globalState, state => state.outcomes);
export const allActiveOutcomesSelector = createSelector(globalState, outcomes => outcomes && outcomes.active);

// this shows off data management in selectors
// it could have some function to choose what kind or how many outcomes we need
// e.g. a specific market, a specific event, a combination of geolocation and market, etc.
export const outcomesSelector = createSelector(allOutcomesSelector, outcomes => {
  return outcomes && outcomes.length > 0 && outcomes.slice(0, AMOUNT_OF_OUTCOMES_TO_LIST).map(openbetHelpers.getMiniOutcome);
});
