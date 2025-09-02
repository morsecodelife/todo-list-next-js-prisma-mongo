"use client";

import { createTodo } from "@/app/actions";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
import Form from "../form/Form";
import Input from "../input/Input";

interface AddTodoProps {
  className?: string;
}

function InputWithStatus() {
  const { pending } = useFormStatus();

  return (
    <div className="relative flex items-center gap-2">
      <Input
        className={`w-full rounded-full shadow-sm pr-10 transition-opacity ${
          pending ? "opacity-50 pointer-events-none" : ""
        }`}
        type="text"
        name="todo"
        placeholder="What will you do today?"
        autoComplete="off"
        disabled={pending}
        aria-busy={pending}
      />

      {pending && (
        <Loader
          className="absolute right-3 h-5 w-5 animate-spin text-gray-500"
          strokeWidth={2.5}
          aria-label="Submitting…"
        />
      )}
    </div>
  );
}

const AddToDo = ({ className }: AddTodoProps) => {
  return (
    <Form action={createTodo}>
      <div className={className}>
        <InputWithStatus />
      </div>
    </Form>
  );
};

export default AddToDo;
