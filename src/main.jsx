import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import Routes from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </React.StrictMode>,
)
