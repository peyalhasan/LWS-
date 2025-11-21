import { useReducer } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './data/task'
import taskReducer from './Reduser/TaskReducer'
import { HandleContext , DispatchContext} from './Context/Contex'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);


  return (
      <HandleContext.Provider value={tasks} >
        <DispatchContext.Provider value={dispatch} >
      <h1>Prague intinerary</h1>
      <AddTask />

      <TaskList />
        </DispatchContext.Provider>
      </HandleContext.Provider>
  )
}

export default App
