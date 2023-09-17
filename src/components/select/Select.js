import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../store/firebaseconfig";
import { setListCategories } from "../../slice/CategoriesSlice";
import { useController } from "react-hook-form";

const Select = ({ control, name, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  const dispatch = useDispatch();
  const { list_categories } = useSelector((state) => state.ListCategories);
  useEffect(() => {
    const q = query(collection(db, "categories"));
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      dispatch(setListCategories(data));
    });
  }, [dispatch]);
  return (
    <select
      {...props}
      {...field}
      className="outline-none h-[50px] px-5 text-xl rounded-md capitalize"
    >
      <option value="" disabled>
        Select category
      </option>
      {list_categories.map((item) => {
        return (
          <option
            className="capitalize"
            value={item.category}
            key={item.category_id}
          >
            {item.category}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
