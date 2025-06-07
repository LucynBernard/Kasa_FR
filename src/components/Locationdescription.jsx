import React, { useState } from "react"
import "../styles/Locationdescription.css"
import arrowDown from "../assets/arrow_down.png"

export function LocationDescription({ description }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  return (
    <div className="location-description">
      <p
        className="description-title"
        onClick={() => setIsDescriptionOpen((prev) => !prev)}
      >
        <span>Description</span>
        <img
          src={arrowDown}
          alt="afficher description"
          className={`chevron-icon ${isDescriptionOpen ? "rotated" : ""}`}
        />
      </p>
      {isDescriptionOpen && (
        <p className="description-content">{description}</p>
      )}
    </div>
  )
}
