import React from "react";
import Button from "./button/Button";
import { useSelector } from "react-redux";
import { auth } from "../store/firebaseconfig";

const HeaderNav = () => {
  const { isLogin } = useSelector((state) => state.Login);
  console.log("🚀 ~ file: HeaderNav.js:8 ~ HeaderNav ~ isLogin:", isLogin);
  return (
    <div className="px-10 gap-x-10 flex justify-between py-3 sticky top-0 z-50 shadow-md shadow-slate-400  mb-5 bg-slate-300">
      <input
        autoFocus={false}
        type="text"
        placeholder="Search your posts..."
        className="w-full h-[50px] bg-[#e4e6eb]
                placeholder:text-black outline-none border-2 border-transparent focus:border-blue-500 rounded-3xl px-5"
      />
      <div className="flex gap-x-5 ">
        <Button className="cur h-[50px] w-[50px] text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center">
          <i className="fa-solid fa-bell"></i>
        </Button>
        {isLogin && (
          <Button className="h-[50px] w-[50px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={auth?.currentUser?.photoURL}
              alt=""
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
