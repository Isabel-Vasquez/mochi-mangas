import React from 'react';
import './FilterList.css';

const FilterList = ({ title, items, onSelectItem, allLabel }) => {
  return (
    <div className='filter-section'>
      <h6>{title}</h6>
      <ul>
        <li key='all'>
          <span className='filter-item' onClick={() => onSelectItem(null)}>
            {allLabel}
          </span>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <span className='filter-item' onClick={() => onSelectItem(item.id)}>
              {item.nombre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
