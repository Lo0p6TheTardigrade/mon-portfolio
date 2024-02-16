// @flow
import { combineReducers } from 'redux';
import { reducer } from './behavior.reducer';

export default combineReducers({
  behavior: reducer.behavior,
  user: reducer.user,
});
