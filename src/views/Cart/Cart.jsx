import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../contexts/AuthContext';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.precio * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Navbar />
      <div className='cart container mt-5'>
        <h1 className='cart__title'>Carrito de Compras</h1>
        {cartItems.length > 0 ? (
          <div>
            <div className='row'>
              {cartItems.map((item) => (
                <div className='col-12 mb-4' key={item.id}>
                  <div className='card cart-item'>
                    <div className='row no-gutters'>
                      <div className='col-md-4'>
                        <img
                          src={item.url_img}
                          alt={item.titulo}
                          className='cart-item__img'
                        />
                      </div>
                      <div className='col-md-8'>
                        <div className='cart-item__body card-body'>
                          <h5 className='cart-item__title card-title'>
                            {item.titulo}
                          </h5>
                          <p className='cart-item__price card-text'>
                            ${item.precio}
                          </p>
                          <div className='cart-item__actions d-flex justify-content-between align-items-center'>
                            <input
                              type='number'
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              min='1'
                              className='form-control w-auto'
                            />
                          </div>
                          <div>
                            <button
                              className='btn cart-item__remove-btn'
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='cart__total'>
              <h3>Total: ${calculateTotal()}</h3>
              <button
                onClick={handleCheckout}
                className='btn cart__checkout-btn'
              >
                Ir a pagar
              </button>
            </div>
          </div>
        ) : (
          <p className='cart__empty-msg'>No tienes productos en el carrito.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
