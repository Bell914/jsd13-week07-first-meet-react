export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 py-8 px-4 mt-12 text-center text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#6345ec] flex items-center justify-center font-bold text-white text-[10px]">
            R
          </div>
          <span className="text-slate-300 font-semibold">Responsive Web Design</span>
          <span className="text-slate-600">•</span>
          <span>JSD13 Week 07</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-slate-400">React 19</span>
          <span className="text-slate-400">Vite</span>
          <span className="text-[#a6fa63] font-mono font-medium">Tailwind CSS v4</span>
        </div>
      </div>
    </footer>
  );
}
