import { createSelector } from 'reselect';

const globalState = state => state.openbet;

export const allOutcomesSelector = createSelector(globalState, state => state.outcomes);
// export const allActiveOutcomesSelector = createSelector(globalState, outcomes => outcomes && outcomes.active);
export const allActiveOutcomesSelector = state => state.openbet.active;

// this shows off selectors combined
export const outcomesSelector = createSelector(
  allOutcomesSelector,
  allActiveOutcomesSelector,
  (outcomes, activeIds) => {
    if (activeIds.length <= 0)  {
      return [];
    }
    return outcomes && outcomes.filter(outcome => activeIds.includes(outcome.id) && outcome);
  }
);
