import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Player from "./components/Player";
import ProductsGallery from "./components/ProductsGallery";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("diagram");

  return (
    <div className="min-h-screen bg-[#060810] text-slate-100 flex flex-col antialiased selection:bg-[#a6fa63] selection:text-black">
      {/* Top Banner */}
      <Header />

      {/* Navigation Bar */}
      <div className="w-full px-4 pt-4">
        <NavBar activeTab={activeTab} onSelectTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col items-center">
        {activeTab === "diagram" && (
          <>
            <HeroSection />
            <Section />
          </>
        )}

        {activeTab === "interactive" && (
          <div className="w-full">
            <Player />
            <Section />
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="w-full">
            <ProductsGallery />
            <Section />
          </div>
        )}

        {activeTab === "concepts" && (
          <div className="w-full mt-6">
            <HeroSection />
            <ProductsGallery />
          </div>
        )}
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
