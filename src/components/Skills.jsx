import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-10 h-10" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 w-10 h-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-10 h-10" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700 w-10 h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-10 h-10" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-10 h-10" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10" /> },
];

const Skills = () => {
  return (
    <div className="bg-gray-400  pt-20 px-6 sm:px-20  shadow-md text-gray-700 w-full h-full " id="skill">
      <h2 className="text-3xl   mt-15 font-bold mb-4 text-center text-black"> My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl hover:scale-105 transform transition duration-200"
          >
            {skill.icon}
            <p className="mt-2 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
