import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className='fas fa-star filled'></i>);
    } else {
      stars.push(<i key={i} className='far fa-star'></i>);
    }
  }

  return <div className='star-rating'>{stars}</div>;
};

export default StarRating;
