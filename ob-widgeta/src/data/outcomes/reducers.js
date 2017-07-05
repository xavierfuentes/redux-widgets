import { ADD_OUTCOME } from '../outcomes/types';

const initialState = {
  all: [
    { id: '1', name: 'FC Barcelona', price: '2/1' },
    { id: '2', name: 'Real Madrid CF', price: '4/1' },
    { id: '3', name: 'Manchester United FC', price: '6/1' },
    { id: '4', name: 'Arsenal FC', price: '6/1' },
  ],
  active: [],
};

const outcomesReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_OUTCOME: {
      return { ...state, active: state.active.concat(payload.outcomeId) };
    }

    default:
      return state;
  }
};

export default outcomesReducer;
