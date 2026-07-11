import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const LocationPage = lazy(() => import('./components/sections/LocationPage.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/location/:slug" element={
          <Suspense fallback={<div className="min-h-screen bg-beton-50" />}>
            <LocationPage />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
