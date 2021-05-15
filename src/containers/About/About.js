import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import data from "../../data";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(".about-heading-animation", {
      duration: 3,
      x: "-100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".about-heading-animation",
        markers: true,
        start: "top 90%",
        end: "bottom 0%",
        toggleActions: "restart complete reverse reset",
      },
    });
    gsap.from(".text", {
      duration: 3,
      x: "-100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".text",
        markers: true,
        start: "top 50%",
        end: "bottom 0%",
        toggleActions: "restart complete reverse reset",
      },
    });
    gsap.from(".about-img", {
      duration: 3,
      x: -100,
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".about-img",
        markers: true,
        start: "top 50%",
        end: "bottom 0%",
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);

  return (
    <section id="about">
      <div className="section-heading about-heading-animation">
        <h1 data-text="A little about me">ABOUT</h1>
      </div>
      <section className="section-content">
        <div className="about-text">
          <p className="text">{data.aboutMe[0]}</p>
          <br />
          <p className="text">{data.aboutMe[1]}</p>
          <br />
          <p className="text">{data.aboutMe[2]}</p>
        </div>
        <div className="about-img">
          <img src={data.profileUrl} alt="profile pic" />
        </div>
      </section>
    </section>
  );
};

export default About;
