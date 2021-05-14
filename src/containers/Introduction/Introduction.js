import React, { useRef, useEffect } from "react";
import "./Introduction.css";
import { gsap, TweenLite } from "gsap";

const Introduction = () => {
  const imgRef = useRef(null);
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const profRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    let t1 = gsap.timeline();
    TweenLite.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );
    t1.fromTo(
      hiRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    t1.fromTo(
      nameRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    t1.fromTo(
      profRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    t1.fromTo(
      resumeRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="intro">
      <div className="image" ref={imgRef}>
        <img src="../../PortfolioV2/assets/images/dp.png" alt="profile pic" />
      </div>
      <div className="intro-text">
        <h1 className="hi" ref={hiRef}>
          Hi, I'm
        </h1>
        <h1 className="name" ref={nameRef}>
          Nitesh Seram
        </h1>
        <h2 className="profession" ref={profRef}>
          Full Stack Web Developer
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
