# To-Do List Next.js with Prisma + MongoDB

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)](https://www.prisma.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

โปรเจกต์นี้เป็น **To-Do List ง่าย ๆ** ที่สร้างขึ้นเพื่อเป็นแนวทางสำหรับผู้ที่ต้องการเรียนรู้การพัฒนา Web Application แบบ Full-Stack
โดยใช้ **Next.js** (App Router), **Prisma ORM**, และ **MongoDB**

เหมาะสำหรับผู้เริ่มต้นที่อยากเข้าใจการทำงานของ **Frontend + Backend + Database** ภายในโปรเจกต์เดียว

---

## Features

- เพิ่มงานใหม่ (Add Task)
- แก้ไขสถานะงาน (Mark as Completed / Incomplete)
- ลบงาน (Remove Task)
- บันทึกข้อมูลลง MongoDB ผ่าน Prisma

---

## Preview

![Preview Screenshot](./preview.png)

---

## How to install

1. clone repo นี้

   ```bash
   git clone https://github.com/morsecodelife/todo-list-next-js-prisma-mongo.git
   cd todo-list-next-js-prisma-mongo
   ```

2. install dependencies

   ```bash
   pnpm install
   # หรือ
   npm install
   ```

3. ตั้งค่าไฟล์ `.env`

   ```env
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo"
   ```

4. รัน Prisma migrate

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. รันเซิร์ฟเวอร์
   ```bash
   pnpm dev
   # หรือ
   npm run dev
   ```

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React Framework สำหรับ Full-Stack Web
- [Prisma](https://www.prisma.io/) — ORM เชื่อมต่อกับฐานข้อมูล
- [MongoDB](https://www.mongodb.com/) — ฐานข้อมูล NoSQL

---

## License

[MIT License](./LICENSE)

Note: This repository is about Next.js To-Do App with MongoDB and Prisma ORM
Keywords: Next.js To-Do App, Next.js MongoDB Example, Prisma MongoDB, Next.js CRUD Example
