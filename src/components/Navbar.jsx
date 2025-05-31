import React from "react"
import "../styles/Navbar.css"
import logo from "../assets/LOGO.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <p>Accueil</p>
        <p>À propos</p>
      </div>
    </nav>
  )
}

export default Navbar
