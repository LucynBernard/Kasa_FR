import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/logements.json"

function Locationpage() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  if (!logement) {
    return <h2>Location non trouvée</h2>
  }

  const { title, cover, description, host, rating } = logement
  return (
    <div className="location-page">
      <div>
        <img src={cover} alt={title} />
      </div>
      <div className="location-title">
        <h1>{title}</h1>
      </div>
      <div className="location-host">
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
      <div className="location-description">{description}</div>
    </div>
  )
}

export default Locationpage
