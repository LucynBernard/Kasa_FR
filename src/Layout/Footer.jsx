import React from "react"
import Logo from "../assets/LOGO(1).svg"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
