import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import "../styles/Locationpage.css"
import "../components/Locationdescription"
import { LocationDescription } from "../components/Locationdescription"
import { LocationCarrousel } from "../components/Locationcarrousel"
import { LocationHeader } from "../components/Locationheader"

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
      <LocationHeader
        title={title}
        host={host}
        rating={rating}
        location={location}
        tags={tags}
      />
      <div className="location-description-area">
        <LocationDescription description={description} />
        <LocationDescription description={description} />
      </div>
    </div>
  )
}

export default Locationpage
