import React, { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/productos.json');
        const data = await response.json();
        const jsonProducts = data.productos;

        const storedProducts =
          JSON.parse(localStorage.getItem('products')) || [];
        const combinedProducts = [
          ...jsonProducts,
          ...storedProducts.filter(
            (sp) => !jsonProducts.some((jp) => jp.id === sp.id)
          ),
        ];

        setProducts(combinedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
