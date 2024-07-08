// src/views/Login/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/GenericForm/GenericForm';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../contexts/AuthContext';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  const { loginUser, error } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (values, { setSubmitting }) => {
    const { Email, Password } = values;
    const success = loginUser(Email, Password);
    if (success) {
      navigate('/');
    } else {
      setSubmitting(false);
    }
  };

  const initialValues = {
    Email: '',
    Password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    Email: Yup.string()
      .email('Correo electrónico inválido')
      .required('Correo electrónico es requerido'),
    Password: Yup.string().required('Contraseña es requerida'),
  });

  const loginFields = [
    {
      name: 'Email',
      label: 'Email',
      type: 'email',
      placeholder: 'Ej: hutao@example.com',
      required: true,
    },
    {
      name: 'Password',
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Ej: *****',
      required: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className='login-page'>
        <GenericForm
          title='Iniciar Sesión'
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
          fields={loginFields}
        />
        {error && <p className='text-danger text-center'>{error}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Login;
