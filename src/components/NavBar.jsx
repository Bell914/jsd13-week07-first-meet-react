export default function NavBar({ activeTab, onSelectTab }) {
  const navItems = [
    { id: "diagram", label: "Architecture Diagram" },
    { id: "interactive", label: "Device Simulator" },
    { id: "gallery", label: "Responsive Grid" },
    { id: "concepts", label: "Breakpoints" }
  ];

  return (
    <nav className="w-full max-w-5xl mx-auto px-4 py-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl sticky top-4 z-40">
      {/* Brand logo imitating the top bar in the mockup */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#3514c8] flex items-center justify-center font-black text-white text-sm shadow-md">
          R
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-wide text-white">JSD13</span>
            <span className="text-[10px] bg-[#a6fa63] text-black font-extrabold px-1.5 py-0.2 rounded">
              React 19
            </span>
          </div>
          <span className="text-[11px] text-slate-400">Responsive Showcase</span>
        </div>
      </div>

      {/* Nav links / tabs */}
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectTab && onSelectTab(item.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === item.id
                ? "bg-[#6345ec] text-white shadow-md shadow-[#6345ec]/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
