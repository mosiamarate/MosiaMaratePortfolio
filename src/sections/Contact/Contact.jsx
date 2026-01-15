import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);               // ⏳ Loading state
  const [popup, setPopup] = useState({ show: false, type: "", message: "" }); // 🎉 Popup state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true); // start loading

    emailjs
      .send(
        "service_xmradwp",
        "template_6434grk",
        form,
        "FQYfAgEvINk2zYpH_"
      )
      .then(
        () => {
          setPopup({
            show: true,
            type: "success",
            message: "Thank you! Your message has been sent successfully.",
          });

          setForm({ name: "", email: "", message: "" });
          setSending(false);

          setTimeout(() => setPopup({ show: false }), 3000);
        },
        (error) => {
          console.error("FAILED...", error);

          setPopup({
            show: true,
            type: "error",
            message: "Something went wrong. Please try again.",
          });

          setSending(false);
          setTimeout(() => setPopup({ show: false }), 8000);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      {/* Animated Popup */}
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>
          {popup.message}
        </div>
      )}

      {/* Phone + Email */}
      <div className="contact-buttons">
        <a href="tel:+27814702140" className="contact-btn">
          <FaPhone /> +27 81 470 2140
        </a>
        <a href="mailto:mosiamaratee@gmail.com" className="contact-btn">
          <FaEnvelope /> mosiamarate@gmail.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="socials">
        <a href="https://linkedin.com/in/mosiamarate" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mosiamarate" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>

      {/* Hire Me Form */}
      <div className="hire-me">
        <h3>HIRE ME</h3>

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

          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
