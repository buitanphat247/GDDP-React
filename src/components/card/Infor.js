import React from "react";

const Infor = ({ name, link_image }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-[50px] h-[50px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>
      <div>
        <h1 className="capitalize">{name}</h1>
      </div>
    </div>
  );
};

export default Infor;
