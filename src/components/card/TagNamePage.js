import React from "react";

const TagNamePage = ({ icon, title, desc }) => {
  return (
    <div className="sm:text-lg md:text-xl xl:text-2xl sm:mb-3">
      <div className="font-bold uppercase flex items-center gap-x-2">
        {icon}
        <h1>{title}</h1>
      </div>
      <span className=" capitalize">{desc}</span>
    </div>
  );
};

export default TagNamePage;
