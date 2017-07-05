import { ADD_OUTCOME } from './types';

export default function openBetMiddleware(store) {
  return next => action => {
    const { type, payload } = action;

    switch (type) {
      case ADD_OUTCOME: {
        // do something cool every time this action is dispatched
        console.info('OpenBet middleware taking control!', action);
        return next(action);
      }

      default: {
        return next(action);
      }
    }
  };
}
