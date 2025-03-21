import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Analytics} from "@vercel/analytics/react";
import './index.css'
import './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Analytics />
  </StrictMode>,
)
