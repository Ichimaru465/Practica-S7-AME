import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.table({
    componente: id,
    fase: phase,
    duracionActual: `${actualDuration.toFixed(2)} ms`,
    duracionBase: `${baseDuration.toFixed(2)} ms`,
    inicio: startTime.toFixed(2),
    commit: commitTime.toFixed(2),
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profiler id="AstralArchiveApp" onRender={onRenderCallback}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Profiler>
  </React.StrictMode>,
)