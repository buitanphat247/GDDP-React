/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013478.3527150906!2d107.05953255!3d9.717274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756c9c282e8e43%3A0xcce3539941eaed52!2zQsOgIFLhu4thIC0gVsWpbmcgVMOgdQ!5e0!3m2!1svi!2s!4v1693491332977!5m2!1svi!2s";

const Footer = () => {
  return (
    <div className="w-full mx-auto flex gap-x-5 bg-slate-800 p-5 px-10 border-t border-black">
      <div className="flex gap-x-5">
        <div className="w-[150px]">
          <img
            className="w-full"
            srcSet="https://upload.wikimedia.org/wikipedia/vi/thumb/4/4e/Bi%E1%BB%83u_tr%C6%B0ng_t%E1%BB%89nh_B%C3%A0_R%E1%BB%8Ba_%E2%80%93_V%C5%A9ng_T%C3%A0u.svg/1220px-Bi%E1%BB%83u_tr%C6%B0ng_t%E1%BB%89nh_B%C3%A0_R%E1%BB%8Ba_%E2%80%93_V%C5%A9ng_T%C3%A0u.svg.png"
            alt=""
          />
        </div>
        <div className=" flex-1 text-white font-medium text-xl capitalize flex flex-col justify-around">
          <h1>© 2012-2022 Bản quyền thuộc về Trang Công Nghệ.</h1>
          <p>Địa chỉ: 9 Đường Thi Sách, Phường 8, Tỉnh Bà Rịa - Vũng Tàu</p>
          <p>Email: buitanphat2747@thpt-vungtau.edu.vn</p>
          <p>Liên hệ: 0984380205 & 0338733565 & 0917317697</p>
          <p>Chính sách bảo mật Thông tin toà soạn Quảng cáo RSS</p>
        </div>
      </div>
      <div className="flex-1">
        <iframe
          src={mapUrl}
          className="h-full rounded-lg w-full"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;