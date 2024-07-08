import React from 'react';
import useCategories from '../../hooks/useCategories';
import useUsers from '../../hooks/useUsers';
import FilterList from '../FilterList/FilterList';
import './Filter.css';

const Filter = ({ onSelectCategory, onSelectVendor }) => {
  const { categories } = useCategories();
  const { users } = useUsers();

  if (!categories || !users) {
    return <div>Loading...</div>;
  }

  return (
    <div className='filter-container'>
      <h5>Filtrar por:</h5>
      <FilterList
        title='Categorías'
        items={categories}
        onSelectItem={onSelectCategory}
        allLabel='Todos'
      />
      <FilterList
        title='Vendedor'
        items={users}
        onSelectItem={onSelectVendor}
        allLabel=''
      />
    </div>
  );
};

export default Filter;
