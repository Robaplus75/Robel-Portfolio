import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from "./components/NavBar"

const router = createBrowserRouter([
    {
      element: <NavBar />,
      children: [
          {
            path: '/',
            element: <h1>Hellow</h1>,
          },
        ]
    }
  ])


function Router() {

  return (
    <RouterProvider router={router} />
  )
}

export default Router
