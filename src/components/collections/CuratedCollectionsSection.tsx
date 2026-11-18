import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "../../data/products";
import ProductCard from "../products/ProductCard";
import { Sparkles, Crown, Flame, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CollectionTab = "bridal" | "festival" | "bestseller";

export default function CuratedCollectionsSection() {
  const [activeTab, setActiveTab] = useState<CollectionTab>("bridal");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.collections.includes(activeTab));
  }, [activeTab]);

  const tabConfig = [
    {
      id: "bridal" as CollectionTab,
      label: "Bridal Collections",
      icon: Crown,
      subtitle: "Imperial Kundan, Temple & Jadau Regalia for the Royal Indian Bride",
    },
    {
      id: "festival" as CollectionTab,
      label: "Festival Collections",
      icon: Flame,
      subtitle: "Auspicious Kasu Malas, Sacred Deities & Kemp Treasures for Divine Celebrations",
    },
    {
      id: "bestseller" as CollectionTab,
      label: "Best Sellers",
      icon: Gem,
      subtitle: "Our Most Cherished Masterpieces Handcrafted Since 1967",
    },
  ];

  const currentTabInfo = tabConfig.find((t) => t.id === activeTab)!;

  return (
    <section id="collections" className="py-20 bg-[#FAF7F2] border-t border-[#E8DCC8] relative overflow-hidden">
      {/* Decorative Traditional Indian Mandala Motif Background (Subtle SVG) */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none -mr-20 -mt-20">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-[#35040D] w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100 0 L100 200 M0 100 L200 100" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D]/5 border border-[#C5A059]/30 text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Imperial Showcases
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold tracking-tight">
            Curated Heritage Treasuries
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <p className="text-sm text-[#5D5350] font-sans">
            Explore authentic 22K pure gold temple ornaments, royal bridal suites, and heirloom pieces crafted with timeless discipline.
          </p>
        </div>

        {/* Tab Buttons (Segmented Royal Control) */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-10">
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-sm font-cinzel text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#35040D] text-[#DFB76C] border border-[#C5A059] shadow-lg scale-102"
                    : "bg-[#FFFDF9] text-[#4A3E3B] border border-[#E8DCC8] hover:border-[#C5A059] hover:text-[#35040D]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#DFB76C]" : "text-[#A98239]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Subtitle */}
        <div className="text-center mb-8">
          <p className="font-cormorant italic text-lg text-[#580D1A] tracking-wide">
            — {currentTabInfo.subtitle} —
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All In Category CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.25em] uppercase font-bold text-[#35040D] hover:text-[#580D1A] py-3 px-8 border border-[#35040D] hover:border-[#580D1A] bg-transparent hover:bg-white transition-all shadow-sm cursor-pointer"
          >
            Explore Complete Treasury
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
