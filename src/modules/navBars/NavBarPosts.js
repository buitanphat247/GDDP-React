import React from "react";

const NavBarPosts = ({ title }) => {
  return (
    <div className="flex justify-between items-center text-xl capitalize">
      <h1 className="font-bold">{title}</h1>
      <h1 className="font-bold cursor-pointer hover:underline">
        Xem thêm <i className="fa-solid fa-chevron-right"></i>
      </h1>
    </div>
  );
};

export default NavBarPosts;
