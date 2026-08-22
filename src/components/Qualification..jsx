import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { assets } from "../assets/assets";
import { GiAchievement } from "react-icons/gi";

const qualifications = {
    Education: [
        {
            title: "B.Tech in Computer Science and Engineering",
            subtitle: "Gulzar Group of Institutes",
            marks: "Pursuing",
            date: "2022 - 2026",
        },
        {
            title: "12th class",
            subtitle: "Govt. Senior Secondary School",
            marks: "84.20%",
            date: "2020 - 2022",
        },
        {
            title: "10th class",
            subtitle: "Sunshine Public School",
            marks: "94%",
            date: "2019 - 2020",
        },
    ],
    Achievements: [
        {
            title: "Student Development Program on C++ with Data Structures",
            subtitle: "Tech Company",
            date: "5 June 2025 - 15 July 2025",
            certificate: assets.certificate,
        },
        {
            title: "Generative AI for Software Development",
            subtitle: "IBM SkillsBuild",
            date: "1 February 2024",
            certificate: assets.certificate2,
        },
        {
            title: "Basics of Python",
            subtitle: "Infosys | SpringBoard",
            date: "1 February 2024",
            certificate: assets.certificate1,
        },
    ],
};

const Qualification = () => {
    const [activeTab, setActiveTab] = useState("Education");

    return (
        <section className="w-full py-16 px-4 md:px-16 lg:px-20 bg-gray-400" id="qualification">
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-10">
                {["Education", "Achievements"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-5 py-2 rounded-full font-medium transition ${activeTab === tab
                                ? "bg-white text-gray-700 hover:bg-gray-200"
                                :
                                "bg-gray-400 text-white shadow-lg"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto relative border-l-2 border-gray-300 ml-6">
                {qualifications[activeTab].map((q, index) => (
                    <motion.div
                        key={index}
                        className="mb-10 ml-6 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {/* Timeline Icon */}
                        <span
                            className={`absolute -left-6 top-1 w-8 h-8 flex items-center justify-center rounded-full text-white shadow-lg ${activeTab === "Education" ? "bg-gray-700" : "bg-gray-800"
                                }`}
                        >
                            {activeTab === "Education" ? <FaGraduationCap /> : <FaBriefcase />}
                        </span>

                        {/* Card */}
                        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-gray-800 flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-gray-800 ">{q.title}</h3>
                            <p className="text-gray-600">{q.subtitle}</p>
                            <span className="text-sm text-gray-400">{q.date}</span>
                            {q.marks && <div className="text-sm text-gray-500">{q.marks}</div>}

                            {q.certificate && (
                                <a
                                    href={q.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-gray-300 text-gray-800 bg-white rounded-md px-5 py-2 sm:px-6 sm:py-2.5 hover:bg-gray-200 hover:text-gray-900 transition shadow-md w-max"
                                >
                                    View
                                </a>
                            )}

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Qualification;
