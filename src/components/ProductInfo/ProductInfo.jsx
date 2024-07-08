import React from 'react';
import StarRating from '../StarRating/StarRating';
import './ProductInfo.css';

const ProductInfo = ({ product, vendor, addToCart }) => (
  <div className='col-md-6 product-detail__inner'>
    <h2 className='product-detail__title'>{product.titulo}</h2>
    <p className='product-detail__description'>{product.descripcion}</p>
    <p className='product-detail__price'>
      <strong>Precio:</strong> ${product.precio}
    </p>
    <p className='product-detail__vendor'>
      <strong>Vendedor:</strong> {vendor.nombre}
    </p>
    <div className='product-detail__rating'>
      <StarRating rating={product.calificacion} />
    </div>
    <button className='product-detail__button mt-3' onClick={addToCart}>
      Agregar al carrito
    </button>
  </div>
);

export default ProductInfo;
