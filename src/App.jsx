import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from "./components/pages/Home.jsx";
import Header from './components/Header.jsx'
import TaskDetails from "./components/pages/TaskDetails.jsx";
import NotFound from "./components/pages/NotFound.jsx";

import './App.css';

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    }

    fetchTasks();
  }, []) // lista de dependências, executa código quando as variáveis dentro do array mudarem
  // Neste caso, vai ser executado ao iniciar a página

  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home tasks={tasks} setTasks={setTasks} />} /> 
        <Route path='tasks'>
          <Route path=':taskTitle' element={<TaskDetails handleBackClick={handleBackClick} />} />
        </Route>
        <Route path='*' element={<NotFound handleBackClick={handleBackClick} />} />            
      </Routes>
    </div>
  )
}

export default App
