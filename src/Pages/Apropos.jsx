import React, { useState } from "react"
import BannerAbout from "../components/Bannerabout"
import arrowDown from "../assets/arrow_down.png"
import "../styles/Apropos.css"

function Apropos() {
  const [OpenSection, setOpenSection] = useState(null)
  const aproposDatas = [
    {
      id: "1",
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: "2",
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "3",
      title: "Service",
      content:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      id: "4",
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id))
  }
  return (
    <>
      <BannerAbout />
      <div className="apropos">
        {aproposDatas.map((data) => (
          <div key={data.id} className="apropos-item">
            <div
              className="apropos-title"
              onClick={() => toggleSection(data.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "") toggleSection(data.id)
              }}
            >
              <span>{data.title}</span>
              <img
                src={arrowDown}
                alt="afficher le contenu"
                className={`chevron-icon ${
                  OpenSection === data.id ? "rotated" : ""
                }`}
              />
            </div>
            {OpenSection === data.id && (
              <p className="apropos-content">{data.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Apropos
