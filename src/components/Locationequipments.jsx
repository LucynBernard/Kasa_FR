import React, { useState } from "react"
import "../styles/Locationequipments.css"
import arrowDown from "../assets/arrow_down.png"

export function LocationEquipments({ equipments }) {
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false)

  return (
    <div className="location-equipments">
      <div
        className="equipments-title"
        onClick={() => setIsEquipmentsOpen((prev) => !prev)}
      >
        <span>Équipements</span>
        <img
          src={arrowDown}
          alt="afficher les équipements"
          className={`chevron-icon ${isEquipmentsOpen ? "rotated" : ""}`}
        />
      </div>
      {isEquipmentsOpen && (
        <ul className="equipments-content">
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
