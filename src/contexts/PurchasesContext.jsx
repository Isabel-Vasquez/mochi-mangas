import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const storedPurchases =
        JSON.parse(localStorage.getItem('purchases')) || {};
      const userPurchases = storedPurchases[currentUser.id] || [];
      setPurchases(userPurchases);
    }
  }, [currentUser]);

  const addPurchase = (purchase) => {
    setPurchases((prevPurchases) => {
      const updatedPurchases = [...prevPurchases, purchase];
      const storedPurchases =
        JSON.parse(localStorage.getItem('purchases')) || {};
      storedPurchases[currentUser.id] = updatedPurchases;
      localStorage.setItem('purchases', JSON.stringify(storedPurchases));
      return updatedPurchases;
    });
  };

  return (
    <PurchasesContext.Provider value={{ purchases, addPurchase }}>
      {children}
    </PurchasesContext.Provider>
  );
};

export const usePurchases = () => {
  return useContext(PurchasesContext);
};
