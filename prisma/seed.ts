// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is missing. Put it in .env (project root).");
  }

  await prisma.todo.deleteMany();

  const sampleTodos: string[] = [
    "Do the laundry 🧺",
    "Wash the dishes 🍽️",
    "Finish math homework 📚",
    "Work on Next.js project 💻",
    "Exercise for 30 minutes 🏋️",
    "Read 20 pages of a book 📖",
    "Buy groceries 🛒",
    "Call mom 📞",
    "Pay the electricity bill 💡",
    "Check emails 📧",
    "Clean the kitchen 🧹",
    "Dentist appointment 🦷",
    "Prepare presentation slides 📊",
    "Practice English 📝",
    "Update resume", // ไม่มี emoji
    "Write a blog post ✍️",
    "Try a new recipe 🍳",
    "Check product inventory 📦",
    "Play video games for 1 hour 🎮",
    "Take a nap 😴",
    "Reset GitHub password 🔑",
    "Help sibling with homework 🧒",
    "Read tech news 📰",
    "Push code to GitHub 🚀",
    "Watch one episode of a series 📺",
    "Write unit tests 🧪",
    "Go for a run 🏃‍♂️",
    "Check Slack notifications 🔔",
    "Wash the car 🚗",
    "Prepare breakfast 🥞",
  ];

  const todos = sampleTodos.map((title) => ({
    title,
    completed: Math.random() < 0.4,
  }));

  await prisma.todo.createMany({ data: todos });

  console.log(
    "✅ Seeded 30 realistic todos (with matching emojis, some without)"
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
