import { useState } from "react";
import Box from "./Box";

export default function Player() {
  const [deviceMode, setDeviceMode] = useState("desktop"); // "mobile" | "tablet" | "desktop"

  const getContainerWidth = () => {
    switch (deviceMode) {
      case "mobile":
        return "max-w-[360px]";
      case "tablet":
        return "max-w-[640px]";
      default:
        return "max-w-full";
    }
  };

  const getGridCols = () => {
    switch (deviceMode) {
      case "mobile":
        return "grid-cols-1";
      case "tablet":
        return "grid-cols-2";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4">
      {/* Simulator Control Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6345ec] animate-pulse" />
          <h3 className="text-white font-bold text-sm sm:text-base">
            Interactive Screen Simulator
          </h3>
        </div>

        {/* Device Switcher Buttons */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 gap-1">
          <button
            onClick={() => setDeviceMode("mobile")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === "mobile"
                ? "bg-[#6345ec] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>📱</span> Mobile (1 col)
          </button>

          <button
            onClick={() => setDeviceMode("tablet")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === "tablet"
                ? "bg-[#6345ec] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>💻</span> Tablet (2 cols)
          </button>

          <button
            onClick={() => setDeviceMode("desktop")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === "desktop"
                ? "bg-[#6345ec] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>🖥️</span> Desktop (3 cols)
          </button>
        </div>
      </div>

      {/* Simulator Screen Frame */}
      <div className="flex justify-center p-4 sm:p-8 bg-[#080b16] rounded-3xl border border-slate-800 shadow-2xl transition-all duration-500 overflow-hidden">
        <div
          className={`w-full ${getContainerWidth()} bg-slate-900/90 border-2 border-[#6345ec]/60 rounded-2xl p-5 sm:p-6 transition-all duration-500 shadow-2xl`}
        >
          {/* Simulated Window Topbar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
              Mode: <span className="text-[#a6fa63] font-bold">{deviceMode.toUpperCase()}</span>
            </div>
          </div>

          {/* Render Simulated Cards */}
          <div className={`grid ${getGridCols()} gap-4`}>
            <Box
              title="Responsive Header"
              category="Navigation"
              highlight="Fluid Width"
              variant="card"
            />
            <Box
              title="Content Grid Item"
              category="Main Content"
              highlight="Adaptive Columns"
              variant="card"
            />
            <Box
              title="Feature Section"
              category="Components"
              highlight="Breakpoints"
              variant="card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
