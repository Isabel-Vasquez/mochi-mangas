import React from 'react';
import './ProfileDetails.css';

const ProfileDetails = ({ userData, handleChange, handleSubmit }) => (
  <div className='profile__details'>
    <form onSubmit={handleSubmit} className='mt-4 profile__form'>
      <h3 className='profile__form-title'>Datos personales</h3>
      <div className='mb-3 profile__item'>
        <label htmlFor='fullName' className='profile__item-label'>
          Nombre Completo:
        </label>
        <input
          type='text'
          className='form-control profile__item-input'
          id='fullName'
          value={`${userData.nombre} ${userData.apellido}`}
          readOnly
        />
      </div>
      <div className='mb-3 profile__item'>
        <label htmlFor='rut' className='profile__item-label'>
          RUT:
        </label>
        <input
          type='text'
          className='form-control profile__item-input'
          id='rut'
          name='rut'
          value={userData.rut}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3 profile__item'>
        <label htmlFor='celular' className='profile__item-label'>
          Celular:
        </label>
        <input
          type='text'
          className='form-control profile__item-input'
          id='celular'
          name='celular'
          value={userData.celular}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3 profile__item'>
        <label htmlFor='email' className='profile__item-label'>
          Email:
        </label>
        <input
          type='email'
          className='form-control profile__item-input'
          id='email'
          name='email'
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn profile__form-button'>
        Guardar
      </button>
    </form>
  </div>
);

export default ProfileDetails;
