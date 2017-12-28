import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';

export default combineReducers({
//store.getState()  returns {currentLocation:[]}
  currentLocation: LocationReducer
});
