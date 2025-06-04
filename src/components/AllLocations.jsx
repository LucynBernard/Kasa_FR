import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/AllLocations.css"
import Location from "./Location.jsx"
import data from "./../data/logements.json"

function AllLocations() {
  return (
    <div className="galerie">
      {data.map((logement) => {
        return (
          <NavLink
            key={logement.id}
            to={`/location/${logement.id}`}
            className="location-link"
          >
            <Location title={logement.title} cover={logement.cover} />
          </NavLink>
        )
      })}
    </div>
  )
}

export default AllLocations
