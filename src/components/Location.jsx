import React from "react"
import "../styles/Location.css"

function Location({ title, cover }) {
  return (
    <div className="location">
      <img src={cover} alt={title} />
      <div>{title}</div>
    </div>
  )
}

export default Location
