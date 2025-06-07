import React, { useState } from "react"
import "../styles/Locationcarrousel.css"
import ChevronLeft from "../assets/ChevronLeft.png"
import ChevronRight from "../assets/ChevronRight.png"

export function LocationCarrousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  const handleRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className="location-carrousel">
      <img
        className="carrousel-pic"
        src={pictures[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <div>
          <img
            className="carrousel-button left"
            src={ChevronLeft}
            alt="previous image"
            onClick={handleLeft}
          />
          <img
            className="carrousel-button right"
            src={ChevronRight}
            alt="next image"
            onClick={handleRight}
          />
          <div className="carrousel-counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        </div>
      )}
    </div>
  )
}
