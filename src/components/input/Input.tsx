import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, type = "text", className, ...props }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      className={`${className} border border-gray-300 shadow-sm px-3 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
      {...props}
    />
  );
};

export default Input;
