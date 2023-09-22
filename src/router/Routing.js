import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from '../pages/Homepage';
import Event from '../pages/Event';
import FAQ from '../pages/FAQ';




const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage /> // ใช้ Component ไม่ใช้ JSX
  },
  {
      path: "/Event",
      element: <Event /> // ใช้ Component ไม่ใช้ JSX
  },
  {
      path: "/FAQ",
      element: <FAQ /> // ใช้ Component ไม่ใช้ JSX
  },


]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routing