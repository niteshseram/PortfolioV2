import React from "react";
import { HamburgerBubble } from "./script";
import "./Header.css";
import Links from "../Links/Links";

const Header = () => {
  const navLinks = [
    { link: "#about", title: "ABOUT" },
    { link: "#skills", title: "SKILLS" },
    { link: "#project", title: "PROJECT" },
    { link: "#contact", title: "CONTACT" },
  ];

  return (
    <header>
      <div className="brand">
        <a href="niteshseram.me">Nitesh Seram</a>
      </div>
      <nav>
        <div className="hamburger" onClick={HamburgerBubble}></div>
        <Links links={navLinks} />
      </nav>
    </header>
  );
};

export default Header;
