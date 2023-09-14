import React from "react";
import NavBarPosts from "../navBars/NavBarPosts";
import PosItemNewestLarge from "../post-items/PosItemNewestLarge";
import PostItemNewestMini from "../post-items/PostItemNewestMini";

const PostNewest = () => {
  return (
    <div className="pb-10 px-10">
      <NavBarPosts title="Bài viết Nổi bật"></NavBarPosts>
      <div className="grid grid-cols-4 gap-x-5 mt-5">
        <PosItemNewestLarge></PosItemNewestLarge>
        <div className="col-span-2 grid gap-y-3">
          <PostItemNewestMini></PostItemNewestMini>
          <PostItemNewestMini></PostItemNewestMini>
          <PostItemNewestMini></PostItemNewestMini>
        </div>
      </div>
    </div>
  );
};

export default PostNewest;
