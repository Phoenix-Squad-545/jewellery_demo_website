import React, { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/BreadCrumbs";
import { Sparkles, ArrowRight } from "lucide-react";

interface CategoryState {
  category: string;
  products: string[];
  image: string;
}

const CATEGORY_CONFIG: Record<string, { products: string[]; image: string; title: string; subtitle: string }> = {
  "bridal-jewellery": {
    title: "Bridal Jewellery",
    subtitle: "Imperial Kundan, Temple & Jadau Suites for Royal Weddings",
    products: ["Bridal Jewellery", "Temple Jewellery", "Necklaces", "Bangles", "Earrings"],
    image: "/images/set 2/RJ_001.jpg",
  },
  "temple-jewellery": {
    title: "Temple Jewellery",
    subtitle: "Authentic Chola & Vijayanagara Handcrafted Temple Art",
    products: ["Temple Jewellery"],
    image: "/images/Latest_Temple/temple-jewellery-1.jpg",
  },
  "gold-jewellery": {
    title: "Gold Jewellery",
    subtitle: "22K Pure BIS 916 Hallmarked Masterpieces",
    products: ["Gold Jewellery", "Necklaces", "Bangles", "Earrings"],
    image: "/images/set 2/RJ_004.jpg",
  },
  "diamond-jewellery": {
    title: "Diamond Jewellery",
    subtitle: "Uncut Syndicate Polki & IGI Certified Solitaires",
    products: ["Diamond Jewellery"],
    image: "/images/set 3/006.jpg",
  },
  "necklaces": {
    title: "Necklaces & Harams",
    subtitle: "Royal Chokers, Haslis & Auspicious Long Harams",
    products: ["Necklaces"],
    image: "/images/set 1/RJ_15.png",
  },
  "bangles": {
    title: "Bangles & Kadas",
    subtitle: "Hand-chased Nakashi Cuffs & Regal Valayal",
    products: ["Bangles"],
    image: "/images/set 3/003.jpg",
  },
  "earrings": {
    title: "Earrings & Jhumkas",
    subtitle: "Three-tier Chandbalis, Studs & Temple Bell Jhumkas",
    products: ["Earrings"],
    image: "/images/set 2/RJ_006.jpg",
  },
  "panchalogam-jewellery": {
    title: "Panchalogam Jewellery",
    subtitle: "Sacred Five-Metal Alchemy with 24K Gold Inlay",
    products: ["Panchalogam Jewellery"],
    image: "/images/set 1/RJ_1.jpeg",
  },
  gold: {
    title: "Gold Collection",
    subtitle: "Timeless 22K Purity & Antique Craftsmanship",
    products: ["Gold Jewellery", "Necklaces", "Bangles", "Earrings"],
    image: "/images/set 2/RJ_004.jpg",
  },
};

const getProductImagePath = (product: string): string => {
  const map: Record<string, string> = {
    "Bridal Jewellery": "/images/set 2/RJ_001.jpg",
    "Temple Jewellery": "/images/Latest_Temple/temple-jewellery-1.jpg",
    "Gold Jewellery": "/images/set 2/RJ_004.jpg",
    "Diamond Jewellery": "/images/set 3/006.jpg",
    "Necklaces": "/images/set 1/RJ_15.png",
    "Bangles": "/images/set 3/003.jpg",
    "Earrings": "/images/set 2/RJ_006.jpg",
    "Panchalogam Jewellery": "/images/set 1/RJ_1.jpeg",
    "Rings": "/images/set 3/007.jpg",
    "Studs": "/images/set 1/RJ_9.png",
    "Chains": "/images/set 2/RJ_005.jpg",
    "Haram": "/images/Latest_Temple/temple-jewellery-4.jpg",
    "Bracelet": "/images/set 3/004.jpg",
  };
  return map[product] || "/images/set 2/RJ_001.jpg";
};

export default function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category: categoryParam } = useParams();

  const state = location.state as CategoryState;
  const categoryKey = (categoryParam || state?.category || "").toLowerCase();
  const categoryConfig = CATEGORY_CONFIG[categoryKey] || CATEGORY_CONFIG["bridal-jewellery"];

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (productName: string) => {
    setLoadedImages((prev) => new Set(prev).add(productName));
  };

  const currentTitle = categoryConfig.title;
  const bannerImage = state?.image || categoryConfig.image;
  const productList = state?.products || categoryConfig.products;

  return (
    <>
      {/* Royal Category Hero Banner */}
      <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-[#240308] flex items-center justify-center">
        <img
          src={bannerImage}
          alt={currentTitle}
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/75 to-[#240308]/90" />
        <div className="absolute inset-0 pattern-jaali-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            Imperial Portfolio
          </div>

          <h1 className="font-cinzel text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            {currentTitle}
          </h1>

          <p className="font-cormorant italic text-lg md:text-xl text-[#DFB76C]">
            {categoryConfig.subtitle}
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        current={currentTitle}
        parents={[{ name: "Royal Gallery", path: "/gallery" }]}
      />

      {/* Category Products Grid */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cinzel text-[#35040D] font-bold mb-3">
              The {currentTitle} Treasury
            </h2>
            <p className="text-sm text-[#5D5350] font-sans">
              Select an heirloom portfolio below to browse exquisite pieces, pricing, and certified purity details.
            </p>
          </div>

          {/* Grid of Product Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productList.map((productName: string, index: number) => {
              const imagePath = getProductImagePath(productName);
              const isLoaded = loadedImages.has(productName);

              return (
                <div
                  key={index}
                  onClick={() =>
                    navigate(`/gallery/${categoryParam || "collections"}/${productName}`, {
                      state: {
                        category: categoryParam,
                        product: productName,
                        parentImage: bannerImage,
                      },
                    })
                  }
                  className="group relative bg-[#FFFDF9] rounded-sm overflow-hidden border border-[#E8DCC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                >
                  {/* Filigree Corner Accents */}
                  <span className="pointer-events-none absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-20" />
                  <span className="pointer-events-none absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-20" />
                  <span className="pointer-events-none absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-20" />
                  <span className="pointer-events-none absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-20" />

                  <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                    <img
                      src={imagePath}
                      alt={productName}
                      className={`w-full h-full object-cover transition duration-700 ease-out group-hover:scale-108 ${
                        !isLoaded ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => handleImageLoad(productName)}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#240308]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute bottom-4 inset-x-4 text-white">
                      <span className="text-[10px] tracking-widest uppercase text-[#DFB76C] font-semibold block mb-0.5">
                        Heirloom Portfolio
                      </span>
                      <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#DFB76C] transition">
                        {productName}
                      </h3>
                      <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-xs text-[#DFB76C] font-cinzel uppercase tracking-wider">
                        <span>View Designs</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DFB76C]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}