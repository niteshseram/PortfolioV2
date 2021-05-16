import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { ScrollTriggerTimeline, FadeUpEnter } from "../../animation";

const Contact = () => {
  const contactSectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraOneRef = useRef(null);
  const paraTwoRef = useRef(null);
  const contactButtonRef = useRef(null);

  useEffect(() => {
    let t1 = ScrollTriggerTimeline(contactSectionRef.current);

    FadeUpEnter(t1, headingRef.current);
    FadeUpEnter(t1, paraOneRef.current);
    FadeUpEnter(t1, paraTwoRef.current);
    FadeUpEnter(t1, contactButtonRef.current);
  }, []);

  return (
    <section id="contact-section" className="section">
      <div id="contact" ref={contactSectionRef}>
        <div className="section-heading" ref={headingRef}>
          <h1 data-text="Let's talk">CONTACT</h1>
        </div>
        <div className="section-content">
          <h1 ref={paraOneRef}>Want to connect?</h1>
          <h4 ref={paraTwoRef}>Reach out to me. My inbox is always open!</h4>
          <div className="contact" ref={contactButtonRef}>
            <a className="btn contact-btn" href="mailto:niteshseram@gmail.com">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
