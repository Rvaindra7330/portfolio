"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-xl text-center md:text-left"
  >
    <p className="text-gray-400 mb-2">Hey there 👋</p>

    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
      I'm <span className="text-cyan-300">Ravindra</span>
    </h1>

    <p className="text-gray-400 mb-8 text-base md:text-lg">
      I'm a full-stack developer turning ideas into production-ready products
      using a modern tech stack.
    </p>

   
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <a
        href="#contact"
        className="px-6 py-3 rounded-full
          font-bold text-black text-sm
          bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500
          transition-all duration-300
          hover:scale-[1.03]
          hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
          active:scale-95"
      >
        Contact Me
      </a>

      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 rounded-full
          border border-white/20 text-sm font-bold
          hover:bg-white/5 transition"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
        My Resume
      </a>
    </div>
  </motion.div>

  
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden
      border border-white/20 shadow-lg"
  >
    <Image
      src="/profilee.jpg"
      alt="Profile"
      width={224}
      height={224}
      className="rounded-full object-cover"
      priority
    />
  </motion.div>
</section>

  );
}
