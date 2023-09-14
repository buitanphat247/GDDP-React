import React from "react";
import Button from "../components/button/Button";
import SlideAlbum from "../modules/SlideAlbum";
import PostFearture from "../modules/posts/PostFearture";
import PostNewest from "../modules/posts/PostNewest";
import PostRecomend from "../modules/posts/PostRecomend";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLogin } = useSelector((state) => state.Login);
  return (
    <div className="border-black">
      <div className="py-5 px-10 gap-x-10 flex justify-between pb-10">
        <input
          type="text"
          placeholder="Search your posts..."
          className="w-full h-[50px] bg-white
              placeholder:text-black outline-none border-2 border-transparent focus:border-blue-500 rounded-3xl px-5"
        />
        <div className="flex gap-x-5">
          <Button className="cur h-[50px] w-[50px] text-white bg-gray-700 text-2xl rounded-full flex items-center justify-center">
            <i className="fa-solid fa-bell"></i>
          </Button>
          <Button className="h-[50px] w-[50px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={
                isLogin === true
                  ? "https://images.unsplash.com/photo-1694078791403-95d92e7c901e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                  : "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
              }
              alt=""
            />
          </Button>
        </div>
      </div>
      <SlideAlbum></SlideAlbum>
      <PostFearture></PostFearture>
      <PostNewest></PostNewest>
      <PostRecomend></PostRecomend>
    </div>
  );
};

export default Home;
