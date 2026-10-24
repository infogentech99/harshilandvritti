
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  const touchStartX = useRef(null);

  // Ensure document.body is available before using a portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Responsive slider
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateViewport = () => {
      setIsDesktop(desktopQuery.matches);

      setActive((current) =>
        Math.min(current, getMaxActive(desktopQuery.matches))
      );
    };

    updateViewport();
    desktopQuery.addEventListener("change", updateViewport);

    return () => {
      desktopQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  // Lock background scroll while fullscreen is open
  useEffect(() => {
    if (!selectedImage) return;

    const scrollY = window.scrollY;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyWidth = document.body.style.width;
    const previousBodyTop = document.body.style.top;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.width = previousBodyWidth;
      document.body.style.top = previousBodyTop;

      window.scrollTo(0, scrollY);
    };
  }, [selectedImage]);

  // Swipe slider
  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    touchStartX.current = event.clientX;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture may not be available in every environment
    }
  };

  const handlePointerUp = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.clientX - touchStartX.current;

    if (Math.abs(distance) > 40) {
      setActive((current) =>
        Math.max(
          0,
          Math.min(
            getMaxActive(isDesktop),
            current + (distance < 0 ? 1 : -1)
          )
        )
      );
    }

    touchStartX.current = null;
  };

  const closeFullscreen = () => setSelectedImage(null);

  return (
    <section
      id="wardrobe"
      className="w-full scroll-mt-6 overflow-x-clip"
    >
      {/* Heading */}
      <div className="mt-20 flex flex-col items-center justify-center lg:mt-40">
        <h2 className="mt-2 text-center font-cormorant-garamond font-semibold leading-tight text-[30px] text-[#B35800] md:text-5xl lg:text-[80px]">
          Wardrobe Guide
        </h2>

        <p className="font-cormorant-garamond text-[16px] text-[#B35800] md:text-2xl">
          Let’s help you pack for the wedding
        </p>
      </div>

      {/* Cover and slider */}
      <div className="mt-16 flex justify-center pb-32">
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Wardrobe Guide"
            className="group relative h-[420px] w-[300px] cursor-pointer md:h-[520px] md:w-[380px]"
          >
            <img
              src={cover}
              alt="Wardrobe Guide"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/10 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-5 py-2 font-cormorant-garamond text-xl text-[#BC610A] shadow-md transition-transform duration-300 group-hover:scale-105">
                Click to open
              </span>
            </div>
          </button>
        ) : (
          <div
            role="region"
            aria-label="Wardrobe image slider"
            className="relative h-[550px] w-[calc(100vw-2rem)] cursor-grab touch-pan-y overflow-hidden rounded-2xl active:cursor-grabbing md:h-[520px] md:w-[380px] lg:w-[900px]"
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
                  className={`absolute inset-y-0 left-0 w-full transition-all duration-700 ease-out lg:w-1/3 lg:px-2 ${visibility}`}
                  style={{
                    transform: `translateX(${offset * 100}%)`,
                    zIndex: images.length - index,
                  }}
                >
                  <img
                    src={src}
                    alt={`Wardrobe ${index + 1}`}
                    draggable={false}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImage(src);
                    }}
                    className="mx-auto h-full w-5/6 cursor-zoom-in object-contain"
                  />
                </div>
              );
            })}

            {/* Previous */}
            <button
              type="button"
              aria-label="Previous wardrobe image"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() =>
                setActive((current) => Math.max(0, current - 1))
              }
              disabled={active === 0}
              className="absolute left-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#B35800] shadow-md disabled:opacity-40"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next wardrobe image"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() =>
                setActive((current) =>
                  Math.min(getMaxActive(isDesktop), current + 1)
                )
              }
              disabled={active >= getMaxActive(isDesktop)}
              className="absolute right-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#B35800] shadow-md disabled:opacity-40"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen portal: renders directly inside document.body */}
      {mounted &&
        selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[2147483647] h-[100dvh] w-screen overflow-x-hidden overflow-y-auto overscroll-contain bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen wardrobe image"
            onClick={closeFullscreen}
            style={{
              WebkitOverflowScrolling: "touch",
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close fullscreen image"
              onClick={closeFullscreen}
              className="fixed right-4 top-4 z-[2147483647] flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/75 text-white shadow-lg backdrop-blur-md transition hover:bg-[#B35800] active:scale-95"
              style={{
                top: "max(16px, env(safe-area-inset-top))",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image can be scrolled vertically if taller than viewport */}
            <div
              className="flex min-h-[100dvh] w-full items-center justify-center p-2 pt-16"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Fullscreen wardrobe guide"
                draggable={false}
                className="block h-auto w-auto max-w-full object-contain"
                style={{
                  maxHeight: "none",
                  margin: "auto",
                }}
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
