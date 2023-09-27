import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../store/firebaseconfig";

const useDataPost = () => {
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const Data = [];
      querySnapshot.forEach((doc) => {
        Data.push(doc.data());
      });
      setDataPost(Data);
    });
  }, []);
  return {
    dataPost,
  };
};

export default useDataPost;
