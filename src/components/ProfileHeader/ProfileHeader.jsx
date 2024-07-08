import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ userData }) => (
  <div className='profile__header text-center'>
    <h1 className='profile__form-title'>Mi Cuenta</h1>
    <div className='d-flex justify-content-center mb-4'>
      <div className='profile__picture'>
        <img src='https://picsum.photos/150' alt='Profile' />
      </div>
    </div>
    <h2 className='text-center'>
      {userData.nombre} {userData.apellido}
    </h2>
  </div>
);

export default ProfileHeader;
