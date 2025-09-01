"use server";

export const runtime = "nodejs";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function getTodos() {
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

export async function createTodo(formData: FormData) {
  const todo = formData.get("todo");

  if (typeof todo !== "string" || !todo.trim()) {
    return;
  }

  try {
    await prisma.todo.create({
      data: {
        title: todo,
        completed: false,
      },
    });

    revalidatePath("/");
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function toggleTodo(fromData: FormData) {
  const todoId = fromData.get("todoId") as string;

  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    const updateStatus = !todo?.completed;

    await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        completed: updateStatus,
      },
    });
  } catch (error: unknown) {
    console.error(error);
  }

  revalidatePath(`/`);
}

export async function removeTodo(formData: FormData) {
  const todoId = formData.get("todoId") as string;

  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
  } catch (error: unknown) {
    console.error(error);
  }

  revalidatePath(`/`);
}
