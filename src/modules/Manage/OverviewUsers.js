import React, { useEffect, useState } from "react";
import Infor from "../../components/card/Infor";
import Button from "../../components/button/Button";
import { db } from "../../store/firebaseconfig";
import { collection, onSnapshot, query } from "firebase/firestore";
import debounce from "lodash/debounce";
const OverviewUsers = () => {
  const [value, setValue] = useState([]);
  const [query_user, setQueryUser] = useState("");
  useEffect(() => {
    let newQueryUser = "";
    if (query_user === "") newQueryUser = "";
    else newQueryUser = query_user;
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (query_user === "") data.push(doc.data());
        else {
          if (doc.data().fullname.includes(newQueryUser)) data.push(doc.data());
        }
      });
      setValue(data);
    });
  }, [query_user, setValue]);
  const handleChange = debounce((e) => {
    setQueryUser(e.target.value);
  }, 500);
  return (
    <div className="min-h-[70vh] p-10">
      <div className="h-full rounded-md bg-slate-300 p-10">
        <div className="mb-5">
          <div className="font-bold uppercase text-3xl flex items-center gap-x-2">
            <i className="fa-solid fa-users"></i>
            <h1>All users</h1>
          </div>
          <span className=" text-lg mt-5 capitalize">Admin Manage users</span>
        </div>
        <div>
          <input
            autoFocus={false}
            onChange={handleChange}
            type="text"
            className="w-full block h-[50px] px-5 rounded-md outline-none"
            placeholder="Search name of users"
          />
        </div>
        <table className="bg-white w-full border-1 mt-5">
          <tbody>
            <tr className="text-xl bg-blue-400 capitalize">
              <th className="w-1/12 border ">STT</th>
              <th className="w-1/3">infor</th>
              <th className="w-1/6">username</th>
              <th className="w-1/6">email</th>
              <th className="w-1/6">role</th>
            </tr>
            {value.length > 0 &&
              value.map((item) => {
                return (
                  <tr key={item.userId} className="text-xl font-bold">
                    <td>{item.userId.slice(0, 8) + "..."}</td>
                    <td>
                      <Infor name={item.fullname}></Infor>
                    </td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td className="capitalize">
                      <Button className="capitalize bg-green-400 w-[150px] py-3 rounded-md text-red-600">
                        {item.role}
                      </Button>
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

export default OverviewUsers;
