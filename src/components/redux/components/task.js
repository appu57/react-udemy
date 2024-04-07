import React from 'react';
import "./task.css";
import Collapsible from "./collapsible";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
 import {createTask,deleteTask} from '../actions/tasks';

//either import store directly (but will not re-render on every change) hence use useSelector

function Tasks() {
  let tasks = useSelector(state=>state.tasks);
  let [ isNewTaskOpen, setIsNewTaskOpen ] = useState(false);
  let [tasksTitle , setTaskTitle]= useState("");
  let [tasksTitleTime , settasksTitleTime]= useState("");
  let [ search, setSearch ] = useState("");


  let dispatch = useDispatch();
  console.log(tasks);
  let filtered = tasks.filter(task=>task.titleName.toLowerCase().indexOf(search.toLowerCase())>=0);

  let onSaveClick = () => {
    dispatch(createTask({
      id:Math.floor(Math.random()*100000),
      titleName:tasksTitle,
      taskDateTime:tasksTitleTime
    }
     
    ))
    settasksTitleTime("");
    setTaskTitle("");
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  let onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
    
  };

  let deleteTask =(task)=>{
      dispatch(deleteTask(task));
  }



  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container">
            {!isNewTaskOpen? <button className="button create-button" onClick={() => { setIsNewTaskOpen(!isNewTaskOpen); }}>
              <i className="fa fa-calendar-plus"></i>
              &nbsp;&nbsp;
              Create
            </button>: null}
          </div>
        </div>

        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">Task Title:</label>
              <div className="form-input">
                <input type="text" placeholder="Task Title" className="text-box" id="task-title" value={tasksTitle}  onChange={(e)=>{setTaskTitle(e.target.value)}}/>
              </div>
              
            </div>
            {/* form group ends */}

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-date-time">Task Date and Time:</label>
              <div className="form-input">
                <input type="datetime-local" placeholder="Task Date and Time" className="text-box" id="task-date-time" value={tasksTitleTime}  onChange={(e)=>{settasksTitleTime(e.target.value)}} />
              </div>
            </div>
            {/* form group ends */}

            <div className="button-group">
              <button className="button save-button" onClick={() => { onSaveClick(); }}>
                <i className="fa fa-save"></i>&nbsp;&nbsp;
                Save Task
              </button>

              <button className="button cancel-button" onClick={() => { onCancelClick(); }}>
                <i className="fa fa-window-close"></i>&nbsp;&nbsp;
                Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="search-box">
          <input type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {filtered.map(task=>
          <div className="task" key={task.id}>
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">{task.titleName}</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i> <span className="task-subtitle-text">{task.taskDateTime}</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">&times;</button>
            </div>
          </div>
      )}

        </div>
      </div>
    </div>
  )
}

export default Tasks;
