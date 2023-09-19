import React from "react";
import SlideAlbum from "../modules/SlideAlbum";
import PostFearture from "../modules/posts/PostFearture";
import PostNewest from "../modules/posts/PostNewest";
import PostRecomend from "../modules/posts/PostRecomend";
import HeaderNav from "../components/HeaderNav";

const Home = () => {
  return (
    <div className="border-black">
      <HeaderNav></HeaderNav>
      <SlideAlbum></SlideAlbum>
      <PostFearture></PostFearture>
      <PostNewest></PostNewest>
      <PostRecomend></PostRecomend>
    </div>
  );
};

export default Home;
