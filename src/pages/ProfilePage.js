import React from "react";
import Label from "../components/label/Label";

const ProfilePage = () => {
  return (
    <div className="min-h-[70vh] w-[70%] mx-auto p-10">
      <div className="h-full rounded-md bg-slate-300 p-10">
        <div className="w-[150px] h-[150px] mx-auto rounded-full">
          <img
            className="w-full h-full rounded-full"
            src="https://plus.unsplash.com/premium_photo-1691533145857-663fa6e69dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-5">
          <div className="flex items-center text-2xl gap-x-5">
            <Label>fullname</Label>
            <h1>Bùi Tấn Phát</h1>
          </div>
          <div className="flex items-center text-2xl gap-x-5">
            <Label>username</Label>
            <h1>Bùi Tấn Phát</h1>
          </div>
          <div className="flex items-center text-2xl gap-x-5">
            <Label>email</Label>
            <h1>tan270407@gmail.com</h1>
          </div>
          <div className="flex items-center text-2xl gap-x-5">
            <Label>số điện thoại</Label>
            <h1>0338733565</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
