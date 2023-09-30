import React from "react";
import Button from "../button/Button";

const CardFriend = () => {
  return (
    <div className="bg-slate-300 shadow-lg shadow-slate-400 rounded-md overflow-hidden">
      <div className="border-b border-slate-400 sm:h-[150px] md:h-[250px] xl:h-[300px]">
        <img
          className="w-full h-full object-cover"
          src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg"
          alt=""
        />
      </div>
      <div className="sm:p-2 grid gap-3">
        <h1 className="sm:text-base line-clamp-1 font-bold xl:text-xl">Lê Gia Linh</h1>
        <Button className="bg-[#e4e6eb] text-blue-600 sm:text-sm  xl:h-[50px] xl:text-xl py-2 capitalize rounded-md font-bold flex gap-x-1 items-center justify-center">
          <span>
            <i className="fa-solid fa-user-plus"></i>
          </span>
          <span>Add friend</span>
        </Button>
        <Button className="bg-[#e4e6eb] text-red-600 sm:text-sm xl:h-[50px] xl:text-xl py-2 capitalize rounded-md font-bold flex gap-x-1 items-center justify-center">
          <span>
            <i className="fa-solid fa-user-minus"></i>
          </span>
          <span>Remove friend</span>
        </Button>
      </div>
    </div>
  );
};

export default CardFriend;
