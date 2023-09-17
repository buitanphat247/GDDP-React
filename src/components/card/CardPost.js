import React from "react";

const CardPost = ({ title, link_image }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-[50px] h-[50px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={link_image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-left capitalize line-clamp-2">{title}</h1>
      </div>
    </div>
  );
};

export default CardPost;
