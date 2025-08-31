import AddToDo from "@/components/todo/AddToDo";
import Todo from "@/components/todo/Todo";
import TodoBlank from "@/components/todo/TodoBlank";
import { prisma } from "@/utils/prisma";
import { ListTodo } from "lucide-react";

async function getTodos() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      completed: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getTodos();
  return (
    <main className="container mx-auto relative h-screen">
      <header className="flex flex-col justify-center items-center p-4  space-y-3">
        <h1 className="font-bold text-4xl">To Do List</h1>
        <div className="flex items-center gap-2">
          <ListTodo />
          <p className="text-lg">
            Manage your tasks efficiently built with NextJS + MongoDB
          </p>
        </div>
      </header>
      <AddToDo className="absolute bottom-10 left-0 w-full  px-4 md:px-0" />

      {/* Map Todo */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 md:px-0">
        {/* Todo items will be mapped here */}
        {data.length === 0 && <TodoBlank />}
        {data.map((todo, index) => (
          <Todo
            key={index}
            todoId={todo.id}
            title={todo.title}
            completed={todo.completed}
            createdAt={todo.createdAt}
          />
        ))}
      </div>
    </main>
  );
}
