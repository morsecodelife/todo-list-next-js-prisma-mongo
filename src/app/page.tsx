import GithubIcon from "@/components/GithubIcon";
import AddToDo from "@/components/todo/AddToDo";
import Todo from "@/components/todo/Todo";
import TodoBlank from "@/components/todo/TodoBlank";
import { prisma } from "@/utils/prisma";
import { ListTodo } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    select: { id: true, title: true, completed: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto relative h-screen font-nunito">
      <header className="flex md:flex-row justify-between items-center p-4 sticky top-0 bg-white/15 z-10 backdrop-blur-xl shadow-sm">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <ListTodo className="h-6 w-6 md:h-7 md:w-7 text-emerald-500" />
          <h1 className="font-bold text-2xl md:text-2xl tracking-tight">
            TODO
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-gray-700 mt-2 md:mt-0">
          Manage your tasks efficiently
        </p>

        {/* GitHub Button */}
        <Link
          href="https://github.com/morsecodelife/todo-list-next-js-prisma-mongo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 md:mt-0 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur hover:bg-gray-100 transition"
        >
          <GithubIcon />
          <span className="hidden md:inline">GitHub</span>
        </Link>
      </header>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 md:px-0 mt-15">
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

      {/* Footer */}
      <AddToDo
        className="fixed bottom-0 left-0 right-0 py-10 bg-white/15 z-10 backdrop-blur-xl
              w-full px-4"
      />
    </main>
  );
}
