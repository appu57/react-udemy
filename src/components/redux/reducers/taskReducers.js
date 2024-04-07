import React from 'react';
import {initialTasks} from '../data/tasks';
import * as actionTypes from '../actions/tasks';

export const tasksReducer =(state=initialTasks,action)=>{
   switch (action.type) {
       case actionTypes.CREATE_TASK:
           return [...state,action.payload] ; //destructuring the initial tasks of 2 array and also adds new tasks that has payload task
       case actionTypes.DELETE_TASK:
           return state.filter(task=>task.id != action.payload);
       default:
           return state;
   }
}