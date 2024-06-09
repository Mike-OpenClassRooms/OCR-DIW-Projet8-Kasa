// src/components/Slideshow/Slideshow.jsx

import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ images }) {
  // État pour suivre l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Si une seule image, ne pas afficher les flèches et la numérotation
  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Slideshow;
