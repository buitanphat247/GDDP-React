import React from "react";
import Button from "../button/Button";

const Edit = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="border-2 sm:w-[35px] xl:text-2xl sm:h-[35px] md:w-[50px] md:h-[50px] sm:text-sm rounded-lg border-gray-600 flex items-center justify-center"
    >
      <i className="fa-solid fa-pen-to-square"></i>
    </Button>
  );
};

export default Edit;
