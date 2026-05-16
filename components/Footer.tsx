"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1d] border-t border-gray-700 text-gray-400 py-6 px-4 md:px-10 flex flex-col items-center">
      <p>Copyright © {currentYear} Najmul Huda. All rights reserved.</p>
    </footer>
  );
}
