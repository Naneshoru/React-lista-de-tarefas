import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom'

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskRemotion }) => {
  
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title.toLowerCase()}`);
  }

  return (
    <div className={`task-container ${task.completed ? 'task-completed' : ''}`} onClick={() => {handleTaskClick(task.id)}}>
      <div className='task-title'>
      {task.title}
      </div>

      <div className='buttons-container'>
        <button 
          className='remove-task-button' 
          onClick={(event) => {
            handleTaskRemotion(task.id)
            // event.stopPropagation();
          }}
        >
          <CgClose />
        </button>
        <button 
          className='see-task-details-button'
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  )
}
 
export default Task;