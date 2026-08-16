import Box from "./Box";

export default function ProductsGallery() {
  const products = [
    { id: 1, title: "Mobile Optimized", category: "Layout", highlight: "1 Column (Default)" },
    { id: 2, title: "Tablet Layout", category: "Breakpoints", highlight: "2 Columns (md:)" },
    { id: 3, title: "Desktop Grid", category: "Display", highlight: "3 Columns (lg:)" },
    { id: 4, title: "Flexbox & Grid", category: "CSS Utility", highlight: "Tailwind CSS" },
    { id: 5, title: "Component Reusability", category: "React 19", highlight: "Props & State" },
    { id: 6, title: "Fluid Scalability", category: "Modern Web", highlight: "Responsive" }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#a6fa63]" />
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
              Live Responsive Gallery
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Resize browser or inspect to see grid adapt dynamically: <code className="text-[#a6fa63] bg-slate-900 px-2 py-0.5 rounded font-mono">grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 self-start sm:self-auto bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <span className="text-[#a6fa63] font-bold">6</span> Items loaded
        </div>
      </div>

      {/* The Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <Box
            key={item.id}
            title={item.title}
            category={item.category}
            highlight={item.highlight}
            variant="card"
          />
        ))}
      </div>
    </section>
  );
}
