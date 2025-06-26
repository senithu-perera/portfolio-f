import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>SDP STUDIOS</h2>
        </div>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SDP STUDIOS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
