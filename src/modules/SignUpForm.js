import React from "react";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Button from "../components/button/Button";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../store/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import useGetDay from "../hooks/useGetDay";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const SignUpForm = () => {
  const navigate = useNavigate();
  const { formattedDate } = useGetDay();
  const { handleSubmit, control, reset } = useForm({});
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const { uid } = userCredential.user;
        await addDoc(collection(db, "users"), {
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          email: data.email,
          password: data.password,
          createAt: formattedDate,
          userId: uid,
        });
        await updateProfile(auth.currentUser, {
          displayName: data.username,
        });
        reset({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        });
        toast.success("Create new account success");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Create new account failed");
      });
  };

  return (
    <form
      autoComplete="false"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-col gap-y-5"
    >
      <div className="w-full">
        <Label htmlFor={"firstname"}>firstname</Label>
        <Input
          placeholder="Input your firstname"
          name="firstname"
          type="text"
          control={control}
        ></Input>
      </div>

      <div className="w-full">
        <Label htmlFor={"lastname"}>lastname</Label>
        <Input
          placeholder="Input your lastname"
          name="lastname"
          type="text"
          control={control}
        ></Input>
      </div>
      <div className="w-full">
        <Label htmlFor={"username"}>username</Label>
        <Input
          placeholder="Input your username"
          name="username"
          type="text"
          control={control}
        ></Input>
      </div>
      <div className="w-full">
        <Label htmlFor={"email"}>email</Label>
        <Input
          placeholder="Input your email address"
          name="email"
          type="text"
          control={control}
        ></Input>
      </div>
      <div className="w-full">
        <Label htmlFor={"password"}>password</Label>
        <Input
          placeholder="Input your password"
          name="password"
          type="password"
          control={control}
        ></Input>
      </div>
      <Button className="outline-none sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-blue-600 capitalize text-white h-[50px] rounded-md">
        sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
