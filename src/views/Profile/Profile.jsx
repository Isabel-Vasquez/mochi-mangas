import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
  const { currentUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    rut: '',
    celular: '',
    email: '',
  });

  useEffect(() => {
    if (currentUser) {
      setUserData({
        nombre: currentUser.nombre,
        apellido: currentUser.apellido,
        rut: currentUser.rut || '',
        celular: currentUser.celular || '',
        email: currentUser.email,
      });
    } else {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData);
    console.log('Datos actualizados:', userData);
  };

  if (!currentUser) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid profile__page'>
        <div className='row w-100'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9 profile__container'>
            <ProfileHeader userData={userData} />
            <ProfileDetails
              userData={userData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
