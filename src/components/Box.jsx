export default function Box({ 
  title = "Responsive Card", 
  category = "Component", 
  highlight = "Tailwind CSS",
  variant = "graphic"
}) {
  if (variant === "graphic") {
    return (
      <div className="flex flex-col gap-2 p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/80 shadow-sm hover:border-[#6345ec]/50 transition-all duration-300">
        {/* Purple Square Box */}
        <div className="w-full aspect-4/3 bg-[#6345ec] rounded-lg shadow-inner flex items-center justify-center text-white/40 text-xs font-mono">
          <span className="opacity-0 hover:opacity-100 transition-opacity">item</span>
        </div>
        {/* Neon Green Detail Lines */}
        <div className="space-y-1.5 pt-1">
          <div className="h-1.5 w-3/4 bg-[#a6fa63] rounded-full"></div>
          <div className="h-1.5 w-1/2 bg-[#a6fa63]/60 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#a6fa63]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[#6345ec]/20">
      {/* Card Header Gradient */}
      <div className="h-36 bg-gradient-to-br from-[#6345ec] to-[#4323c9] p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <span className="self-start text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 text-[#a6fa63] border border-[#a6fa63]/30">
          {category}
        </span>
        <div className="h-2 w-16 bg-[#a6fa63] rounded-full"></div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-[#a6fa63] transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-xs mt-1 leading-relaxed">
            Flexible UI box adaptively rearranging across mobile, tablet, and desktop views.
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
          <span className="text-[#a6fa63] font-medium">{highlight}</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">1x Box</span>
        </div>
      </div>
    </div>
  );
}
