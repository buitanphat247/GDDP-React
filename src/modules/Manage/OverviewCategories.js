import React, { useEffect, useState } from "react";
import View from "../../components/actions/View";
import Edit from "../../components/actions/Edit";
import Remove from "../../components/actions/Remove";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import debounce from "lodash/debounce";
import { auth, db } from "../../store/firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { setListCategories } from "../../slice/CategoriesSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const OverviewCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list_categories } = useSelector((state) => state.ListCategories);
  const [query_category, setQueryCategory] = useState("");
  useEffect(() => {
    let newQueryCategory = "";
    if (query_category === "") newQueryCategory = "";
    else newQueryCategory = query_category;
    const q = query(collection(db, "categories"));
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (query_category === "") data.push(doc.data());
        else {
          if (doc.data().category.includes(newQueryCategory))
            data.push(doc.data());
        }
      });
      dispatch(setListCategories(data));
    });
  }, [dispatch, query_category]);
  const handleRemove = (id) => {
    Swal.fire({
      title: "Xác nhận xóa?",
      text: "Bạn có muốn xóa danh mục này",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Danh mục đã được xóa thành công", "success");
        await deleteDoc(doc(db, "categories", id));
      }
    });
  };
  const handleChange = debounce((e) => {
    setQueryCategory(e.target.value);
  }, 500);
  const handleEdit = (id) => {
    navigate(`/manage/categories/${id}`);
  };
  return (
    <div className="min-h-[70vh] p-10">
      <div className="h-full rounded-md bg-slate-300 p-10">
        <div className="mb-5">
          <div className="font-bold uppercase text-3xl flex items-center gap-x-2">
            <i className="fa-solid fa-boxes-stacked"></i>
            <h1>All categories</h1>
          </div>
          <span className=" text-lg mt-5 capitalize">
            Admin Manage categories
          </span>
        </div>
        <div>
          <input
            onChange={handleChange}
            autoFocus={false}
            type="text"
            className="w-full block h-[50px] px-5 rounded-md outline-none"
            placeholder="Search name of categories"
          />
        </div>
        <table className="bg-white w-full border-1 mt-5">
          <tbody>
            <tr className="text-xl bg-blue-400 capitalize">
              <th className="w-1/12 border ">ID</th>
              <th className="w-1/3">name category</th>
              <th className="w-1/3">slug category</th>
              <th className="w-1/12">actions</th>
            </tr>
            {list_categories.length > 0 &&
              list_categories.map((item) => {
                return (
                  <tr className="text-xl font-bold" key={item.category_id}>
                    <td>{item.category_id.slice(0, 8) + "..."}</td>
                    <td className="capitalize">{item.category}</td>
                    <td>{item.slug_category}</td>
                    <td className="capitalize flex justify-around gap-x-3 border-none">
                      <View></View>
                      {item.userId === auth.currentUser.uid && (
                        <>
                          <Edit
                            onClick={() => handleEdit(item.category_id)}
                          ></Edit>
                          <Remove
                            onClick={() => handleRemove(item.category_id)}
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
  );
};

export default OverviewCategories;
