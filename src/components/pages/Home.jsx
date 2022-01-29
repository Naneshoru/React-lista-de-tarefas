

import Tasks from "../Tasks.jsx";
import AddTask from "../AddTask";
import {v4 as uuidv4} from 'uuid';

const Home = ({ tasks, setTasks, navigate }) => {

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

  const handleTaskClick = (index) => {
    tasks[index].completed = !tasks[index].completed;

    setTasks([...tasks]);
  }
  
  return ( 
    <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks 
        tasks={tasks} 
        handleTaskClick={handleTaskClick} 
        handleTaskRemotion={handleTaskRemotion}
        navigate={navigate}
      />
    </>
  );
}
 
export default Home;