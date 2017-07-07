import { ADD_OUTCOME_REQUEST, ADD_OUTCOME_SUCCESS, ADD_OUTCOME_FAILURE } from './types';

const initialState = {
  bet: null,
  error: null,
  fetching: false,
};

export default function openBetReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_OUTCOME_REQUEST: {
      return { ...state, fetching: true };
    }

    case ADD_OUTCOME_SUCCESS: {
      return { ...state, fetching: false, bet: payload.bet };
    }

    case ADD_OUTCOME_FAILURE: {
      return { ...state, fetching: false, error: payload.error };
    }

    default: {
      return state;
    }
  }
}
