import React from "react";
import Button from "../../components/button/Button";

const NavBarPosts = ({ title }) => {
  return (
    <div className="flex justify-between items-center sm:text-base md:text-lg lg:text-xl xl:text-2xl capitalize">
      <h1 className="font-bold">{title}</h1>
      <Button
        isNavLink={true}
        url="./search-page-content"
        className="font-bold cursor-pointer hover:underline"
      >
        Xem thêm <i className="fa-solid fa-chevron-right"></i>
      </Button>
    </div>
  );
};

export default NavBarPosts;
