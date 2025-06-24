import React from "react"
import { Navigate, useParams } from "react-router-dom"
import data from "../data/logements.json"
import "../styles/Locationpage.css"
import { Collapse } from "../components/Collapse"
import { LocationCarrousel } from "../components/Locationcarrousel"
import { LocationHeader } from "../components/Locationheader"

function Locationpage() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to={"/404"} />
  }

  const {
    title,
    host,
    rating,
    location,
    description,
    tags,
    pictures,
    equipments,
  } = logement
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
        <Collapse title={"Description"} description={description} />
        <Collapse
          title={"Équipements"}
          description={
            <ul className="equipments-content">
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}

export default Locationpage
