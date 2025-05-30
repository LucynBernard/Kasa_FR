import React from "react"
import "../styles/Navbar.css"
import logo from "../assets/LOGO.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div>Accueil</div>
      <div>À propos</div>
    </nav>
  )
}

export default Navbar
