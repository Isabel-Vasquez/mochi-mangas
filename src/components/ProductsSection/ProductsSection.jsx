import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import SortOptions from '../SortOptions/SortOptions';
import useUsers from '../../hooks/useUsers';
import './ProductsSection.css';

const ProductsSection = ({ products }) => {
  const { users } = useUsers();
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortBy, setSortBy] = useState('price-asc');
  const { category, vendor } = useParams();

  useEffect(() => {
    const sorted = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.precio - b.precio;
        case 'price-desc':
          return b.precio - a.precio;
        case 'name-asc':
          return a.titulo.localeCompare(b.titulo);
        case 'name-desc':
          return b.titulo.localeCompare(a.titulo);
        case 'date-asc':
          return new Date(a.fecha_publicacion) - new Date(b.fecha_publicacion);
        case 'date-desc':
          return new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion);
        default:
          return 0;
      }
    });
    setSortedProducts(sorted);
  }, [products, sortBy]);

  const findVendorById = (id) => {
    return users.find((user) => user.id === id);
  };

  const getTitle = () => {
    if (category && category !== 'todos') {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    if (vendor) {
      const vendorObject = users.find(
        (user) => user.nombre.toLowerCase() === vendor.toLowerCase()
      );
      return vendorObject ? `Vendido por: ${vendorObject.nombre}` : 'Productos';
    }
    if (category === 'todos' || !category) {
      return 'Todos los mangas';
    }
    return 'Productos';
  };

  return (
    <div className='products-section'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2>{getTitle()}</h2>
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      {sortedProducts.length > 0 ? (
        <div className='row'>
          {sortedProducts.map((product) => {
            const vendor = findVendorById(product.usuario_id);
            return (
              <div className='col-sm-6 col-md-4 col-lg-3 mb-4' key={product.id}>
                <Product product={product} vendor={vendor} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductsSection;
