"use client";

import { useEffect, useRef, useState } from "react";

const cover = "/assets/door.png";

const images = [
  "/assets/wardrobe1.webp",
  "/assets/wardrobe2.webp",
  "/assets/wardrobe3.webp",
 
];

const getMaxActive = (isDesktop) =>
  isDesktop ? images.length - 3 : images.length - 1;

export default function Wardrobe() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => {
      setIsDesktop(desktopQuery.matches);
      setActive((current) => Math.min(current, getMaxActive(desktopQuery.matches)));
    };

    updateViewport();
    desktopQuery.addEventListener("change", updateViewport);
    return () => desktopQuery.removeEventListener("change", updateViewport);
  }, []);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    touchStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.clientX - touchStartX.current;
    if (Math.abs(distance) > 40) {
      setActive((current) =>
        Math.max(0, Math.min(getMaxActive(isDesktop), current + (distance < 0 ? 1 : -1))),
      );
    }
    touchStartX.current = null;
  };

  return (
    // overflow-x-clip (NOT overflow-hidden) so sticky works
    <section id="wardrobe" className="w-full scroll-mt-6 overflow-x-clip">
      {/* Heading */}
      <div className="flex flex-col justify-center mt-20 lg:mt-40 items-center">
        <h2
          className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
        >
          Wardrobe Guide
        </h2>
        <p className="md:text-2xl text-[16px] text-[#B35800] font-cormorant-garamond">
          Let’s help you pack for the wedding
        </p>
      </div>

      <div className="mt-16 pb-32 flex justify-center">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px] cursor-pointer group"
            >
              <img
                src={cover}
                alt="Wardrobe Guide"
                className="w-full h-full object-contain
                transition-transform duration-500 group-hover:scale-[1.02] "
              />
              <div
                className="absolute inset-0 flex items-center justify-center
                bg-black/10 opacity-0  transition-opacity"
              >
               
              </div>
            </button>
          ) : (
            <div
              role="region"
              aria-label="Wardrobe image slider"
              className="relative w-[calc(100vw-2rem)] h-[550px] md:w-[380px] md:h-[520px] lg:w-[900px] overflow-hidden rounded-2xl touch-pan-y cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                touchStartX.current = null;
              }}
            >
              {images.map((src, index) => {
                const offset = index - active;
                const visibility =
                  offset === 0
                    ? "opacity-100"
                    : offset > 0 && offset <= 2
                      ? "opacity-0 lg:opacity-100"
                      : "opacity-0";

                return (
                  <div
                    key={src}
                    className={`absolute inset-y-0 left-0 w-full lg:w-1/3 lg:px-2 transition-all duration-700 ease-out ${visibility}`}
                    style={{
                      transform: `translateX(${offset * 100}%)`,
                      zIndex: images.length - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Wardrobe ${index + 1}`}
                      className="w-5/6 h-full object-contain  mx-auto "
                    />
                  </div>
                );
              })}
              <button
                type="button"
                aria-label="Previous wardrobe images"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => setActive((current) => Math.max(0, current - 1))}
                disabled={active === 0}
                className="absolute left-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#B35800] shadow-md transition-opacity disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next wardrobe images"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => setActive((current) => Math.min(getMaxActive(isDesktop), current + 1))}
                disabled={active >= getMaxActive(isDesktop)}
                className="absolute right-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#B35800] shadow-md transition-opacity disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
      </div>
    </section>
  );
}