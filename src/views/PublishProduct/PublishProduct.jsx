import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ProductsContext } from '../../contexts/ProductsContext';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { useAuth } from '../../contexts/AuthContext';
import './PublishProduct.css';

const PublishProduct = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    categoria_id: '',
    url_img: '',
  });
  const { addProduct } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, url_img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      usuario_id: currentUser.id,
      fecha_publicacion: new Date().toISOString(),
    };
    addProduct(newProduct);
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid publish-product'>
        <div className='row w-100'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9 publish-product__container'>
            <h1 className='publish-product__title text-center'>
              Publicar Producto
            </h1>
            <form onSubmit={handleSubmit} className='publish-product__form'>
              <div className='mb-3 publish-product__item'>
                <label
                  htmlFor='titulo'
                  className='form-label publish-product__label'
                >
                  Nombre del Producto:
                </label>
                <input
                  type='text'
                  className='form-control publish-product__input'
                  id='titulo'
                  name='titulo'
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3 publish-product__item'>
                <label
                  htmlFor='descripcion'
                  className='form-label publish-product__label'
                >
                  Descripción:
                </label>
                <textarea
                  className='form-control publish-product__textarea'
                  id='descripcion'
                  name='descripcion'
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className='mb-3 publish-product__item'>
                <label
                  htmlFor='precio'
                  className='form-label publish-product__label'
                >
                  Precio:
                </label>
                <input
                  type='number'
                  className='form-control publish-product__input'
                  id='precio'
                  name='precio'
                  value={formData.precio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3 publish-product__item'>
                <label
                  htmlFor='categoria_id'
                  className='form-label publish-product__label'
                >
                  Categoría:
                </label>
                <select
                  className='form-control publish-product__select'
                  id='categoria_id'
                  name='categoria_id'
                  value={formData.categoria_id}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Seleccionar Categoría</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-3 publish-product__item'>
                <label
                  htmlFor='url_img'
                  className='form-label publish-product__label'
                >
                  Imagen del Producto:
                </label>
                <input
                  type='file'
                  className='form-control publish-product__input'
                  id='url_img'
                  accept='image/*'
                  onChange={handleImageChange}
                  required
                />
              </div>
              <button type='submit' className='btn publish-product__button'>
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublishProduct;
