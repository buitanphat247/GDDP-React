import React from "react";
import NavBarPosts from "../navBars/NavBarPosts";
import PostItemFearture from "../post-items/PostItemFearture";

const PostFearture = () => {
  return (
    <div className="pb-10 px-10">
      <NavBarPosts title="Bài viết Mới nhất"></NavBarPosts>
      <div className="grid grid-cols-4 gap-x-5 mt-5">
        <PostItemFearture></PostItemFearture>
        <PostItemFearture></PostItemFearture>
        <PostItemFearture></PostItemFearture>
        <PostItemFearture></PostItemFearture>
      </div>
    </div>
  );
};

export default PostFearture;
