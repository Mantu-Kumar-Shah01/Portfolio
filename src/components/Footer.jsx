import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-6">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl font-bold">Mantu Kumar Shah</h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Full Stack Developer passionate about building responsive and impactful digital solutions.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/3 text-center">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <a href="#home" className="hover:underline underline-offset-4 decoration-teal-500 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline underline-offset-4 decoration-teal-500 transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:underline underline-offset-4 decoration-teal-500 transition duration-200">
                Skills
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:underline underline-offset-4 decoration-teal-500 transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Services */}
        <div className="w-full md:w-1/3  text-center md:text-left">
          <h1 className="text-2xl font-bold">Services</h1>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>Web Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mantu Kumar Shah. All rights reserved. | Available for new Oppoortunities
      </div>
    </footer>
  )
}

export default Footer
