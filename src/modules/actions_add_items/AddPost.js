import React from "react";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import TextArea from "../../components/input/TextArea";
import UploadImage from "../UploadImage";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import useGetDay from "../../hooks/useGetDay";
import Select from "../../components/select/Select";
import Editor from "../../components/Editor";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, db } from "../../store/firebaseconfig";
import { toast } from "react-toastify";
import slugify from "slugify";
import { handleRemoveImage } from "../../slice/UploadImageSlice";
import { resetValueEditor } from "../../slice/EditorSlice";
import { useNavigate } from "react-router";
import TagNamePage from "../../components/card/TagNamePage";
const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formattedDate } = useGetDay();
  const { handleSubmit, control, reset } = useForm();
  const { name_image, link_image } = useSelector((state) => state.UploadImage);
  const { value } = useSelector((state) => state.EditorSlice);
  const onSubmit = async (data) => {
    // Add a new document with a generated id.
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        ...data,
        title: data.title.toLowerCase().trimEnd(),
        slug_post: slugify(data.slug_post || data.title, {
          replacement: "-", // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: "vi", // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        }),
        name_image,
        link_image,
        createdAt: formattedDate,
        html: value,
        author: auth.currentUser.displayName,
        userId: auth.currentUser.uid,
      });
      await updateDoc(docRef, {
        post_id: docRef.id,
      });
      reset({
        title: "",
        slug_post: "",
        description: "",
      });
      dispatch(handleRemoveImage());
      dispatch(resetValueEditor());
      toast.success("Submit is successful");
      navigate("/manage");
    } catch (error) {
      toast.error("Error while submit");
    }
  };

  return (
    <div className="min-h-[70vh] p-10 sm:px-0">
      <div className="h-full sm:rounded-none bg-slate-300 sm:p-2 xl:p-10">
        <TagNamePage
          icon={<i className="fa-regular fa-pen-to-square"></i>}
          title='add posts'
          desc='add your posts'
        ></TagNamePage>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-1 xl:grid-cols-2 xl:gap-x-10 gap-y-5">
            <div className="grid gap-y-3">
              <Label htmlFor="title">title</Label>
              <Input
                type="text"
                name="title"
                control={control}
                placeholder={"Input your title of news...."}
              ></Input>
            </div>
            <div className="grid gap-y-3">
              <Label htmlFor="slug_post">slug of news</Label>
              <Input
                type="text"
                name="slug_post"
                control={control}
                placeholder={"Input your slug of news...."}
              ></Input>
            </div>
            <div className="grid gap-y-3">
              <Label htmlFor="description">description of news</Label>
              <TextArea
                type="text"
                name="description"
                control={control}
                placeholder={"Input your description of news...."}
              ></TextArea>
            </div>
            <UploadImage></UploadImage>
            <Select control={control} name="category"></Select>
            <div className="entry-content xl:col-span-2">
              <Editor placeholder={"Write something..."} />
            </div>
          </div>

          <div className="sm:my-5">
            <Button className="bg-blue-400 w-[250px] h-[50px] block mx-auto rounded-md text-white font-bold text-xl capitalize">
              Post news
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
