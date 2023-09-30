import React, { useEffect, useState } from "react";
import Button from "./button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarShow } from "../slice/SideBarToggleSlice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import debounce from "lodash/debounce";
import CardSearch from "./card/CardSearch";
import { useNavigate } from "react-router";
import { setIsDarkMode } from "../slice/GlobalSlice";

const HeaderNav = () => {
  const dispatch = useDispatch();
  const [dataSearch, setDataSearch] = useState([]);
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState("");
  const { isDarkMode } = useSelector((state) => state.global);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const { title } = doc.data();
        if (querySearch !== "")
          if (title.includes(querySearch.toLowerCase().trimEnd())) {
            data.push(doc.data());
          }
      });
      setDataSearch(data);
    });
  }, [querySearch]);
  const handleChange = debounce((e) => {
    setQuerySearch(e.target.value);
  }, 500);
  const handleClick = (id) => {
    setQuerySearch("");
    navigate(`/details-news-page/${id}`);
  };
  const handleDarkMode = () => {
    if (!isDarkMode === true) {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute("class", "dark");
    } else {
      const htmlElement = document.querySelector("html");
      htmlElement.removeAttribute("class", "dark");
    }
    localStorage.setItem("dark", !isDarkMode);
    dispatch(setIsDarkMode(!isDarkMode));
  };
  useEffect(() => {
    if (isDarkMode === true) {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute("class", "dark");
    } else {
      const htmlElement = document.querySelector("html");
      htmlElement.removeAttribute("class", "dark");
    }
  }, [isDarkMode]);
  return (
    <div className="dark:bg-slate-800 sm:w-full xl:px-5 sm:px-2 sm:gap-x-2 flex justify-between py-3 sticky top-0 z-50 shadow-md shadow-slate-400  mb-5 bg-slate-300 group">
      <div className="w-full relative">
        <input
          onChange={handleChange}
          autoFocus={false}
          type="text"
          placeholder="Search your posts..."
          className="w-full h-[50px] bg-[#e4e6eb] sm:text-sm
                placeholder:text-black outline-none border-2 border-transparent focus:border-blue-500  rounded-md px-5 dark:focus:shadow-slate-600 focus:shadow-black transition-all shadow-lg"
        />
        <div className="absolute w-[100%] round h-auto top-[100%] rounded-xl select-none cursor-pointer rounded-b-md overflow-hidden">
          {dataSearch.length > 0 &&
            dataSearch.map((item, index) => {
              return (
                <CardSearch
                  onClick={() => handleClick(item.post_id)}
                  key={index}
                  title={item.title}
                  author={item.author}
                  dateUpdate={item.createdAt}
                  link_image={item.link_image}
                ></CardSearch>
              );
            })}
        </div>
      </div>
      <div className="flex sm:gap-x-2 ">
        <Button
          onClick={handleDarkMode}
          className="cursor-pointer h-[50px] w-[50px] text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center"
        >
          {isDarkMode === true ? (
            <i className="fa-regular fa-lightbulb"></i>
          ) : (
            <i className="fa-solid fa-lightbulb"></i>
          )}
        </Button>
        <Button
          onClick={() => dispatch(setSideBarShow(true))}
          className="xl:hidden cursor-pointer h-[50px] w-[50px] text-black bg-[#e4e6eb] text-2xl rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeaderNav;
