import React from "react"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../Pages/Home"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import Locationpage from "../Pages/Locationpage"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
        element: <Home />,
      },
      {
        path: "/location/:id",
        element: <Locationpage />,
      },
      {
        path: "/apropos",
        element: <h1>À propos</h1>,
      },
    ],
  },
])

export default Layout
