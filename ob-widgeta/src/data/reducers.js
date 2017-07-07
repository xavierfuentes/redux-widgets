import { combineReducers } from 'redux';
import { openbetReducer as openbet } from 'ob-store-tools';

import ui from './ui/reducers';

export default combineReducers({
  openbet,
  ui,
});
