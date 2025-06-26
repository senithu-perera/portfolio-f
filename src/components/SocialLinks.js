import React from "react";
import "./Home.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-itch-io"></i>
      </a>
      <a href="https://www.linkedin.com/in/senithu-perera-477629266/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
