import React from "react";

const SubmitButton = ({ onClick, children, className = "" }) => {
  return (
    <button
      className={`px-6 py-3 rounded-full outline-none cursor-pointer 
    relative overflow-hidden border  border-transparent hover:scale-[1.02] transition-all duration-300 hover:bg-violet-700 bg-violet-600
    ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
