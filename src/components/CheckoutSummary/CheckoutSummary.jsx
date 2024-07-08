import React from 'react';
import './CheckoutSummary.css';

const CheckoutSummary = ({ cartItems, total }) => {
  return (
    <div className='checkout__summary'>
      <h2 className='checkout__form-title'>Resumen de la compra</h2>
      {cartItems.map((item) => (
        <div className='cart-item-summary' key={item.id}>
          <img src={item.url_img} alt={item.titulo} className='img-thumbnail' />
          <div className='cart-item-details'>
            <h5>{item.titulo}</h5>
            <p>${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.precio * item.quantity}</p>
          </div>
        </div>
      ))}
      <h3 className='checkout__total'>Total: ${total}</h3>
    </div>
  );
};

export default CheckoutSummary;
