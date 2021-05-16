import React, { useEffect } from "react";
import "./Introduction.css";
import { Timeline, FadeUpEnter } from "../../animation";
import data from "../../data";

const Introduction = () => {
  useEffect(() => {
    let t1 = Timeline();

    FadeUpEnter(t1, ".image");
    FadeUpEnter(t1, ".hi");
    FadeUpEnter(t1, ".name");
    FadeUpEnter(t1, ".profession");
    FadeUpEnter(t1, ".resume");
  }, []);

  return (
    <section id="intro">
      <div className="image">
        <img src={data.profileUrl} alt="profile pic" />
      </div>
      <div className="intro-text">
        <h1 className="hi">Hi, I'm</h1>
        <h1 className="name">{data.name}</h1>
        <h2 className="profession">{data.profession}</h2>
        <div className="resume">
          <a className="btn resume-btn" href="resume">
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
