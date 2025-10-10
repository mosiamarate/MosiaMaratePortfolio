import React from "react";
import "./About.css";
import profileWebP from "../../assets/Mosia_Profile.webp";
import profileJPG from "../../assets/Mosia_Profile_JPG.jpg";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
return (
    <section className="about-section" id="about">
        <h2 className="about-title">About Me</h2>
        <div className="about-container">
            {/* Profile Image */}
            <div className="about-image">
                <picture>
                    <source srcSet={profileWebP} type="image/webp" />
                    <source srcSet={profileJPG} type="image/jpeg" />
                    <img src={profileJPG} alt="Mosia Marate" />
                </picture>
            </div>

            {/* About Text */}
            <div className="about-text">
                <p>
                    Hi, I'm <span>MOSIA MARATE</span>, a passionate IT and Networking
                    student with expertise in front-end web development. I create
                    functional, visually appealing, and unique designs that bring ideas
                    to life.
                </p>
            </div>

            {/* Contact + Socials */}
            <div className="about-contact">
                <p><FaPhone className="icon"/> +27 81 470 2140</p>
                <p><FaEnvelope className="icon"/> gideonmarate@gmail.com</p>
                <div className="social-links">
                    <a href="https://linkedin.com/in/mosiamarate" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/mosiamarate" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://instagram.com/mosiamarate" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
    </section>
);
};

export default About;
