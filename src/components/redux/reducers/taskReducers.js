import React from 'react';
import {initialTasks} from '../data/tasks';
import * as actionTypes from '../actions/tasks';

let initialState = {data:[], loading:false,error:""};  //initialTasks
export const tasksReducer =(state=initialTasks,action)=>{
   switch (action.type) {
       case actionTypes.FETCH_TASK: //(success) while handling request,success , failure in axios request create three diff action and write reducers based on actio
           return action.payload; //state being updated when api is called and similarly in component state also the state is updates using useSelector . Reducers don't allow asynchronous operation hence we use redux-thunk and then promise
       case actionTypes.CREATE_TASK:
           return [...state,action.payload] ; //destructuring the initial tasks of 2 array and also adds new tasks that has payload task
       case actionTypes.DELETE_TASK:
           return state.filter(task=>task.id != action.payload);
       case "FETCH_REQUEST":
           return {data:[],loading:true,error:""}

       default:
           return state;
   }
}