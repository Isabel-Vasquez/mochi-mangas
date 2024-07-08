import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import { useFavorites } from '../../contexts/FavoritesContext';
import './Favorites.css';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <Navbar />
      <div className='favorites__page container-fluid'>
        <div className='row w-100'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9 favorites__container'>
            <h1 className='favorites__title'>Favoritos</h1>
            <div className='row'>
              {favorites.length > 0 ? (
                favorites.map((product) => (
                  <div
                    className='col-sm-6 col-md-4 col-lg-3 mb-4'
                    key={product.id}
                  >
                    <Product product={product} vendor={null} />
                  </div>
                ))
              ) : (
                <p>No tienes productos favoritos.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
