import React from 'react';
import { Link } from 'gatsby';
import '../styles/Header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="School of Football Logo" className="logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-information" className="nav-link">Add Information</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">Contactanos</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
