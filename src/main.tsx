import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Test } from './pages/test/test.tsx'
import { Ref } from './pages/ref/ref.tsx'
import { RefComponent } from './pages/refComponent/refComponent.tsx'
import { RefComponentToggle } from './pages/refComponentToggle/refComponentToggle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/ref-component" element={<RefComponent />} />
        <Route path="/ref-component-toggle" element={<RefComponentToggle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
