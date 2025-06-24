import React, { useState } from "react"
import arrowDown from "../assets/arrow_down.png"
import "../styles/Collapse.css"

export function Collapse({ description, title }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  return (
    <div className="location-description">
      <p
        className="description-title"
        onClick={() => setIsDescriptionOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <img
          src={arrowDown}
          alt="afficher description"
          className={`chevron-icon ${isDescriptionOpen ? "rotated" : ""}`}
        />
      </p>
      {isDescriptionOpen && (
        <div className="description-content">{description}</div>
      )}
    </div>
  )
}
