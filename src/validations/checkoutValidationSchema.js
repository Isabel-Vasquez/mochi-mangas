// src/validations/checkoutValidationSchema.js
import * as Yup from 'yup';
import { validateRut } from './validateRut';

const checkoutValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Correo electrónico es requerido'),
  shippingOption: Yup.string().required('Opción de envío es requerida'),
  country: Yup.string().required('País es requerido'),
  firstName: Yup.string().required('Nombre es requerido'),
  lastName: Yup.string().required('Apellido es requerido'),
  rut: Yup.string()
    .required('RUT es requerido')
    .test('valid-rut', 'RUT inválido', (value) => validateRut(value)),
  address: Yup.string().required('Dirección es requerida'),
  city: Yup.string().required('Comuna es requerida'),
  region: Yup.string().required('Región es requerida'),
  phone: Yup.string()
    .matches(/^[0-9]{9,10}$/, 'Número de teléfono inválido')
    .required('Teléfono es requerido'),
  paymentMethod: Yup.string().required('Método de pago es requerido'),
});

export default checkoutValidationSchema;
