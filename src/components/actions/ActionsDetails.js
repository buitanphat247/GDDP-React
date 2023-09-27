import React from "react";
import Button from "../button/Button";

const ActionsDetails = () => {
  return (
    <div className="absolute flex gap-x-5 bottom-10 left-10 ">
      <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
        <span>
          <i className="fa-regular fa-heart"></i>
        </span>
      </Button>
      <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
        <span className=" w-[50px] h-full flex items-center justify-center">
          <i className="fa-regular fa-thumbs-up"></i>
        </span>
      </Button>
      <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
        <span className=" w-[50px] h-full flex items-center justify-center">
          <i className="fa-regular fa-thumbs-down"></i>
        </span>
      </Button>
      <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
        <span className=" w-[50px] h-full flex items-center justify-center">
          <i className="fa-solid fa-share-nodes"></i>
        </span>
      </Button>
    </div>
  );
};

export default ActionsDetails;
