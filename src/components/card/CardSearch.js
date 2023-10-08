import React from "react";

const CardSearch = ({
  title,
  link_image,
  author,
  dateUpdate,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className="flex xl:px-5 sm:px-2 py-1 bg-[#dcdee2]  items-center xl:gap-x-3 sm:gap-x-2 border-b-2 border-black"
    >
      <div className="xl:w-[50px] xl:h-[50px] sm:w-[50px] sm:h-[50px]">
        <img
          className="w-full block h-full object-cover rounded-md"
          src={link_image}
          alt=""
        />
      </div>
      <div className="w-[60%] font-bold capitalize sm:text-xs md:text-sm lg:text-base xl:text-2xl xl:line-clamp-1 sm:line-clamp-3 ">
        {title}
      </div>
      <div className="flex-1 grid grid-cols-3">
        <h1 className="sm:hidden xl:block text-center font-bold">{author}</h1>
        <h1 className="sm:hidden xl:block text-center font-bold">
          {dateUpdate}
        </h1>
        <h1 className="sm:hidden xl:block text-center font-bold">xem thêm</h1>
      </div>
    </div>
  );
};

export default CardSearch;
