import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header.jsx'
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

  return (
    <div className='container'> 
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
    </div>
  )
}

export default App