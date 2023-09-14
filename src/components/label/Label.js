import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="capitalize sm:text-lg md:text-xl xl:text-2xl  cursor-pointer font-bold"
    >
      {children}
    </label>
  );
};

export default Label;
