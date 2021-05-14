import React from "react";

const Link = ({ link, title }) => {
  return (
    <li>
      <a href="{link}">{title}</a>
    </li>
  );
};

export default Link;
