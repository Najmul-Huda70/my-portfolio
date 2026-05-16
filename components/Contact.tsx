"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted with data:", formData);
  };

  return (
    <section
      id="contact"
      className="bg-[#0a0f1d] text-white py-20 px-4 md:px-10 flex flex-col items-center"
    >
      {/* ================= সেকশন হেডার (সেন্টারে) ================= */}
      <motion.div
        className="text-center mb-16 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold tracking-wide text-white mb-3">
          Contact <span className="text-[#3b82f6]">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded-full mb-4" />
      </motion.div>

      {/* কন্টেন্ট গ্রিড */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ================= ১. বাম পাশ: কন্টাক্ট ইনফো সেকশন ================= */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Discuss Something Great
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* কন্টাক্ট ইনফো লিস্ট */}
          <div className="flex flex-col gap-8 mb-12">
            {/* ফোন নম্বর */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#161f33] border border-gray-800 flex items-center justify-center text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.02a13.442 13.442 0 0 1-6.015-6.015l2.02-1.514c.361-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-white">Phone</h4>
                <a
                  href="tel:+8801736695636"
                  className="text-sm text-gray-400 hover:text-[#00d2ff] transition-colors"
                >
                  +880 1580876937
                </a>
              </div>
            </div>

            {/* ইমেইল */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#161f33] border border-gray-800 flex items-center justify-center text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-white">Email</h4>
                <a
                  href="mailto:nh5696080@gmail.com"
                  className="text-sm text-gray-400 hover:text-[#00d2ff] transition-colors"
                >
                  nh5696080@gmail.com
                </a>
              </div>
            </div>

            {/* অ্যাড্রেস/লোকেশন */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#161f33] border border-gray-800 flex items-center justify-center text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-md font-bold text-white">Address</h4>
                <p className="text-sm text-gray-400">
                  Durgapur, Netrokona, Mymenshingh, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* সোশ্যাল মিডিয়া এবং ওয়াটসঅ্যাপ বাটন কন্টেইনার */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/najmul.huda.347537"
                  className="w-10 h-10 rounded-xl bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
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
                  className="w-10 h-10 rounded-xl bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
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
                  className="w-10 h-10 rounded-xl bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
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
                  className="w-10 h-10 rounded-xl bg-[#161f33] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300"
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
            </div>

            {/* WhatsApp বাটন */}
            <a
              href="https://wa.me/8801888376370"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 max-w-xs w-full py-3 px-6 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-green-600/20 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.618-4.934c-.197-.1-.167-.168-.518-.574-.353-.406-.73-1.147-.73-1.147-.1-.202-.27-.303-.472-.303s-.338.034-.54.239c-.203.206-.777.757-.777.757-.17.17-.372.202-.574.1-.203-.1-.857-.315-1.633-.1-.775-.205-1.3-.658-1.451-.864-.152-.206-.016-.318.084-.418.09-.09.197-.233.297-.349.1-.116.135-.195.203-.33.067-.137.034-.262-.017-.367-.05-.106-.472-1.135-.647-1.556-.171-.411-.338-.354-.472-.354s-.27-.011-.422-.011-.388.056-.593.28c-.205.223-.783.765-.783 1.863s.798 2.155.908 2.304c.11.15 1.567 2.394 3.799 3.358.53.23 1.037.368 1.393.48.534.17 1.02.146 1.402.088.427-.064 1.3-.532 1.485-1.042.185-.511.185-.948.13-1.042-.056-.094-.207-.142-.404-.242" />
              </svg>
              <span>Message via WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* ================= ২. ডান পাশ: প্রিমিয়াম কন্টাক্ট ফর্ম ================= */}
        <motion.div
          className="w-full bg-[#0a0f1d] p-8 rounded-2xl border border-gray-800 shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* গ্লোয়িং ইফেক্ট */}
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

          <h3 className="text-2xl font-bold mb-8">Send me a message</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-[#161f33] border border-gray-800/80 focus:border-[#3b82f6] outline-none px-4 py-3.5 rounded-xl text-sm transition-all text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-[#161f33] border border-gray-800/80 focus:border-[#3b82f6] outline-none px-4 py-3.5 rounded-xl text-sm transition-all text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                required
                placeholder="Subject"
                className="w-full bg-[#161f33] border border-gray-800/80 focus:border-[#3b82f6] outline-none px-4 py-3.5 rounded-xl text-sm transition-all text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1">
              <textarea
                rows={5}
                required
                placeholder="Your Message"
                className="w-full bg-[#161f33] border border-gray-800/80 focus:border-[#3b82f6] outline-none px-4 py-3.5 rounded-xl text-sm transition-all text-white placeholder-gray-600 resize-none focus:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* সাবমিট বাটন */}
            <motion.button
              type="submit"
              className="mt-2 w-full py-3.5 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_0_rgba(59,130,246,0.35)]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
