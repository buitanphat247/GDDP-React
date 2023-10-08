import React from "react";
import SlideAlbum from "../modules/SlideAlbum";
import PostFearture from "../modules/posts/PostFearture";
import PostNewest from "../modules/posts/PostNewest";
import HeaderNav from "../components/HeaderNav";
import PostRecomend from "../modules/posts/PostRecomend";

const Home = () => {
  document.title = "Giáo Dục Địa Phương";
  return (
    <div className={` border-black dark:bg-slate-500 transition-all`}>
      <HeaderNav></HeaderNav>
      <SlideAlbum></SlideAlbum>
      <PostFearture title={"bài viết nổi bật"}></PostFearture>
      <PostNewest title={"bài viết mới nhất"}></PostNewest>
      <PostRecomend title={"bài viết đề xuất"}></PostRecomend>
    </div>
  );
};

export default Home;
