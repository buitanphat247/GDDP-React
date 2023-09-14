import React from "react";
import SideBar from "../modules/SideBar";
import { Outlet } from "react-router";
import Footer from "../modules/Footer";

const Main = () => {
  return (
    <div className="grid grid-cols-7">
      <SideBar></SideBar>
      <div className="col-span-6">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
