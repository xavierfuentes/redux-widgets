import * as actions from './data/actions';
import * as constants from './data/constants';

let lastActionDispatched;

const storageKey = constants.OB_STORAGE_KEY;
const sourceId = Math.floor(Math.random() * 10000); // random id
const wrapAction = action => ({ action, sourceId, time: new Date.now() });
const middleware = store => next => action => {
  // intercept only SDK actions
  if (typesArray.indexOf(action.type) > -1) {
    var event = new Event(constants.OB_STORE_SYNC_EVENT_NAME);
    var wrappedAction = wrapAction(action);

    lastActionDispatched = wrappedAction;
    localStorage.setItem(storageKey, JSON.stringify(wrappedAction));
    window.dispatchEvent(event);
  }

  // dispatch the action
  next(action);
};
const synchroniser = store => () => {
  const wrappedAction = JSON.parse(localStorage.getItem(storageKey));

  if (wrappedAction.sourceId !== sourceId || lastActionDispatched.time === wrappedAction.time) {
    store.dispatch(wrappedAction.action);
  }
};
