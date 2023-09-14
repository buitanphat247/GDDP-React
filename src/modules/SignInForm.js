import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../store/firebaseconfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SignInForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm({});
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        reset({
          email: "",
          password: "",
        });
        toast.success("Login account success");
        navigate("/"); // ...
      })
      .catch((error) => {
        toast.error("Login account failed");
      });
  };
  return (
    <form
      autoComplete="false"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-col gap-y-5"
    >
      <div>
        <Label htmlFor="email">email</Label>
        <Input
          name="email"
          type="text"
          placeholder="please enter your email address"
          control={control}
        ></Input>
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input
          name="password"
          type="password"
          placeholder="please enter your password"
          control={control}
        ></Input>
      </div>
      <Button className="outline-none sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-blue-600 capitalize text-white h-[50px] rounded-md">
        login
      </Button>
    </form>
  );
};

export default SignInForm;
