import React from 'react';
export const CREATE_TASK ="create_task";
export const DELETE_TASK = "delete_task";export const FETCH_TASK = "fetch_task";

export const fetchTasksAsync= () =>{
    return (dispatch,getState)=>{
    var promise = fetch("http://localhost:3000/tasks",{method:"GET"}); //return list of tasks added before 
     promise.then((response)=>{
        console.log(response);
        var promise2 = response.json();
        promise2.then((res)=>{
            dispatch({
                type:actionTypes.FETCH_TASK,
                payload:res
            })
        })
     })
    }

    // var response = await fetch("http://localhost:3000/tasks",{method:"GET"}); //return list of tasks added before 
    // var promise2 = await response.json();
 
    //AXIOS

    // var response = await axios.get("http://localhost:3000/tasks"); //return response directly
    // var promise2 = response.data; payload:response.data  


}

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