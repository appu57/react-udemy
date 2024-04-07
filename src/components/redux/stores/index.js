import {createStore } from 'redux';
import Reducers from '../reducers';//if we use index.js as name of file becomes default


var store = createStore(Reducers);
export default store;