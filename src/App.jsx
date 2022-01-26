import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header.jsx'
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails.jsx";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    }

    fetchTasks();
  }, []) // lista de dependências, executa código quando as variáveis dentro do array mudarem
  // Neste caso, vai ser executado ao iniciar a página

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
    <Router> 
      <div className='container'> 
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick} 
                  handleTaskRemotion={handleTaskRemotion}
                />
              </>
            }
          /> 
          <Route
            path='/:taskTitle'
            exact
            element={<TaskDetails />}
          >
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
