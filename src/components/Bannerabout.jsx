import "../styles/Bannerabout.css"
import React from "react"
import bannerabout from "../assets/banner2.jpg"

function BannerAbout() {
  return (
    <div className="banner-about">
      <img src={bannerabout} alt="banniere a propos" />
    </div>
  )
}

export default BannerAbout
