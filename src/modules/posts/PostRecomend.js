import React from "react";
import NavBarPosts from "../navBars/NavBarPosts";
import PostItemFearture from "../post-items/PostItemFearture";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useDataPost from "../../hooks/useDataPost";
import parse from "html-react-parser";
import { useNavigate } from "react-router";

const PostRecomend = ({ title }) => {
  const { dataPost } = useDataPost();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/details-news-page/${id}`);
  };
  return (
    <div className="sm:pb-5 sm:px-2 xl:px-5">
      <NavBarPosts title={title}></NavBarPosts>
      <div className="gap-x-5 sm:mt-2">
        <Swiper
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {dataPost.length > 0 &&
            dataPost.slice(5).map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PostItemFearture
                    category={item.category}
                    link_image={item.link_image}
                    title={item.title}
                    author={item.author}
                    html={parse(item.html)}
                    createAt={item.createdAt}
                    onClick={() => handleClick(item.post_id)}
                  ></PostItemFearture>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default PostRecomend;
