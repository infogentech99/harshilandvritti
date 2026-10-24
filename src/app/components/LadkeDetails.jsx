'use client';
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import Events from "../components/Events";
import Wardrobe from "../components/Wardrobe";
import PhotoGallery from "../components/PhotoGallery";
import Weather from "../components/Weather";

export default function LadkeDetails() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-4xl text-center md:p-2">
      
      <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        We cordially invite you to the wedding ceremony of
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-[#B35800] great-vibes-regular text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
          Harshil Dhanuka
        </h2>
<p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
          (GrandSon of Shri Mahavir Prasad Dhanuka & Smt. Krishna Devi Dhanuka)
        </p>
        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (S/o Shri Suresh Dhanuka & Smt. Jyoti Dhanuka)
        </p>
         

        <h2 className="text-[#B35800] great-vibes-regular text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold">
          <span className="text-[#B35800] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
            With
          </span>
          <br />
          Vritti Sanghvi
        </h2>
<p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
          (GrandDaughter of Late Ramniklal Maniklal Sanghvi & Smt. Vijaya Ben Sanghvi)
        </p>
        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
           (D/o Shri Hitesh Sanghvi & Smt. Rashmi Sanghvi)
        </p>

        <ScratchText onReveal={() => setRevealed(true)} />

       {revealed && (
  <div className="countdown-fade-in">
    <MarriageCountdown />
  </div>
)}

        <Events />
        <Wardrobe />
        <PhotoGallery />
        <Weather />
      </div>
    </div>
  );
}