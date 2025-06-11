import React from "react"
import "../styles/Location.css"
import { NavLink } from "react-router-dom"

function Location({ title, cover, id }) {
  return (
    <NavLink key={id} to={`/location/${id}`} className="location-link">
      <div className="location">
        <img src={cover} alt={title} />
        <div>{title}</div>
      </div>
    </NavLink>
  )
}

export default Location
