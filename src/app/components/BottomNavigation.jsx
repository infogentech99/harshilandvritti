const items = [
  { label: "HOME", href: "#home", icon: "home" },

  { label: "ITINERARY", href: "#itinerary", icon: "itinerary" },
  { label: "WARDROBE", href: "#wardrobe", icon: "wardrobe" },
  { label: "PHOTOS", href: "#photos", icon: "photos" },
 
];

function NavIcon({ name }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return <svg {...iconProps}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>;
    case "venue":
      return <svg {...iconProps}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "itinerary":
      return <svg {...iconProps}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
    case "wardrobe":
      return <svg {...iconProps}><path d="m8 4 4-2 4 2 4 5-3 2-2-2v12H9V9l-2 2-3-2z" /><path d="M9 9h6" /></svg>;
    case "photos":
      return <svg {...iconProps}><path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><circle cx="12" cy="13" r="3.5" /></svg>;
    default:
      return <svg {...iconProps}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
  }
}

export default function BottomNavigation() {
  return (
    <nav
      aria-label="Page sections"
      className="fixed inset-x-0 bottom-0 z-60 border-t border-white/20 bg-[#B35800] pb-[env(safe-area-inset-bottom)] text-[#F6EFE2] shadow-[0_-4px_18px_rgba(0,0,0,0.2)] rounded-tl-2xl rounded-tr-2xl"
    >
      <div className="mx-auto grid min-h-16 max-w-3xl grid-cols-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex min-w-0 flex-col items-center justify-center gap-1 px-0.5 py-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
          >
            <NavIcon name={item.icon} />
            <span className="whitespace-nowrap font-cormorant-garamond text-[9px] font-semibold leading-none sm:text-[10px] mt-1">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}