import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, type = "text", className, ...props }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      className={`${className} focus:border-emerald-600 border-2 transition-colors duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 shadow-sm px-3 p-2 focus:ring focus:ring-emerald-200 focus:ring-opacity-50`}
      {...props}
    />
  );
};

export default Input;
