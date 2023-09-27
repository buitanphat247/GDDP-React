import React from "react";
import HeaderManage from "../modules/Manage/HeaderManage";
import { Outlet } from "react-router";

const DashBoard = () => {
  document.title='Quản lí | Giáo Dục Địa Phương'
  return (
    <div>
      <HeaderManage></HeaderManage>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoard;
