import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/FavoritesContext';
import './Product.css';

const Product = ({ product, vendor }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = (event) => {
    event.stopPropagation();
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className='product-card'>
      <div className='product-card__favorite-icon'>
        <button className='btn btn-link p-0' onClick={toggleFavorite}>
          <i
            className={`fa${
              isFavorite(product.id) ? 's' : 'r'
            } fa-heart text-danger`}
            style={{ cursor: 'pointer' }}
          ></i>
        </button>
      </div>
      <Link to={`/mangas/detalle/${product.id}`}>
        <img
          src={product.url_img}
          alt={product.titulo}
          className='product-card__image'
        />
      </Link>
      <div className='product-card__body'>
        <Link
          to={`/mangas/detalle/${product.id}`}
          className='text-decoration-none text-dark'
        >
          <h5 className='product-card__title'>{product.titulo}</h5>
        </Link>
        <p className='product-card__text fw-bold'>${product.precio}</p>
        <p className='product-card__text'>
          Vendido por: {vendor ? vendor.nombre : 'Desconocido'}
        </p>
        <button className='product-card__button' onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
