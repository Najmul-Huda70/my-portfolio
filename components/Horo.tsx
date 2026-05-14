"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
const Hero = () => {
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

          <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed border-l-2 border-blue-600 pl-4 mt-6">
            Engineering production-ready systems by turning complex technical
            challenges into scalable products.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary rounded-full px-8 bg-blue-600 border-none text-white shadow-lg shadow-blue-600/20">
              Let&apos;s Connect
            </button>
            <button className="btn btn-outline rounded-full px-8 text-white border-white/20 hover:bg-white/5">
              See My Work
            </button>
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
                  src="/Najmul Huda.png"
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
            <h3 className="text-white font-bold text-xl">500+</h3>
            <p className="text-gray-400 text-xs">Satisfied Clients</p>
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
