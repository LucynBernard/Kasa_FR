import React from "react"
import { createBrowserRouter, Outlet } from "react-router-dom"
import App from "../components/App"
import Main from "../components/main"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/location",
        element: <h1>Nos appartements</h1>,
      },
      {
        path: "/apropos",
        element: <h1>À propos</h1>,
      },
    ],
  },
])

export default Layout
