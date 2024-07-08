import React from 'react';
import Product from '../Product/Product';
import useProducts from '../../hooks/useProducts';
import useUsers from '../../hooks/useUsers';
import './RecentProducts.css';

const RecentProducts = ({ tittle }) => {
  const { products } = useProducts();
  const { users } = useUsers();

  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion)
  );

  const recentProducts = sortedProducts.slice(0, 4);

  const findVendorById = (id) => {
    return users.find((user) => user.id === id);
  };

  return (
    <div className='recent-products-section'>
      <h2 className='text-center'>{tittle}</h2>
      <div className='recent-products-list'>
        {recentProducts.map((product) => {
          const vendor = findVendorById(product.usuario_id);
          return (
            <div key={product.id} className='recent-product-item'>
              <Product product={product} vendor={vendor} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProducts;
