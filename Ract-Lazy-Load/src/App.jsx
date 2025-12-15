import { useState } from 'react'

import './App.css'
import demos from './data/demo';
import importDemo from './utils/importDemo';
import { Suspense } from 'react';

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);



  const selectDemo = async (file) => {

    const Demo = await importDemo(file)

    const DemoComponent = <Demo />


    setSelectedDemo(DemoComponent)
  }

  return (
    <>
      <div>
        <h1>React Lazy load explained</h1>
        <div>
          {
            demos.map(demo => <button key={demo.name} onClick={() => selectDemo(demo.file)} > {demo.file} </button>)
          }

        </div>
      </div>

      <div>
        <Suspense fallback={<h1>Loading Component....</h1>}>
          {selectedDemo}
        </Suspense>

      </div>
    </>
  )
}

export default App
