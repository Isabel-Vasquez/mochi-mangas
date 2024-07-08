import React, { createContext, useState, useEffect } from 'react';

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data/categorias.json')
      .then((response) => response.json())
      .then((data) => setCategories(data.categorias))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
