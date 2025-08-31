import { createTodo } from "@/app/actions";
import Form from "../form/Form";
import Input from "../input/Input";

interface AddTodoProps {
  className?: string;
}

const AddToDo = ({ className }: AddTodoProps) => {
  return (
    <Form action={createTodo}>
      <div className={`${className}`}>
        <Input
          className="w-full rounded-full shadow-sm"
          type="text"
          name="todo"
          placeholder="What will you do today?"
          autoComplete="off"
        />
        {/* <Button type="submit" text={<Plus />} variant="default" /> */}
      </div>
    </Form>
  );
};

export default AddToDo;
