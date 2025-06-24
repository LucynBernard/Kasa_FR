import "../styles/Banner.css"
import React from "react"

function Banner({ image, text, className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="bannière" />
      {text && <h1>{text}</h1>}
    </div>
  )
}

export default Banner
