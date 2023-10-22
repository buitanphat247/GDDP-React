import React from "react";
import Button from "../button/Button";

const CardDocs = ({
  url,
  type_image = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png",
}) => {
  return (
    <div className="bg-[#e5e7e8] overflow-hidden rounded-md cursor-pointer flex items-center justify-center relative group flex-col">
      <div className="h-[350px] relative overflow-hidden">
        <img
          className="w-full h-[90%] object-cover rounded-md block"
          src={type_image}
          alt=""
        />
      </div>
      <div className="bg-blue-400 flex items-center justify-center text-2xl font-bold uppercase text-white w-full h-[50px] sm:rounded-md ">
        <Button
          isNavLink={true}
          url={url}
          target="_blank"
          className="bg-blue-400 text-white w-full h-[50px] font-bold flex items-center justify-center"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default CardDocs;
