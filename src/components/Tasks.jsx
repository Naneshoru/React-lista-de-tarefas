import React from 'react';
import Task from './Task';

const Tasks = ( {tasks, handleTaskClick, handleTaskRemotion} ) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
          key={task.id}
          task={task} 
          index={index}
          handleTaskClick={handleTaskClick} 
          handleTaskRemotion={handleTaskRemotion}
        />
      ))}
    </>
  );
};

export default Tasks;