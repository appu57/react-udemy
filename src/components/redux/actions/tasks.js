import React from 'react';
export const CREATE_TASK ="create_task";
export const DELETE_TASK = "delete_task";

export const createTask=(newTask)=>{ //dispatch function
    return {
        type:CREATE_TASK,
        payload:newTask
    }
};

export const deleteTask=(taskId)=>{
    return {
        type:DELETE_TASK,
        payload:taskId
    }
};