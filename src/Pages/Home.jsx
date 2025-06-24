import "../styles/Home.css"
import React from "react"
import Banner from "../components/Banner"
import Location from "../components/Location"
import data from "./../data/logements.json"
import bannerHome from "../assets/banner1.jpg"

function Home() {
  return (
    <div>
      <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
      <div className="galerie">
        {data.map((logement) => {
          return (
            <Location
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
