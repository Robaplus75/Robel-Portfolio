import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar"
import Content from "./components/Content"
import LoadingBar from "./components/LoadingBar"

const router = createBrowserRouter([
    {
      element: <NavBar />,
      children: [
          {
            path: '/',
            element: <Content />,
          },
        ]
    }
  ])

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
  setIsLoading(false);
  }

  useEffect(()=>{
  window.addEventListener("load",handleLoading);
  return () => window.removeEventListener("load",handleLoading);
  },[])

  return !isLoading ? (
  <RouterProvider router={router} />
  ):(<LoadingBar />)

}


export default Router
