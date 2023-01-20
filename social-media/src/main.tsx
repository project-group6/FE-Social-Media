import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home'
import Register from './pages/Auth/Register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
