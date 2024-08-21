import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import PopUpApp from './PopUp/PopUpApp'
import { URLS } from './PopUp/routes/urls'
import { JSFiles } from './PopUp/routes/js-files' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<PopUpApp />} />
        <Route path="urls" element={<URLS />} />
        <Route path="js-files" element={<JSFiles />} />
      </Routes>
    </Router>
  </StrictMode>
)