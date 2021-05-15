import React, { useEffect } from "react";
import "./Introduction.css";
import { gsap, TweenLite } from "gsap";
import data from "../../data";

const Introduction = () => {
  useEffect(() => {
    let t1 = gsap.timeline();
    TweenLite.fromTo(
      ".image",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );
    t1.fromTo(".hi", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    t1.fromTo(
      ".name",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    t1.fromTo(
      ".profession",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    t1.fromTo(
      ".resume",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
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
