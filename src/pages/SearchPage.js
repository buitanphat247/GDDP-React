import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import PostItemFearture from "../modules/post-items/PostItemFearture";
import HeaderNav from "../components/HeaderNav";
import useDataPost from "../hooks/useDataPost";
import parse from "html-react-parser";
import { useNavigate } from "react-router";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import { toast } from "react-toastify";
const SearchPage = () => {
  document.title = "Tìm kiếm | Giáo Dục Địa Phương ";
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/details-news-page/${id}`);
  };
  const [dataCaterogies, setCategories] = useState([]);
  const [queryData, setQueryData] = useState([]);
  const [queryCategory, setQueryCategory] = useState("");
  useEffect(() => {
    const q = query(collection(db, "categories"));
    onSnapshot(q, (querySnapshot) => {
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
      });
      setCategories(categories);
    });
  }, []);
  const { dataPost } = useDataPost();
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        if (
          doc.data().category !== "" &&
          doc.data().category === queryCategory
        ) {
          posts.push(doc.data());
        }
        if (queryCategory === "") posts.push(doc.data());
      });
      setQueryData(posts);
    });
  }, [queryCategory]);
  return (
    <div className="border-black dark:bg-slate-500 transition-all min-h-[70vh]">
      <HeaderNav></HeaderNav>
      <div className=" sm:px-3 sm:pb-5 xl:px-5">
        <div className="flex gap-x-3 select-none">
          <div
            onClick={() => setQueryCategory("")}
            className={`${
              queryCategory === "" ? "bg-blue-400" : "bg-slate-300"
            } px-3 cursor-pointer  xl:text-lg sm:text-sm flex items-center justify-center capitalize  h-[50px] mb-5 rounded-lg outline-none`}
          >
            tất cả
          </div>
          <div
            onClick={() => toast.info("Đang trong quá trình phát triển")}
            className="cursor-pointer px-3 xl:text-lg sm:text-sm text-lg flex items-center justify-center capitalize bg-slate-300 h-[50px] mb-5 rounded-lg outline-none"
          >
            Mới nhất
          </div>
          <select
            onChange={(e) => setQueryCategory(e.target.value)}
            value={queryCategory}
            className={`  ${
              queryCategory !== "" ? "bg-blue-300" : "bg-slate-300"
            } cursor-pointer px-3  text-lg xl:text-lg sm:text-sm  capitalize h-[50px] mb-5 rounded-lg outline-none`}
          >
            <option value="" selected disabled>
              select tag pots
            </option>
            {dataCaterogies.length > 0 &&
              dataCaterogies.map((item, index) => {
                return (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:pb-5">
          {dataPost.length === 0 &&
            Array(24)
              .fill("")
              .map((item, index) => {
                return (
                  <div key={index}>
                    <Stack spacing={1}>
                      <Skeleton variant="rounded" height={300} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                    </Stack>
                  </div>
                );
              })}{" "}
          {queryData.length > 0 &&
            queryData.map((item, index) => {
              return (
                <PostItemFearture
                  key={index}
                  category={item.category}
                  link_image={item.link_image}
                  title={item.title}
                  author={item.author}
                  html={parse(item.html)}
                  createAt={item.createdAt}
                  onClick={() => handleClick(item.post_id)}
                ></PostItemFearture>
              );
            })}
        </div>
        <Button
          onClick={() => toast.info("Đang trong quá trình phát triển")}
          className="flex sm:gap-x-2 items-center justify-center px-5 min-w-[150px] h-[50px] bg-blue-400 sm:text-base rounded-md mx-auto col-span-5 font-bold uppercase text-white"
        >
          <span>Load more</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
