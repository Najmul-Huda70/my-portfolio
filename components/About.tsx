"use client";
export default function AboutSection() {
  return (
    <section id="about" className=" ">
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* সেকশন হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative pb-2">
            About Me
            <span className="absolute bottom-0 left-1/4 right-1/4 h-.75 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
        </div>

        {/* মেইন কার্ড কন্টেইনার (গ্লাস মরফিজম ইফেক্ট) */}
        <div className="relative bg-[#0d1117]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* বাম পাশের কলাম: পরিচিতি ও টেক্সট */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                Hi! I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                  Najmul
                </span>
                ,
              </h3>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I am a{" "}
                <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">
                  CSE background student
                </span>{" "}
                currently mastering full-stack web development. I focus heavily
                on creating efficient websites and have a strong command over
                AI-assisted development and debugging.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                With experience building{" "}
                <span className="text-indigo-400 font-bold">10+ projects</span>,
                I am deeply interested in Data Structures and Backend
                management. As an active competitive programmer, I have solved{" "}
                <span className="text-indigo-400 font-bold">
                  1000+ problems
                </span>{" "}
                across various platforms and actively participated in major
                national contests, including Onsite Dhaka Regional{" "}
                <span className="text-indigo-400 font-bold">ICPC-2025</span>,{" "}
                <span className="text-indigo-400 font-bold">
                  CUET IUPC-2025
                </span>
                , and the{" "}
                <span className="text-indigo-400 font-bold">
                  NEU CSE Fest-2025
                </span>
                .
              </p>

              {/* ডাউনলোড সিভি বাটন */}
              <div className="pt-4">
                <button className="relative group overflow-hidden px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2">
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-4 bg-white/2 border border-white/5 rounded-2xl p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Core Focus
              </h4>

              {/* স্কিল আইটেম ১ */}
              <div className="flex items-center gap-3 p-3 bg-white/2 hover:bg-white/5 border border-white/5 rounded-xl transition-all group">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    Full-Stack Dev
                  </p>
                  <p className="text-xs text-gray-400">Next.js, Node, DB</p>
                </div>
              </div>

              {/* স্কিল আইটেম ২ */}
              <div className="flex items-center gap-3 p-3 bg-white/2 hover:bg-white/5 border border-white/5 rounded-xl transition-all group">
                <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 1.035-.84 1.875-1.875 1.875h-12.75c-1.035 0-1.875-.84-1.875-1.875v-1.5c0-1.035.84-1.875 1.875-1.875h12.75c1.035 0 1.875.84 1.875 1.875v1.5ZM3.75 12h16.5M3.75 17.625h16.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    Backend & DSA
                  </p>
                  <p className="text-xs text-gray-400">
                    Data Structures & Optimization
                  </p>
                </div>
              </div>

              {/* স্কিল আইটেম ৩ */}
              <div className="flex items-center gap-3 p-3 bg-white/2 hover:bg-white/5 border border-white/5 rounded-xl transition-all group">
                <div className="w-10 h-10 bg-purple-500/10 text-purple-400 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 21l8.982-8.983m-1.917-1.748L17 5.25 8.018 14.233"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    AI-Assisted Debugging
                  </p>
                  <p className="text-xs text-gray-400">Smart Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
