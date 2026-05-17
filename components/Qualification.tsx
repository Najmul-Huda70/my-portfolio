"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const educationData = [
  {
    id: 1,
    duration: "2023 - Present",
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Netrokona University, Netrokona",
    description:
      "Currently pursuing my Bachelor's degree in CSE, currently in 3rd year. Actively focusing on web development, algorithms, and networking models while exploring real-world projects.",
    logo: "/image/neu-logo.jpg",
  },
  {
    id: 2,
    duration: "2019-2020",
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Royal Media College, Mymenshingh",
    description:
      "Completed my intermediate education in Science group. Built a strong foundation in mathematics, physics, and basic computer science concepts.",
    logo: "/image/rmc-logo.jpg",
  },
  {
    id: 3,
    duration: "2017-2018",
    degree: "Secondary School Certificate (SSC)",
    institution: "Birishiri P.C Nall Memorial High School, Durgapur, Netrokona",
    description:
      "Completed my SSC in the Science group. Throughout my school years, I was highly disciplined, focused on my academics, and dedicated to building a strong base in science and mathematics.",
    icon: "🏫",
  },
];

export default function Qualification() {
  return (
    <section
      id="qualification"
      className=" text-white py-20 flex flex-col items-center"
    >
      <div className="w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4 tracking-tight">
            Educational Qualification
            <div className="h-px flex-1 bg-white/10" />
          </h2>
        </motion.div>
        <div className="relative max-w-4xl w-full mx-auto flex flex-col gap-12">
          {/* স্মুথ স্ক্রলিং টাইমলাইন ভার্টিকাল লাইন */}
          <motion.div
            className="absolute left-4 md:left-40.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-white via-blue-500 to-gray-700 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="flex flex-col md:flex-row items-start md:items-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* ১. বাম পাশের টাইমলাইন ডেট (Duration) */}
              <div className="pl-12 md:pl-0 md:w-32.5 text-sm font-semibold text-gray-400 mb-2 md:mb-0 md:text-right md:pr-6">
                {edu.duration}
              </div>

              {/* ২. গোল ইন্ডিকেটর ও লোগো */}
              <div className="absolute left-1 md:left-36.75 z-10 bg-[#0a0f1d] p-1 rounded-full border-2 border-gray-400 shadow-[0_0_10px_rgba(255,146,51,0.5)] flex items-center justify-center w-8 h-8 text-sm">
                {edu.logo && (
                  <Image
                    src={edu.logo}
                    alt="neu-logo"
                    fill
                    className="rounded-full"
                    unoptimized
                  />
                )}
                {edu?.icon}
              </div>

              {/* ৩. প্রধান এডুকেশন কার্ড */}
              <motion.div
                className="ml-12 md:ml-16 flex-1 bg-[#161f33] p-6 rounded-2xl border border-gray-800 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  borderColor: "#3b82f6",
                  boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.15)",
                }}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-md font-medium text-[#3b82f6] mb-4">
                  {edu.institution}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
