import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav className='nav flex-column'>
        <NavLink className='nav-link' to='/mi-cuenta'>
          Perfil
        </NavLink>
        <NavLink className='nav-link' to='/publicar-producto'>
          Publicar producto
        </NavLink>
        <NavLink className='nav-link' to='/mis-publicaciones'>
          Ver mis publicaciones
        </NavLink>
        <NavLink className='nav-link' to='/historial-compras'>
          Historial de compras
        </NavLink>
        <NavLink className='nav-link' to='/favoritos'>
          Favoritos
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
