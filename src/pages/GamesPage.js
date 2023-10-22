import React from "react";
import HeaderNav from "../components/HeaderNav";
import Button from "../components/button/Button";
const data = [
  {
    url: "https://quizizz.com/join/quiz/61bd21bf2a585f001e6e1d21/start?studentShare=true",
    link_image:
      "https://photo-cms-vovworld.zadn.vn/w500/Uploaded/vovworld/thpsplu/2021_11_29/ba-ria-vung-tau-thuc-hien-dong-bo-nhieu-giai-phap-phat-trien1588170854_FDKJ.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/629598049c1ba0001eebc8fb/start?studentShare=true",
    link_image:
      "https://cdn.bietthubien.com/wp-content/uploads/2019/09/hinh-anh-hinh-anh-dep-ve-bien-vung-tau-ngam-la-muon-di-lien-2.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61734685f429f5001d828999/start?studentShare=true",
    link_image:
      "https://cungphuot.info/wp-content/uploads/2021/12/dia-diem-du-lich-o-brvt.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61a71c0d406b39001e2b9864/start?studentShare=true",
    link_image:
      "https://baobariavungtau.com.vn/dataimages/202112/original/images1690461_vt.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/63dfb161a282bb001d612ede/start?studentShare=true",
    link_image:
      "https://baria-vungtau.dcs.vn/portal/images/anh_dep_ba_ria_vung_tau/132466459913933130.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61ffe157d38c15001dabe64d/start?studentShare=true",
    link_image:
      "https://baria-vungtau.dcs.vn/portal/images/anh_dep_ba_ria_vung_tau/132466459913947154.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/5ea6ab06b2e0e7001be869f2/start?studentShare=true",
    link_image:
      "https://datviettour.com.vn/uploads/images/tin-tuc/cam-nang-du-lich/du-lich-vung-tau/du-lich-vung-tau-1.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/62189f80b4e09c001dfe6d9d/start?studentShare=true",
    link_image:
      "https://cdn.vn.alongwalk.info/vn/wp-content/uploads/2023/02/18173330/image-99-hinh-anh-ba-ria-vung-tau-dep-nhat-thanh-pho-dang-song-167669121077114.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/629598049c1ba0001eebc8fb/start?studentShare=true",
    link_image:
      "https://file.hstatic.net/200000504041/file/tuong-chua-ky-to-vua-vung-tau_4a55fd9f4f394188a1e5ed02c657eb16_grande.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/6335b2995f5d88001e209e29/start?studentShare=true",
    link_image:
      "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2019_11_25/bai_sau.png",
  },
  {
    url: "https://quizizz.com/join/quiz/601b5d6c94c106001be1a5a7/start?studentShare=true",
    link_image:
      "https://cdn.bietthubien.com/wp-content/uploads/2019/09/hinh-anh-hinh-anh-dep-ve-bien-vung-tau-ngam-la-muon-di-lien-9.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61ecc75f5692d9001e02285f/start?studentShare=true",
    link_image:
      "https://cdn.tgdd.vn/Files/2021/06/15/1360385/top-10-bai-bien-vung-tau-dep-noi-tieng-ban-nhat-dinh-phai-di-202106160010449105.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/5e80cbea59fd7a001b1ce4ec/start?studentShare=true",
    link_image:
      "https://cdn.vn.alongwalk.info/vn/wp-content/uploads/2023/02/18173334/image-99-hinh-anh-ba-ria-vung-tau-dep-nhat-thanh-pho-dang-song-167669121346438.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/619b2769120e14001e04bec4/start?studentShare=true",
    link_image:
      "https://danviet.mediacdn.vn/upload/4-2016/images/2016-10-10/147607268423978-chupanhcuoi1.jpg",
  },
  {
    url: "https://quizizz.com/join/presentation/62b9c3f61f0998001e50439a/start?studentShare=true",
    link_image:
      "https://media.truyenhinhdulich.vn/upload/news/126_ba_ria_vung_tau.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61b3891d9f915a001dc8eec4/start?studentShare=true",
    link_image:
      "https://vcdn1-dulich.vnecdn.net/2022/07/02/bien-vung-tau-jpeg-2320-165545-5919-1133-1656726932.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=BkyR747bWwRXDZPE7wX94w",
  },
  {
    url: "https://quizizz.com/join/quiz/61100cf3b0c6a9001b3249fa/start?studentShare=true",
    link_image:
      "https://2trip.vn/wp-content/uploads/2021/05/villa-vung-tau-gan-bien.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61016cb6d943c1001cc368b4/start?studentShare=true",
    link_image:
      "https://cdn.tgdd.vn/Files/2021/06/15/1360387/diem-danh-10-dia-diem-du-lich-vung-tau-mien-phi-di-la-ghien-202106160030078705.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/60e5a86ba9dee2001bf60ae9/start?studentShare=true",
    link_image:
      "https://nld.mediacdn.vn/291774122806476800/2023/1/16/z40444034952516eda1f26715197dea0518992dc6d48f1-16738837227401882839556.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61f0c107421120001dfa7b13/start?studentShare=true",
    link_image:
      "https://intour.vn/upload/img/2022/03/15/tong_hop_cac_dia_diem_du_lich_vui_choi_noi_tieng_o_ba_ria_vung_tau_1647312514.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/6183b2e363421f001e7b5e93/start?studentShare=true",
    link_image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVYi6tbL0kpSjE5r-jRdlRSsTrub4utYCJZ0cMk0baUUWYXvc5xpOlsykcSTW57Z1tEPqqNx52DvU-nW7Ox57aAG_hMT6o0iKveFlkdaI1nsb28REkDZko9H3wLctuIvyG3k3xRNVS712ZUjV7dCpNqpOUH6n-8uCSxzouC858koH2UN7md2Jfzp8C/s1200/kham-pha-top-10-bai-bien-vung-tau-1.jpeg",
  },
  {
    url: "https://quizizz.com/join/quiz/64322c625c45a0001dd9a4ef/start?studentShare=true",
    link_image:
      "https://vielimousine.com/wp-content/uploads/2022/06/vung-tau-hien-co-bao-nhieu-huyen.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/60048447e157f6001b34f5c4/start?studentShare=true",
    link_image:
      "https://ktmt.vnmediacdn.com/images/2022/01/13/42-1642046102-38.jpg",
  },
  {
    url: "https://quizizz.com/join/quiz/61776e24885b86001d04b4d1/start?studentShare=true",
    link_image:
      "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mot-so-dia-diem-du-lich-Vung-Tau-1024x576.jpg",
  },
];
const GamesPage = () => {
  return (
    <div className={` border-black dark:bg-slate-500 transition-all`}>
      <HeaderNav></HeaderNav>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 xl:px-5 sm:px-2 pb-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-slate-300 p-2 rounded-md grid gap-y-2 xl:relative group overflow-hidden cursor-pointer"
          >
            <div className="w-full sm:h-[250px] md:h-[350px] xl:h-[250px] rounded-md overflow-hidden">
              <img
                className="w-full block h-full object-cover"
                src={item.link_image}
                alt="Not Found"
              />
            </div>
            <Button
              isNavLink={true}
              url={item.url}
              target="_blank"
              className="bg-blue-400 flex items-center justify-center text-2xl font-bold uppercase text-white w-full h-[50px] sm:rounded-md "
            >
              Play Game
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
