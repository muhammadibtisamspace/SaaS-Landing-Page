import React from "react";
import Paragraph from "../shared/Paragraph";

const Info = ({ title, description, children }) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                        shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-gray dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative bg-body font-semibold md:text-xl">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default Info;
