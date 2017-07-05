import { ASYNC_REQUEST_STARTED, ASYNC_REQUEST_FINISHED } from '../ui/types';

const initialState = {
  fetching: false,
};

const uiReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ASYNC_REQUEST_STARTED:
      return { ...state, fetching: true };

    case ASYNC_REQUEST_FINISHED:
      return { ...state, fetching: false };

    default:
      return state;
  }
};

export default uiReducer;
