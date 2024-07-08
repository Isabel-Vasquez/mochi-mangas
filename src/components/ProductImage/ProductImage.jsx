import React from 'react';
import './ProductImage.css';

const ProductImage = ({ imageUrl, isFavorite, toggleFavorite }) => (
  <div className='col-md-6 position-relative'>
    <img src={imageUrl} alt='Product' className='product-detail__image' />
    <div className='product-detail__favorite-icon' onClick={toggleFavorite}>
      <i
        className={`fa${isFavorite ? 's' : 'r'} fa-heart text-danger`}
        style={{ cursor: 'pointer', fontSize: '24px' }}
      ></i>
    </div>
  </div>
);

export default ProductImage;
