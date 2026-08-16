export default function Section() {
  const breakpoints = [
    {
      screen: "Mobile (< 768px)",
      cols: "1 Column",
      classCode: "grid-cols-1",
      desc: "Default mobile-first layout. Cards stack vertically in a single fluid column."
    },
    {
      screen: "Tablet (>= 768px)",
      cols: "2 Columns",
      classCode: "md:grid-cols-2",
      desc: "Medium screens use 2 columns grid to maximize horizontal tablet space."
    },
    {
      screen: "Desktop (>= 1024px)",
      cols: "3 Columns",
      classCode: "lg:grid-cols-3",
      desc: "Large screen displays 3 columns in a balanced, spacious row."
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4">
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#a6fa63] text-black font-black flex items-center justify-center text-sm">
            💡
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">How Responsive Design Works</h2>
            <p className="text-xs text-slate-400">Tailwind CSS Mobile-First Breakpoint System</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {breakpoints.map((bp, i) => (
            <div
              key={i}
              className="bg-[#080b16] border border-slate-800 p-5 rounded-2xl flex flex-col justify-between gap-3 hover:border-[#6345ec] transition-colors"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a6fa63] bg-slate-900 px-2 py-0.5 rounded border border-[#a6fa63]/20">
                  {bp.screen}
                </span>
                <h4 className="text-lg font-bold text-white mt-2">{bp.cols}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{bp.desc}</p>
              </div>

              <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800/80">
                <code className="text-xs font-mono text-[#a6fa63]">{bp.classCode}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
