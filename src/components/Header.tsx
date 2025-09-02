import logo from "@/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./GithubIcon";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white/15 z-10 backdrop-blur-xl shadow-sm">
      <div className="container flex md:flex-row justify-between items-center p-4 mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          {/* <ListTodo className="h-6 w-6 md:h-7 md:w-7 text-emerald-600" /> */}
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="h-5 w-5 md:h-6 md:w-6 text-emerald-600"
          />
          <h1
            className="font-bold text-2xl md:text-3xl tracking-tight
             bg-gradient-to-r from-black to-black/20
             bg-clip-text text-transparent"
          >
            todo
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
      </div>
    </header>
  );
};

export default Header;
