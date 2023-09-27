import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({ control, placeholder, name, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <textarea
      placeholder={placeholder}
      id={name}
      name={name}
      className="w-full h-[350px] sm:text-lg p-3 rounded-md outline-none focus:border-2 focus:border-blue-800 border-2 border-transparent"
      {...props}
      {...field}
    ></textarea>
  );
};

export default TextArea;
