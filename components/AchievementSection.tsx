"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// বাটন এবং আইটেমের টাইপ ডিফাইন করা (TypeScript এর জন্য ভালো)
interface Achievement {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  buttons: { label: string; link: string; type: string }[];
}

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
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Key Achievements
          <div className="h-px flex-1 bg-white/10" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0c10] border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0c10] to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                {/* Button Array Section */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {item.buttons.map((btn, index) => (
                    <a
                      key={index}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                        btn.type === "primary"
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                          : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
