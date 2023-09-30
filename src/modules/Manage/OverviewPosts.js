import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CardPost from "../../components/card/CardPost";
import Edit from "../../components/actions/Edit";
import Remove from "../../components/actions/Remove";
import View from "../../components/actions/View";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../slice/GlobalSlice";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { auth, db } from "../../store/firebaseconfig";
import Swal from "sweetalert2";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router";
import TagNamePage from "../../components/card/TagNamePage";

const OverviewPosts = () => {
  const dispatch = useDispatch();
  const [query_post, setQueryPosts] = useState("");
  const navigate = useNavigate();
  const handleRemove = (id) => {
    Swal.fire({
      title: "Xác nhận xóa?",
      text: "Bạn có muốn xóa bài viết này",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Bài viết đã được xóa thành công", "success");
        await deleteDoc(doc(db, "posts", id));
      }
    });
  };
  useEffect(() => {
    let newQueryPosts = "";
    if (query_post === "") newQueryPosts = "";
    else newQueryPosts = query_post;
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (query_post === "") data.push(doc.data());
        else {
          if (doc.data().title.includes(newQueryPosts)) data.push(doc.data());
        }
      });
      dispatch(setData(data));
    });
  }, [dispatch, query_post]);
  const handleChange = debounce((e) => {
    setQueryPosts(e.target.value);
  }, 500);
  const handleClick = (id) => {
    navigate(`/details-news-page/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/manage/add-posts/${id}`);
  };
  const { data } = useSelector((state) => state.global);
  return (
    <>
      <div className="min-h-[70vh] p-10 sm:px-0">
        <div className="h-full sm:rounded-none bg-slate-300 sm:p-2 xl:p-10">
          <TagNamePage
            icon={<i className="fa-solid fa-newspaper"></i>}
            title={`All Posts - ${data.length}`}
            desc="Admin Manage Posts"
          ></TagNamePage>
          <div>
            <input
              autoFocus={false}
              onChange={handleChange}
              type="text"
              className="w-full h-[50px] bg-[#e4e6eb] sm:text-sm
              placeholder:text-black outline-none border-2 border-transparent focus:border-blue-500  rounded-md px-5 focus:shadow-black transition-all shadow-lg"
              placeholder="Search name of posts"
            />
          </div>
          <table className="bg-white w-full border-1 mt-5">
            <tbody>
              <tr className="text-xl bg-blue-400 capitalize">
                <th className="w-1/12 border sm:hidden">id</th>
                <th className="w-1/3 sm:w-1 sm:text-lg md:text-xl xl:text-2xl">
                  post
                </th>
                <th className="w-1/6 sm:hidden">category</th>
                <th className="w-1/6 sm:hidden">author</th>
                <th className="w-1/12 sm:text-lg md:text-xl xl:text-2xl xl:w-1/6">
                  actions
                </th>
              </tr>
              {data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <tr className="text-xl font-bold" key={index}>
                      <td className="sm:hidden">
                        {item?.post_id?.slice(0, 8) + "...."}
                      </td>
                      <td>
                        <CardPost
                          link_image={item?.link_image}
                          title={item?.title}
                        ></CardPost>
                      </td>
                      <td className="capitalize sm:hidden">
                        <Button className="bg-blue-400 text-white font-bold w-[150px] py-3 capitalize rounded-lg">
                          {item?.category}
                        </Button>
                      </td>
                      <td className="sm:hidden">{item?.author}</td>
                      <td className="capitalize flex justify-around items-center  border-2 border-white sm:gap-x-2 border-none">
                        <View onClick={() => handleClick(item?.post_id)}></View>
                        {item?.userId === auth?.currentUser?.uid && (
                          <>
                            <Edit
                              onClick={() => handleEdit(item.post_id)}
                            ></Edit>
                            <Remove
                              onClick={() => handleRemove(item.post_id)}
                            ></Remove>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OverviewPosts;
