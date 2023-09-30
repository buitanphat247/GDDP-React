import React from "react";
import Button from "../components/button/Button";
import CardFriend from "../components/card/CardFriend";
import HeaderNav from "../components/HeaderNav";

const AddFriendPage = () => {
  document.title = "Bạn bè | Giáo Dục Địa Phương ";

  return (
    <div className="border-black dark:bg-slate-500 transition-all">
      <HeaderNav></HeaderNav>
      <div className=" sm:px-3 sm:pb-5 xl:px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:pb-5">
          {Array(24)
            .fill("")
            .map((item, index) => {
              return <CardFriend key={index}></CardFriend>;
            })}
        </div>
        <Button className="flex sm:gap-x-2 items-center justify-center px-5 min-w-[150px] h-[50px] bg-blue-400 sm:text-base rounded-md mx-auto col-span-5 font-bold uppercase text-white">
          <span>Load more</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AddFriendPage;
