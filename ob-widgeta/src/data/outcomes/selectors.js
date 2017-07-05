import { createSelector } from 'reselect';

const outcomesState = state => state.outcomes;

export const allOutcomesSelector = createSelector(outcomesState, (outcomes) => outcomes.all);
export const activeOutcomesSelector = createSelector(outcomesState, (outcomes) => outcomes.active);
