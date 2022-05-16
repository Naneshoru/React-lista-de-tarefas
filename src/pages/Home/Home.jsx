

import Tasks from "../../components/Tasks/Tasks.jsx";
import AddTask from "../../components/AddTask/AddTask.jsx";
import {v4 as uuidv4} from 'uuid';
import { Fragment } from "react/cjs/react.production.min";

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
    <Fragment>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks 
        tasks={tasks} 
        handleTaskClick={handleTaskClick} 
        handleTaskRemotion={handleTaskRemotion}
        navigate={navigate}
      />
    </Fragment>
  );
}
 
export default Home;