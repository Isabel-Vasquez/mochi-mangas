import { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';

const useCategories = () => {
  return useContext(CategoriesContext);
};

export default useCategories;
