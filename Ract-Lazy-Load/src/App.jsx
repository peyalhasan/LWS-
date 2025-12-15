import { useState } from 'react'

import './App.css'
import ColorDemo from './Components/ColorDemo'
import ShapeDemo from './Components/ShapeDemo';
import SizeDemo from './Components/SizeDemo';

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemo = (type) => {
    setSelectedDemo(type)
  }

  return (
    <>
      <div>
        <h1>React Lazy load explained</h1>
        <div>
          <button onClick={() => selectDemo('shape')} > Shape Demo </button>
          <button onClick={() => selectDemo('size')} > Size Demo </button>
          <button onClick={() => selectDemo('color')} > Color Demo </button>
        </div>
      </div>

      <div>
        {selectedDemo === 'shape' && <ShapeDemo />}
        {selectedDemo === 'size' && <SizeDemo />}
        {selectedDemo === 'color' && <ColorDemo />}

      </div>
    </>
  )
}

export default App
