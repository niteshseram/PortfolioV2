import React from "react";
import "./Footer.css";
import data from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="social-link">
        <ul>
          <li>
            <a
              href={data.socialLinks.profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <img src={data.socialLinks.icons.github} alt="github" />
            </a>
          </li>
          <li>
            <a
              href={data.socialLinks.profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <img src={data.socialLinks.icons.linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <p>Designed and Built by S. Nitesh Singh</p>
    </footer>
  );
};

export default Footer;
