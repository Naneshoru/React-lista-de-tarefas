import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header.jsx'
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask";

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false
    },
    {
      id: '2',
      title: 'Estudar USP',
      completed: false
    },
    {
      id: '3',
      title: 'Espairecer',
      completed: true
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      { 
        id: uuidv4(), 
        title: taskTitle, 
        completed: false 
      }
    ]

    setTasks(newTasks);
  }

  const handleTaskRemotion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    console.log(taskId)
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed}
      } 
      return task
    })

    setTasks(newTasks);
  }

  return (

      <div className='container'> 
        <Header />
   
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTaskRemotion={handleTaskRemotion}
        />
      </div>
  )
}

export default App