import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Router.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
