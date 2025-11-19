import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Presarve from './Presarve.jsx'
import Different from './DifferentComponent.jsx'
import FancyReset from './FancyReset.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Presarve />
    <Different></Different>
    <FancyReset></FancyReset>
  </StrictMode>,
)
