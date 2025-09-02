import Header from "@/components/Header";
import AddToDo from "@/components/todo/AddToDo";
import Todo from "@/components/todo/Todo";
import TodoBlank from "@/components/todo/TodoBlank";
import { prisma } from "@/utils/prisma";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    select: { id: true, title: true, completed: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto relative h-screen font-nunito">
      <Header />
      <div className="container pb-36 pt-20 md:pt-16 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-0 mt-6">
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
