import React from "react";

const Container = ({ children, classname = "" }) => {
  return (
    <div
      className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${classname}`}
    >
      {children}
    </div>
  );
};

export default Container;
