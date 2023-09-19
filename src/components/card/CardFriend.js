import React from "react";
import Button from "../button/Button";

const CardFriend = () => {
  return (
    <div className="bg-white shadow-lg shadow-slate-400 rounded-md overflow-hidden">
      <div className="border-b border-slate-400 h-[250px]">
        <img
        className="w-full h-full object-cover"
          src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg"
          alt=""
        />
      </div>
      <div className="p-3 grid gap-3">
        <h1 className="text-xl font-bold">Bùi Tấn Phát</h1>
        <Button className="bg-[#e4e6eb] text-blue-600 text-lg py-2 capitalize rounded-md font-bold flex gap-x-3 items-center justify-center">
          <span>
            <i className="fa-solid fa-user-plus"></i>
          </span>
          <span>Add friend</span>
        </Button>
        <Button className="bg-[#e4e6eb] text-red-600 text-lg py-2 capitalize rounded-md font-bold flex gap-x-3 items-center justify-center">
          <span>
            <i class="fa-solid fa-user-minus"></i>
          </span>
          <span>Remove friend</span>
        </Button>
      </div>
    </div>
  );
};

export default CardFriend;
