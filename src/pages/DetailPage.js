import React, { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import PostItemFearture from "../modules/post-items/PostItemFearture";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavBarPosts from "../modules/navBars/NavBarPosts";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import ActionsDetails from "../components/actions/ActionsDetails";
import parse from "html-react-parser";
const DetailPage = () => {
  const id = useParams().slug;
  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      const docSnap = await getDoc(doc(db, "posts", id));
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
    getData();
  }, [id]);
  return (
    <div className="border-black">
      <HeaderNav></HeaderNav>
      <div className="px-10 py-10 grid gap-y-5 bg-slate-300 mx-10 mb-10 rounded-md ">
        <div className="relative h-[450px] w-[70%] mx-auto block">
          <img
            className="rounded-md w-full h-full object-cover block"
            src={data?.link_image}
            alt=""
          />
          <div className="absolute top-0 w-full h-full right-0 left-0 bg-black rounded-md opacity-50"></div>
          <h1 className="absolute text-white uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 text-5xl leading-relaxed col-span-2 font-bold text-center w-[90%] line-clamp-3">
            {data?.title}
          </h1>
          <ActionsDetails></ActionsDetails>
        </div>
        <div className="entry-content image-content-float text-justify text-[#411118] text-xl font-medium leading-loose">
          {data !== "" && parse(data.html)}
        </div>
      </div>

      <div className="px-10 pb-10 ">
        <NavBarPosts title="Bài viết Đề xuất"></NavBarPosts>
        <div className="py-5">
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            modules={[Autoplay, Pagination, Navigation]}
          >
            {Array(20)
              .fill("")
              .map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <PostItemFearture></PostItemFearture>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
