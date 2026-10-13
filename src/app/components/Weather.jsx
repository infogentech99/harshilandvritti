"use client";

const days = [
  { date: "4 Dec", icon: "☀️", high: 31, low: 15, note: "Sunny & pleasant" },
  { date: "5 Dec", icon: "🌤️", high: 30, low: 14, note: "Clear skies" },
];

const requestNames = [
  "Mona - Raj Kumar Tawri",
  "Rashmi - Shiv Kumar Tawri",
  "Neha - Rohan",
  "and Tawri Family",
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
          WELCOME BY
        </p>

        <div className="mt-4 space-y-2">
          {requestNames.map((name) => (
            <p
              key={name}
              className="text-xl md:text-2xl text-[#f6e6dc] font-serif"
            >
              {name}
            </p>
          ))}
        </div>

      

        
       
      </div>
    </section>
  );
}
