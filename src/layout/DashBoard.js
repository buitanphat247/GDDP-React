import React from "react";
import HeaderManage from "../modules/Manage/HeaderManage";
import { Outlet } from "react-router";

const DashBoard = () => {
  return (
    <div className="">
      <HeaderManage></HeaderManage>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoard;
