import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for reaching out! I’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      {/* Phone + Email buttons */}
      <div className="contact-buttons">
        <a href="tel:+27814702140" className="contact-btn">
          <FaPhone /> +27 81 470 2140
        </a>
        <a href="mailto:gideonmarate@gmail.com" className="contact-btn">
          <FaEnvelope /> gideonmarate@gmail.com
        </a>
      </div>

      {/* Social icons */}
      <div className="socials">
        <a
          href="https://linkedin.com/in/mosiamarate"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mosiamarate"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/YOUR_HANDLE"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Hire Me Form */}
      <div className="hire-me">
        <h3>Hire Me</h3>
        <form className="hire-me-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;