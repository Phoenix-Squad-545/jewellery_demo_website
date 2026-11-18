import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/BreadCrumbs";
import ProductCard from "../components/products/ProductCard";
import { PRODUCTS } from "../data/products";
import { categories } from "../data/categories";
import { Sparkles, Crown } from "lucide-react";

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterTabs = [
    { label: "All Masterpieces", key: "all" },
    { label: "Bridal Jewellery", key: "Bridal Jewellery" },
    { label: "Temple Jewellery", key: "Temple Jewellery" },
    { label: "Gold Jewellery", key: "Gold Jewellery" },
    { label: "Diamond Jewellery", key: "Diamond Jewellery" },
    { label: "Necklaces & Harams", key: "Necklaces" },
    { label: "Bangles & Kadas", key: "Bangles" },
    { label: "Earrings & Jhumkas", key: "Earrings" },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* Royal Gallery Hero Banner */}
      <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-[#240308] flex items-center justify-center">
        <img
          src="/images/Latest_Temple/temple-jewellery-1.jpg"
          alt="Royal Indian Traditional Jewellery Gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/70 to-[#240308]/90" />
        <div className="absolute inset-0 pattern-jaali-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Crown className="w-3.5 h-3.5" />
            Radha Gold Jewellers Archives
          </div>

          <h1 className="font-cinzel text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            The Royal Treasury Gallery
          </h1>

          <p className="font-cormorant italic text-lg md:text-xl text-[#DFB76C]">
            Exquisite 22K Gold, Original Temple Kemp & Antique Polki Creations
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb current="Royal Gallery" />

      {/* Main Gallery Section */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {filterTabs.map((tab) => {
              const active = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`px-4 py-2.5 rounded-sm font-cinzel text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#35040D] text-[#DFB76C] border border-[#C5A059] shadow-md scale-102"
                      : "bg-white text-[#4A3E3B] border border-[#E8DCC8] hover:border-[#C5A059] hover:text-[#35040D]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#ECE3D2] text-xs text-[#736360] font-sans">
            <span className="font-cinzel tracking-wider uppercase text-[#35040D] font-semibold">
              Showing {filteredProducts.length} Royal Creations
            </span>
            <span className="text-[#A98239]">
              ✦ 100% BIS 916 Hallmarked
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Explore Specific Category Taxonomies */}
          <div className="mt-20 pt-16 border-t border-[#E8DCC8]">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A98239] font-cinzel font-semibold block mb-1">
                Taxonomy Portfolios
              </span>
              <h3 className="font-cinzel text-2xl text-[#35040D] font-bold">
                Explore Dedicated Category Portfolios
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  onClick={() =>
                    navigate(
                      cat.products && cat.products.length > 0
                        ? `/gallery/${cat.slug}/${cat.products[0]}`
                        : `/gallery/${cat.slug}`
                    )
                  }
                  className="group relative aspect-square overflow-hidden rounded-sm border border-[#E8DCC8] hover:border-[#C5A059] cursor-pointer shadow-sm hover:shadow-lg transition-all"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#250308]/90 via-[#250308]/30 to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-white text-center">
                    <h4 className="font-cinzel text-xs font-bold tracking-wider text-[#DFB76C] group-hover:text-white transition">
                      {cat.label}
                    </h4>
                    <span className="text-[10px] text-white/70 font-sans block mt-0.5">
                      {cat.itemCount} Designs
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}