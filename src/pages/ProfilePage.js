import React from "react";
import Label from "../components/label/Label";
import { auth } from "../store/firebaseconfig";

const ProfilePage = () => {
  return (
    <div className="min-h-[70vh] w-[70%] mx-auto p-10">
      <div className="h-full rounded-md bg-slate-300 p-10">
        <div className="w-[200px] h-[200px] mx-auto rounded-full">
          <img
            className="w-full h-full rounded-full"
            src={auth?.currentUser?.photoURL}
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
