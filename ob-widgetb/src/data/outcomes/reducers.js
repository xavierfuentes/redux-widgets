import { REMOVE_OUTCOME, CLEAR_SLIP } from '../outcomes/types';

const initialState = {
  all: [],
};

const outcomesReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case REMOVE_OUTCOME: {
      return { ...state, all: state.all.filter(outcome => outcome.id !== payload.outcomeId) };
    }

    case CLEAR_SLIP: {
      return { ...state, all: [] };
    }

    default:
      return state;
  }
};

export default outcomesReducer;
