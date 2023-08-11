//Import tools
import React from 'react'
import { useState } from 'react'

//Import images
import Arrow from '../../assets/forward_arrow.svg'

// Composant > Carrousel
function Carousel({ slides, slideTitles }) {
  const pics = slides
  const length = slides.length

  // Hook useState -> variable d'état currentSlide (valeur initiale 0 = première image) + setCurrentSlide pour mettre à jour cette valeur
  const [currentSlide, setCurrentSlide] = useState(0)

  // Image précédante du slide.
  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1
    setCurrentSlide(index)
  }
  // Prochaine image du slide.
  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div className="carousel">
      {/* Modifier mon style (var) ############# */}
      <div className="carousel__slider" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {pics.map((slide, index) => (
          <img className="carousel__slider__pictures" key={index} src={slide} alt={slideTitles}></img>
        ))}
      </div>
      {length > 1 && (
        <div className="carousel__commands">
          <button className="carousel__commands__buttons" onClick={previousSlide}>
            <img className="arrow arrow--backward" src={Arrow} alt="Précédent"></img>
          </button>
          <p className="carousel__commands__photocount">{currentSlide + 1}/{pics.length}</p>
          <button className="carousel__commands__buttons" onClick={nextSlide}>
            <img className="arrow" src={Arrow} alt="Suivant"></img>
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel
