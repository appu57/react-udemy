import {tasksReducer} from './taskReducers';
// import tasksReducer2 from './taskReducers';
//combine two reducers
import {combineReducers} from "redux";

var reducer=combineReducers({tasks:tasksReducer});
export default reducer;

