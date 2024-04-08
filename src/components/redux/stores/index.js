import {applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers';//if we use index.js as name of file becomes default


import {reduxThunk} from 'redux-thunk'; //use to make api calls in reducers method
// var store = createStore(Reducers,composeWithDevTools(applyMiddleware(reduxThunk)));
var store = createStore(Reducers);
export default store;