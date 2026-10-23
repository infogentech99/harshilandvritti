'use client';
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import LadkiEvents from "../components/LadkiEvents";
import Wardrobe from "../components/Wardrobe";
import PhotoGallery from "../components/PhotoGallery";
import LadkiWeather from "../components/LadkiWeather";

export default function LadkiDetails() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-4xl text-center md:p-2">
      <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        With the blessing of Late Ramniklal Maniklal Sanghvi & Vijaya Ben Sanghvi
      </p> <br />
      <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        We cordially invite you to the wedding ceremony of their Granddaughter
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-[#B35800] font-pinyon-script text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
          Vritti Sanghvi
        </h2>

        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (D/o Shri Hitesh Sanghvi & Smt. Rashmi Sanghvi)
        </p>

        <h2 className="text-[#B35800] font-pinyon-script text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold">
          <span className="text-[#B35800] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
            With
          </span>
          <br />
          Harshil Dhanuka
        </h2>

        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (S/o Shri Suresh Dhanuka & Smt. Jyoti Dhanuka)
        </p>

        <ScratchText onReveal={() => setRevealed(true)} />

       {revealed && (
      <div className="countdown-fade-in">
        <MarriageCountdown />
      </div>
    )}
    

        <LadkiEvents />
        <Wardrobe />
        <PhotoGallery />
        <LadkiWeather />
      </div>
    </div>
  );
}