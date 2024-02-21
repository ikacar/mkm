import React, { useState } from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navigation'>
      <nav id="desktop-nav">
        <Link to="/" className='logo'>MKM</Link>
        <div className='nav-links'>
          <Link className='nav-link' to="/">Početna</Link>
          <Link className='nav-link' to="/o-nama">O nama</Link>
          <Link className='nav-link' to="/usluge">Usluge</Link>
          <Link className='nav-link' to="/projekti">Projekti</Link>
          <Link className='nav-link' to="/kontakt">Kontakt</Link>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className='logo'>MKM</div>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? 'open' : ''}`} id='menu-links'>
            <Link className='menu-link' to="/" onClick={toggleMenu}>Početna</Link>
            <Link className='menu-link' to="/o-nama" onClick={toggleMenu}>O nama</Link>
            <Link className='menu-link' to="/usluge" onClick={toggleMenu}>Usluge</Link>
            <Link className='menu-link' to="/projekti" onClick={toggleMenu}>Projekti</Link>
            <Link className='menu-link' to="/kontakt" onClick={toggleMenu}>Kontakt</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
