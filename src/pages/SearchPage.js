import React from "react";
import Button from "../components/button/Button";
import PostItemFearture from "../modules/post-items/PostItemFearture";
import HeaderNav from "../components/HeaderNav";
import useDataPost from "../hooks/useDataPost";
import parse from "html-react-parser";
import { useNavigate } from "react-router";

const SearchPage = () => {
  document.title = "Tìm kiếm | Giáo Dục Địa Phương ";
  const { dataPost } = useDataPost();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/details-news-page/${id}`);
  };
  return (
    <div className="border-black">
      <HeaderNav></HeaderNav>
      <div className=" sm:px-3 sm:pb-5 xl:px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:pb-5">
          {dataPost.length > 0 &&
            dataPost.map((item, index) => {
              return (
                <PostItemFearture
                  key={index}
                  category={item.category}
                  link_image={item.link_image}
                  title={item.title}
                  author={item.author}
                  html={parse(item.html)}
                  createAt={item.createdAt}
                  onClick={() => handleClick(item.post_id)}
                ></PostItemFearture>
              );
            })}
        </div>
        <Button className="flex sm:gap-x-2 items-center justify-center px-5 min-w-[150px] h-[50px] bg-blue-400 sm:text-base rounded-md mx-auto col-span-5 font-bold uppercase text-white">
          <span>Load more</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
