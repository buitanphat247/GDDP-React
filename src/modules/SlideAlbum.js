import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const link_image = [
  {
    url: "https://bloghomestay.vn/wp-content/uploads/2023/02/hinh-anh-vung-tau_1.jpg",
  },
  {
    url: "https://condao.com.vn/uploads/news/2021_07/hinh-anh-hinh-anh-dep-ve-bien-vung-tau-ngam-la-muon-di-lien-2.jpg",
  },
  {
    url: "https://hockiquandoi.net/wp-content/uploads/2020/11/gia1_1.jpg",
  },
  {
    url: "https://toplistvungtau.com/wp-content/uploads/2021/02/tourdulichvungtau2n1dvietintravel19.jpg",
  },
  {
    url: "https://booking.pystravel.vn/uploads/posts/avatar/1685443557.jpg",
  },
  {
    url: "https://thuonghieusanpham.vn/stores/news_dataimages/2023/052023/03/17/tau-thsp-compressed555520230503171541.jpg?rt=20230503171543?230503052951",
  },
  {
    url: "https://nld.mediacdn.vn/291774122806476800/2021/9/21/z2781481815673bcaa949d3dc23aa2ccc49e55980e4e93-1632229779349784256288.jpg",
  },
  {
    url: "https://vir.com.vn/stores/news_dataimages/hung/052020/03/17/in_article/1490p8-ba-ria-vung-tau-gears-towards-more-inclusive-development_1.jpg",
  },
  {
    url: "https://i.ytimg.com/vi/PoS9lKxrj5w/maxresdefault.jpg",
  },
];

const SlideAlbum = () => {
  return (
    <div className="w-full sm:px-2 sm:pb-5 xl:px-5">
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
          1024:{
            slidesPerView: 3,
            spaceBetween: 10,

          }
        }}
      >
        {link_image.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative cursor-pointer sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[300px] rounded-xl overflow-hidden">
                <img
                  src={item.url}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
                <div className="bg-black absolute top-0 w-full h-full rounded-md opacity-30"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlideAlbum;
