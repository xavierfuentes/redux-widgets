import { combineReducers } from 'redux';

import { openBetReducer } from 'ob-sdk';
import outcomes from './outcomes/reducers';
import ui from './ui/reducers';

export default combineReducers({
  openBet: openBetReducer,
  outcomes,
  ui,
});
