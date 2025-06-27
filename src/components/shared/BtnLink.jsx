import React from "react";

const BtnLink = ({ href, text, className = "" }) => {
  return (
    <a
      href={href}
      className={`rounded-full px-6 py-3 outline-none relative overflow-hidden border
                                 dark:bg-violet-600 cursor-pointer hover:scale-102 transform transition-all ease-in-out duration-300 ${className}`}
    >
      <span className="relative z-10 text-white ">{text}</span>
    </a>
  );
};

export default BtnLink;
