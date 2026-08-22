import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Nav = () => {
  const [Showbtn, setShowbtn] = useState(false)
  return (
    <div className=' sticky top-0 z-50 overflow-hidden bg-white shadow-md text-center text-gray-900'>
      <div className='flex justify-around items-center py-3 '>
        <img src={assets.Logo} alt="Log" width={60} />

        <div>
          <ul className="hidden md:flex justify-center items-center gap-9 text-xl">
            <li>
              <a href="#home" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer">
                Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out  cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out  cursor-pointer">
                Skills
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer">
                Contact
              </a>
            </li>
          </ul>

        </div>
        {/* Mobile Menu */}
        <div className='menu md:hidden'>
          <img onClick={() => { setShowbtn(true) }} src={assets.menu_icon} alt="menu_icon" />
        </div>
      </div>
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out
        ${Showbtn ? "translate-x-0 w-3/4 " : "translate-x-full w-0"} `}>

        <div className=" flex justify-end p-8 ">
          <img onClick={() => { setShowbtn(false) }} src={assets.cross_icon} alt="cross_icon" width={40} />
        </div>

        <div className='flex justify-around items-center mt-4 sm:px-1'>
          <div className='w-1/2 shadow-md m-4'>
            <ul className='flex flex-col justify-center items-center gap-6 m-2 overflow-hidden md:flex-row md:gap-8'>
              <li>
                <a href="#home" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer" onClick={() => { setShowbtn(false) }}>
                  Home
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer" onClick={() => { setShowbtn(false) }}>
                  Works
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer" onClick={() => { setShowbtn(false) }}>
                  About
                </a>
              </li>
              <li>
                <a href="#skill" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer" onClick={() => { setShowbtn(false) }}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-2xl duration-100 hover:underline underline-offset-2 decoration-teal-600 ease-in-out cursor-pointer" onClick={() => { setShowbtn(false) }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-x-6 justify-center items-center mt-4 m-0 w-1/2  overflow-hidden">
            <div className='m-4 shadow-md py-3 px-6'>
              <a
                href="https://github.com/Mantu-Kumar-Shah01/Mantu-Kumar-Shah01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-3xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>


            <div className='flex space-x-6 justify-center m-4 py-3 px-3 shadow-md' >
              <a
                href="https://www.linkedin.com/in/mantu-kumar-187b25300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-3xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sahharsh520@gmail.com"
                className="text-gray-600 hover:text-black text-3xl transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Nav