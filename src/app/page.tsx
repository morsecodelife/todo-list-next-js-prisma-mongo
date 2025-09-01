import AddToDo from "@/components/todo/AddToDo";
import Todo from "@/components/todo/Todo";
import TodoBlank from "@/components/todo/TodoBlank";
import { prisma } from "@/utils/prisma";
import { ListTodo } from "lucide-react";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    select: { id: true, title: true, completed: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container mx-auto relative h-screen">
      <header className="flex flex-col justify-center items-center p-4 space-y-3 sticky top-0 bg-white/15 z-10 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <ListTodo className="h-10 w-10" />
          <h1 className="font-bold text-4xl">To Do List </h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg">
            Manage your tasks efficiently built with 🪅 NextJS + 🍃 MongoDB
          </p>
        </div>
      </header>

      {/* AddToDo เป็น Client Component ได้ */}
      <AddToDo
        className="fixed bottom-0 left-0 right-0 py-10 bg-white/15 z-10 backdrop-blur-xl
             max-w-5xl mx-auto w-full px-4"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 md:px-0">
        {todos.length === 0 && <TodoBlank />}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
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
