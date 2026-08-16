export default function Header() {
  return (
    <header className="w-full bg-[#6345ec]/10 border-b border-[#6345ec]/20 py-2.5 px-4 text-center">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300">
        <span className="inline-block w-2 h-2 rounded-full bg-[#a6fa63] animate-ping" />
        <span>JSD13 Week 07 React Practice:</span>
        <span className="text-[#a6fa63] font-semibold">
          Mobile-First Responsive Layout
        </span>
      </div>
    </header>
  );
}
