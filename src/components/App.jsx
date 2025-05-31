import "../styles/App.css"
import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import AllLocations from "./AllLocations"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllLocations />
      <Footer />
    </div>
  )
}

export default App
