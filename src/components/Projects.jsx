import React from "react";
import { assets } from "../assets/assets";


const Projects = () => {
  const projects = [
    {
      img: assets.Project_1,
      title: "Dream_Home Website",
      description:
        "A responsive real estate website frontend built with React and TailwindCSS, featuring a clean UI, smooth navigation, and modern design to showcase property listings.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      link: "https://mantu-kumar-shah01.github.io/Home_DreamS/",
    },
    {
      img: assets.Project_3,
      title: "Parlour Website",
      description:
        "A responsive parlour website frontend with a modern design, smooth navigation, and user-friendly interface to showcase services, pricing, and appointments.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      link: "https://mantu-kumar-shah01.github.io/Parlour/",
    },
    {
      img: assets.Project_5,
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience with a modern, responsive design built using React and Tailwind CSS.",
      tech: ["React js", "TailwindCSS", "JavaScript"],
      
    },
    {
      img: assets.Project_4,
      title: "Twitter Clone",
      description:
        "A responsive Twitter clone frontend with modern UI, interactive feed design, and smooth navigation to simulate real-time social media experience.",
      tech: ["HTML", "TailwindCSS"],
      link: "https://mantu-kumar-shah01.github.io/Twitter/",
    },
    {
      img: assets.Project_2,
      title: "Netflix Clone",
      description:
        "A responsive Netflix clone frontend with sleek design, smooth navigation, and interactive movie/show browsing experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://mantu-kumar-shah01.github.io/Movie/",
    },
    
  ];

  return (
    <section className="w-full bg-gray-400 py-16 px-4 md:px-16 lg:px-20" id="work">
      <h3 className="text-3xl mt-16 font-bold mb-4 text-center text-black">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {projects.map((project, index) => (
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:bg-gray-50 transition-transform hover:scale-105 duration-300 ease-in-out"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full max-h-80 object-cover hover:scale-105 transform duration-300 ease-out"
            />

            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 px-4 py-2 rounded-md font-medium bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                View Project
              </a>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
