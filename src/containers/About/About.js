import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import data from "../../data";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        markers: false,
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart complete reverse reset",
      },
    });
    t1.from(headingRef.current, {
      duration: 2,
      x: "-100",
      opacity: 0,
      ease: "ease-in",
    });
    t1.from(aboutTextRef.current, {
      duration: 2,
      x: "-100",
      opacity: 0,
      ease: "ease-in",
    });
    t1.from(aboutImageRef.current, {
      duration: 2,
      x: 100,
      opacity: 0,
      ease: "ease-in",
    });
  });

  return (
    <section id="about" ref={aboutRef}>
      <div className="section-heading" ref={headingRef}>
        <h1 data-text="A little about me">ABOUT</h1>
      </div>
      <section className="section-content">
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
      </section>
    </section>
  );
};

export default About;
