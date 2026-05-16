"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Achievement {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  buttons: { label: string; link: string; type: string }[];
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AchievementSection = () => {
  const [data, setData] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch("/data/achievements.json");
        if (!res.ok) throw new Error("Network response was not ok");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  if (loading)
    return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    // id="achievement" যোগ করা হয়েছে স্মুথ স্ক্রলিং লিঙ্কের জন্য
    <section
      id="achievements"
      className="py-24 relative overflow-hidden bg-slate-950 text-white scroll-mt-10"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4 tracking-tight">
            KEY ACHIEVEMENTS
            <div className="h-px flex-1 bg-white/10" />
          </h2>
        </motion.div>

        {/* Grid with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-[#0a0c10]/60 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-70 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized // যদি এক্সটারনাল লিঙ্ক হয়
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0c10] via-transparent to-transparent opacity-80" />
                <div className="absolute top-5 left-5">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 bg-blue-500  border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                  >
                    {item.category}
                  </motion.span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                {/* Button Section with Motion */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {item.buttons.map((btn, index) => (
                    <motion.a
                      key={index}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        btn.type === "primary"
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                          : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {btn.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
