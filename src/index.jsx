import React from 'react'
import ReactDOM from 'react-dom/client'

// J'importe ma page App
import App from './router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
