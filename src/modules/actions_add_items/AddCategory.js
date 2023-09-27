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
import TagNamePage from "../../components/card/TagNamePage";

const AddCategory = () => {
  const { formattedDate } = useGetDay();
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "categories"), {
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
    <div className="min-h-[70vh] p-10 sm:px-0">
      <div className="h-full sm:rounded-none bg-slate-300 sm:p-2 xl:p-10">
      
        <TagNamePage
          icon={<i className="fa-solid fa-box"></i>}
          title="add category"
          desc="add your categories"
        ></TagNamePage>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-x-10 sm:grid-cols-1  gap-y-5">
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
          </div>

          <div className="col-span-2">
            <Button className=" bg-blue-400 text-white sm:text-lg capitalize font-bold rounded-md sm:w-[180px] h-[50px] mx-auto my-5 block">
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
