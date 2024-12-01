import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Layout/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ExploreProductItem from './components/ExploreProductItem/ExploreProductItem'
import ProductDetails from './components/ProductDetails/ProductDetails'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <ExploreProductItem></ExploreProductItem>
      },
      {
        path: '/catagory/:catagory',
        element: <ExploreProductItem></ExploreProductItem>
      }
    ]
  },
  {
    path: '/details/:itemId',
    element: <ProductDetails></ProductDetails>
  }
  
  
  
]

 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider >
         <RouterProvider router={router} />
      </HelmetProvider>
  </StrictMode>,
)
