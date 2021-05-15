import React from "react";
import About from "../About/About";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";
import "./MainSection.css";

const MainSection = () => {
  return (
    <main>
      <Introduction />
      <About />
      <Skills />
    </main>
  );
};

export default MainSection;
