"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomCursorBubble() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (bubble) {
      // w-12 = 48px, তাই মাউসের সেন্টারে আনতে -24px অফসেট
      bubble.style.transform = `translate(${mousePosition.x - 24}px, ${
        mousePosition.y - 24
      }px)`;
    }
  }, [mousePosition]);

  return (
    <div
      ref={bubbleRef}
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none transition-transform duration-75 ease-out"
    >
      {/* ইনলাইন সিএসএস দিয়ে পালস অ্যানিমেশন এবং সুন্দর কালার গ্লো সেট করা হয়েছে */}
      <div
        className="w-6 h-6 rounded-full backdrop-blur-[2px] relative"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0.3) 60%, rgba(255,100,200,0.1) 100%)",
          boxShadow:
            "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(139,92,246,0.3)",
          border: "2px solid rgba(255,255,255,0.05)",

          animation: "bubblePulse 4s ease-in-out infinite",
        }}
      >
        {/* বুদবুদের ভেতরের হালকা রিয়ালিস্টিক শাইন ইফেক্ট */}
        <div className="absolute top-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-white/20 blur-[0.5px]"></div>

        {/* ইনলাইন অ্যানিমেশনের জন্য গ্লোবাল স্টাইল ইনজেক্ট করা */}
        <style jsx global>{`
          @keyframes bubblePulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
