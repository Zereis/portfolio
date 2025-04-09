import React from 'react';
import './Header.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <nav>
      <a href="#home">
        <FaHome /> Home
      </a>
      <a href="#about">
        <FaUser /> About
      </a>
      <a href="#portfolio">
        <FaBriefcase /> Projects
      </a>
      <a href="#contact">
        <FaEnvelope /> Contact
      </a>
    </nav>
  );
};

export default Header;