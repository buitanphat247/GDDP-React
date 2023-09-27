import React from "react";
import Button from "./button/Button";
import { useDispatch } from "react-redux";
import { setSideBarShow } from "../slice/SideBarToggleSlice";

const HeaderNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="dark:bg-slate-800 sm:w-full xl:px-5 sm:px-2 sm:gap-x-2 flex justify-between py-3 sticky top-0 z-50 shadow-md shadow-slate-400  mb-5 bg-slate-300">
      <input
        autoFocus={false}
        type="text"
        placeholder="Search your posts..."
        className="w-full h-[50px] bg-[#e4e6eb] sm:text-sm
                placeholder:text-black outline-none border-2 border-transparent focus:border-blue-500 rounded-3xl px-5"
      />
      <div className="flex sm:gap-x-2 ">
        <Button className="cursor-pointer h-[50px] w-[50px] text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center">
          <i className="fa-solid fa-bell"></i>
        </Button>
        <Button
          onClick={() => dispatch(setSideBarShow(true))}
          className="xl:hidden cursor-pointer h-[50px] w-[50px] text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeaderNav;
