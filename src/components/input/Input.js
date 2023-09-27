import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, placeholder, type, name, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={name}
      autoFocus={false}
      name={name}
      className="transition-all w-full h-[50px] px-3 rounded-md outline-none focus:border-2 focus:border-blue-800 border-2 border-transparent"
      {...props}
      {...field}
    ></input>
  );
};

export default Input;
