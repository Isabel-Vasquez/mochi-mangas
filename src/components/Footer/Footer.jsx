import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="#" className="footer-link">Privacy Policy</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Terms of Service</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
