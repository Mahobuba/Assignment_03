// src/components/Footer.jsx
import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fancy-footer">
      <div className="footer-container">
        <nav className="footer-column">
          <h3>Services</h3>
          <a href="#">Branding</a>
          <a href="#">Design</a>
          <a href="#">Marketing</a>
          <a href="#">Advertisement</a>
        </nav>

        <nav className="footer-column">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Jobs</a>
          <a href="#">Press Kit</a>
        </nav>

        <nav className="footer-column">
          <h3>Legal</h3>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </nav>
      </div>

      <aside className="footer-bottom text-center mt-8">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;

