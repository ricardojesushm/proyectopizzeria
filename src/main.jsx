import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/Estilos.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)