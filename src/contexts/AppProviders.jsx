import React from 'react';
import { UsersProvider } from './UsersContext';
import { CategoriesProvider } from './CategoriesContext';
import { ProductsProvider } from './ProductsContext';
import { AuthProvider } from './AuthContext';
import { FavoritesProvider } from './FavoritesContext';
import { PurchasesProvider } from './PurchasesContext';

const AppProviders = ({ children }) => {
  return (
    <UsersProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <AuthProvider>
            <FavoritesProvider>
              <PurchasesProvider>{children}</PurchasesProvider>
            </FavoritesProvider>
          </AuthProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </UsersProvider>
  );
};

export default AppProviders;
