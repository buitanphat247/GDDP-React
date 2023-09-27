import React from "react";
import SideBar from "../modules/SideBar";
import { Outlet } from "react-router";
import Footer from "../modules/Footer";
import { useSelector } from "react-redux";

const Main = () => {
  const { isShow } = useSelector((state) => state.ShowSideBarSlice);

  return (
    <div className="xl:relative grid grid-cols-7">
      <SideBar></SideBar>
      <div
        className={`${
          isShow === true ? "sm:hidden md:block " : ""
        } sm:col-span-7 xl:col-span-6 relative`}
      >
        <Outlet></Outlet>
        <Footer></Footer>
        {isShow === true ? (
          <div className="w-full bg-black fixed top-0 h-full z-[80] opacity-80"></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Main;
