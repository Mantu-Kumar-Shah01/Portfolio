import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full h-16 flex items-center transition-all duration-300 ${
      scrolled ? "bg-[#CBD3DC]/90 backdrop-blur-md border-b border-slate-300/80 shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between w-full">
        
        {/* Left Brand Logo */}
        <a href="#home" className="flex items-center gap-1.5 group">
          <span className="text-2xl font-black tracking-tighter text-black">MKS</span>
          <span className="text-sm font-bold italic text-slate-800 font-script group-hover:text-black transition-colors">
            mantu.dev
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-black">
          <a href="#home" className="hover:text-black hover:font-bold transition-colors">
            Home
          </a>
          <a href="#work" className="hover:text-black hover:font-bold transition-colors">
            Works
          </a>
          <a href="#about" className="hover:text-black hover:font-bold transition-colors">
            About
          </a>
          <a href="#skill" className="hover:text-black hover:font-bold transition-colors">
            Skills
          </a>
          <a href="#Contact" className="hover:text-black hover:font-bold transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action Badges & Hire Me Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Mantu-Kumar-Shah01/Mantu-Kumar-Shah01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-black border border-slate-300/80 shadow-xs hover:bg-black hover:text-white transition-colors"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/mantu-kumar-187b25300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-black border border-slate-300/80 shadow-xs hover:bg-black hover:text-white transition-colors"
          >
            in
          </a>

          <a
            href="#Contact"
            className="rounded-full bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-slate-900 transition-colors"
          >
            Hire Me!
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            aria-label="Toggle Navigation"
            className="md:hidden p-2 rounded-full bg-white border border-slate-300 text-black focus:outline-none"
          >
            {showMobileNav ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {showMobileNav && (
        <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col gap-4 text-center">
          <a href="#home" onClick={() => setShowMobileNav(false)} className="font-bold text-slate-900">Home</a>
          <a href="#work" onClick={() => setShowMobileNav(false)} className="font-bold text-slate-900">Works</a>
          <a href="#about" onClick={() => setShowMobileNav(false)} className="font-bold text-slate-900">About</a>
          <a href="#skill" onClick={() => setShowMobileNav(false)} className="font-bold text-slate-900">Skills</a>
          <a href="#Contact" onClick={() => setShowMobileNav(false)} className="font-bold text-slate-900">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Nav;