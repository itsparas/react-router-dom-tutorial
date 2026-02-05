import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'

/**
 * Application Entry Point
 * 
 * BrowserRouter - Enables client-side routing using the History API
 * AuthProvider - Provides authentication context to the entire app
 * 
 * The BrowserRouter must wrap all components that use React Router hooks
 * and components (Link, NavLink, Routes, Route, useNavigate, etc.)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
