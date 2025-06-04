import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../assets/LOGO.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <NavLink to="/">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/apropos">
          <p>À propos</p>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
