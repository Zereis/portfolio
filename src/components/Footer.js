import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Your Name</p>
      <p>
        <a href="https://www.linkedin.com/in/david-hoang-07b186170/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>{' '}
        •
        <a href="https://github.com/Zereis" target="_blank" rel="noreferrer">
          <FaGithub /> Github
        </a>{' '}
        •
        <a href="mailto:davidvinh97@gmail.com">
          <FaEnvelope /> Email
        </a>
      </p>
    </footer>
  );
}

export default Footer;