import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecentProducts from '../../components/RecentProducts/RecentProducts';
import './Home.css';

const Home = () => {
  return (
    <div className='content-wrapper'>
      <Navbar />
      <Header />
      <main>
        <RecentProducts tittle='¡Los ultimos productos publicados!' />
        <RecentProducts tittle='¡Los mas vendidos!' />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
