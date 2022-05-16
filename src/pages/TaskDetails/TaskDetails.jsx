import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';

import './TaskDetails.css'

const TaskDetails = ({ handleBackClick }) => {
  const params = useParams();

  return ( 
    <div className="task-details-container">
      <div className="task-details__back-button">
        <Button onClick={ handleBackClick }>Voltar</Button>
      </div>
      <div className="task-details">
        <p className='task-details__title'>{ params.taskTitle }</p>
        <span className='task-details__description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nihil facilis impedit eveniet illum, minus mollitia!
        </span>
      </div>
    </div>
  );
}
 
export default TaskDetails;