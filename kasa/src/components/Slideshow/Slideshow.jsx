// src/components/Slideshow/Slideshow.jsx

import React, { useState } from 'react';
import './Slideshow.scss';

// Fonction principale du composant Slideshow
function Slideshow({ images }) {
  // État pour suivre l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index courant est le dernier, revenir au premier, sinon aller à l'image suivante
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index courant est le premier, aller à la dernière image, sinon aller à l'image précédente
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Si une seule image, ne pas afficher les flèches et la numérotation
  if (images.length === 1) {
    return (
      <div className="slideshow">
        {/* Affichage de l'unique image */}
        <img src={images[0]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    );
  }

  // Rendu du composant Slideshow
  return (
    <div className="slideshow">
      {/* Bouton pour l'image précédente */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      {/* Affichage de l'image courante */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {/* Bouton pour l'image suivante */}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      {/* Indicateur de position de l'image courante par rapport au total */}
      <div className="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// Exportation du composant pour l'utiliser dans d'autres parties de l'application
export default Slideshow;
