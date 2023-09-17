import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/button/Button";
import { auth } from "../store/firebaseconfig";
import { signOut } from "@firebase/auth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
const sideBar_list = [
  {
    name: "home",
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    name: "search",
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
  },
  {
    name: "news friend",
    icon: <i className="fa-solid fa-user-group"></i>,
  },
  {
    name: "docx",
    icon: <i className="fa-solid fa-file-word"></i>,
  },
  {
    name: "account",
    icon: <i className="fa-regular fa-circle-user"></i>,
  },
  {
    name: "manage",
    icon: <i className="fa-solid fa-database"></i>,
  },
  {
    name: "help & support",
    icon: <i className="fa-solid fa-headset"></i>,
  },
  {
    name: "log out",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
  },
];
const SideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Đăng xuất",
      text: "Xác nhận đăng xuất",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng xuất",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Đăng xuất!", "Đăng xuất thành công", "success");
        navigate("/");
        try {
          signOut(auth);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const { isLogin } = useSelector((state) => state.Login);
  return (
    <div className="border-r h-[100vh]  border-black col-span-1 bg-slate-200 sticky top-0 bottom-0">
      {/* logo */}
      <div className="flex justify-between items-center px-3">
        <div className="text-4xl uppercase font-bold ">
          <h1 className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            LinuStar
          </h1>
        </div>
        <div className="text-2xl cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {/* line */}
      <div className="px-3">
        <div className=" border border-gray-500 w-full h-[1px]"></div>
      </div>
      {/* items */}

      <div className="grid gap-y-3 mt-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-blue-400 "
              : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
          }
        >
          <span className="w-[50px] h-full flex items-center justify-center">
            {sideBar_list[0].icon}
          </span>
          {sideBar_list[0].name}
        </NavLink>
        <div className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer">
          <span className="w-[50px] h-full flex items-center justify-center">
            {sideBar_list[1].icon}
          </span>
          {sideBar_list[1].name}
        </div>
        <div className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer">
          <span className="w-[50px] h-full flex items-center justify-center">
            {sideBar_list[2].icon}
          </span>
          {sideBar_list[2].name}
        </div>
        <div className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer">
          <span className="w-[50px] h-full flex items-center justify-center">
            {sideBar_list[3].icon}
          </span>
          {sideBar_list[3].name}
        </div>

        {/* line */}
        <div className="px-3">
          <div className=" border border-gray-500 w-full h-[1px]"></div>
        </div>

        {isLogin === true ? (
          <>
            <NavLink
              to="/manage/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-blue-400 "
                  : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
              }
            >
              <span className="w-[50px] h-full flex items-center justify-center">
                {sideBar_list[4].icon}
              </span>
              {sideBar_list[4].name}
            </NavLink>

            <NavLink
              to="/manage/posts"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-blue-400 "
                  : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
              }
            >
              <span className="w-[50px] h-full flex items-center justify-center">
                {sideBar_list[5].icon}
              </span>
              {sideBar_list[5].name}
            </NavLink>

            <div className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer">
              <span className="w-[50px] h-full flex items-center justify-center">
                {sideBar_list[6].icon}
              </span>
              {sideBar_list[6].name}
            </div>
            {/* handle logout */}
            <div
              onClick={handleLogout}
              className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer"
            >
              <span className="w-[50px] h-full flex items-center justify-center">
                {sideBar_list[7].icon}
              </span>
              {sideBar_list[7].name}
            </div>
          </>
        ) : (
          <>
            <Button
              isNavLink={true}
              url="/sign-up-for-new-users"
              className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-blue-400 mx-3 rounded-lg"
            >
              <span className="w-[50px] h-full flex items-center justify-center">
                <i className="fa-solid fa-user-plus"></i>
              </span>
              <span>Đăng Kí</span>
            </Button>
            <Button
              isNavLink={true}
              url="/sign-in-for-users"
              className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-blue-400 mx-3 rounded-lg"
            >
              <span className="w-[50px] h-full flex items-center justify-center">
                <i className="fa-solid fa-right-to-bracket"></i>
              </span>
              Đăng Nhập
            </Button>
          </>
        )}
      </div>

      {isLogin && (
        <NavLink
          to="/manage/add-posts"
          className=" bg-blue-400 w-full absolute bottom-0 text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer"
        >
          <span className="w-[50px] h-full flex items-center justify-center">
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
          write news posts
        </NavLink>
      )}
    </div>
  );
};

export default SideBar;
