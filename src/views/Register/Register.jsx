import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/GenericForm/GenericForm';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../contexts/AuthContext';
import { registrationValidationSchema } from '../../validations/registrationValidation';
import './Register.css';

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = (values, { setSubmitting }) => {
    const newUser = {
      nombre: values.Nombre,
      apellido: values.Apellido,
      email: values.Email,
      password: values.Password,
    };
    registerUser(newUser);
    setSubmitting(false);
    navigate('/login');
  };

  const initialValues = {
    Nombre: '',
    Apellido: '',
    Email: '',
    Password: '',
  };

  const registerFields = [
    {
      name: 'Nombre',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Ej: Hutao',
      required: true,
    },
    {
      name: 'Apellido',
      label: 'Apellido',
      type: 'text',
      placeholder: 'Ej: Vasquez',
      required: true,
    },
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
      placeholder: 'Ej: ******',
      required: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className='register-page'>
        <GenericForm
          title='Registrarse'
          initialValues={initialValues}
          validationSchema={registrationValidationSchema}
          onSubmit={handleRegisterSubmit}
          fields={registerFields}
        />
      </div>
      <Footer />
    </>
  );
};

export default Register;
