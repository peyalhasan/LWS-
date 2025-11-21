import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import ContextProvider from './Context/Contex'

function App() {
  return (
    <ContextProvider>
      <h1>Prague intinerary</h1>
      <AddTask />

      <TaskList />
    </ContextProvider>

  )
}

export default App
