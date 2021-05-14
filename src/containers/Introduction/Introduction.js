import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section id="intro">
      <div className="image">
        <img src="../../assets/images/dp.png" alt="profile pic" />
      </div>
      <div className="intro-text">
        <h1 className="hi">Hi, I'm</h1>
        <h1 className="name">Nitesh Seram</h1>
        <h2 className="profession">Full Stack Web Developer</h2>
      </div>
    </section>
  );
};

export default Introduction;
