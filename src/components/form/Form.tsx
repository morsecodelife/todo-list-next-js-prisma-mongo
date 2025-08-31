"use client";

import { ReactNode, useRef } from "react";

interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      className={className}
      onSubmit={onSubmit}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
