import React from "react";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { toast } from "react-toastify";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../store/firebaseconfig";
import useGetDay from "../../hooks/useGetDay";
import slugify from "slugify";

const AddCategory = () => {
  const { formattedDate } = useGetDay();
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "categories"), {
        ...data,
        category: data.category.toLowerCase().trimEnd(),
        slug_category: slugify(data.slug_category || data.category, {
          replacement: "-", // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: "vi", // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        }),
        createdAt: formattedDate,
        userId: auth.currentUser.uid,
      });
      // Cập nhật tài liệu với giá trị categories_id mới
      await updateDoc(doc(db, "categories", docRef.id), {
        category_id: docRef.id,
      });
      reset({
        category: "",
        slug_category: "",
      });
      toast.success("Submit success");
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
          <span className=" text-lg mt-5 capitalize">Add your category</span>
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
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
