import Title from "./Title";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-6 px-2 sm:px-4">
      {/* 1. Header Banner */}
      <Title
        text="Responsive Web Design"
        subtitle="1 Column on Mobile • 2 Columns on Tablet • 3 Columns on Desktop"
      />

      {/* 2. Diagram Canvas */}
      <div className="w-full max-w-5xl mt-6 p-6 sm:p-10 rounded-3xl bg-[#080b16] border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6345ec]/15 rounded-full blur-3xl pointer-events-none" />

        {/* --- Top Connecting Dashed Flow Line --- */}
        <div className="hidden md:flex items-center justify-between px-16 lg:px-24 mb-6 relative z-10">
          {/* Node 1 (Mobile) */}
          <div className="flex flex-col items-center">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mt-1" />
          </div>

          {/* Arrow 1 -> 2 */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full border-t-2 border-dashed border-[#a6fa63]/70 relative">
              <div className="absolute -top-1.5 right-1/2 translate-x-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#a6fa63]" />
            </div>
          </div>

          {/* Node 2 (Tablet) */}
          <div className="flex flex-col items-center">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mt-1" />
          </div>

          {/* Arrow 2 -> 3 */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full border-t-2 border-dashed border-[#a6fa63]/70 relative">
              <div className="absolute -top-1.5 right-1/2 translate-x-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#a6fa63]" />
            </div>
          </div>

          {/* Node 3 (Desktop) */}
          <div className="flex flex-col items-center">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mt-1" />
          </div>
        </div>

        {/* --- The Three Device Mockups --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
          
          {/* ================= 1. MOBILE DEVICE (Left - 3 Cols) ================= */}
          <div className="md:col-span-3 flex flex-col items-center">
            <div className="w-44 sm:w-48 bg-slate-900 border-4 border-[#6345ec] rounded-3xl p-2.5 shadow-2xl relative">
              {/* Notch / Speaker */}
              <div className="w-12 h-1.5 bg-[#6345ec] rounded-full mx-auto mb-2" />
              
              {/* Screen Area */}
              <div className="bg-slate-100 rounded-2xl p-3 min-h-[280px] flex flex-col gap-2.5">
                {/* Mobile Header */}
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-5 h-5 bg-[#6345ec] rounded-sm shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="h-1.5 w-12 bg-[#a6fa63] rounded-full" />
                    <div className="h-1 w-8 bg-[#a6fa63]/70 rounded-full" />
                  </div>
                </div>

                {/* 1 Column Layout: 2 Stacked Cards */}
                <div className="space-y-2.5 flex-1">
                  {/* Card 1 */}
                  <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200">
                    <div className="w-full h-14 bg-[#6345ec] rounded-lg mb-1.5" />
                    <div className="space-y-1">
                      <div className="h-1.5 w-3/4 bg-[#a6fa63] rounded-full" />
                      <div className="h-1 w-1/2 bg-[#a6fa63]/70 rounded-full" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200">
                    <div className="w-full h-14 bg-[#6345ec] rounded-lg mb-1.5" />
                    <div className="space-y-1">
                      <div className="h-1.5 w-3/4 bg-[#a6fa63] rounded-full" />
                      <div className="h-1 w-1/2 bg-[#a6fa63]/70 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="w-10 h-1 bg-[#6345ec] rounded-full mx-auto mt-2" />
            </div>

            <span className="mt-3 text-xs font-bold uppercase tracking-wider text-[#a6fa63] bg-[#080b16] px-3 py-1 rounded-full border border-[#a6fa63]/30">
              Mobile (1 Col)
            </span>
          </div>

          {/* ================= 2. TABLET DEVICE (Middle - 4 Cols) ================= */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-60 sm:w-68 bg-slate-900 border-4 border-[#6345ec] rounded-3xl p-3 shadow-2xl relative">
              {/* Front Camera dot */}
              <div className="w-2 h-2 bg-[#6345ec] rounded-full mx-auto mb-2" />

              {/* Screen Area */}
              <div className="bg-slate-100 rounded-2xl p-3 min-h-[300px] flex flex-col gap-2.5">
                {/* Tablet Header */}
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-6 h-6 bg-[#6345ec] rounded-sm shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="h-1.5 w-16 bg-[#a6fa63] rounded-full" />
                    <div className="h-1 w-10 bg-[#a6fa63]/70 rounded-full" />
                  </div>
                </div>

                {/* 2 Column Layout (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-2 flex-1">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200">
                      <div className="w-full h-12 bg-[#6345ec] rounded-md mb-1.5" />
                      <div className="space-y-1">
                        <div className="h-1.5 w-3/4 bg-[#a6fa63] rounded-full" />
                        <div className="h-1 w-1/2 bg-[#a6fa63]/70 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <span className="mt-3 text-xs font-bold uppercase tracking-wider text-[#a6fa63] bg-[#080b16] px-3 py-1 rounded-full border border-[#a6fa63]/30">
              Tablet (2 Cols)
            </span>
          </div>

          {/* ================= 3. LAPTOP / DESKTOP DEVICE (Right - 5 Cols) ================= */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[360px] sm:max-w-[400px]">
              {/* Laptop Screen Lid */}
              <div className="bg-slate-900 border-4 border-[#6345ec] rounded-t-2xl p-3 shadow-2xl">
                {/* Camera dot */}
                <div className="w-1.5 h-1.5 bg-[#6345ec] rounded-full mx-auto mb-2" />

                {/* Screen Area */}
                <div className="bg-slate-100 rounded-xl p-3 min-h-[220px] flex flex-col gap-2.5">
                  {/* Laptop Header */}
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <div className="w-6 h-6 bg-[#6345ec] rounded-sm shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className="h-1.5 w-20 bg-[#a6fa63] rounded-full" />
                      <div className="h-1 w-12 bg-[#a6fa63]/70 rounded-full" />
                    </div>
                  </div>

                  {/* 3 Column Layout (1x3 Grid) */}
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200">
                        <div className="w-full h-14 bg-[#6345ec] rounded-md mb-1.5" />
                        <div className="space-y-1">
                          <div className="h-1.5 w-3/4 bg-[#a6fa63] rounded-full" />
                          <div className="h-1 w-1/2 bg-[#a6fa63]/70 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="h-3 bg-[#6345ec] rounded-b-xl w-[106%] -ml-[3%] shadow-lg flex items-center justify-center">
                <div className="w-14 h-1 bg-[#a6fa63] rounded-full opacity-60" />
              </div>
            </div>

            <span className="mt-3 text-xs font-bold uppercase tracking-wider text-[#a6fa63] bg-[#080b16] px-3 py-1 rounded-full border border-[#a6fa63]/30">
              Desktop (3 Cols)
            </span>
          </div>

        </div>

        {/* --- Bottom Connecting Dashed Return Flow Line --- */}
        <div className="hidden md:flex items-center justify-between px-16 lg:px-24 mt-6 relative z-10">
          {/* Node 1 (Mobile) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mb-1" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
          </div>

          {/* Return Arrow 2 <- 1 */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full border-t-2 border-dashed border-[#a6fa63]/70 relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-8 border-r-[#a6fa63]" />
            </div>
          </div>

          {/* Node 2 (Tablet) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mb-1" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
          </div>

          {/* Return Arrow 3 <- 2 */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full border-t-2 border-dashed border-[#a6fa63]/70 relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-8 border-r-[#a6fa63]" />
            </div>
          </div>

          {/* Node 3 (Desktop) */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-4 bg-[#a6fa63]/40 mb-1" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#a6fa63] bg-[#080b16] shadow-[0_0_8px_#a6fa63]" />
          </div>
        </div>

      </div>
    </section>
  );
}
