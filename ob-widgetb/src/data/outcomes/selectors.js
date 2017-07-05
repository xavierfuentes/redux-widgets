import { createSelector } from 'reselect';

const outcomesState = state => state.outcomes;

export const outcomesSelector = createSelector(outcomesState, (outcomes) => outcomes.all);
