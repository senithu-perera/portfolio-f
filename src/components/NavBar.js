import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close mobile menu when link is clicked
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">SDP Studios</div>
      
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={activeLink === "#home" ? "active" : ""}
          onClick={() => handleSetActive("#home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeLink === "#about" ? "active" : ""}
          onClick={() => handleSetActive("#about")}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeLink === "#projects" ? "active" : ""}
          onClick={() => handleSetActive("#projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeLink === "#contact" ? "active" : ""}
          onClick={() => handleSetActive("#contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;