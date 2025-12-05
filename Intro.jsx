import React from "react";
import { Link } from "react-scroll";
import "./Intro.css";
import profilePic from "../../assets/st.png";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <div className="intro-left">
        <h3>Hello, I'm</h3>
        <h1>San<span>tosh</span></h1>
        <h2>Web Developer | React JS | Frontend Enthusiast</h2>
        <p>
          I create modern, responsive, and visually appealing websites and web applications.
          I love turning ideas into interactive and professional digital experiences.
        </p>
        <div className="intro-buttons">
          <Link to="portfolio" smooth={true} duration={500} className="btn primary-btn">
            View Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="intro-right">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Intro;
