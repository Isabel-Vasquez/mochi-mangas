import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import ProductsList from './views/ProductsList/ProductsList';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import PublishProduct from './views/PublishProduct/PublishProduct';
import MyPosts from './views/MyPosts/MyPosts';
import PurchaseHistory from './views/PurchaseHistory/PurchaseHistory';
import Favorites from './views/Favorites/Favorites';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import Success from './views/Success/Success';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mangas' element={<ProductsList />} />
      <Route path='/mangas/categoria/:category' element={<ProductsList />} />
      <Route path='/mangas/vendedor/:vendor' element={<ProductsList />} />
      <Route path='/mangas/detalle/:id' element={<ProductDetail />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mi-cuenta' element={<Profile />} />
      <Route path='/publicar-producto' element={<PublishProduct />} />
      <Route path='/mis-publicaciones' element={<MyPosts />} />
      <Route path='/historial-compras' element={<PurchaseHistory />} />
      <Route path='/favoritos' element={<Favorites />} />
      <Route path='/carrito' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  );
};

export default App;
