"use client";

import { useState } from "react";

const images = [
  "/assets/book_image.webp",
  "/assets/couple8.jpg",
  "/assets/couple9.jpg",
  "/assets/couple10.jpg",
  "/assets/couple11.jpg",
  "/assets/couple12.jpg",
  "/assets/couple13.jpg",
  "/assets/couple14.jpg",
  "/assets/couple15.jpg",
  "/assets/couple16.jpg",
  // "/assets/couple17.jpg",
  "/assets/couple18.jpg",
  "/assets/couple19.jpg",
  "/assets/couple20.jpg",
  "/assets/couple21.jpg",
  "/assets/couple22.jpg",
];

const N = images.length;
const FLIP_MS = 1000;

export default function PhotoGallery() {
  const [flipped, setFlipped] = useState(0);
  const [dir, setDir] = useState(1);
  const [last, setLast] = useState(1);

  const handleClick = () => {
    const nextFlipped = Math.max(
      0,
      Math.min(N - 1, flipped + dir)
    );

    if (nextFlipped === flipped) return;

    setLast(dir);
    setFlipped(nextFlipped);

    if (nextFlipped === N - 1) setDir(-1);
    if (nextFlipped === 0) setDir(1);
  };

  const handleNext = (e) => {
    e.stopPropagation();

    if (flipped >= N - 1) return;

    setLast(1);
    setFlipped((prev) => prev + 1);
    setDir(1);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();

    if (flipped <= 0) return;

    setLast(-1);
    setFlipped((prev) => prev - 1);
    setDir(-1);
  };

  return (
    <section
      id="photos"
      className="w-full scroll-mt-6 overflow-x-clip"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center mt-0 lg:mt-20 items-center">
        <p className="md:text-2xl text-[16px] text-[#BC610A] font-cormorant-garamond">
          Our Little Album
        </p>

        <h2
          className="text-[#BC610A] font-cormorant-garamond text-center
          md:text-5xl text-[30px] lg:text-[80px]
          leading-tight mt-2 font-semibold"
        >
          Photo Gallery
        </h2>
      </div>

      {/* Book Gallery */}
      <div className="flex flex-col items-center mt-16 pb-32">
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={flipped === 0}
            aria-label="Previous page"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-[200]
flex items-center justify-center
w-10 h-10 md:w-11 md:h-11
rounded-full bg-white/95 shadow-md
text-[#BC610A]
hover:bg-[#BC610A] hover:text-white
transition-all duration-300
disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Book */}
          <div
            onClick={handleClick}
            className="relative
            w-[260px] h-[360px]
            sm:w-[300px] sm:h-[420px]
            md:w-[380px] md:h-[520px]
            cursor-pointer"
            style={{ perspective: "1800px" }}
          >
            {images.map((src, index) => {
              const isFlipped = index < flipped;
              const zDelay = last === 1 ? FLIP_MS : 0;

              return (
                <div
                  key={src}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    transform: isFlipped
                      ? "rotateY(-180deg)"
                      : "rotateY(0deg)",
                    transition: `transform ${FLIP_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1), z-index 0s linear ${zDelay}ms`,
                    zIndex: isFlipped
                      ? index
                      : 2 * N - index,
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    draggable={false}
                    className="w-full h-full rounded-r-2xl rounded-l-sm"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      backfaceVisibility: "hidden",
                      imageRendering: "auto",
                    }}
                  />

                  {/* Spine Shadow */}
                  <div
                    className="absolute inset-y-0 left-0 w-4
                    bg-gradient-to-r from-black/30 to-transparent
                    rounded-l-sm"
                  />
                </div>
              );
            })}

            {/* Cover Hint */}
            {flipped === 0 && (
              <div
                className="absolute inset-0 z-[100]
                flex items-center justify-center
                rounded-2xl bg-black/10 pointer-events-none"
              >
                {/* <span
                  className="bg-white/90 px-5 py-2 rounded-full
                  text-[#BC610A] font-cormorant-garamond text-xl"
                >
                  Click to open
                </span> */}
              </div>
            )}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            disabled={flipped === N - 1}
            aria-label="Next page"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-[200]
flex items-center justify-center
w-10 h-10 md:w-11 md:h-11
rounded-full bg-white/95 shadow-md
text-[#BC610A]
hover:bg-[#BC610A] hover:text-white
transition-all duration-300
disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}