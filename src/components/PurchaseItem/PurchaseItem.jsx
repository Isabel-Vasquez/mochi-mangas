import React from 'react';
import './PurchaseItem.css';

const PurchaseItem = ({ item }) => (
  <div className='purchase-item d-flex mb-3'>
    <img
      src={item.url_img}
      alt={item.name}
      className='purchase-item__img img-thumbnail'
    />
    <div className='purchase-item__details ms-3'>
      <h5 className='purchase-item__name'>{item.name}</h5>
      <p className='purchase-item__price'>${item.precio}</p>
      <p className='purchase-item__quantity'>Cantidad: {item.quantity}</p>
      <p className='purchase-item__total'>
        Total: ${item.precio * item.quantity}
      </p>
    </div>
  </div>
);

export default PurchaseItem;
