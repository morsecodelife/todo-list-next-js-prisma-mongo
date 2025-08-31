import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "link" | "ghost" | "destructive";
}

const Button = ({
  type,
  text,
  onClick,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={clsx(
        "rounded-lg font-semibold transition-colors focus:ring-2 cursor-pointer",
        variant === "default" &&
          "text-white bg-neutral-950 p-2 border border-transparent hover:bg-neutral-700 focus:ring-neutral-500",
        variant === "outline" &&
          "text-neutral-900 border border-neutral-900 p-2 hover:bg-neutral-100 focus:ring-neutral-400",
        variant === "link" &&
          "text-blue-600 underline underline-offset-4 p-2 hover:text-blue-800 focus:ring-blue-400",
        variant === "ghost" &&
          "text-neutral-900 p-2 hover:bg-neutral-100 focus:ring-neutral-300",
        variant === "destructive" &&
          "text-white bg-red-600 p-2 border border-transparent hover:bg-red-700 focus:ring-red-500"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
