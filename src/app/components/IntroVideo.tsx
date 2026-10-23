"use client";

import { useEffect, useState } from "react";

export default function IntroVideo() {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleOpen = () => {
    setHide(true);

    setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-[999999] cursor-pointer transition-opacity duration-700 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      style={{
        width: "100vw",
        height: "100dvh",
        backgroundImage: "url('/assets/image_hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Envelope */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/envelope.webp"
          alt="Envelope"
          className="w-[220px] md:w-[500px] animate-envelope"
        />
      </div>

      <style jsx>{`
        @keyframes envelopeFloat {
          0% {
            transform: translateY(0px) rotate(-3deg);
          }

          25% {
            transform: translateY(-18px) rotate(3deg);
          }

          50% {
            transform: translateY(0px) rotate(-2deg);
          }

          75% {
            transform: translateY(18px) rotate(3deg);
          }

          100% {
            transform: translateY(0px) rotate(-3deg);
          }
        }

        .animate-envelope {
          animation: envelopeFloat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}