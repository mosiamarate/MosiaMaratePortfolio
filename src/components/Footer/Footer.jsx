import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://github.com/mosiamarate" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mosiamarate" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} <span>MOSIA MARATE</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;