import './App.css'
import GitHubProfile from './Debug/GitHubProfile'
import ListAnimal from './Deferred/ListAnimal'
import IdForm from './Id/IdForm'
import Boomer from './Insertion/Boomer'
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

   </>
  )
}

export default App
