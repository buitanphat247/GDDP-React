import React from "react";
import Button from "../components/button/Button";
import CardFriend from "../components/card/CardFriend";
import HeaderNav from "../components/HeaderNav";

const AddFriendPage = () => {
  return (
    <div className="border-black">
      <HeaderNav></HeaderNav>
      <div className="grid grid-cols-5 gap-5 px-10 pb-10">
        {Array(20)
          .fill("")
          .map((item, index) => {
            return <CardFriend key={index}></CardFriend>;
          })}
        <Button className="flex gap-x-5 items-center justify-center px-5 min-w-[150px] h-[50px] bg-blue-400 text-xl rounded-md mx-auto col-span-5 font-bold uppercase text-white">
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
