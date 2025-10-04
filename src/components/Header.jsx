import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-400" id="home">
     
     

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-fullz-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center w-full h-full px-6 sm:px-10 md:px-16 lg:px-32">

        {/* Left Section - Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-12 md:mt-0">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug text-white drop-shadow-lg">
            Hi, I'm <br /> <span className="text-gray-900 shadow-gray-400">Mantu Kumar Shah</span>
          </h1>

          <div className="flex flex-col mt-4 md:items-start">
            <h2 className="text-lg sm:text-xl text-gray-200">Full Stack Developer</h2>
            <p className="font-light text-gray-300 mt-2 text-sm sm:text-base">
              Ready to work & build scalable applications
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6">
            <a href="#Contact"
              className="border border-gray-300 text-white rounded-md px-5 py-2 sm:px-6 sm:py-2.5 hover:bg-gray-200 hover:text-gray-900 transition shadow-md cursor-pointer"
              
            >
              Contact Me
            </a>

            <a
              href={assets.Mantu_Resume || "#"}
              download="Mantu_Kumar_Shah_Resume.pdf"
              className="border border-gray-300 text-white rounded-md px-5 py-2 sm:px-6 sm:py-2.5 hover:bg-gray-200 hover:text-gray-900 transition shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section - Profile */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 px-6 sm:px-12">
          <img
            src={assets.Profile}
            alt="Profile"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-xl border-4 border-gray-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
