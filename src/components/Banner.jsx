import "../styles/Banner.css"
import React from "react"
import banner from "../assets/banner1.jpg"

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
