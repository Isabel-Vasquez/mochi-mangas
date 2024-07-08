import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { usePurchases } from '../../contexts/PurchasesContext';
import { useAuth } from '../../contexts/AuthContext';
import checkoutValidationSchema from '../../validations/checkoutValidationSchema';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    shippingOption: 'Envio',
    country: '',
    firstName: '',
    lastName: '',
    rut: '',
    address: '',
    city: '',
    region: '',
    phone: '',
    paymentMethod: 'Mercado Pago',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { addPurchase } = usePurchases();
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = async () => {
    try {
      await checkoutValidationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      if (currentUser) {
        cartItems.forEach((item) => {
          addPurchase({ ...item, usuario_id: currentUser.id });
        });
      }
      localStorage.removeItem('cart');
      navigate('/success');
    }
  };

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className='container mt-5 checkout'>
        <h1 className='checkout__title'>Checkout</h1>
        <div className='row'>
          <div className='col-md-6 mb-4'>
            <CheckoutForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          </div>
          <div className='col-md-6'>
            <CheckoutSummary cartItems={cartItems} total={total} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
