import React from "react"
import "../styles/Locationheader.css"

export function LocationHeader({ host, title, tags, rating, location }) {
  return (
    <div className="location-header">
      <div className="location-title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="location-tags">
          {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
      </div>
      <div className="location-host">
        <div className="location-host-details">
          <h3>{host.name}</h3>
          <div className="location-host-pic">
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
        <div className="location-rating">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num}>
              <i
                className={
                  num <= parseInt(rating)
                    ? "fa-solid fa-star"
                    : "fa-regular fa-star"
                }
              ></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
