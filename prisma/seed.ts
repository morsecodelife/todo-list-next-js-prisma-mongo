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
    "Update resume",
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
    "Plan weekend trip 🗺️",
    "Water the plants 🌱",
    "Meditate for 10 minutes 🧘",
    "Organize desk 🗄️",
    "Backup laptop 💾",
    "Clean inbox 📨",
    "Review pull requests 🔍",
    "Stretch after work 🤸",
    "Check calendar 📅",
    "Learn a new word 📖",
    "Research investment options 📊",
    "Update portfolio 🌐",
    "Review code style guide 📘",
    "Plan grocery budget 💰",
    "Call a friend ☎️",
    "Fix a bug 🐞",
    "Prepare for meeting 📂",
    "Check server status 🖥️",
    "Order new headphones 🎧",
    "Organize bookshelf 📚",
  ];

  // เวลาตั้งต้น ย้อนหลัง 50 ชั่วโมงจากตอนนี้
  const startTime = new Date();
  startTime.setHours(startTime.getHours() - sampleTodos.length);

  const todos = sampleTodos.map((title, index) => ({
    title,
    completed: Math.random() < 0.4,
    createdAt: new Date(startTime.getTime() + index * 60 * 60 * 1000), // บวกทีละ 1 ชั่วโมง
  }));

  await prisma.todo.createMany({ data: todos });

  console.log(`✅ Seeded ${sampleTodos.length} todos with ordered createdAt`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
