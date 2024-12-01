import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Layout/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ExploreProductItem from './components/ExploreProductItem/ExploreProductItem'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Context, { GadgetContext } from './Context/Context'
import Cart from './components/Cart/Cart'
import Dashboard from './Layout/Dashboard/Dashboard'
import Wishlist from './components/Wishlist/Wishlist'






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
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/wishlist',
        element: <Wishlist></Wishlist>
      }
    ]
  }
  
  
  
]

 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>
     <HelmetProvider >
         <RouterProvider router={router} />
      </HelmetProvider>
     </Context>
  </StrictMode>,
)
