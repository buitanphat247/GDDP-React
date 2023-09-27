import React from "react";
import Button from "../../components/button/Button";

const PostItemNewestMini = () => {
  return (
<<<<<<< HEAD
    <div className=" gap-x-5 bg-white shadow-xl shadow-slate-400 p-2 rounded-md cursor-pointer relative group">
      <div className="rounded-md relative w-full sm:h-[200px]">
=======
    <div className="flex gap-x-5 bg-white shadow-xl shadow-slate-400 p-2 rounded-md cursor-pointer relative group">
      <div className="rounded-md relative w-[300px]">
>>>>>>> f4c7fd33cd283192cabaaf3160bcf69adfc689e1
        <img
          className="w-full h-full rounded-md"
          src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div className="absolute top-3 right-3 flex justify-end">
          <Button className="sm:text-base sm:w-[100px] h-[30px] text-red-500 rounded-md bg-slate-300 capitalize font-bold">
            Kiến thức
          </Button>
        </div>
      </div>
      <div className="sm:mt-2 flex flex-col sm:gap-y-1 text-justify">
        <h1 className="font-bold capitalize sm:text-lg">
          setup cực chill dành cho người mới bắt đầu
        </h1>
        <p className="sm:text-sm line-clamp-4 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque
          ut ad pariatur! Architecto adipisci, nostrum ab cum deleniti voluptate
          facilis modi laborum fuga sunt maxime voluptates obcaecati assumenda
          consequuntur inventore. Nihil libero praesentium labore quaerat
          maiores fugiat rem, facere earum dolorem autem aperiam voluptatum
          aspernatur in aliquid molestias eligendi unde quod expedita incidunt
          alias rerum cum? Eligendi totam quibusdam eum voluptate, maxime beatae
          hic nam, voluptates blanditiis, architecto animi?
        </p>
        <h1 className="flex justify-between font-bold sm:text-sm">
          <span>14/9/2023</span>
          <span>Bùi Tấn Phát</span>
        </h1>
      </div>
      <div className="bg-black absolute top-0 w-full h-full rounded-md opacity-0 transition-all group-hover:opacity-30 left-0 right-0"></div>
    </div>
  );
};

export default PostItemNewestMini;
