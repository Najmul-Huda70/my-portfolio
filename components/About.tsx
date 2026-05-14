"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. Tech Stack Data with Inline SVGs
const techStack = [
  {
    name: "Next.js",
    color: "group-hover:text-white",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.663 19.303l-7.93-10.33h-1.606v10.33h1.631v-7.872l7.134 9.351a11.968 11.968 0 00.771-1.48zM12.015 0C5.379 0 0 5.379 0 12.015c0 6.637 5.379 12.015 12.015 12.015 2.623 0 5.044-.842 7.01-2.271l-9.45-12.332v12.332H7.944V5.155h1.606l9.314 12.152A11.932 11.932 0 0024 12.015C24 5.379 18.636 0 12.015 0z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "group-hover:text-[#3178C6]",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.246c-.276-.079-.58-.117-.911-.117-.489 0-.887.124-1.194.373-.303.249-.451.621-.451 1.116v1.206h2.723v2.325h-2.723V24h-2.61v-6.784h-1.583v-2.325h1.583V13.56c0-1.226.331-2.181.993-2.864.664-.683 1.587-1.026 2.766-1.026-.001 0-.001 0 0 0z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "group-hover:text-[#F7DF1E]",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.121-.864-1.954-2.296-2.527-1.341-.537-2.146-.819-2.146-1.503 0-.497.351-.83 1.054-.83.693 0 1.102.322 1.356.848.243.512.215 1.025.215 1.025l2.42-.146c0 0 .156-1.854-1.464-3.054-1.102-.82-2.81-.976-3.951-.195-1.396.947-1.415 2.508-.38 3.328 1.112.879 3.018 1.142 3.018 2.059 0 .791-.566 1.151-1.387 1.151-1.231 0-1.747-.84-2.022-1.493-.254-.575-.195-1.356-.195-1.356l-2.43.146c0 0-.107 2.04 1.307 3.357 1.171.937 3.194 1.113 4.582.4 1.503-.781 1.953-2.227 1.637-3.394zm-10.741-8.254h-2.43l-.001 7.742c0 .879.039 1.533-.312 2.011-.312.45-.898.586-1.426.586-.537 0-1.035-.195-1.318-.547-.352-.42-.352-1.103-.352-2.011v-7.781H2.984v7.86c0 1.65.234 2.891 1.25 3.73.918.752 2.305.898 3.516.898 1.484 0 2.656-.371 3.496-1.152.967-.889 1.045-2.236 1.045-3.809V10.014z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "group-hover:text-[#47A248]",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-.214-.23-2.15-2.203-2.15-4.838 0-1.89.813-3.645 1.128-4.24a.262.262 0 00-.4-.32C14.07 1.34 11.23 4.27 11.23 7.822c0 2.222 1.455 4.093 1.627 4.31a.188.188 0 01.012.24c-.116.168-3.082 4.417-3.082 8.358 0 2.19 1.114 3.12 1.353 3.208.203.075.31-.137.31-.284V13.013c0-.13.14-.21.246-.135 1.522 1.11 3.513.882 4.542.483.56-.217.954-.644.954-1.244 0-.34-.146-.667-.324-.863-.001.001-.001.001-.001 0z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    color: "group-hover:text-[#E34F26]",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "group-hover:text-[#4169E1]",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.385c-1.843 0-3.411.399-4.704 1.196l-.117.073v.138c0 .034.004.067.011.098l.006.015c.01.026.023.05.039.07l.005.006.01.011c1.233 1.253 2.164 2.87 2.793 4.854.168.528.31 1.077.427 1.644-.652-.158-1.341-.24-2.052-.24a1.868 1.868 0 00-1.45.69c-.372.436-.554 1.05-.554 1.84h3.766c0 .487-.04.953-.113 1.39-.427.067-.872.103-1.328.103a4.043 4.043 0 01-1.397-.247c-.452-.162-.843-.442-1.123-.842a1.833 1.833 0 00-.773-.687c-.312-.132-.663-.2-1.05-.2-1.042 0-1.821.5-2.336 1.5l.073.04a2.913 2.913 0 01.378.252l.013.01c.218.172.411.373.578.601l.011.015c1.171 1.6 2.83 2.4 4.977 2.4 1.295 0 2.453-.301 3.473-.905 1.021.604 2.178.905 3.474.905 2.146 0 3.805-.8 4.976-2.4l.011-.015a2.138 2.138 0 01.579-.601l.012-.009a2.911 2.911 0 01.378-.252l.073-.04c-.515-1-1.293-1.5-2.336-1.5-.386 0-.737.068-1.049.2a1.832 1.832 0 00-.773.687c-.28.4-.67.68-1.123.842a4.045 4.045 0 01-1.397.247c-.456 0-.9-.036-1.328-.103-.073-.437-.113-.903-.113-1.39H20.6c0-.79-.181-1.404-.554-1.84a1.868 1.868 0 00-1.45-.69c-.71 0-1.4.082-2.052.24.118-.567.259-1.116.427-1.644.629-1.984 1.56-3.601 2.793-4.854l.01-.011.006-.006c.015-.02.028-.044.038-.07l.007-.015c.007-.03.011-.064.011-.098v-.138l-.117-.073c-1.293-.797-2.861-1.196-4.704-1.196z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#0a0c10] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center shadow-2xl"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-8 border border-white/10 group">
              <Image
                src="/najmul-huda.png" // Ensure this image is in public folder
                alt="Najmul Huda"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for work
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-2">
              NAJMUL HUDA
            </h3>
            <p className="text-gray-500 text-sm mb-10 text-center leading-relaxed">
              CSE Student & Full-Stack Developer passionate about scalable
              digital products.
            </p>

            {/* Social Icons (Simple SVGs) */}
            <div className="flex gap-4 mb-10">
              {[1, 2, 3, 4].map((_, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 transition-colors"
                />
              ))}
            </div>

            <a
              href="/cv.pdf"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20"
            >
              Download CV
            </a>
          </motion.div>

          {/* RIGHT: Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0c10] border border-white/5 rounded-[2rem] p-10"
            >
              <h4 className="text-2xl font-bold mb-6 text-white">
                Hi! I&apos;m Najmul,
              </h4>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a{" "}
                  <span className="text-white">CSE background student</span>{" "}
                  currently mastering full-stack web development. I focus
                  heavily on creating efficient websites and have a strong
                  command over AI-assisted development and debugging.
                </p>
                <p>
                  With experience building{" "}
                  <span className="text-blue-500 font-bold">10+ projects</span>,
                  I am deeply interested in Data Structures and Backend
                  management.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Marquee (SVG based) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0c10] border border-white/5 rounded-[2rem] p-10 overflow-hidden"
            >
              <h4 className="text-xl font-bold mb-10 flex items-center gap-3 text-white">
                My Tech Stack
                <div className="h-px flex-1 bg-white/5" />
              </h4>

              <div className="relative flex overflow-hidden">
                <motion.div
                  animate={{ x: [0, -800] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex gap-8 whitespace-nowrap"
                >
                  {[...techStack, ...techStack].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 group"
                    >
                      <div
                        className={`transition-colors duration-300 text-gray-500 ${tech.color}`}
                      >
                        {tech.svg}
                      </div>
                      <span className="text-gray-300 font-semibold uppercase tracking-wider text-sm">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0c10] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0c10] to-transparent z-10" />
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0c10] border border-white/5 rounded-[2rem] p-10 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1.5+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                  Years Exp.
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                  Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
