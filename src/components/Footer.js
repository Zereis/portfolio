import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Your Name</p>
      <p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>{' '}
        •
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>{' '}
        •
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub /> Github
        </a>{' '}
        •
        <a href="mailto:youremail@example.com">
          <FaEnvelope /> Email
        </a>
      </p>
    </footer>
  );
}

export default Footer;