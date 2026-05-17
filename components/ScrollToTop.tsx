"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // ইউজার কতটুকু স্ক্রল করলেন তা ট্র্যাক করার জন্য ইফেক্ট
  useEffect(() => {
    const toggleVisibility = () => {
      // যদি স্ক্রল ৩০০ পিক্সেলের বেশি হয়, তবে বাটনটি দেখাবে
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // একদম ওপরে স্মুথলি স্ক্রল করার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-6 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#161f33]/80 text-white backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] outline-none transition-colors hover:border-[#3b82f6] hover:text-[#3b82f6] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-3.25 w-3.25 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
