import React, { useState } from 'react';

import Button from '../Button/Button';

import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('')
  }

  return ( 
    <div className='add-task-container'>
      <input 
        onChange={handleInputChange} 
        type="text" 
        className='add-task__text-input' 
        value={inputData} 
      />
      <div className="add-task__button">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}
 
export default AddTask;