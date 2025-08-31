import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js To-Do App with Prisma & MongoDB | morsecodelife",
  description:
    "ตัวอย่างโปรเจกต์ To-Do List App พัฒนาโดย Next.js 15 + Prisma ORM + MongoDB สำหรับเรียนรู้การสร้าง Full-Stack Web Application พร้อม CRUD ฟังก์ชัน.",
  keywords: [
    "Next.js To-Do App",
    "Next.js MongoDB Example",
    "Prisma MongoDB",
    "Next.js Full-Stack Tutorial",
    "Next.js CRUD Example",
    "Next.js with Prisma ORM",
    "MongoDB Atlas To-Do Project",
    "morsecodelife",
  ],
  authors: [{ name: "morsecodelife" }],
  openGraph: {
    title: "Next.js To-Do App with Prisma & MongoDB",
    description:
      "แอป To-Do List ตัวอย่างที่ใช้ Next.js + Prisma ORM + MongoDB สำหรับเรียนรู้ Full-Stack Development",
    url: "https://your-deployed-url.com",
    siteName: "Next.js To-Do App",
    images: [
      {
        url: "/preview.png", // ใส่รูป preview ที่อยู่ใน public/
        width: 1200,
        height: 630,
        alt: "Next.js To-Do App with Prisma & MongoDB",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js To-Do App with Prisma & MongoDB",
    description:
      "ตัวอย่าง To-Do App ด้วย Next.js + Prisma + MongoDB สำหรับเรียนรู้ Full-Stack Web",
    images: ["/preview.png"],
  },
  metadataBase: new URL("https://your-deployed-url.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
