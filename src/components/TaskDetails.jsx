import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    return navigate('/');
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button label={'Voltar'} onClick={handleBackClick}></Button>
      </div>
      <div className="task-details-container">
        <p className='title'>{params.taskTitle}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis impedit eveniet illum, minus mollitia!
      </div>
    </>
  );
}
 
export default TaskDetails;