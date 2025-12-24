"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "Paytm Clone",
    desc: "Payments app with authentication & transactions",
    live: "https://paytm-app-user-app-umber.vercel.app/",
    github: "https://github.com/Rvaindra7330/paytm-app",
    tech: ["Next.js", "NextAuth", "PostgreSQL","Tailwind","Prisma"],
    image: "/projects/paytm-clone.png",
  },
  {
    name: "Uniswap Clone",
    desc: "DEX frontend inspired by Uniswap V2",
    live: "https://uniswapv2-frontend.vercel.app/",
    github: "https://github.com/Rvaindra7330/uniswapv2-frontend",
    tech: ["Next.js", "Web3", "Tailwind"],
    image: "/projects/uniswap-clone.png",
  },
  {
    name: "Medium Clone",
    desc: "Blogging platform clone using modern stack",
    live: "https://medium-clone-xi-snowy.vercel.app/",
    github: "https://github.com/Rvaindra7330/medium-clone",
    tech: ["ReactJS", "Express", "Tailwind","postgress","prisma"],
    image: "/projects/medium-clone.png",
  },
  {
    name: "Chat App",
    desc: "Real-time chat application with rooms and DMs",
    live: "https://chat-app-two-bay.vercel.app/",
    github: "https://github.com/Rvaindra7330/chat-app",
    tech: ["Next.js", "websocket", "Tailwind"],
    image: "/projects/chat-app.png",
  },
  {
    name: "Staking Dapp",
    desc: "Decentralized staking app with smart contracts",
    live: "https://staking-d-app-ten.vercel.app/",
    github: "https://github.com/Rvaindra7330/staking-dapp",
    tech: ["React", "Web3", "Solidity"],
    image: "/projects/staking-dapp.png",
  },
];

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Proof Of Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col"
          >
            
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-4 border border-white/20">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                priority
              />
            </div>

          
            <h3 className="text-xl font-medium mb-2">{p.name}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{p.desc}</p>

            
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

           
            <div className="flex gap-4 mt-auto">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} GitHub Repository`}
                className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
              >
                <FiGithub size={18} /> GitHub
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} Live Demo`}
                className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
              >
                <FiExternalLink size={18} /> Live Link
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
