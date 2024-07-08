import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <div className='checkout__form'>
      <h2 className='checkout__form-title'>Datos de Compra</h2>
      <form onSubmit={handleSubmit} className='text-start'>
        <div className='mb-3'>
          <label className='form-label'>Correo Electrónico</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={formData.email}
            placeholder='Ej: Laura@example.com'
            onChange={handleChange}
            required
          />
          {errors.email && <p className='text-danger'>{errors.email}</p>}
        </div>
        <div className='mb-3 form-option'>
          <label className='form-label'>Opciones de envío</label>
          <div className='text-center'>
            <input
              type='radio'
              name='shippingOption'
              value='Envio'
              checked={formData.shippingOption === 'Envio'}
              onChange={handleChange}
            />
            Envío
            <input
              type='radio'
              name='shippingOption'
              value='Retiro en tienda'
              checked={formData.shippingOption === 'Retiro en tienda'}
              onChange={handleChange}
            />
            Retiro en tienda
          </div>
        </div>
        <div className='mb-3'>
          <label className='form-label'>País</label>
          <input
            type='text'
            className='form-control'
            name='country'
            placeholder='Ej: Chile'
            value={formData.country}
            onChange={handleChange}
            required
          />
          {errors.country && <p className='text-danger'>{errors.country}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input
            type='text'
            className='form-control'
            name='firstName'
            placeholder='Ej: Laura'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <p className='text-danger'>{errors.firstName}</p>
          )}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Apellido</label>
          <input
            type='text'
            className='form-control'
            name='lastName'
            value={formData.lastName}
            placeholder='Ej: Ramírez'
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className='text-danger'>{errors.lastName}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>RUT</label>
          <input
            type='text'
            className='form-control'
            name='rut'
            value={formData.rut}
            placeholder='Ej: 15345589-7'
            onChange={handleChange}
            required
          />
          {errors.rut && <p className='text-danger'>{errors.rut}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Dirección Completa</label>
          <input
            type='text'
            className='form-control'
            name='address'
            placeholder='Ej: Renca 567'
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p className='text-danger'>{errors.address}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Comuna</label>
          <input
            type='text'
            className='form-control'
            name='city'
            value={formData.city}
            placeholder='Ej: Renca'
            onChange={handleChange}
            required
          />
          {errors.city && <p className='text-danger'>{errors.city}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Región</label>
          <input
            type='text'
            className='form-control'
            name='region'
            placeholder='Ej: Metropolitana'
            value={formData.region}
            onChange={handleChange}
            required
          />
          {errors.region && <p className='text-danger'>{errors.region}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Teléfono</label>
          <input
            type='tel'
            className='form-control'
            name='phone'
            placeholder='Ej: 954367923'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className='text-danger'>{errors.phone}</p>}
        </div>
        <div className='mb-3 form-option'>
          <label className='form-label'>Método de Pago</label>
          <div className='text-center'>
            <input
              type='radio'
              name='paymentMethod'
              value='Mercado Pago'
              checked={formData.paymentMethod === 'Mercado Pago'}
              onChange={handleChange}
            />
            Checkout Mercado Pago
            <input
              type='radio'
              name='paymentMethod'
              value='Transferencia o depósito'
              checked={formData.paymentMethod === 'Transferencia o depósito'}
              onChange={handleChange}
            />
            Transferencia o depósito
          </div>
        </div>
        <button type='submit' className='btn checkout__button'>
          Pagar Ahora
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
