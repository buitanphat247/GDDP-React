import React from "react";
import { NavLink } from "react-router-dom";

const HeaderManage = () => {
  return (
    <div className="bg-slate-200 sticky top-0">
      <div className="grid grid-cols-5 capitalize text-xl font-bold">
        <NavLink
          to="/manage"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-newspaper"></i>All Posts
        </NavLink>
        <NavLink
          to="/manage/overview-users"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-users"></i>
          All Users
        </NavLink>
        <NavLink
          to="/manage/overview-categories"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-boxes-stacked"></i>
          all categories
        </NavLink>
        <NavLink
          to="/manage/add-posts"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-regular fa-pen-to-square"></i>
          Add posts
        </NavLink>
        <NavLink
          to="/manage/categories"
          className={
            "w-full text-center py-3 border-b-4 border-transparent flex items-center justify-center gap-x-3"
          }
        >
          <i className="fa-solid fa-box"></i> Add category
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderManage;
