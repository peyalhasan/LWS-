import { useState } from 'react'
import './App.css'
import Welcome from './Components/Welcome'
import Welcome2 from './Components/Welcome2';
import Welcome3 from './Components/Welcome3';

function App() {
  const [show, setShow] = useState(false);

  return (
   <>
   <button onClick={()=>setShow((s) => !s)} >{show?"Remove": "Show"}</button>
   <hr />
   {show && <Welcome />}
   {show && <Welcome2 />}
   {show && <Welcome3 />}
   </>
  )
}

export default App
