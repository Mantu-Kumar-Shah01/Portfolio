import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaBuilding } from "react-icons/fa";
import { assets } from "../assets/assets";

const qualifications = {
  Education: [
    {
      title: "B.Tech in Computer Science and Engineering",
      subtitle: "Gulzar Group of Institutes",
      marks: "Status: Pursuing (Batch 2026)",
      date: "2022 - 2026",
      tags: ["Data Structures", "Web Engineering", "Database Systems", "C++"],
    },
    {
      title: "Senior Secondary (12th Grade)",
      subtitle: "Govt. Senior Secondary School",
      marks: "Score: 84.20%",
      date: "2020 - 2022",
      tags: ["Physics", "Mathematics", "Chemistry", "Computer Fundamentals"],
    },
    {
      title: "Secondary School (10th Grade)",
      subtitle: "Sunshine Public School",
      marks: "Score: 94.00%",
      date: "2019 - 2020",
      tags: ["Mathematics", "Science", "General Academics"],
    },
  ],
  Achievements: [
    {
      title: "Student Development Program: C++ with Data Structures",
      subtitle: "Summer Intensive Engineering Training",
      date: "5 June 2025 - 15 July 2025",
      certificate: assets.certificate,
      tags: ["C++", "Algorithms", "Memory Management", "Pointers"],
    },
    {
      title: "Generative AI for Software Development",
      subtitle: "IBM SkillsBuild Certification",
      date: "1 February 2024",
      certificate: assets.certificate2,
      tags: ["Generative AI", "LLMs", "Software Engineering"],
    },
    {
      title: "Basics of Python Programming",
      subtitle: "Infosys | SpringBoard Certification",
      date: "1 February 2024",
      certificate: assets.certificate1,
      tags: ["Python", "Scripting", "Data Handling"],
    },
  ],
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section className="relative w-full py-20 px-6 sm:px-10 lg:px-20 bg-[#CBD3DC] text-slate-900 border-b border-slate-300/80" id="qualification">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
              03 // ACADEMICS & TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              EXPERIENCE & <span className="text-orange-600">EDUCATION</span>
            </h2>
          </div>

          <div className="inline-flex p-1 bg-white border border-slate-300 rounded-full shadow-sm">
            {["Education", "Achievements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-black text-white shadow-md"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                {tab === "Education" ? <FaGraduationCap className="text-sm" /> : <FaAward className="text-sm" />}
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-10 pl-6 sm:pl-10 space-y-8">
          <AnimatePresence mode="wait">
            {qualifications[activeTab].map((item, index) => (
              <Motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
              >
                <span className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-white border-4 border-orange-600 shadow-md"></span>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm flex items-center gap-2">
                    <FaBuilding className="text-orange-600 text-xs" />
                    <span>{item.subtitle}</span>
                  </p>

                  {item.marks && (
                    <div className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.marks}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.certificate && (
                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-sm"
                      >
                        <span>View Verified Certificate</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  )}
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
