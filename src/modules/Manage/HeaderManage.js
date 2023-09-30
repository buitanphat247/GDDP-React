import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import { setSideBarShow } from "../../slice/SideBarToggleSlice";
import { useDispatch } from "react-redux";

const HeaderManage = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-200 sticky top-0 z-50 dark:bg-slate-800 dark:text-white shadow-md shadow-white">
      <div className="grid sm:grid-cols-5 xl:grid-cols-4 capitalize text-xl font-bold">
        <NavLink
          to="/manage"
          className={
            "w-full py-3 border-b-4 border-transparent flex items-center justify-center sm:gap-x-2"
          }
        >
          <i className="fa-solid fa-newspaper"></i>
          <span className="sm:hidden xl:block">All Posts</span>
        </NavLink>
        <NavLink
          to="/manage/overview-categories"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-boxes-stacked"></i>
          <span className="sm:hidden xl:block">all categories</span>
        </NavLink>
        <NavLink
          to="/manage/add-posts"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-regular fa-pen-to-square"></i>
          <span className="sm:hidden xl:block">Add posts</span>
        </NavLink>
        <NavLink
          to="/manage/categories"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-box"></i>
          <span className="sm:hidden xl:block">Add category</span>
        </NavLink>
        <Button
          onClick={() => dispatch(setSideBarShow(true))}
          className="cursor-pointer h-[50px] w-full xl:hidden text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeaderManage;
