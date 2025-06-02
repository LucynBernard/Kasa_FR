import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "../styles/index.css"
import App from "../components/App.jsx"
import { RouterProvider } from "react-router-dom"
import { router } from "../Layout/Layout.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

const Main = ({ children }) => {
  return <main>{children}</main>
}

export default Main
