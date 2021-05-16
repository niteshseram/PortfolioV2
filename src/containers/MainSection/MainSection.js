import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
// import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import "./MainSection.css";

const MainSection = () => {
  return (
    <main>
      <Introduction />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
    </main>
  );
};

export default MainSection;
