import React, { useState } from "react";

import Header from './components/Header.jsx'

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
      title: 'Estudar para USP',
      completed: false
    },
    {
      id: '3',
      title: 'Espairecer',
      completed: true
    }
  ]);

  return (
    <div className='container'> 
      <Header />
    </div>
  )
}

export default App