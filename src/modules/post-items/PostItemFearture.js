import React from "react";
import Button from "../../components/button/Button";

const PostItemFearture = ({
  category,
  link_image,
  title,
  author,
  html,
  createAt,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-slate-300 p-2 rounded-md cursor-pointer relative group  flex flex-col"
    >
      <div className="rounded-md relative w-full sm:h-[250px] md:h-[350px] lg:h-[250px] xl:h-[250px] 2xl:h-[350px]">
        <img className="w-full h-full rounded-md" src={link_image} alt="" />
        <div className="absolute top-3 right-3 flex justify-end">
          <Button className="sm:text-base sm:min-w-[100px] 2xl:text-lg px-3 h-[30px] xl:text-xs text-red-500 rounded-md bg-slate-300 capitalize font-bold">
            {category}
          </Button>
        </div>
      </div>
      <div className="sm:mt-2 flex flex-col sm:gap-y-1 text-justify flex-1">
        <div className="h-full flex-1 overflow-hidden">
          <h1 className="font-bold capitalize sm:text-lg md:text-2xl 2xl:text-2xl xl:text-lg line-clamp-2">
            {title}
          </h1>
          <div className="sm:text-sm md:text-lg line-clamp-5 my-2 xl:text-sm 2xl:text-lg font-light bg-transparent not-italic">
            {html}
          </div>
        </div>
        <h1 className="flex justify-between font-bold sm:text-base md:text-lg xl:text-sm 2xl:text-base">
          <span className="line-clamp-1">{createAt}</span>
          <span className="line-clamp-1">{author}</span>
        </h1>
      </div>
      <div className="bg-black absolute top-0 w-full h-full rounded-md opacity-0 transition-all group-hover:opacity-30 left-0 right-0"></div>
    </div>
  );
};

export default PostItemFearture;
