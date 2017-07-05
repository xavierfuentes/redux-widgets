import { createSelector } from 'reselect';

const uiState = state => state.ui;

export const fetching = createSelector(uiState, state => state.fetching);
