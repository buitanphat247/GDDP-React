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

const OverviewPosts = () => {
  const dispatch = useDispatch();
  const [query_post, setQueryPosts] = useState("");
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
  const { data } = useSelector((state) => state.global);
  return (
    <>
      <div className="min-h-[70vh] p-10">
        <div className="h-full rounded-md bg-slate-300 p-10">
          <div className="mb-5">
            <div className="font-bold uppercase text-3xl flex items-center gap-x-2">
              <i className="fa-solid fa-newspaper"></i>
              <h1>All Posts</h1>
            </div>
            <span className=" text-lg mt-5 capitalize">Admin Manage Posts</span>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              className="w-full block h-[50px] px-5 rounded-md outline-none"
              placeholder="Search name of posts"
            />
          </div>
          <table className="bg-white w-full border-1 mt-5">
            <tbody>
              <tr className="text-xl bg-blue-400 capitalize">
                <th className="w-1/12 border ">id</th>
                <th className="w-1/3">post</th>
                <th className="w-1/6">category</th>
                <th className="w-1/6">author</th>
                <th className="w-1/12">actions</th>
              </tr>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <tr className="text-xl font-bold" key={item.post_id}>
                      <td>{item.post_id.slice(0, 8) + "...."}</td>
                      <td>
                        <CardPost
                          link_image={item.link_image}
                          title={item.title}
                        ></CardPost>
                      </td>
                      <td className="capitalize ">
                        <Button className="bg-blue-400 text-white font-bold w-[150px] py-3 capitalize rounded-lg">
                          {item.category}
                        </Button>
                      </td>
                      <td>{item.author}</td>
                      <td className="capitalize flex justify-around gap-x-3 border-none">
                        <View></View>
                        {item.userId === auth.currentUser.uid && (
                          <>
                            <Edit></Edit>
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
