import React, { useEffect } from "react";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { toast } from "react-toastify";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../store/firebaseconfig";
import useGetDay from "../../hooks/useGetDay";
import slugify from "slugify";
import { useNavigate, useParams } from "react-router";

const UpdateCategory = () => {
  const id_category = useParams().slug;
  const navigate = useNavigate();
  const { formattedDate } = useGetDay();
  const { handleSubmit, control, reset } = useForm({});
  useEffect(() => {
    async function GetDataDefault() {
      const docRef = doc(db, "categories", id_category);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        reset({
          category: docSnap.data().category,
          slug_category: docSnap.data().slug_category,
        });
      }
    }
    GetDataDefault();
  }, [id_category, reset]);
  const onSubmit = async (data) => {
    try {
      await updateDoc(doc(db, "categories", id_category), {
        ...data,
        category: data.category.toLowerCase().trimEnd(),
        slug_category: slugify(data.slug_category || data.category, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        }),
        createdAt: formattedDate,
        userId: auth.currentUser.uid,
      });
      toast.success("Submit success");
      navigate("/manage/overview-categories");
    } catch (error) {
      toast.error("Submit failed");
    }
  };
  return (
    <div className="min-h-[70vh] p-10">
      <div className="h-full rounded-md bg-slate-300 p-10">
        <div className="mb-5">
          <div className="font-bold uppercase text-3xl flex items-center gap-x-2">
            <i className="fa-solid fa-box"></i>
            <h1>Category</h1>
          </div>
          <span className=" text-lg mt-5 capitalize">update your category</span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-x-10"
        >
          <div className="grid gap-y-3">
            <Label htmlFor="category">name category</Label>
            <Input
              required
              placeholder="Input your name of category"
              name="category"
              type="text"
              control={control}
            ></Input>
          </div>
          <div className="grid gap-y-3">
            <Label htmlFor="slug_category">slug category</Label>
            <Input
              placeholder="Input your slug of category"
              name="slug_category"
              type="text"
              control={control}
            ></Input>
          </div>
          <div className="col-span-2">
            <Button className=" bg-blue-400 text-white text-xl capitalize font-bold rounded-md w-[250px] h-[50px] mx-auto my-5 block">
              Update Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
