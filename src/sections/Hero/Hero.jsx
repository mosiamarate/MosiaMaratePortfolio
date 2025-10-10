import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>MOSIA MARATE</span>
        </h1>
        <p className="subtitle">Networking Student | Front-End Developer</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
