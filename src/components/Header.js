import React, { useState } from 'react';
import './Header.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav>
      <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>
          <FaHome /> Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          <FaUser /> About
        </a>
        <a href="#portfolio" onClick={handleLinkClick}>
          <FaBriefcase /> Projects
        </a>
      </div>
    </nav>
  );
};

export default Header;