import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Task from '../Task/Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskRemotion }) => {
  return (
    <Fragment>
      {tasks.map((task, index) => (
        <Task 
          key={task.id}
          task={task} 
          index={index}
          handleTaskClick={handleTaskClick} 
          handleTaskRemotion={handleTaskRemotion}
        />
      ))}
    </Fragment>
  );
};

export default Tasks;