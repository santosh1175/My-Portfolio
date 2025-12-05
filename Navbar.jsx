import React, { useState } from "react";
import { Link } from "react-scroll";
import contactIcon from "../../assets/contact.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h2>
          <span className="logo-san">San</span><span className="logo-tosh">tosh</span>
        </h2>
      </div>

      {/* Menu Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Clients</Link></li>
      </ul>

      {/* Contact Button */}
      <button
        className="contact-btn"
        onClick={() =>
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={contactIcon} alt="contact" />
        Contact Me
      </button>

      {/* Hamburger */}
      <div className={menuOpen ? "menu-icon open" : "menu-icon"} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
