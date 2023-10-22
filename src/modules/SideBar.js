import React from "react";
import Button from "../components/button/Button";
import { auth } from "../store/firebaseconfig";
import { signOut } from "@firebase/auth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../slice/LoginSlice";
import { setSideBarShow } from "../slice/SideBarToggleSlice";
import { toast } from "react-toastify";
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
    name: "friend",
    icon: <i className="fa-solid fa-user-group"></i>,
  },
  {
    name: "docs",
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
    name: "support",
    icon: <i className="fa-solid fa-headset"></i>,
  },
  {
    name: "log out",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
  },
  {
    name: "games",
    icon: <i className="fa-solid fa-gamepad"></i>,
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
  const handleToast = () => {
    toast.info("Đang trong quá trình phát triển");
  };
  return (
    <div
      className={`dark:bg-slate-800 ${
        isShow === true
          ? "sm:translate-x-[0%] xl:translate-x-[0%]"
          : "sm:translate-x-[-100%] xl:translate-x-[0%]"
      }  dark:border-white dark:text-white sm:absolute  xl:sticky xl:top-0 xl:border-r xl:border-black
       xl:bottom-0 xl:left-0 xl:h-[100vh] md:fixed  sm:w-[100%] md:w-[50%]
       lg:w-[50%] xl:w-[100%] sm:bottom-0 sm:top-0 sm:left-0 sm:right-0 transition-all z-[100] h-auto overflow-auto bg-slate-300 select-none`}
    >
      {/* logo */}
      <div className="flex justify-between items-center px-3 sm:py-2">
        <div className="text-4xl uppercase font-bold flex items-center justify-center w-full">
          <NavLink
            to="/"
            onClick={() => dispatch(setSideBarShow(false))}
            className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 mx-auto block to-red-500 transition-all line-clamp-1 xl:text-xl 2xl:text-3xl"
          >
            {/* <img srcSet={"logo-web.png"} alt="" />
             */}
             GDDP-BRVT
          </NavLink>
        </div>
        <Button
          onClick={() => dispatch(setSideBarShow(false))}
          className="text-3xl bg-gray-100 text-black rounded-full w-[50px] h-[50px] sm:block xl:hidden"
        >
          <i className="fa-solid fa-xmark text-black"></i>
        </Button>
      </div>
      {/* line */}
      <div className="px-3">
        <div className=" border border-gray-500 w-full h-[1px] dark:border-white"></div>
      </div>
      <div className="h-full xl:h-[80vh]">
        {/* items */}
        <div className="grid gap-y-3 mt-2 px-3 ">
          <NavLink
            to="/"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? "text-lg 2xl:text-lg xl:text-sm text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg line-clamp-1"
                : "text-lg 2xl:text-lg xl:text-sm font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent line-clamp-1"
            }
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              {sideBar_list[0].icon}
            </span>
            <span className="line-clamp-1  flex-1">{sideBar_list[0].name}</span>
          </NavLink>
          <NavLink
            onClick={() => dispatch(setSideBarShow(false))}
            to="/search-page-content"
            className={({ isActive }) =>
              isActive
                ? "text-lg xl:text-sm  2xl:text-lg text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg line-clamp-1"
                : "text-lg xl:text-sm  2xl:text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent line-clamp-1"
            }
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              {sideBar_list[1].icon}
            </span>
            <span className="line-clamp-1  flex-1">{sideBar_list[1].name}</span>
          </NavLink>
          <div
            onClick={handleToast}
            className="text-lg xl:text-sm  2xl:text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer  rounded-lg line-clamp-1"
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              {sideBar_list[2].icon}
            </span>
            <span className="line-clamp-1  flex-1">{sideBar_list[2].name}</span>
          </div>

          <NavLink
            to="/docs"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? " 2xl:text-lg text-lg xl:text-sm text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg line-clamp-1"
                : " 2xl:text-lg text-lg xl:text-sm font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent line-clamp-1"
            }
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              {sideBar_list[3].icon}
            </span>
            <span className="line-clamp-1  flex-1">{sideBar_list[3].name}</span>
          </NavLink>

          <NavLink
            to="/games"
            onClick={() => dispatch(setSideBarShow(false))}
            className={({ isActive }) =>
              isActive
                ? "text-lg  2xl:text-lg xl:text-sm text-blue-800 font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg line-clamp-1"
                : "text-lg  2xl:text-lg xl:text-sm font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent line-clamp-1"
            }
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              {sideBar_list[8].icon}
            </span>
            <span className="line-clamp-1  flex-1">{sideBar_list[8].name}</span>
          </NavLink>

          {/* line */}

          {isLogin === true && (
            <>
              <div className="px-3">
                <div className=" border border-gray-500 w-full h-[1px] dark:border-white"></div>
              </div>
              <NavLink
                to="/manage"
                onClick={() => dispatch(setSideBarShow(false))}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg  2xl:text-lg xl:text-sm font-bold text-blue-800 capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-white rounded-lg line-clamp-1"
                    : "text-lg  2xl:text-lg xl:text-sm font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer border-r-4 border-transparent line-clamp-1"
                }
              >
                <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[5].icon}
                </span>
                <span className="line-clamp-1  flex-1">
                  {sideBar_list[5].name}
                </span>
              </NavLink>
              <NavLink
                to="https://www.facebook.com/THPT.VungTau"
                onClick={() => dispatch(setSideBarShow(false))}
                target="_blank"
                className="text-lg 2xl:text-lg xl:text-sm font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer line-clamp-1"
                rel="noreferrer"
              >
                <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[6].icon}
                </span>
                <span className="line-clamp-1  flex-1">
                  {sideBar_list[6].name}
                </span>
              </NavLink>
              {/* handle logout */}
              <div
                onClick={handleLogout}
                className="text-lg font-bold 2xl:text-lg xl:text-sm capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer line-clamp-1"
              >
                <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
                  {sideBar_list[7].icon}
                </span>
                <span className="line-clamp-1  flex-1">
                  {sideBar_list[7].name}
                </span>
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
                className="text-lg xl:text-sm 2xl:text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-blue-400 mx-3 rounded-lg"
              >
                <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
                  <i className="fa-solid fa-user-plus"></i>
                </span>
                <span className="line-clamp-1  flex-1">Đăng Kí</span>
              </Button>
              <Button
                isNavLink={true}
                onClick={() => dispatch(setSideBarShow(false))}
                url="/sign-in-for-users"
                className="text-lg xl:text-sm 2xl:text-lg font-bold capitalize h-[50px] flex items-center px-3 gap-x-2 cursor-pointer bg-blue-400 mx-3 rounded-lg"
              >
                <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </span>
                <span className="line-clamp-1  flex-1">Đăng Nhập</span>
              </Button>
            </>
          )}
        </div>

        {isLogin === true && (
          <NavLink
            to="/manage/add-posts"
            className="sm:hidden 2xl:text-lg xl:flex xl:text-sm text-black bg-blue-400 w-full absolute bottom-0 text-lg font-bold capitalize h-[50px] flex items-center px-3 cursor-pointer line-clamp-1"
          >
            <span className="w-[20px]  2xl:w-[50px] h-full flex items-center justify-center">
              <i className="fa-regular fa-pen-to-square"></i>
            </span>
            <span className="line-clamp-1  flex-1">write posts</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default SideBar;
