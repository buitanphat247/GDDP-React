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
      className="bg-slate-300 p-2 rounded-md cursor-pointer relative group"
    >
      <div className="rounded-md relative w-full sm:h-[250px] lg:h-[150px] xl:h-[250px]">
        <img className="w-full h-full rounded-md" src={link_image} alt="" />
        <div className="absolute top-3 right-3 flex justify-end">
          <Button className="sm:text-base sm:w-[100px] h-[30px] text-red-500 rounded-md bg-slate-300 capitalize font-bold">
            Kiến thức
          </Button>
        </div>
      </div>
      <div className="sm:mt-2 flex flex-col sm:gap-y-1 text-justify">
        <h1 className="font-bold capitalize sm:text-lg xl:text-2xl line-clamp-2">
          {title}
        </h1>
        <div className="sm:text-sm md:text-base line-clamp-5 my-2 font-medium">
          {html}
        </div>
        <h1 className="flex justify-between font-bold sm:text-sm md:text-base">
          <span>{createAt}</span>
          <span>{author}</span>
        </h1>
      </div>
      <div className="bg-black absolute top-0 w-full h-full rounded-md opacity-0 transition-all group-hover:opacity-30 left-0 right-0"></div>
    </div>
  );
};

export default PostItemFearture;
