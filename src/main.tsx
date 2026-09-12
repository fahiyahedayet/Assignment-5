import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx' // Default import
import Banner from './components/Banner.tsx' // Default import

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <App />
  </StrictMode>,
)