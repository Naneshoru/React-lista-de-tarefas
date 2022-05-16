import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom'

import './Task.css'

const Task = ({task, index, handleTaskClick, handleTaskRemotion }) => {
  
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`tasks/${task.title.toLowerCase()}`);
  }

  return (
    <div className={`task-container ${task.completed ? 'task-completed' : ''}`} onClick={() => {handleTaskClick(index)}}>
      <div className='task__title'>
        {task.title}
      </div>
      <div className='task__buttons' onClick={(e) => {e.stopPropagation()}}>
        <button className='task__buttons--details' onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button className='task__buttons--remove' onClick={() => {handleTaskRemotion(task.id)}}>
          <CgClose />
        </button>
      </div>
    </div>
  )
}
 
export default Task;