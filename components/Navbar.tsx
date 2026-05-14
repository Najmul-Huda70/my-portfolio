"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Skill", href: "#skill" },
    { name: "Qualification", href: "#qualification" },
    { name: "Project", href: "#project" },
    { name: "Contact Me", href: "#contact" },
  ];

  // Variants for the slide-in drawer
  const menuVariants: any = {
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    opened: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-100 w-[95%] max-w-5xl">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {/* Mobile Menu Toggle (Now on the Left) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Logo / Name */}
          <div className="text-white font-bold tracking-tighter text-base md:text-lg">
            NAJMUL HUDA
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[13px] uppercase tracking-wider font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden md:flex btn btn-primary btn-sm rounded-full px-6 normal-case font-semibold border-none bg-blue-600">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Left-Side Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-110 lg:hidden"
            />

            {/* Side Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-75 bg-neutral-900 z-120 lg:hidden border-r border-white/10 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-bold text-xl">MENU</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-medium text-gray-300 hover:text-blue-500 transition-colors block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className="w-full btn btn-primary rounded-xl bg-blue-600 border-none text-white">
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
