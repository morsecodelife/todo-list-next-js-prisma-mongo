"use client";

import { toggleTodo } from "@/app/actions";
import Form from "../form/Form";

interface ToggleTodoProps {
  todoId: string;
  completed: boolean;
}

const ToggleTodo = ({ todoId, completed }: ToggleTodoProps) => {
  return (
    <Form action={toggleTodo}>
      <input type="hidden" name="todoId" value={todoId} />
      <input
        type="checkbox"
        name="completed"
        value="true"
        defaultChecked={completed}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      />
    </Form>
  );
};

export default ToggleTodo;
