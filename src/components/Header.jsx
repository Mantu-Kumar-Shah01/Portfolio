import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Hero3DText from "./Hero3DText";

const fullText = "DEVELOPER";

const Header = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 150;

    const handleTyping = () => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <section
      id="home"
      className="relative h-screen max-h-screen w-full bg-[#CBD3DC] text-[#000000] overflow-hidden flex flex-col justify-between -mt-16 pt-16"
    >
      {/* 3D WIREFRAME TORUS ORBIT RING (ORBITS IN FOREGROUND AT Z-[25]) */}
      <div className="absolute inset-0 pointer-events-none z-[25] w-full h-full">
        <Hero3DText />
      </div>

      {/* ================= MAIN HERO CANVAS CONTENT ================= */}
      <main className="relative flex-1 flex items-center justify-center w-full h-full">

        {/* ================= 1. MASSIVE BACKGROUND TYPOGRAPHY WITH PULSE CURSOR TYPEWRITER ANIMATION ================= */}
        <div className="pointer-events-none absolute inset-x-0 top-[11%] sm:top-[9%] lg:top-[8%] z-0 w-full flex justify-center items-center select-none overflow-hidden px-6 sm:px-10 lg:px-14">
          <h1
            className="
              whitespace-nowrap
              text-[17vw]
              sm:text-[18vw]
              lg:text-[18.8vw]
              font-black
              uppercase
              leading-none
              tracking-[-0.08em]
              scale-y-[1.18]
              origin-center
              text-white
              text-center
              flex
              items-center
              justify-center
            "
          >
            <span className="font-extrabold animate-pulse-cursor border-white border-r-[4px] sm:border-r-[6px] lg:border-r-[8px] inline-flex pr-1.5 text-white">
              {displayedText}
            </span>
          </h1>
        </div>

        {/* ================= 3. PROFILE IMAGE CUTOUT (ZERO BACKGROUND BOX TONE) ================= */}
        <div
          className="
            absolute
            left-1/2
            top-[44%]
            z-20
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            sm:w-[270px]
            md:w-[320px]
            lg:w-[360px]
            pointer-events-none
          "
        >
          <img
            src={assets.Profile}
            alt="Mantu Kumar Shah Software Developer"
            className="
              block
              h-auto
              w-full
              object-contain
              filter
              contrast-105
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
            "
          />
        </div>

        {/* ================= 4. FLOATING LABEL — LEFT ================= */}
        <div
          className="
            absolute
            left-[10%]
            top-[34%]
            z-40
            rotate-[-8deg]
            rounded-full
            bg-black
            px-4
            py-1.5
            text-xs
            font-bold
            tracking-wide
            text-white
            shadow-2xl
            border
            border-white/20
            sm:left-[18%]
            md:left-[22%]
            hover:bg-slate-900
            transition-colors
            cursor-pointer
          "
        >
          Developer
        </div>

        {/* ================= 5. FLOATING LABEL — RIGHT ================= */}
        <div
          className="
            absolute
            right-[10%]
            top-[22%]
            z-40
            rotate-[10deg]
            rounded-full
            bg-black
            px-4
            py-1.5
            text-xs
            font-bold
            tracking-wide
            text-white
            shadow-2xl
            border
            border-white/20
            sm:right-[18%]
            md:right-[22%]
            hover:bg-slate-900
            transition-colors
            cursor-pointer
          "
        >
          Software Engineer
        </div>

        {/* ================= 7. LARGE BOLD BOTTOM LEFT TITLE ================= */}
        <div
          className="
            absolute
            bottom-[6%]
            sm:bottom-[7%]
            lg:bottom-[8%]
            left-6
            sm:left-10
            md:left-12
            lg:left-14
            z-40
            w-max
            max-w-[44%]
          "
        >
          <p className="mb-1 text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
            Hi 👋, I'm Mantu
          </p>

          <h2
            className="
              text-[32px]
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.04em]
              text-black
              sm:text-[44px]
              md:text-[54px]
              lg:text-[64px]
            "
          >
            SOFTWARE
            <br />
            DEVELOPER
            <br />
            & ENGINEER.
          </h2>
        </div>

        {/* ================= 8. BOTTOM RIGHT CARD ================= */}
        <div
          className="
            absolute
            bottom-[6%]
            sm:bottom-[7%]
            lg:bottom-[8%]
            right-6
            sm:right-10
            md:right-14
            lg:right-14
            z-40
            w-[260px]
            sm:w-[310px]
            rounded-3xl
            bg-white
            p-5
            sm:p-6
            shadow-2xl
            border
            border-slate-200/80
          "
        >
          <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-900 pr-3">
            Full Stack Developer building modern, scalable and interactive web applications.
          </p>

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
            <a
              href="mailto:sahharsh520@gmail.com"
              className="text-xs font-bold text-black underline underline-offset-4 hover:text-slate-700 transition-colors"
            >
              sahharsh520@gmail.com
            </a>

            {/* Small Black Circular Badge */}
            <a
              href="#Contact"
              aria-label="Let's Build"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black
                text-[8px]
                font-extrabold
                uppercase
                leading-[1.1]
                text-white
                text-center
                shadow-xl
                hover:bg-slate-900
                transition-colors
                cursor-pointer
              "
            >
              LET'S
              <br />
              BUILD
            </a>
          </div>
        </div>

      </main>
    </section>
  );
};

export default Header;