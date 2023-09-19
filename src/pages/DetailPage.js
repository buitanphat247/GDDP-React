import React from "react";
import HeaderNav from "../components/HeaderNav";
import PostItemFearture from "../modules/post-items/PostItemFearture";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavBarPosts from "../modules/navBars/NavBarPosts";
import Button from "../components/button/Button";

const DetailPage = () => {
  return (
    <div className="border-black">
      <HeaderNav></HeaderNav>
      <div className="px-10 py-10 grid gap-y-5 bg-slate-300 mx-10 mb-10 rounded-md">
        <div className="relative h-[450px] w-[70%] mx-auto block">
          <img
            className="rounded-md w-full h-full object-cover block"
            src="https://images.unsplash.com/photo-1693917566028-c0f204817a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
          <div className="absolute top-0 w-full h-full right-0 left-0 bg-black rounded-md opacity-30"></div>
          <h1 className="absolute text-white uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 text-5xl leading-relaxed col-span-2 font-bold text-center w-[90%] line-clamp-3">
            [Review Phim] Luật Sư MAFIA Về Nước Bản Full | Tóm Tắt Phim Vincenzo
            | Song Joong-Ki
          </h1>

          <div className="absolute flex gap-x-5 bottom-10 left-10 ">
            <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
              <span>
                <i className="fa-regular fa-heart"></i>
              </span>
            </Button>
            <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
              <span className=" w-[50px] h-full flex items-center justify-center">
                <i className="fa-regular fa-thumbs-up"></i>
              </span>
            </Button>
            <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
              <span className=" w-[50px] h-full flex items-center justify-center">
                <i className="fa-regular fa-thumbs-down"></i>
              </span>
            </Button>
            <Button className=" flex items-center justify-center gap-x-3 bg-green-400 opacity-80 text-2xl font-bold uppercase rounded-md w-[50px] h-[50px] text-white">
              <span className=" w-[50px] h-full flex items-center justify-center">
              <i className="fa-solid fa-share-nodes"></i>
              </span>
            </Button>
          </div>
        </div>
        <p className="text-justify text-[#411118] text-xl font-medium leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          nisi pellentesque, dignissim dui bibendum, bibendum felis. Ut ut augue
          nibh. Donec porttitor nunc mollis tortor pellentesque, a dignissim
          dolor sagittis. Curabitur eros est, finibus ac tortor nec, vehicula
          egestas orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris placerat accumsan ex. Vivamus nec rutrum quam. In viverra
          mauris ac blandit feugiat. Sed congue commodo elit sed vehicula. Nunc
          tellus arcu, egestas nec efficitur at, tempor a elit. Maecenas
          vehicula, eros a euismod malesuada, libero dui facilisis lorem, eu
          volutpat nisl arcu in nibh. Ut dictum sollicitudin neque, ac consequat
          diam vehicula id.
          <br /> <br />
          Cras imperdiet dignissim mi, et posuere nunc scelerisque ut. Aenean
          eget lacus et tellus imperdiet ornare vel ac quam. Nulla massa leo,
          iaculis non justo in, interdum auctor odio. Nam ut lacinia dui. Nulla
          elementum leo sit amet nisl rutrum, vitae ultrices augue feugiat.
          Maecenas orci ante, condimentum et posuere eget, convallis in nunc.
          Nunc faucibus eros fringilla scelerisque porttitor. Morbi et nulla nec
          lorem iaculis mollis sed fermentum neque. Maecenas sit amet metus in
          quam mattis dignissim. Curabitur sit amet elit magna. Fusce volutpat
          venenatis tempus. Vestibulum non lacinia dui.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-left"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Duis auctor enim vitae purus sagittis, eget scelerisque lorem
          accumsan. Fusce consequat massa in lobortis pellentesque. Donec vitae
          scelerisque nulla. Curabitur ipsum elit, gravida in tellus ac, tempor
          congue lacus. Suspendisse ultricies porta diam sed convallis.
          Suspendisse et massa ut dolor blandit lacinia non ac lacus. Nam
          fringilla odio mi, quis pulvinar lacus tempus id. Aenean a porttitor
          lacus, pulvinar dapibus sapien. Aenean tincidunt molestie orci ut
          maximus. Integer pharetra, neque sit amet congue iaculis, nisi eros
          sodales augue, vitae vehicula elit ligula et mauris. Vivamus rutrum
          lacus ut pretium dapibus.
          <br /> <br />
          Integer eget sapien vitae ligula elementum faucibus a a nibh. Vivamus
          vitae mauris maximus, posuere enim id, hendrerit felis. Phasellus
          iaculis efficitur convallis. Donec vel sagittis dui. Sed vitae
          convallis odio. Vivamus a velit non sem egestas vulputate. Nam eget
          quam elementum, imperdiet massa sit amet, accumsan erat.
          <br /> <br />
          Nunc fermentum, diam ut volutpat auctor, tortor ex sodales risus, eget
          congue arcu urna eget libero. Sed accumsan vitae nisi eu accumsan.
          Cras placerat justo ligula, nec fermentum libero auctor sit amet.
          Proin vehicula dictum sapien, at sollicitudin tortor bibendum eu.
          Aliquam vel neque et sapien sollicitudin pellentesque. Fusce lobortis,
          orci sit amet volutpat scelerisque, sapien orci commodo nulla, sed
          blandit metus quam id lacus. Vivamus laoreet sapien elit, ut viverra
          diam dignissim dapibus. Nullam varius auctor augue ut blandit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Maecenas suscipit mauris urna, at auctor ex
          malesuada scelerisque. Mauris placerat felis dictum nunc maximus, vel
          ultrices sapien varius. Maecenas mattis hendrerit est lobortis
          sollicitudin. Integer blandit molestie justo sit amet fringilla.
          <br />
          <br />
          Nulla cursus pharetra orci ac dapibus. Sed mi odio, ultricies pretium
          lectus vitae, fermentum rutrum eros. Phasellus ut dignissim arcu.
          Quisque blandit fermentum iaculis. Aenean tristique est sit amet augue
          dignissim, eget viverra tellus euismod. Ut quis massa sit amet metus
          porta ultricies. Curabitur faucibus lorem vitae venenatis fringilla.
          Pellentesque sit amet lorem justo. Suspendisse ac est tincidunt,
          ullamcorper urna non, pretium leo. Quisque eros massa, accumsan dictum
          cursus sollicitudin, vulputate quis tortor.
          <br /> <br />
          Etiam et rutrum libero. Vivamus molestie, lectus ut pretium blandit,
          mi turpis efficitur justo, eu maximus enim augue nec mauris. In
          egestas nisi urna. Suspendisse gravida mollis luctus. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec sollicitudin ornare leo vel fermentum. Etiam in nunc
          et diam feugiat lacinia quis pretium nibh. In condimentum porttitor
          faucibus.{" "}
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-right"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Etiam sagittis mauris vitae orci fringilla commodo. Vivamus vehicula
          consectetur tincidunt. Cras elementum, ante et efficitur facilisis,
          est purus eleifend dolor, ac eleifend purus ex a orci. Praesent eu
          lorem tincidunt, maximus purus id, consectetur lectus. Sed eget ligula
          lorem. Quisque in mi et ex rhoncus iaculis. Vivamus quis urna at nunc
          convallis consequat dictum at leo. Ut ornare ipsum quis turpis viverra
          vehicula. Suspendisse eget feugiat libero. Etiam luctus aliquam
          sapien, id sollicitudin ante mattis et. Aliquam vel est eget ligula
          mattis vehicula. Nulla facilisi.
          <br /> <br />
          Suspendisse urna odio, iaculis sit amet iaculis et, posuere sed nulla.
          Suspendisse eu libero viverra sem tincidunt tempor venenatis eu lorem.
          Morbi luctus accumsan eros, in porttitor purus auctor nec. Aliquam
          pulvinar augue leo, eu aliquet nisi vehicula tempor. Fusce semper odio
          at nisi bibendum, vel cursus urna ullamcorper. Fusce pulvinar laoreet
          hendrerit. Nullam leo justo, pulvinar in vulputate nec, bibendum
          posuere ex. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
          <br /> <br />
          Sed lectus turpis, elementum nec sapien quis, iaculis gravida lorem.
          Phasellus semper justo nec nibh cursus ultrices. Phasellus a orci
          bibendum ligula imperdiet tempus et quis dui. Ut posuere eros et urna
          viverra, nec pulvinar diam pharetra. Nam imperdiet felis vitae
          molestie pharetra. Phasellus quis pulvinar lacus. Proin congue libero
          ac ligula sodales porttitor. Nam fermentum placerat magna, id sodales
          massa mattis id. Nunc eleifend dui mi, sed volutpat nibh imperdiet
          non. Cras placerat neque id nisl cursus, at pellentesque elit maximus.
          <br /> <br />
          Phasellus porttitor neque et feugiat rhoncus. Vestibulum sollicitudin
          bibendum congue. In luctus sed lacus non feugiat. Morbi sodales dui ac
          accumsan pellentesque. Aliquam sit amet tristique orci, non congue
          est. Aenean erat nisi, accumsan a elit quis, scelerisque venenatis
          tellus. Nulla facilisi. Aenean vitae egestas quam. Maecenas vel ante
          sit amet purus tempus interdum sed sed felis. Quisque tortor tellus,
          gravida vel egestas vel, vulputate sed metus. Curabitur magna dui,
          malesuada a libero quis, maximus ornare ex. Ut lacinia semper lectus
          at scelerisque. Donec id fermentum augue. Vestibulum mollis nulla sed
          neque iaculis porttitor.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-left"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Sed interdum dapibus felis. Morbi sit amet ultrices velit. Phasellus
          quis tellus in ligula semper accumsan. Duis dictum erat at nisi
          ullamcorper, a bibendum tellus feugiat. Etiam ut viverra nulla. Nulla
          non viverra elit, eu semper quam. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi ex neque, maximus sit amet nunc nec,
          rutrum euismod mi. Sed eget iaculis felis. Aenean varius odio quis
          pulvinar sollicitudin. Pellentesque vestibulum congue tempor. In eu
          facilisis augue.
          <br /> <br />
          Proin ullamcorper ex purus, id ornare magna cursus sed. Vivamus
          ullamcorper ante turpis, sit amet gravida augue feugiat et. Nulla
          fermentum tortor ut nulla tristique, a vestibulum tortor luctus.
          Curabitur bibendum eros at elit molestie mattis. In vulputate urna sed
          feugiat luctus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Proin blandit mauris mi, nec tempor arcu iaculis nec. Ut
          pharetra, justo venenatis convallis suscipit, nibh enim tincidunt
          nunc, vitae iaculis nibh turpis quis erat. Aliquam quis bibendum enim.
          Mauris egestas at elit eget feugiat. Aenean id magna rutrum, placerat
          diam vel, pretium est. Praesent a enim at mauris tincidunt bibendum
          vitae quis nibh. Pellentesque mattis augue at tellus imperdiet
          dignissim. Maecenas vitae porta nisi. Nulla vehicula lacinia varius.
          <br /> <br />
          Cras et sem purus. Nullam eget sodales arcu, sit amet tempor leo.
          Integer ultricies purus sit amet dolor ultricies volutpat. Donec arcu
          justo, posuere eu vestibulum pretium, condimentum in dui. Aenean
          sollicitudin efficitur augue. Nulla sed leo commodo, ullamcorper nibh
          non, hendrerit augue. Proin interdum pulvinar orci, a venenatis tortor
          viverra at. Phasellus ut vulputate orci. Cras sed sapien mi. Aenean
          pharetra odio non erat finibus sollicitudin. Quisque et felis sit amet
          magna maximus semper. Aenean placerat euismod ante, sed ultrices
          tellus ultricies at. Nulla porttitor enim et leo varius, at tincidunt
          dolor aliquam. Suspendisse hendrerit libero eleifend luctus aliquet.
          In a finibus tortor, vitae vestibulum mi. Maecenas magna sapien,
          iaculis at sagittis ut, sodales eget nisi.
          <br />
          <br />
          Fusce fringilla quam eget urna suscipit, a posuere metus semper. Morbi
          ac massa lobortis, viverra dolor sagittis, elementum justo.
          Pellentesque mollis lacinia justo, sed accumsan enim pretium id.
          Maecenas a mollis est. Vivamus neque orci, feugiat nec nisi sit amet,
          pharetra ultrices lacus. Nullam porttitor elementum mi vitae gravida.
          Proin at facilisis nulla. Sed aliquet dictum orci, at egestas sapien
          convallis et. Donec porta mollis odio, a laoreet quam euismod quis.
          Curabitur placerat diam id ex accumsan, viverra egestas sapien
          feugiat.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-right"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Cras mattis at felis ut ornare. Mauris vel lacus dolor. Integer vitae
          erat et libero venenatis sodales. Nullam lectus diam, pellentesque at
          faucibus quis, fringilla vitae elit. Aliquam scelerisque libero
          maximus, porttitor mauris sed, dignissim dui. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut nec augue aliquet, faucibus
          augue eu, efficitur velit. Cras ullamcorper neque gravida nisl
          dignissim mattis. Nunc sit amet neque felis. Integer vitae ullamcorper
          nulla, ut imperdiet massa. Ut tincidunt, ligula nec maximus lacinia,
          lectus metus aliquet magna, blandit hendrerit leo leo ac est. Aliquam
          ac est nec enim viverra bibendum ultricies et leo. Etiam scelerisque
          orci vestibulum tortor lobortis pulvinar. Sed viverra aliquet odio
          eget eleifend. Cras vel ultricies arcu.
          <br /> <br />
          Aliquam eget elit sit amet eros dapibus semper. Nulla semper egestas
          enim quis sollicitudin. Vestibulum suscipit metus id nunc pulvinar
          congue. Integer lobortis, odio vel facilisis ultricies, nisl leo
          mattis odio, quis placerat sem neque sed tellus. Maecenas sodales
          mauris blandit tortor gravida, id consectetur dui tincidunt.
          Pellentesque ex purus, aliquam non feugiat venenatis, laoreet a sem.
          Pellentesque ultrices ex lectus, ut sodales lorem congue eu. Vivamus
          cursus, velit eu semper porta, massa metus ultrices risus, ut ultrices
          lacus lacus ac quam. Nunc condimentum vestibulum purus in rutrum.
          Mauris diam velit, ultricies commodo finibus non, laoreet id magna.
          Nunc hendrerit, dui vitae dignissim semper, mauris orci congue lorem,
          sit amet lacinia lectus felis in magna. Proin tempus massa dolor, sed
          tristique est varius a. Suspendisse eget elementum libero, ut egestas
          risus. Ut rutrum, quam a ornare lobortis, augue magna gravida ante, ut
          convallis erat nisi ac ex. Aenean et quam vitae neque sodales rutrum
          blandit id lectus. Nam id sapien eu ex facilisis suscipit.
          <br /> <br />
          Aenean nec cursus odio. Pellentesque faucibus mattis lectus, vitae
          vulputate eros aliquet et. Quisque condimentum et elit at sagittis.
          Quisque aliquet vehicula metus, nec posuere erat consectetur vel.
          Aenean lacinia et tortor quis sollicitudin. Donec vel eros a lacus
          blandit viverra sit amet eu orci. Nulla viverra sollicitudin enim id
          varius. Donec pulvinar sapien porta mi dignissim sollicitudin. Etiam
          ac lacus interdum, dictum est a, dignissim ligula.
          <br /> <br />
          Nam porttitor, mauris a luctus condimentum, lorem ex cursus dolor, non
          rutrum nunc sem non purus. Phasellus non tempus justo. Etiam quam
          neque, imperdiet dapibus rhoncus non, accumsan eu arcu. Integer
          tincidunt pharetra ipsum egestas condimentum. Quisque vestibulum
          auctor pellentesque. Ut vel semper justo. Sed ut tellus condimentum,
          ultricies quam non, finibus mi. Mauris accumsan metus sit amet tellus
          condimentum posuere. Nam pharetra feugiat orci, vitae facilisis metus
          faucibus id. Nullam et mollis ipsum. Etiam vitae massa egestas,
          pellentesque nulla id, finibus lacus. Nulla ac urna pretium augue
          ultricies vulputate sed gravida diam. In suscipit egestas rutrum. Sed
          dignissim placerat lacus eu pulvinar. Mauris sagittis, enim sit amet
          ultricies faucibus, justo mauris porta ante, sit amet rutrum erat
          nulla ac ligula. Phasellus accumsan, tortor viverra mattis vulputate,
          diam orci vulputate lectus, ornare cursus nulla ligula elementum arcu.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-left"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Pellentesque nulla orci, aliquam at mi ac, iaculis tincidunt ante.
          Mauris non luctus ante. Nulla mollis nec tortor quis lobortis.
          Phasellus ultrices quam et elementum pellentesque. Sed nec ullamcorper
          enim. Nunc fringilla vestibulum augue. Fusce nibh enim, ultrices vel
          nibh eu, laoreet viverra nisi. Maecenas rutrum nunc risus, ut
          ultricies nisl lobortis non. Nullam tristique orci eget semper
          egestas. Quisque vulputate posuere ante, in sagittis lectus dictum sit
          amet. Praesent nec sapien at lacus suscipit tempor quis non ipsum.
          Donec consectetur luctus dapibus.
          <br /> <br />
          Duis ultrices cursus dolor quis faucibus. Nullam mattis, massa et
          malesuada placerat, mauris nunc elementum lorem, vel consequat felis
          lorem vel odio. Vestibulum bibendum cursus enim, eu fermentum odio
          auctor at. Vivamus elementum diam mauris, et sagittis felis aliquam
          non. Etiam pharetra quam vehicula dolor mollis, vitae egestas justo
          semper. Nunc pharetra tortor id ligula auctor gravida. Quisque
          consectetur sodales tellus, non hendrerit dui ullamcorper id. Quisque
          tempor dui a sem convallis iaculis. Cras ullamcorper quis quam
          lobortis efficitur. Suspendisse potenti. Nam erat felis, eleifend id
          condimentum sed, sagittis a mauris. Ut eu nibh mauris. Morbi dolor
          nibh, malesuada non convallis at, ultrices a turpis. Aenean vel felis
          elementum, varius arcu et, lacinia metus.
          <br /> <br />
          Cras vehicula orci pharetra nulla eleifend, non feugiat orci
          condimentum. Nam rutrum ante ac sapien pulvinar, sed facilisis libero
          bibendum. Aliquam luctus, nisi ut commodo suscipit, velit lacus auctor
          urna, ut suscipit diam turpis in ex. Suspendisse non nunc ac lacus
          commodo commodo. Vivamus elementum enim et enim vulputate, id tempus
          metus auctor. Aenean faucibus ligula sit amet nibh lacinia tincidunt.
          Sed consequat nulla commodo dui lacinia, id sodales felis posuere.
          Duis at sodales ipsum. Maecenas viverra sollicitudin pretium.
          <br /> <br />
          Sed tristique dignissim consectetur. Maecenas sed laoreet nibh.
          Vestibulum iaculis rutrum lorem eget lacinia. Duis quis dolor in leo
          fermentum rhoncus. Integer aliquet a augue a porttitor. Donec
          fermentum diam sed eros cursus sagittis. Vivamus nisi dui, ullamcorper
          eget ante eget, ornare rhoncus dui. Nam bibendum quis metus hendrerit
          auctor. Donec sed purus id arcu porta luctus. Ut hendrerit ante sed
          ipsum commodo, sed elementum erat vehicula. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus nisi magna, euismod et turpis vel, tincidunt
          tincidunt est. Nam vitae tellus interdum, maximus eros vitae, luctus
          mi. Nullam nec enim finibus, sodales lacus sit amet, aliquam lorem.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-right"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Aenean et enim ultrices, vulputate erat quis, faucibus velit. Mauris
          consequat lacus a gravida consequat. In egestas sollicitudin nisl ac
          tincidunt. Fusce venenatis lacus quis magna condimentum interdum.
          Donec sed luctus augue, sed sollicitudin leo. Quisque semper dapibus
          velit interdum commodo. Fusce eget elementum odio. Fusce tristique
          eleifend orci, et tristique lacus gravida at. Suspendisse sit amet
          neque eget velit aliquet congue sed ac velit.
          <br /> <br />
          Quisque libero libero, ullamcorper nec ligula in, blandit dignissim
          est. Donec sit amet ullamcorper ex. Vivamus ac enim eu elit facilisis
          iaculis eget eu ante. Cras pulvinar massa vitae sem scelerisque
          cursus. Morbi sit amet bibendum nulla. Morbi consequat quam ligula. Ut
          dapibus dui sed metus consectetur, quis dictum neque tincidunt. Sed
          quis felis nunc. Aliquam ac gravida lectus, eget ultricies diam.
          Aliquam imperdiet massa ligula, ut pretium erat placerat ac.
          Pellentesque facilisis lobortis pharetra. Duis in tortor mollis libero
          lacinia rhoncus vel id mi.
          <br /> <br />
          Suspendisse luctus velit et magna congue interdum. Donec nunc ex,
          porta vel ex a, suscipit porta urna. Quisque gravida lorem nec eros
          hendrerit, sed lacinia massa convallis. In nec nisi tellus. Proin non
          neque convallis magna venenatis iaculis. Donec vulputate nisl vel urna
          bibendum tristique. Sed id mi scelerisque augue accumsan iaculis ut
          sed mauris.
          <br /> <br />
          Sed sit amet scelerisque felis. Etiam vel lobortis sem. Sed sed sem
          leo. Nulla dolor magna, molestie ac sem quis, varius imperdiet risus.
          Nunc sit amet molestie arcu. Aenean tincidunt, ex ac malesuada
          consectetur, ipsum libero scelerisque felis, eget sollicitudin ex
          mauris nec purus. Proin vestibulum orci porttitor nibh semper, in
          rutrum mi interdum. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Etiam sit amet metus nec
          nibh laoreet sagittis eu eget quam. Cras accumsan, nunc ut tempus
          commodo, eros quam aliquam arcu, in venenatis lectus metus at mi.
          <br /> <br />
          Proin mattis nibh sem, non tempus sapien facilisis vel. Donec volutpat
          justo a lacinia vehicula. Integer sit amet nibh gravida, ornare ante
          id, fringilla est. Nullam eu libero dolor. Nam posuere facilisis ipsum
          sed vulputate. Phasellus sed tincidunt purus. Aliquam sed eros ac orci
          gravida egestas ut a nunc.
          <br /> <br />
          Sed nec nibh iaculis, efficitur purus eu, porttitor velit. Donec
          tincidunt nisl vitae urna tempor tincidunt. Aliquam et augue justo.
          Nulla vel justo semper, finibus nunc in, pellentesque lorem. Vivamus
          aliquam lectus rhoncus vulputate tincidunt. Proin quis felis vitae
          risus convallis condimentum. Quisque vestibulum ultrices nibh quis
          mollis. Integer ac erat nulla. Nulla consequat pharetra nibh vitae
          ultricies. Donec ac interdum odio. Proin sed ultrices nisi, a
          malesuada dui. Fusce eu ultricies est. Proin a nulla sapien. Praesent
          vel urna placerat, scelerisque ante a, congue elit.
          <img
            className="block w-[50%] h-[450px] object-cover rounded-md m-3  float-left"
            src="https://images.unsplash.com/photo-1694930103954-f7ff29dc307e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          Proin imperdiet consectetur ultrices. Sed maximus libero eu tellus
          pharetra mollis. Vivamus commodo commodo imperdiet. Phasellus sodales
          feugiat metus at molestie. Nullam lobortis consectetur purus fermentum
          tristique. Integer dapibus eros in enim ornare rutrum ac ut nisi.
          Donec ac mi euismod, venenatis lacus pretium, venenatis erat.
          Pellentesque euismod porta luctus. Nam sed elit metus. Nam vitae
          lacinia urna, a interdum ipsum. Nullam rhoncus tortor id viverra
          malesuada. Mauris ut dui luctus, rutrum enim efficitur, ornare dolor.
          Nam mi magna, fermentum quis libero a, suscipit egestas massa. Vivamus
          lorem arcu, bibendum non finibus lobortis, tempor eu felis. Aenean
          dignissim velit et mi lobortis volutpat. Nam eu congue ex.
          <br /> <br />
          Morbi pharetra massa nec leo porttitor mollis. Curabitur purus mauris,
          volutpat nec libero ac, porttitor mattis leo. Praesent pulvinar
          consequat augue, mollis porta augue placerat quis. Nullam tincidunt et
          erat et rhoncus. Vivamus a augue malesuada, ultrices nibh vel, lacinia
          libero. Duis felis ligula, commodo non placerat ac, varius vitae enim.
          Nam pellentesque nec magna eu molestie. Morbi ac magna malesuada,
          pellentesque nulla a, ornare leo. Aliquam semper eros at nisi aliquet,
          vestibulum convallis lectus rhoncus. Sed vestibulum dolor sit amet
          ante pharetra eleifend. Sed ante nulla, commodo ut nibh ut, elementum
          pulvinar mauris. Proin id nulla urna. Integer sodales suscipit
          consectetur. Donec non massa dui. Donec consequat ornare turpis non
          facilisis. Proin viverra condimentum magna id eleifend.
          <br /> <br />
          Morbi quis pulvinar leo, ut aliquet ex. Mauris leo massa, bibendum sed
          facilisis ac, dignissim non turpis. Vivamus consequat dapibus nibh,
          scelerisque pharetra risus eleifend non. Fusce dolor nibh, vulputate
          ut elit vel, commodo mattis libero. Suspendisse fringilla scelerisque
          dolor, a lacinia ipsum cursus sed. Integer sit amet fermentum ex, non
          sagittis turpis. Nam diam velit, dignissim a hendrerit et, vehicula
          quis ligula. Donec in sem eget arcu aliquet vestibulum et ac est.
          <br /> <br />
          Maecenas hendrerit sit amet velit quis placerat. Praesent viverra et
          nibh vel laoreet. Etiam in ullamcorper nisi. Donec semper felis et
          erat facilisis faucibus. Donec blandit gravida bibendum. Maecenas et
          sagittis nulla. In scelerisque augue vitae metus mattis iaculis.
          Vestibulum vitae venenatis lorem, sed tristique mi. Nam maximus diam
          eget pellentesque maximus. Aliquam dapibus ornare sagittis. Praesent
          ac arcu vel nisi luctus condimentum. Nam pharetra ipsum dapibus nisl
          gravida, id dictum augue vehicula. Nullam vitae turpis ex.
          <br /> <br />
          Donec eu ipsum nec justo accumsan lobortis. Vivamus finibus, felis a
          consequat rhoncus, libero est congue lorem, ut sollicitudin ipsum
          libero sagittis leo. Integer mattis, ante aliquam feugiat elementum,
          nunc dolor convallis eros, et ultrices nisi lectus sed sapien.
          Pellentesque erat mauris, iaculis in hendrerit iaculis, aliquet sit
          amet justo. Maecenas massa risus, vestibulum eget tristique rhoncus,
          interdum nec orci. Phasellus sit amet convallis dui, et imperdiet
          neque. Fusce a tempus justo.
          <br /> <br />
          Duis id blandit est. Integer vel tincidunt purus, eu tempus metus.
          Etiam hendrerit ante sit amet neque consequat tempus. Nunc nec
          tincidunt felis, a dictum ante. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nam commodo
          augue in enim scelerisque, eget tristique sem auctor. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </p>
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
