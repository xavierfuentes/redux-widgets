import { combineReducers } from 'redux';

import { openBetReducer as openbet } from 'ob-sdk';
import ui from './ui/reducers';

export default combineReducers({
  openbet,
  ui,
});
