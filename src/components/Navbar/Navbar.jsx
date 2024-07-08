import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
      setCartCount(totalItems);
    };

    window.addEventListener('storage', updateCartCount);
    updateCartCount(); // Initial update

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          MyApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas'>
                Todo Mangas
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/shonen'>
                Shonen
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/josei'>
                Josei
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/thriller'>
                Thriller
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/seinen'>
                Seinen
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/terror'>
                Terror
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/yuri'>
                Yuri
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mangas/categoria/shojo'>
                Shojo
              </Link>
            </li>
          </ul>
          <div className='navbar-nav ms-auto'>
            {isAuthenticated ? (
              <>
                <span className='navbar-text'>Hola, {currentUser.nombre}</span>
                <Link className='nav-link' to='/mi-cuenta'>
                  Mi Cuenta
                </Link>
                <Link className='nav-link' to='/carrito'>
                  <i className='fas fa-shopping-cart'></i>
                  {cartCount > 0 && (
                    <span className='badge badge-pill badge-danger'>
                      {cartCount}
                    </span>
                  )}
                </Link>
                <button className='nav-link btn btn-link' onClick={logout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link className='nav-link' to='/register'>
                  Registrate
                </Link>
                <Link className='nav-link' to='/login'>
                  Iniciar Sesión
                </Link>
                <Link className='nav-link' to='/carrito'>
                  <i className='fas fa-shopping-cart'></i>
                  {cartCount > 0 && (
                    <span className='badge badge-pill badge-danger'>
                      {cartCount}
                    </span>
                  )}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
