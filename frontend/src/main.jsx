import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/AuthProvider';
import App from './App.jsx'
import './index.css'
import { BrowserRouter , Routes , Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
