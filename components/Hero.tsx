"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-8 flex flex-col md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <p className="text-gray-400 mb-2">Hey there,</p>

        <h1 className="text-5xl font-bold mb-4">
          I'm <span className="text-cyan-300">Ravindra</span>
        </h1>

        <p className="text-gray-400 mb-6">
          I'm a full-stack developer turning ideas into production-ready products
          using a modern tech stack.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 text-black font-medium"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full border border-white/20"
          >
            My Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-48 rounded-full overflow-hidden border border-white/20"
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          
          width={200}   
          height={200} 
          className="rounded-full object-cover"
        />
      </motion.div>
    </section>
  );
}
