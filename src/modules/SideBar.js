import React from "react";
import Button from "../components/button/Button";
import { auth } from "../store/firebaseconfig";
import { signOut } from "@firebase/auth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../slice/LoginSlice";
import { setSideBarShow } from "../slice/SideBarToggleSlice";
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
  const dispatch = useDispatch();
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
        dispatch(setIsLogin(false));
        dispatch(setSideBarShow(false));
        localStorage.setItem("isLogin", false);
        navigate("/");
        try {
          signOut(auth);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const { isShow } = useSelector((state) => state.ShowSideBarSlice);
  const { isLogin } = useSelector((state) => state.Login);

  return (
    <div
      className={`${
        isShow === true
          ? "sm:translate-x-[0%] xl:translate-x-[0%]"
          : "sm:translate-x-[-100%] xl:translate-x-[0%]"
      }  sm:absolute xl:sticky xl:top-0 xl:border-r xl:border-black xl:bottom-0 xl:left-0 xl:h-[100vh] md:fixed  sm:w-full md:w-[50%] lg:w-[30%] xl:w-[100%] sm:bottom-0 sm:top-0 sm:left-0 sm:right-0 transition-all z-[100] h-auto overflow-auto bg-slate-300`}
    >
      {/* logo */}
      <div className="flex justify-between items-center px-3 sm:py-2">
        <div className="text-4xl uppercase font-bold ">
          <NavLink
            to="/"
            onClick={() => dispatch(setSideBarShow(false))}
            className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
          >
            LinuStar
          </NavLink>
        </div>
        <Button
          onClick={() => dispatch(setSideBarShow(false))}
          className="text-3xl bg-gray-100 rounded-full w-[50px] h-[50px] sm:block xl:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      {/* line */}
      <div className="px-3">
        <div className=" border border-gray-500 w-full h-[1px]"></div>
      </div>
      <div className="h-full xl:h-[80vh]">
        {/* items */}
        <div className="grid gap-y-3 mt-2 px-3">
          <NavLink
            to="/"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? "text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
            }
          >
            <span className="w-[50px] h-full flex items-center justify-center">
              {sideBar_list[0].icon}
            </span>
            {sideBar_list[0].name}
          </NavLink>
          <NavLink
            onClick={() => dispatch(setSideBarShow(false))}
            to="/search-page-content"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
            }
          >
            <span className="w-[50px] h-full flex items-center justify-center">
              {sideBar_list[1].icon}
            </span>
            {sideBar_list[1].name}
          </NavLink>
          <NavLink
            to="/add-new-friend"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? "text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
            }
          >
            <span className="w-[50px] h-full flex items-center justify-center">
              {sideBar_list[2].icon}
            </span>
            {sideBar_list[2].name}
          </NavLink>
          <NavLink
            to="/anh-dep-ba-ria-vung-tau"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? "text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
            }
          >
            <span className="w-[50px] h-full flex items-center justify-center">
              <i className="fa-regular fa-image"></i>{" "}
            </span>
            Album
          </NavLink>

          <div className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer">
            <span className="w-[50px] h-full flex items-center justify-center">
              {sideBar_list[3].icon}
            </span>
            {sideBar_list[3].name}
          </div>

          {/* line */}

          {isLogin === true && (
            <>
              <div className="px-3">
                <div className=" border border-gray-500 w-full h-[1px]"></div>
              </div>
              {/* <NavLink
                to="profile"
                onClick={() => dispatch(setSideBarShow(false))}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                    : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
                }
              >
                <span className="w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[4].icon}
                </span>
                {sideBar_list[4].name}
              </NavLink> */}
              <NavLink
                to="/manage"
                onClick={() => dispatch(setSideBarShow(false))}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold text-blue-800 capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg"
                    : "text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent"
                }
              >
                <span className="w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[5].icon}
                </span>
                {sideBar_list[5].name}
              </NavLink>
              <NavLink
                to="https://www.facebook.com/THPT.VungTau"
                onClick={() => dispatch(setSideBarShow(false))}
                target="_blank"
                className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer"
                rel="noreferrer"
              >
                <span className="w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[6].icon}
                </span>
                {sideBar_list[6].name}
              </NavLink>
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
          )}
          {/* nút đăng kí đăng nhập */}
          {isLogin !== true && (
            <>
              <Button
                isNavLink={true}
                url="/sign-up-for-new-users"
                onClick={() => dispatch(setSideBarShow(false))}
                className="text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-blue-400 mx-3 rounded-lg"
              >
                <span className="w-[50px] h-full flex items-center justify-center">
                  <i className="fa-solid fa-user-plus"></i>
                </span>
                <span>Đăng Kí</span>
              </Button>
              <Button
                isNavLink={true}
                onClick={() => dispatch(setSideBarShow(false))}
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

        {isLogin === true && (
          <NavLink
            to="/manage/add-posts"
            className="sm:hidden xl:flex text-black bg-blue-400 w-full absolute bottom-0 text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer"
          >
            <span className="w-[50px] h-full flex items-center justify-center">
              <i className="fa-regular fa-pen-to-square"></i>
            </span>
            write news posts
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default SideBar;
