import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Content from "./components/Content"

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


function Router() {

  return (
    <RouterProvider router={router} />
  )
}

export default Router
