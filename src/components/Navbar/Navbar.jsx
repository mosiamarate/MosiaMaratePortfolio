import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Mosia_Logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Mosia Logo" className="navbar-logo" />
      </Link>

      {/* Desktop + Mobile Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Resume Button */}
      <div className="nav-buttons">
        <a
          href="/src/assets/documentsMG_Marate_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume"
        >
          Resume
        </a>
      </div>

      {/* Hamburger for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
