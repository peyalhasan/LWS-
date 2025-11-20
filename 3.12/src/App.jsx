import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './data/task'

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextid = (data) => {
    const maxId = data.reduce((prev,current)=> prev && prev.id > current.id ? prev.id : current.id );
    return maxId + 1;
  }

  // Handlers 

  // Add Task
  const handleAddTask = task => {
    setTasks([
      ...tasks,
      {
        id: getNextid(tasks),
        text: task,
        done: false,
      }
    ])
  }

  // Change Task
  const handleChangeTask = task =>{
    const nextTask = tasks.map(t => {
      if(t.id === task.id){
        return task;
      }
      else{
        return t
      }
    } )
    setTasks(nextTask)
  }

  // Delete Task

  const handleDeleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id !== taskId ))
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
