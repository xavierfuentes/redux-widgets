import { createSelector } from 'reselect';

const uiState = state => state.ui;

export const isFetching = createSelector(uiState, state => state.isFetching);
