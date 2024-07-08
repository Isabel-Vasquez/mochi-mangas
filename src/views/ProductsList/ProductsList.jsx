import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Filter from '../../components/Filter/Filter';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import useProducts from '../../hooks/useProducts';
import useCategories from '../../hooks/useCategories';
import useUsers from '../../hooks/useUsers';
import './ProductsList.css';

const ProductsList = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const { users } = useUsers();
  const { category, vendor } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (category && category !== 'todos') {
      const categoryObject = categories.find(
        (cat) => cat.nombre.toLowerCase() === category.toLowerCase()
      );
      setSelectedCategory(categoryObject ? categoryObject.id : null);
    } else {
      setSelectedCategory(null);
    }

    if (vendor) {
      const vendorObject = users.find(
        (user) => user.nombre.toLowerCase() === vendor.toLowerCase()
      );
      setSelectedVendor(vendorObject ? vendorObject.id : null);
    } else {
      setSelectedVendor(null);
    }
  }, [category, vendor, categories, users]);

  useEffect(() => {
    let updatedProducts = products;

    if (selectedCategory !== null) {
      updatedProducts = updatedProducts.filter(
        (product) => product.categoria_id === selectedCategory.toString()
      );
    }

    if (selectedVendor !== null) {
      updatedProducts = updatedProducts.filter(
        (product) => product.usuario_id === selectedVendor
      );
    }

    setFilteredProducts(updatedProducts);
  }, [products, selectedCategory, selectedVendor]);

  const handleCategorySelect = (categoryId) => {
    const categoryObject = categories.find((cat) => cat.id === categoryId);
    if (categoryObject) {
      setSelectedCategory(categoryId);
      navigate(`/mangas/categoria/${categoryObject.nombre.toLowerCase()}`);
    } else {
      setSelectedCategory(null);
      navigate('/mangas');
    }
  };

  const handleVendorSelect = (vendorId) => {
    const vendorObject = users.find((user) => user.id === vendorId);
    if (vendorObject) {
      setSelectedVendor(vendorId);
      navigate(`/mangas/vendedor/${vendorObject.nombre.toLowerCase()}`);
    } else {
      setSelectedVendor(null);
      navigate('/mangas');
    }
  };

  return (
    <>
      <Navbar />
      <div className='content-wrapper container-fluid product-content'>
        <div className='row'>
          <div className='col-md-2 product-list-sidebar'>
            <Filter
              onSelectCategory={handleCategorySelect}
              onSelectVendor={handleVendorSelect}
            />
          </div>
          <div className='col-md-10'>
            <ProductsSection
              products={filteredProducts}
              category={category}
              vendor={vendor}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsList;
