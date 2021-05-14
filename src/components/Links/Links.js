import React from "react";
import Link from "../Link/Link";

const Links = ({ links }) => {
  return (
    <ul className="nav-links">
      {links.map((link) => (
        <Link key={link.title} link={link.link} title={link.title} />
      ))}
    </ul>
  );
};

export default Links;
