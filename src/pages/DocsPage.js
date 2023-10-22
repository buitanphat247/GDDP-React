/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import CardDocs from "../components/card/CardDocs";
import { toast } from "react-toastify";
const data_10 = [
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQxRgCg6ODglYysHqGvNJPMBnGhg5kDDv9ejSKRf9rrWRHysFeuTRVEXE5rI3zcUQ/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTdOQ4vsHZO5qRIfVtyMXSGTF8enK2HaxI7zhJXzM07SnUuTDpzxSG7lC0wuM_Low/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTdOQ4vsHZO5qRIfVtyMXSGTF8enK2HaxI7zhJXzM07SnUuTDpzxSG7lC0wuM_Low/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR7V0tFQHggtVLHV9DYsyynXx6AhGLFjD-xdjuzJ4-SBMEhIQHL0NyNP-VKOTN92g/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQY6jYjK0HBu5tkEsT-5-l7-Mtj6pdvbjSSBYsvVS7BLKxKskanPUT42BTurDRMHw/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTckVJe97W_8h6fXdGpBb052WjQID6Er_KM7s0cmmK9PQdN2eELvZF2SN7jxs8_Zg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTVYvd0Ri3ebHqN01h9vGvSb1CRY2Eha0u9GbmrW1ZSTIcyWBlAkxihcCIpHzxxVA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRslLV7-S0ycM-sUdcINvPrDWAi9rTRKCAUFLMgw-izBvWQCKfYjMtoLHzKxgO_-A/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS0cA0achsCb7xGC4_TQR2p22qVqt-xFYkIBrNnovtfynE-21cuI6m8XQ6zwW35uA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vT12Ad0sGhU31vELG49O47ffec8jS6voRVjQywYGW0lLtkXv26xQbkznCx1QKujRA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vSf3yZQfvShaq60QpeBPNphHfO8TjOX-nqm-SKNpNTsv_pZ89nYEV4WoT3wPX16dg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR2-m6JQThc4dTQd0zRECJMwHxosExRM1z48brEH1d5zJIwwa_hlerDhdPT_1wASA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vSg945wTDNbI1ySaoiM9IG8kp1MGGtUL0opEb4wA83ujgc9Zcz9fb_uC6SWCb-PVg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS13gnv1jBxEZZT4g4vpzwEa7x4yCQrH8ypS_hv1qi_8mUhFgH8nyGd3h1PjyGBgA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1kV7gET5EKi5l9ri-qEH7ltvt3lpPWItG/view"></CardDocs>
    ),
  },
];
const data_dif = [
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR3-0_yyj13ED9vBgYIYU_fCHUAkePNG25Pg69zNOciDYOr7JKWWaZJzywN940eLg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1i2ubUfzI4ECHjTm08A2u1vIjcqMSmtTi/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1qVzYzydor-mRrxx5wsEpQgP2O3D6ymJj/view?usp=drive_open"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1w4UTxgQ0_Lo4DR1c4g_6DNsqWyEgF2Bj/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1e4UO0WK5a8SEUDsURk4EIRMLEsajw1d7/view"></CardDocs>
    ),
  },
];
const data_all = [
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQxRgCg6ODglYysHqGvNJPMBnGhg5kDDv9ejSKRf9rrWRHysFeuTRVEXE5rI3zcUQ/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTdOQ4vsHZO5qRIfVtyMXSGTF8enK2HaxI7zhJXzM07SnUuTDpzxSG7lC0wuM_Low/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTdOQ4vsHZO5qRIfVtyMXSGTF8enK2HaxI7zhJXzM07SnUuTDpzxSG7lC0wuM_Low/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR7V0tFQHggtVLHV9DYsyynXx6AhGLFjD-xdjuzJ4-SBMEhIQHL0NyNP-VKOTN92g/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQY6jYjK0HBu5tkEsT-5-l7-Mtj6pdvbjSSBYsvVS7BLKxKskanPUT42BTurDRMHw/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTckVJe97W_8h6fXdGpBb052WjQID6Er_KM7s0cmmK9PQdN2eELvZF2SN7jxs8_Zg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTVYvd0Ri3ebHqN01h9vGvSb1CRY2Eha0u9GbmrW1ZSTIcyWBlAkxihcCIpHzxxVA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRslLV7-S0ycM-sUdcINvPrDWAi9rTRKCAUFLMgw-izBvWQCKfYjMtoLHzKxgO_-A/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS0cA0achsCb7xGC4_TQR2p22qVqt-xFYkIBrNnovtfynE-21cuI6m8XQ6zwW35uA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vT12Ad0sGhU31vELG49O47ffec8jS6voRVjQywYGW0lLtkXv26xQbkznCx1QKujRA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vSf3yZQfvShaq60QpeBPNphHfO8TjOX-nqm-SKNpNTsv_pZ89nYEV4WoT3wPX16dg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR2-m6JQThc4dTQd0zRECJMwHxosExRM1z48brEH1d5zJIwwa_hlerDhdPT_1wASA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vSg945wTDNbI1ySaoiM9IG8kp1MGGtUL0opEb4wA83ujgc9Zcz9fb_uC6SWCb-PVg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS13gnv1jBxEZZT4g4vpzwEa7x4yCQrH8ypS_hv1qi_8mUhFgH8nyGd3h1PjyGBgA/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },

  {
    content: (
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vR3-0_yyj13ED9vBgYIYU_fCHUAkePNG25Pg69zNOciDYOr7JKWWaZJzywN940eLg/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        className="w-[100%] h-[350px] rounded-xl"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1kV7gET5EKi5l9ri-qEH7ltvt3lpPWItG/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1i2ubUfzI4ECHjTm08A2u1vIjcqMSmtTi/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1qVzYzydor-mRrxx5wsEpQgP2O3D6ymJj/view?usp=drive_open"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1w4UTxgQ0_Lo4DR1c4g_6DNsqWyEgF2Bj/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/1e4UO0WK5a8SEUDsURk4EIRMLEsajw1d7/view"></CardDocs>
    ),
  },
  {
    content: (
      <CardDocs url="https://drive.google.com/file/d/17ggbIXs0svPK31c648KM7wj9GrP2MWpd/view"></CardDocs>
    ),
  },
];
const DocsPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(query);
    if (query === "") setData(data_all);
    else if (query === "10") setData(data_10);
    else setData(data_dif);
  }, [query]);
  return (
    <div className="border-black dark:bg-slate-500 transition-all">
      <HeaderNav></HeaderNav>
      <div className="flex gap-x-3 select-none sm:px-3  xl:px-5">
        <div
          onClick={() => setQuery("")}
          className={`${
            query === "" ? "bg-blue-300" : "bg-slate-300"
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
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={`${
            query !== "" ? "bg-blue-300" : "bg-slate-300"
          } cursor-pointer px-3  text-lg xl:text-lg sm:text-sm  capitalize h-[50px] mb-5 rounded-lg outline-none`}
        >
          <option value="" selected disabled>
            Chọn chủ đề
          </option>
          <option value="10">khối 10</option>
          <option value="11">khối 11</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div className=" sm:px-3  xl:px-5 sm:pb-5 grid xl:grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-5">
        {data.length > 0 &&
          data.map((item, index) => {
            return item.content;
          })}
      </div>
    </div>
  );
};

export default DocsPage;
