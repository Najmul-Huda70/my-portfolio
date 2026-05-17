"use client";

import { Database, Code2, Boxes, Server, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Framer Motion ইমপোর্ট

const Skills = [
  {
    title: "Frontend",
    icon: <Boxes className="w-5 h-5" />,
    items: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/ffffff" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
      { name: "C", logo: "https://cdn.simpleicons.org/c" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
    ],
  },
  {
    title: "Others",
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/ffffff" },
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      { name: "VS Code", logo: "/image/vs-code.png" },
    ],
  },
];

// এনিমেশন ভেরিয়েন্ট
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // একটির পর একটি কার্ড আসবে
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    // id="skills" যোগ করা হয়েছে স্মুথ স্ক্রলিংয়ের জন্য
    <section
      id="skills"
      className="relative overflow-hidden pb-20 scroll-mt-20"
    >
      {/* background blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4 text-white tracking-tighter">
            SKILLS & EXPERTISE
            <div className="h-px flex-1 bg-white/10" />
          </h2>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {Skills.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-3xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              {/* Header */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-3 gap-6">
                {category.items.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <motion.div
                      whileHover={{ y: -5, rotate: 5 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-[#0f172a] shadow-inner"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </motion.div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
