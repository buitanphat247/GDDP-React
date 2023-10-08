import React, { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import ActionsDetails from "../components/actions/ActionsDetails";
import parse from "html-react-parser";
import PostFearture from "../modules/posts/PostFearture";

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
    <div className="border-black dark:bg-slate-500">
      <HeaderNav></HeaderNav>
      <div className="xl:px-10 sm:px-2 py-10 grid gap-y-5 bg-slate-300  xl:mx-10 mb-10 rounded-md ">
        <div className="relative xl:h-[450px] sm:h-[250px] xl:w-[70%] sm:w-[100%] mx-auto block">
          <img
            className="rounded-md w-full h-full object-cover block"
            src={data?.link_image}
            alt=""
          />
          <div className="absolute top-0 w-full h-full right-0 left-0 bg-black rounded-md opacity-50"></div>
          <h1 className="absolute text-white uppercase top-1/2 left-1/2 transform -translate-x-1/2 sm:text-xl -translate-y-1/2 xl:px-10 xl:text-5xl xl:leading-relaxed col-span-2 font-bold text-center xl:w-[90%] sm:w-[100%] line-clamp-4">
            {data?.title}
          </h1>
          <ActionsDetails></ActionsDetails>
        </div>
        <div className="entry-content image-content-float text-justify text-[#411118] text-xl font-medium leading-loose">
          {data !== "" && parse(data.html)}
        </div>
      </div>

      <PostFearture title={"bài viết nổi bậc"}></PostFearture>

    </div>
  );
};

export default DetailPage;
