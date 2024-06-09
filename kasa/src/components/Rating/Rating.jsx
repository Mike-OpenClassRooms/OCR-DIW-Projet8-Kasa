// src/components/Rating/Rating.jsx

import React from 'react';
import './Rating.scss';

const Rating = ({ rating }) => {
  const maxRating = 5;
  const fullStar = <i className="fa-solid fa-star full-star"></i>;
  const emptyStar = <i className="fa-solid fa-star empty-star"></i>;

  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>{index < rating ? fullStar : emptyStar}</span>
      ))}
    </div>
  );
};

export default Rating;
