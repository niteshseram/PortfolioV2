import React, { useEffect, useRef } from "react";
import "./Introduction.css";
import { Timeline, FadeUpEnter } from "../../animation";
import data from "../../data";

const Introduction = () => {
  const imageRef = useRef(null);
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    let t1 = Timeline();

    FadeUpEnter(t1, imageRef.current);
    FadeUpEnter(t1, hiRef.current);
    FadeUpEnter(t1, nameRef.current);
    FadeUpEnter(t1, professionRef.current);
    FadeUpEnter(t1, resumeRef.current);
  }, []);

  return (
    <section id="intro">
      <div className="image" ref={imageRef}>
        <img src={data.profileUrl} alt="profile pic" />
      </div>
      <div className="intro-text">
        <h1 className="hi" ref={hiRef}>
          Hi, I'm
        </h1>
        <h1 className="name" ref={nameRef}>
          {data.name}
        </h1>
        <h2 className="profession" ref={professionRef}>
          {data.profession}
        </h2>
        <div className="resume" ref={resumeRef}>
          <a className="btn resume-btn" href="resume">
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
