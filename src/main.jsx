import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import Routes from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={Routes}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
