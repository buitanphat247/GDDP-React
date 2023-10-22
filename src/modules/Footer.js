/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { NavLink } from "react-router-dom";
const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013478.3527150906!2d107.05953255!3d9.717274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756c9c282e8e43%3A0xcce3539941eaed52!2zQsOgIFLhu4thIC0gVsWpbmcgVMOgdQ!5e0!3m2!1svi!2s!4v1693491332977!5m2!1svi!2s";

const Footer = () => {
  return (
    <div className="w-full mx-auto flex xl:flex-row gap-x-5 sm:gap-y-2 sm:flex-col bg-slate-800 border-t border-black text-white  xl:grid xl:grid-cols-2">
      <div className="xl:grid xl:grid-cols-2 gap-x-10 my-3 sm:px-3 md:grid md:grid-cols-2">
       
        <ul className="text-white text-justify leading-loose mb-5">
          <h1 className="font-bold text-xl my-2">Liên hệ</h1>
          <li>Điện thoại: 0984380205</li>
          <li>Email: buitanphat270407@gmail.com</li>
          <li>
            Số 9 Đường Thi Sách, Phường 8, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu
          </li>
        </ul>
     
        <ul className="leading-loose text-justify grid mb-5">
          <h1 className="font-bold text-xl my-2">Liên kết nhanh</h1>
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="">Giới thiệu</NavLink>
          <NavLink to="/add-new-friend">Bạn bè</NavLink>
          <NavLink to="/search-page-content">Tìm kiếm</NavLink>
          <NavLink to="/docs">Tài liệu</NavLink>
          <NavLink to="/games">Games</NavLink>
        </ul>

        <ul className="grid grid-cols-5 text-2xl leading-loose mb-5">
          <h1 className="font-bold text-xl col-span-5 my-2">Mạng xã hội</h1>
          <li className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500">
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center bg-red-400 rounded-full">
            <i className="fa-brands fa-youtube"></i>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center bg-orange-500 rounded-full">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center bg-lime-500 rounded-full">
            <i className="fa-solid fa-envelope-open-text"></i>
          </li>
          <li className="w-[50px] h-[50px] flex items-center justify-center bg-cyan-600 rounded-full">
            <i className="fa-brands fa-twitter"></i>
          </li>
        </ul>
     
      </div>
     
      <div className="flex-1  sm:p-3">
        <iframe
          src={mapUrl}
          className="h-full rounded-lg w-full sm:h-[200px] md:h-[300px]"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full border-t-2 col-span-2 text-center sm:p-2">
        © 2023 - 2024 GDĐP. Nền tảng học tập hàng đầu Việt Nam
      </div>
    </div>
  );
};

export default Footer;
