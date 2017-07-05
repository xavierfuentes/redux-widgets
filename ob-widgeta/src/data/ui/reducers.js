import { ASYNC_REQUEST_STARTED, ASYNC_REQUEST_FINISHED } from '../ui/types';

const initialState = {
  isFetching: false,
};

const uiReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ASYNC_REQUEST_STARTED:
      return { ...state, isFetching: true };

    case ASYNC_REQUEST_FINISHED:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default uiReducer;
