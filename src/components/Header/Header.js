import React from "react";
import { HamburgerBubble } from "./script";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="brand">
        <a href="niteshseram.me">Nitesh Seram</a>
      </div>
      <nav>
        <div className="hamburger" onClick={HamburgerBubble}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
