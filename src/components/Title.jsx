export default function Title({ text = "Responsive Web Design", subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center my-6">
      <div className="relative inline-block group">
        {/* ชั้นเงาสีม่วงด้านหลัง (Offset Purple Box) */}
        <div className="absolute inset-0 bg-[#6345ec] translate-x-2.5 translate-y-2.5 rounded-sm transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5" />

        {/* ป้ายข้อความสีเขียวนีออนด้านหน้า (Front Neon Green Box) */}
        <h1 className="relative z-10 bg-[#a6fa63] text-black font-black text-2xl sm:text-4xl md:text-5xl px-8 py-3.5 sm:py-4 tracking-tight shadow-md border-2 border-[#a6fa63]">
          {text}
        </h1>
      </div>

      {subtitle && (
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
