import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { usePurchases } from '../../contexts/PurchasesContext';
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const { purchases } = usePurchases();

  return (
    <>
      <Navbar />
      <div className='purchase-history__page container-fluid'>
        <div className='row w-100'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9 purchase-history__container'>
            <h1 className='purchase-history__title'>Historial de Compras</h1>
            {purchases.length > 0 ? (
              purchases.map((item, index) => (
                <PurchaseItem key={index} item={item} />
              ))
            ) : (
              <p>No has realizado ninguna compra.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseHistory;
