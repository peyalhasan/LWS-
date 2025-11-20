import { useReducer } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './data/task'
import taskReducer from './Reduser/TaskReducer'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextid = (data) => {
    const maxId = data.reduce((prev,current)=> prev && prev.id > current.id ? prev.id : current.id );
    return maxId + 1;
  }

  // Handlers 

  // Add Task
  const handleAddTask = text=> {
    dispatch({
      type: "added",
      text,
      id: getNextid(tasks)
    })
  }

  // Change Task
  const handleChangeTask = task =>{
    dispatch({
      type: 'changed',
      task
    })
  }

  // Delete Task

  const handleDeleteTask = (taskId) =>{
    dispatch({
      type: "deleted",
      id: taskId,
    })
  }

  return (
    <>
      <h1>Prague intinerary</h1>
      <AddTask onAdd={handleAddTask} />

      <TaskList  tasks={tasks}  onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />

    </>
  )
}

export default App
