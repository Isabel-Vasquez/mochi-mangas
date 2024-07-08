import { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts((prevProducts) => {
      const combinedProducts = [
        ...prevProducts,
        ...storedProducts.filter(
          (sp) => !prevProducts.some((pp) => pp.id === sp.id)
        ),
      ];
      return combinedProducts;
    });
  }, [setProducts]);

  return { products };
};

export default useProducts;
