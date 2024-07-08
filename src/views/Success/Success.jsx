import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Success.css';

const Success = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h1>Pago realizado con éxito</h1>
        <p>Gracias por su compra. Su pedido ha sido procesado con éxito.</p>
        <Link to='/mangas' className='btn btn-primary'>
          Volver a la tienda
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Success;
