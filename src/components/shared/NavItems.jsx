import React from "react";

const NavItems = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="duration-400 font-medium ease-linear hover:text-primary py-3"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItems;
