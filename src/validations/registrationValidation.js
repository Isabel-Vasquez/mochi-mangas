import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
  Nombre: Yup.string().required('Nombre es requerido'),
  Apellido: Yup.string().required('Apellido es requerido'),
  Email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Correo electrónico es requerido'),
  Password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Contraseña es requerida'),
});
