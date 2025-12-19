import './App.css'
import GitHubProfile from './Debug/GitHubProfile'
import ListAnimal from './Deferred/ListAnimal'
import IdForm from './Id/IdForm'
import ParentChild from './Imperative/ParentChild'
import Boomer from './Insertion/Boomer'
import LayoutTest from './Layout/LayoutTest'
// import FindUser from './Transition/FindUser'
// import { users } from './Transition/fakeuser'

function App() {

  return (
   <>
   <GitHubProfile />
   <IdForm />
   {/* <FindUser users={users} /> */}
   {/* <ListAnimal /> */}
   <Boomer />
   <ParentChild />
   <LayoutTest />

   </>
  )
}

export default App
