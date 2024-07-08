import React from 'react';

const SortOptions = ({ sortBy, setSortBy }) => {
  return (
    <div>
      <label htmlFor="sort-by" className="form-label">Ordenar por</label>
      <select 
        id="sort-by" 
        className="form-select" 
        value={sortBy} 
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="name-asc">Nombre: A-Z</option>
        <option value="name-desc">Nombre: Z-A</option>
        <option value="date-asc">Fecha: Más Antiguo Primero</option>
        <option value="date-desc">Fecha: Más Nuevo Primero</option>
      </select>
    </div>
  );
};

export default SortOptions;
