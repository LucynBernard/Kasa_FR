import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import Home from "./Pages/Home.jsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Router.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
