import React from "react";

const CardPost = ({ title, link_image }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="sm:w-[50px] sm:h-[50px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={link_image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-left capitalize line-clamp-2 sm:text-lg xl:text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default CardPost;
