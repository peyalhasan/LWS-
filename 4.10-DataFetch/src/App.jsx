
import { useState } from 'react'
import './App.css'
import Comments from './Components/Comments'
import Example3 from './Components/Example-3-12'
// import Mount from './Components/Mounnt'
import { items1, items2 } from './Utils/data'
import Parent from './Components/Parent'
function App() {
  const [items, setItems] = useState(items1)
  return (
    <>
      {/* <Comments postId='1' /> */}
      {/* <Mount /> */}
      <button onClick={() => setItems(items2)}>
        Switch to Items2
      </button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      {/* <Example3 items={items} /> */}
      <Parent />
    </>
  )
}

export default App
