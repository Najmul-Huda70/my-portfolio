"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // প্রতি পেজে ৪টি প্রজেক্ট

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // পেজিনেশন লজিক
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // পেজ চেঞ্জ হলে অটোমেটিক সেকশনের শুরুতে স্ক্রল হবে
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return null;

  return (
    <section
      id="project"
      className="py-24 bg-[#0a0f1d] text-white overflow-hidden"
    >
      <div className="w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4 tracking-tight">
            MY PROJECTS
            <div className="h-px flex-1 bg-white/10" />
          </h2>
        </motion.div>

        {/* Project Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-100">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-px rounded-4xl bg-linear-to-b from-blue-500/40 to-red-500/40 group h-full"
              >
                <div className="bg-[#0f172a] rounded-[2.2rem] p-4 h-full flex flex-col">
                  <div className="relative h-35 w-full mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                  <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-[10px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                    {/* Code (GitHub) Button */}
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-[#2d3748] hover:bg-[#3d4a5d] text-white font-semibold transition-all duration-300 shadow-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                      <span>Code</span>
                    </a>

                    {/* Demo Button */}
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-[#3b82f6] hover:hover:bg-[#2563eb] text-white font-semibold transition-all duration-300 hover:shadow-[0_4px_14px_0_rgba(59,130,246,0.5)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link-icon lucide-external-link"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination UI - Based on your uploaded image */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-3">
            {/* Prev Button */}
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
                currentPage === 1
                  ? "bg-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              ← PREV
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all flex items-center justify-center ${
                      currentPage === number
                        ? "bg-white text-black shadow-lg scale-110"
                        : "bg-white/10 text-gray-400 hover:bg-white/20"
                    }`}
                  >
                    {number}
                  </button>
                ),
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
                currentPage === totalPages
                  ? "bg-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              NEXT →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
