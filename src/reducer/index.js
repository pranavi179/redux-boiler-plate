import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedInReducer from './isLoggedin';

const allReducers = combineReducers({
	counter: counterReducer,
	isLoggedIn: isLoggedInReducer,
});
export default allReducers;
