"use client";

export default function Events() {
  return (
    <div
      id="itinerary"
      className="flex scroll-mt-6 flex-col justify-center mt-20 lg:mt-40 items-center"
    >
      <p className="md:text-2xl text-[16px] text-[#B35800] font-cormorant-garamond">
        Two days of celebration
      </p>
      <h2
        className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        Wedding Events
      </h2>

    
      <div className="bg-[url('/assets/date_frame.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center w-85 min-h-[100px] md:w-140 md:min-h-[160px]">
        <h2 className="text-[#B35800] font-cormorant-garamond text-[18px] font-semibold md:text-xl lg:text-[30px] px-4 py-2 text-center">
          Friday, 11th December 2026
        </h2>
      </div>

      <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <img
          src="/assets/haldi_event.webp"
          alt="Wedding Logo"
          className="w-[250px] sm:w-[220px] md:w-[280px]"
        />
        <h2 className="text-[#B35800] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] mt-4">
          A Splash of Sunshine (Haldi)
        </h2>
        <p className="text-[#B35800]  font-cormorant-garamond text-[16px] md:text-base">
          11:30 am onwards
        </p>

        <p className="text-[#B35800]  font-cormorant-garamond text-sm md:text-base ">
          Location:- Open close & Mandapam
        </p>
      </div>

      <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <img
          src="/assets/sangeet_event.webp"
          alt="Wedding Logo"
          className="w-[250px] sm:w-[220px] md:w-[280px]"
        />
        <h2 className="text-[#B35800] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] mt-4">
          A Symphony of Love (Sangeet)
        </h2>
        <p className="text-[#B35800]  font-cormorant-garamond text-[16px] md:text-base">
          7:00 pm onwards
        </p>

        <p className="text-[#B35800]  font-cormorant-garamond text-sm md:text-base ">
          Location:- Utsav
        </p>
      </div>

      <div className="flex items-center w-full md:mt-16 mt-6 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#B35800]" />
          <div className="border-t border-[#B35800] mt-1" />
        </div>

        <span className="mx-4 text-[#B35800] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#B35800]" />
          <div className="border-t border-[#B35800] mt-1" />
        </div>
      </div>



      <div className="bg-[url('/assets/date_frame.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center w-85 min-h-[100px] md:w-140 md:min-h-[160px]">
        <h2 className="text-[#B35800] font-cormorant-garamond text-[18px] font-semibold md:text-xl lg:text-[30px] px-4 py-2 text-center">
          Saturday, 12th December 2026
        </h2>
      </div>

      <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <img
          src="/assets/varmala.webp"
          alt="Wedding Logo"
          className="w-[250px] sm:w-[220px] md:w-[280px]"
        />
        <h2 className="text-[#B35800] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] mt-4">
          Varmala
        </h2>
        <p className="text-[#B35800]  font-cormorant-garamond text-[16px] md:text-base">
          6:30 pm onwards
        </p>

        <p className="text-[#B35800]  font-cormorant-garamond text-sm md:text-base ">
          Location:- Sun Deck
        </p>
      </div>

      <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <img
          src="/assets/phere.webp"
          alt="Wedding Logo"
          className="w-[250px] sm:w-[220px] md:w-[280px]"
        />
        <h2 className="text-[#B35800] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] mt-4">
          Phere Reception
        </h2>
        <p className="text-[#B35800]  font-cormorant-garamond text-[16px] md:text-base">
          7:30 pm onwards
        </p>

        <p className="text-[#B35800]  font-cormorant-garamond text-sm md:text-base ">
          Location:- Utsav
        </p>
      </div>
    </div>
  );
}
