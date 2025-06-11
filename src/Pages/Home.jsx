import "../styles/Home.css"
import React from "react"
import Banner from "../components/Banner"
import Location from "../components/Location"
import data from "./../data/logements.json"

function Home() {
  return (
    <div>
      <Banner />
      <div className="galerie">
        {data.map((logement) => {
          return (
            <Location
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
