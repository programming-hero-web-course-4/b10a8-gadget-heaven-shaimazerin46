import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Roots from './components/Roots/Roots'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    loader: ()=> fetch('data.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }, 
      {
        path: 'catagory/:catagory',
        element: <Home></Home>
        
      }
      
    ]
  },
  
  
  
]

 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
