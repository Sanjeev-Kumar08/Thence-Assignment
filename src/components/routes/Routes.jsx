import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "../app/LandingPage"
import Signup from "../auth/register/Signup"
import SuccesfulRegisteration from "../auth/register/SuccesfulRegisteration"

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage/>
    },
   {
    path:'/signup',
    element:<Signup/>
   },
   {
    path:'/success',
    element:<SuccesfulRegisteration/>
   }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes
