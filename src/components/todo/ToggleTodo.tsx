"use client";

import { toggleTodo } from "@/app/actions";
import { Loader } from "lucide-react";
import { useTransition } from "react";
import Form from "../form/Form";

interface ToggleTodoProps {
  todoId: string;
  completed: boolean;
}

const ToggleTodo = ({ todoId, completed }: ToggleTodoProps) => {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const formData = new FormData();
      formData.append("todoId", todoId);
      formData.append("completed", String(e.target.checked));
      toggleTodo(formData);
    });
  };

  return (
    <Form action={toggleTodo}>
      {isPending ? (
        <Loader
          className="h-6 w-6 animate-spin text-gray-500"
          strokeWidth={2.5}
        />
      ) : (
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={handleChange}
        />
      )}
    </Form>
  );
};

export default ToggleTodo;
