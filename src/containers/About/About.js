import React, { useEffect, useRef } from "react";
import "./About.css";
import {
  ScrollTriggerTimeline,
  SwipeInFromLeft,
  SwipeInFromRight,
} from "../../animation";
import data from "../../data";

const About = () => {
  const headingRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    let t1 = ScrollTriggerTimeline(aboutRef.current);

    SwipeInFromLeft(t1, headingRef.current);
    SwipeInFromLeft(t1, aboutTextRef.current);
    SwipeInFromRight(t1, aboutImageRef.current);
  });

  return (
    <section id="about" className="section" ref={aboutRef}>
      <div className="section-heading" ref={headingRef}>
        <h1 data-text="A little about me">ABOUT</h1>
      </div>
      <div className="section-content">
        <div className="about-text" ref={aboutTextRef}>
          <p>{data.aboutMe[0]}</p>
          <br />
          <p>{data.aboutMe[1]}</p>
          <br />
          <p>{data.aboutMe[2]}</p>
        </div>
        <div className="about-img" ref={aboutImageRef}>
          <img src={data.profileUrl} alt="profile pic" />
        </div>
      </div>
    </section>
  );
};

export default About;
