import { removeTodo } from "@/app/actions";
import { Trash2 } from "lucide-react";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

interface RemoveTodoProps {
  todoId: string;
}

const RemoveTodo = ({ todoId }: RemoveTodoProps) => {
  return (
    <div>
      <Form action={removeTodo}>
        <Input type="hidden" name="todoId" value={todoId} />
        <Button
          variant="ghost"
          text={<Trash2 className="h-4 w-4" />}
          type="submit"
        />
      </Form>
    </div>
  );
};

export default RemoveTodo;
