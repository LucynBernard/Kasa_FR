import React from "react"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../Pages/Home"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import Locationpage from "../Pages/Locationpage"
import Apropos from "../Pages/Apropos"
import { ErrorPage } from "../Pages/Errorpage"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
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
        element: <Apropos />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])

export default Layout
