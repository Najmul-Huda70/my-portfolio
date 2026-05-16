"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Animation variants for floating cards
  const floatAnim = (delay: number): Variants => ({
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });
  const [text] = useTypewriter({
    words: ["Problem Solver", "Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20 overflow-hidden bg-linear-to-l from-blue-950 to-black">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-gray-300 text-xl font-light mb-4">
            Hi! I&apos;m
            <br className="mb-4" />
            <span className="text-white text-6xl font-bold tracking-tight">
              Najmul Huda
            </span>
          </h2>

          <h1 className="text-xl md:text-3xl font-bold text-white leading-tight mb-4 min-h-37.5 md:min-h-auto">
            <span className="font-semibold">I am a </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              {text}
            </span>
            <Cursor cursorColor="#2563eb20" />
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mb-6 leading-relaxed border-l-2 border-blue-600 pl-4 mt-6">
            CSE student & aspiring Software Engineer focused on web development,
            problem-solving, and database practices.
          </p>
          <div className="flex gap-4 mb-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/najmul.huda.347537"
              className="w-8 h-8 rounded-lg bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Najmul-Huda70/"
              className="w-8 h-8 rounded-lg bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/najmul-huda-/"
              className="w-8 h-8 rounded-lg bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.674 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#contact">
              <button className="btn btn-primary rounded-full px-8 bg-blue-600 border-none text-white shadow-lg shadow-blue-600/20">
                Let&apos;s Connect
              </button>
            </a>
            <a href="#projects">
              <button className="btn btn-outline rounded-full px-8 text-white border-white/20 hover:bg-white/5">
                See My Work
              </button>
            </a>
          </div>
        </motion.div>
        {/* RIGHT COLUMN: VISUAL COMPOSITION */}
        <div className="relative flex justify-center items-center">
          {/* Main Profile Image Container */}
          <div className="relative w-72 h-72 md:w-112.5 md:h-112.5 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            {/* Replace with your actual photo */}
            <div className="w-full h-full bg-linear-to-tr from-blue-900 to-black flex items-center justify-center">
              <span className="text-white/20">
                <Image
                  src="/image/najmul-huda.png"
                  alt="Najmul Huda Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </span>
            </div>
          </div>

          {/* FLOATING GLASS CARDS (Positioned absolutely) */}
          <motion.div
            {...floatAnim(0)}
            className="absolute top-22 left-2   p-2 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
          >
            <h3 className="text-white font-bold text-xl">1K+</h3>
            <p className="text-gray-400 text-xs">Problem solves</p>
          </motion.div>

          <motion.div
            {...floatAnim(1)}
            className="absolute top-8 right-8  p-2 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
          >
            <h3 className="text-white font-bold text-xl">24 Hours</h3>
            <p className="text-gray-400 text-xs">Support Everyday</p>
          </motion.div>

          <motion.div
            {...floatAnim(0.5)}
            className="absolute bottom-8 left-8 p-2 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
          >
            <h3 className="text-white font-bold text-xl">10+</h3>
            <p className="text-gray-400 text-xs">Projects Completed</p>
          </motion.div>

          <motion.div
            {...floatAnim(1.5)}
            className="absolute -bottom-2 right-12 p-2 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
          >
            <h3 className="text-white font-bold text-xl">1+</h3>
            <p className="text-gray-400 text-xs">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
