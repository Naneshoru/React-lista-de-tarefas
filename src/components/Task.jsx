import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom'

import './Task.css'

const Task = ({task, index, handleTaskClick, handleTaskRemotion }) => {
  
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title.toLowerCase()}`);
  }

  return (
    <div className={`task-container ${task.completed ? 'task-completed' : ''}`} onClick={() => {handleTaskClick(index)}}>
      <div className='task-title'>
        {task.title}
      </div>
      <div className='buttons-container' onClick={(e) => {e.stopPropagation()}}>
        <button className='see-task-details-button' onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button className='remove-task-button' onClick={() => {handleTaskRemotion(task.id)}}>
          <CgClose />
        </button>
      </div>
    </div>
  )
}
 
export default Task;