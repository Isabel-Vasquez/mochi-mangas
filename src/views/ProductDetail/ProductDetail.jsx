import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import useUsers from '../../hooks/useUsers';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CommentSection from '../../components/CommentSection/CommentSection';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { users } = useUsers();
  const [product, setProduct] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const productFound = products.find((prod) => prod.id === parseInt(id));
    setProduct(productFound);
    if (productFound) {
      const vendorFound = users.find(
        (user) => user.id === productFound.usuario_id
      );
      setVendor(vendorFound);
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorite(favorites.some((fav) => fav.id === productFound.id));
    }
  }, [id, products, users]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
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

  if (!product || !vendor) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='container mt-4 product-detail'>
        <div className='row'>
          <ProductImage
            imageUrl={product.url_img}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
          <ProductInfo
            product={product}
            vendor={vendor}
            addToCart={addToCart}
          />
        </div>
        <CommentSection />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
