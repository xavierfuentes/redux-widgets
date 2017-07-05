import { ASYNC_REQUEST_STARTED, ASYNC_REQUEST_FINISHED } from './types';

export const asyncRequestStarted = () => ({ type: ASYNC_REQUEST_STARTED });
export const asyncRequestFinished = () => ({ type: ASYNC_REQUEST_FINISHED });
