import React from "react";
import Button from "../button/Button";

const Remove = ({ onClick }) => {
  return (
    <Button
      onClick={onClick} 
      className="border-2 xl:text-2xl sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] sm:text-sm rounded-lg border-gray-600 flex items-center justify-center"

    >
      <i className="fa-solid fa-trash"></i>
    </Button>
  );
};

export default Remove;
