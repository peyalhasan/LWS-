
// import { useState } from 'react'
import './App.css'
import ChatRoom from './Components.jsx/ChatRoom'
import Dialodgue from './Components.jsx/Dialoduge'
import Effect from './Components.jsx/Effect'
// import MyComponent from './Components.jsx/MyComponent'

function App() {
  // const [ show, setShow] = useState(true);
  return (
    <>
    {/* <MyComponent /> */}
    {/* <Effect /> */}
    {/* <button onClick={()=>setShow(!show)} >{show? 'hide': 'show'}</button>
   {show && <ChatRoom /> } */}
   <Dialodgue />
    </>
  )
}

export default App
