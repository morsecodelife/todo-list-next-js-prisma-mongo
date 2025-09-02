"use client";

import { removeTodo } from "@/app/actions";
import { Loader, Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

interface RemoveTodoProps {
  todoId: string;
}

// ✅ Client child ที่รู้จัก pending state
function RemoveButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="ghost"
      type="submit"
      disabled={pending}
      text={
        pending ? (
          <Loader className="h-4 w-4 animate-spin text-gray-500" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )
      }
    />
  );
}

const RemoveTodo = ({ todoId }: RemoveTodoProps) => {
  return (
    <Form action={removeTodo}>
      <Input type="hidden" name="todoId" value={todoId} />
      <RemoveButton />
    </Form>
  );
};

export default RemoveTodo;
