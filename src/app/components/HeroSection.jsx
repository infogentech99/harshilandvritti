"use client";

import {useEffect, useState } from "react";
import LadkeDetails from "../components/LadkeDetails";
import LadkiDetails from "../components/LadkiDetails";
import RoseHeroTemp from "../components/RoseHeroTemp";
import BottomNavigation from "../components/BottomNavigation";
export default function HeroSection() {
 const [selectedSide, setSelectedSide] = useState(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full scroll-mt-0">

      {/* ================= BACKGROUND ================= */}
      {/* <div
        className="fixed inset-0 z-0 h-screen w-full bg-[#faf4e8] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/family-bg.webp')",
          backgroundColor: "#faf4e8",
        }}
      /> */}
      <div
  className="fixed inset-0 z-0 w-full h-full bg-[#faf4e8] bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/family-bg.webp')",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundColor: "#faf4e8",
  }}
/>

  <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
    <RoseHeroTemp />
  </div>
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-10 py-10 pb-28 sm:px-8 md:px-12 lg:px-16 mt-0">

        {/* ================= GANESH ================= */}
        <div className=" flex justify-center md:mt-8">
          <img
            src="/assets/ganes.png"
            alt="Shree Ganesh"
            className="w-[70px] sm:w-[65px] md:w-[150px]"
          />
        </div>

        {/* ================= WEDDING LOGO ================= */}
        <div className="mt-8 flex flex-col items-center text-center md:mt-10">
          <img
            src="/assets/logo.png"
            alt="Wedding Logo"
            className="w-[240px] sm:w-[220px] md:w-[280px]"
          />

          {/* <p className="mt-3 text-[15px] tracking-[0.15em] text-[#B35800] sm:text-xs md:mt-5 md:text-2xl font-cormorant-garamond">
            #AdityaGotHisPriyanka
          </p> */}
        </div>

        {/* ================= CHOOSE TEXT ================= */}
        <div className="mt-14 text-center sm:mt-16 md:mt-20">
          <p className="text-[16px] text-[#B35800] md:text-xl font-cormorant-garamond">
            PLEASE CHOOSE ONE TO CONTINUE
          </p>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">

          {/* LADKE */}
          <button
            type="button"
            onClick={() => setSelectedSide("ladke")}
            className={`
              w-full max-w-[220px]
              rounded-full
              px-8 py-3
              text-xs tracking-[0.12em]
              text-white
              transition-all duration-300
              sm:w-[200px]
              md:w-[220px] md:py-3.5 md:text-sm
              cursor-pointer font-cormorant-garamond
              ${
                selectedSide === "ladke"
                  ? "scale-105 bg-[#B35800] shadow-lg"
                  : "bg-[#B35800] hover:scale-105 hover:bg-[#B35800]"
              }
            `}
          >
            LADKE WAALE
          </button>

          {/* LADKI */}
          <button
            type="button"
            onClick={() => setSelectedSide("ladki")}
            className={`
              w-full max-w-[220px]
              rounded-full
              px-8 py-3
              text-xs tracking-[0.12em]
              text-white
              transition-all duration-300
              sm:w-[200px]
              md:w-[220px] md:py-3.5 md:text-sm
              cursor-pointer font-cormorant-garamond
              ${ 
                selectedSide === "ladki"
                  ? "scale-105 bg-[#B35800] shadow-lg"
                  : "bg-[#B35800] hover:scale-105 hover:bg-[#B35800]"
              }
            `}
          >
            LADKI WAALE
          </button>

        </div>

        {/* ================= SELECTED DETAILS ================= */}
        {/* {selectedSide && (
          <div className="mt-12 w-full max-w-5xl pb-10 md:mt-16"> */}

   {selectedSide && (
          <div className="mt-12 w-full max-w-5xl pb-10 md:mt-16">
       {/* ================= SCROLL DOWN ================= */}
<div
 className={`fixed bottom-20 right-2 z-30
  flex flex-col items-center
  transition-all duration-500
  ${
    showScroll
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  }`}
>
  <button
    type="button"
    onClick={() => {
      window.scrollBy({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }}
    className="flex flex-col items-center gap-2 text-[#BE0D1E]"
    aria-label="Scroll down to explore"
  >
    <span className="flex h-16 w-6 items-center justify-center rounded-full border-2 border-[#BE0D1E] bg-[#FFF8EB]/80">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 10 5 5 5-5" />
        <path d="m7 5 5 5 5-5" />
      </svg>
    </span>

    <span className="animate-pulse text-[11px] tracking-[2px] font-cormorant-garamond font-bold">
      SCROLL <br/> DOWN
    </span>
  </button>
</div>

            {selectedSide === "ladke" ? (
              <LadkeDetails />
            ) : (
              <LadkiDetails />
            )}

          </div>
        )}

      </div>
      {selectedSide && <BottomNavigation />}
    </section>
  );
}