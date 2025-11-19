import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Presarve from './Presarve.jsx'
import Different from './DifferentComponent.jsx'
import FancyReset from './FancyReset.jsx'
import Preserves from './ResetSamePosition/Preserves.jsx'
import Reset from './ResetSamePosition/Reset.jsx'
import Root from './Contacts/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Different Position */}
    {/* <div>
      <App />
      <Presarve />
      <Different></Different>
      <FancyReset></FancyReset>
    </div> */}
    {/* Same Position */}
    {/* <div style={{display: 'flex', }} >
      <div>
      <Preserves />
      <Reset />
      </div>
      
    </div> */}

    {/* Chatbox */}
    <div>
      <Root></Root>
    </div>
  </StrictMode>,
)
