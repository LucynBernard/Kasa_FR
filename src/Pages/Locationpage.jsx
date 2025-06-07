import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import "../styles/Locationpage.css"
import "../components/Locationdescription"
import { LocationDescription } from "../components/Locationdescription"
import { LocationCarrousel } from "../components/Locationcarrousel"

function Locationpage() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  if (!logement) {
    return <h2>Location non trouvée</h2>
  }

  const { title, host, rating, location, description, tags, pictures } =
    logement
  return (
    <div className="location-page">
      <LocationCarrousel pictures={pictures} title={title} />
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
      <div className="location-description-area">
        <LocationDescription description={description} />
        <LocationDescription description={description} />
      </div>
    </div>
  )
}

export default Locationpage
