import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

const App = () => {

const LayOut = () => {
  return(
  <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </>
)}

  
    const router = createBrowserRouter([
      {
        path: "/",
        element: 
         <LayOut />,
         children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"register",
            element:<Register/>
          },
          {
            path:"signup",
            element:<SignUp/>
          },
         
         ]
      },
     
    ]);
  
    return (
      <RouterProvider router={router} />
    )
  
}

export default App