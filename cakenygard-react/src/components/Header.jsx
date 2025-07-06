import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Cake Nygard</Link>
      </div>
      
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/exhibits" onClick={() => setMenuOpen(false)}>Exhibits</Link></li>
          <li><a href="https://www.instagram.com/cakenygardart/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>News</a></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;