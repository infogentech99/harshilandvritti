"use client";


const requestNames = [
  "Late smt Saroj Ben",
  "Late Shri Nandlal bhai Sanghvi ",
  "Smt chaya ben", 
"Shri ramesh bhai sanghvi",
"Smt Sona Ben", 
"Shri vijay bhai sanghvi", 
"Smt Kavita ben", 
"Shri Yogesh Bhai Sanghvi",
];



export default function Weather() {
  return (
    <section
      id="weather"
      className="w-full scroll-mt-6 px-0 md:px-10 flex flex-col items-center gap-16"
    >
      

      {/* Special request card */}
      <div
        className="w-full max-w-xl rounded-3xl bg-gradient-to-br from-[#8c1212] to-[#5c0505]
        border border-[#a8641a]/60 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a63c]">
          Sharing the joy
        </p>

        <div className="mt-4 space-y-2">
          {requestNames.map((name) => (
            <p
              key={name}
              className="text-[15px] md:text-2xl text-[#f6e6dc] font-serif"
            >
              {name}
            </p>
          ))}
        </div>

      

        
       
      </div>
    </section>
  );
}
