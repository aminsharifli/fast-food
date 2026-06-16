import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import DataContext from './components/Context/DataContext.jsx'
import BasketContext from './components/Context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContext>
      <BasketContext>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </BasketContext>
  </DataContext>
)
