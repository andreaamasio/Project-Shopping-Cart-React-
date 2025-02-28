import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//import './index.css'
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import { NavLink } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage"
import NavBar from "./components/NavBar"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
