import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import Product from '../../components/Product/Product';
import './MyPosts.css';

const MyPosts = () => {
  const { currentUser } = useAuth();
  const { products } = useContext(ProductsContext);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const filteredProducts = products.filter(
        (product) => product.usuario_id === currentUser.id
      );
      setUserProducts(filteredProducts);
    }
  }, [currentUser, products]);

  return (
    <>
      <Navbar />
      <div className='container-fluid my-posts__page'>
        <div className='row w-100'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9 my-posts__container'>
            <h1 className='my-posts__title mb-4'>Mis Publicaciones</h1>
            <div className='row'>
              {userProducts.length > 0 ? (
                userProducts.map((product) => (
                  <div
                    className='col-sm-6 col-md-4 col-lg-3 mb-4'
                    key={product.id}
                  >
                    <Product product={product} vendor={currentUser} />
                  </div>
                ))
              ) : (
                <p>No has publicado ningún producto.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPosts;
