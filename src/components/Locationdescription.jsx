import React from "react"
import "../styles/Locationpage.css"
import arrowDown from "../assets/arrow_down.png"

export function LocationDescription({ description }) {
  console.log("Description reçue :", description)
  return (
    <div className="location-description">
      <p className="description-title">
        <span>Description</span>
        <img
          src={arrowDown}
          alt="afficher description"
          className="arrow-down"
        />
      </p>
      <p className="description-content">{description}</p>
    </div>
  )
}
