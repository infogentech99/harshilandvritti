"use client";
import { useEffect, useState } from "react";


export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-12-12").getTime();
  const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

    return (
        <>
            <div className="bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
               
                    <h2 className="text-[20px] md:text-xl lg:text-[16px] text-center text-[#B35800] pt-18 md:pt-11 lg:pt-10 3xl:pt-25 font-cormorant-garamond uppercase font-bold">Counting down to the celebration</h2> 
                     
                    <div className="flex md:gap-12 gap-2 justify-center items-center mt-6">
                       <div className="border px-6 py-2 bg-[#F8F4EA] border-[#B35800] rounded-md">
                         <h2 className="text-[30px] md:text-4xl lg:text-[52px] text-center text-[#B35800] font-cormorant-garamond"> {timeLeft.days}</h2>
                          <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">Days </h2>
                       </div>
                        <div className="border px-6 py-2 bg-[#F8F4EA] border-[#B35800] rounded-md">
                         <h2 className="text-[30px] md:text-4xl lg:text-[52px] text-center text-[#B35800] font-cormorant-garamond"> {timeLeft.hours}</h2>
                          <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">Hours</h2>
                       </div>
                       <div className="border px-6 py-2 bg-[#F8F4EA] border-[#B35800] rounded-md">
                         <h2 className="text-[30px] md:text-4xl lg:text-[52px] text-center text-[#B35800] font-cormorant-garamond"> {timeLeft.minutes}</h2>
                          <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">Minutes</h2>
                       </div>
                       <div className="border px-6 py-2 bg-[#F8F4EA] border-[#B35800] rounded-md">
                         <h2 className="text-[30px] md:text-4xl lg:text-[52px] text-center text-[#B35800] font-cormorant-garamond">{timeLeft.seconds}</h2>
                          <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">Seconds</h2>
                       </div>
                    </div>
            </div>
        </>
    );
} 