import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../Button';

import './TaskDetails.css'

const TaskDetails = ({ handleBackClick }) => {
  const params = useParams();

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p className='title'>{params.taskTitle}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis impedit eveniet illum, minus mollitia!
      </div>
    </>
  );
}
 
export default TaskDetails;