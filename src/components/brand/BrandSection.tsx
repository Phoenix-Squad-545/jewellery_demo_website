import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Award, ShieldCheck, ChevronRight, ChevronLeft } from "lucide-react";

interface BrandSectionProps {
  showFullContent?: boolean;
}

export default function BrandSection({ showFullContent = false }: BrandSectionProps) {
  const navigate = useNavigate();

  // Curated showcase images strictly from set 1, set 2, set 3, and Latest_Temple
  const heritageImages = [
    {
      src: "/images/Latest_Temple/temple-jewellery-1.jpg",
      caption: "Original Temple Jewellery Masterpiece",
      sub: "Hand-carved Nakashi repoussé depicting sacred deities",
    },
    {
      src: "/images/set 1/RJ_15.png",
      caption: "Imperial Nizam Jadau Choker",
      sub: "24K pure gold foil insetting with syndicate uncut polki",
    },
    {
      src: "/images/set 2/RJ_001.jpg",
      caption: "Royal Rajgharana Bridal Haar",
      sub: "Heirloom craftsmanship passed down across generations",
    },
    {
      src: "/images/set 1/RJ_1.jpeg",
      caption: "Sacred Panchalogam Kemp Malai",
      sub: "Auspicious 5-metal alchemy crafted according to Agama Shastras",
    },
    {
      src: "/images/set 3/003.jpg",
      caption: "Antique Gajraj Nakashi Kada Pair",
      sub: "Hand-embossed royal motifs in 22K hallmarked gold",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heritageImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heritageImages.length]);

  return (
    <section id="heritage" className="py-24 bg-[#FFFDF9] border-t border-[#E8DCC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column: Royal Carousel Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Outer Royal Gold Ornamental Frame */}
            <div className="relative p-3 bg-gradient-to-br from-[#DFB76C] via-[#A98239] to-[#35040D] rounded-sm shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF7F2] rounded-xs">
                {heritageImages.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180206]/85 via-[#180206]/20 to-transparent" />
                    <div className="absolute bottom-6 inset-x-6 text-white">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFB76C] font-semibold block mb-1">
                        Heirloom Archive
                      </span>
                      <h4 className="font-cinzel text-lg font-bold text-white mb-1">
                        {item.caption}
                      </h4>
                      <p className="text-xs text-white/80 font-sans">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Slider Controls */}
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev - 1 + heritageImages.length) % heritageImages.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-[#35040D] flex items-center justify-center transition border border-[#C5A059]/40 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % heritageImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-[#35040D] flex items-center justify-center transition border border-[#C5A059]/40 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {heritageImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === currentIndex ? "w-6 bg-[#DFB76C]" : "w-1.5 bg-white/50"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Heritage Badge Seal */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 bg-[#35040D] text-[#DFB76C] p-4 rounded-sm border-2 border-[#C5A059] shadow-xl flex-col items-center text-center">
              <Award className="w-7 h-7 text-[#DFB76C] mb-1" />
              <span className="font-cinzel text-xs font-bold tracking-widest uppercase">
                Established 1967
              </span>
              <span className="text-[10px] text-white/70 font-sans">Mylapore · Chennai</span>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#35040D]/5 border border-[#C5A059]/30 rounded-sm text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Generations of Royal Artistry
            </div>

            <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold leading-tight">
              Pioneers of Original Temple Jewellery in India
            </h2>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C5A059]" />
              <span className="font-cormorant italic text-lg text-[#580D1A] font-semibold">
                Founded in 1967 by Sri. B. S. Balavenkataraman
              </span>
            </div>

            <p className="text-sm text-[#3D3330] leading-relaxed font-sans">
              For over five decades, <strong>Radha Gold Jewellers</strong> has remained the revered sanctuary of authentic South Indian temple adornments. Established in the spiritual heart of <strong>Mylapore, Chennai</strong>, our founder <strong>Mr. B. S. Balavenkataraman</strong> spearheaded the revival of classical Chola and Vijayanagara goldsmithing traditions.
            </p>

            <p className="text-sm text-[#3D3330] leading-relaxed font-sans">
              Unlike cast or mass-machined jewellery, every creation in our boutique begins with pure 22K gold bullion, hand-beaten, chased with traditional thattal chisels, and inset with unheated natural kemp rubies and syndicate polki diamonds using ancient 24K gold foil techniques.
            </p>

            {showFullContent && (
              <>
                <div className="p-4 bg-[#FAF7F2] border-l-2 border-[#C5A059] rounded-r space-y-2">
                  <h4 className="font-cinzel text-xs font-bold text-[#35040D] tracking-wider uppercase">
                    The Sacred Panchalogam & Temple Heritage
                  </h4>
                  <p className="text-xs text-[#5D5350] leading-relaxed">
                    We specialize in genuine <strong>Panchalogam Kemp Jewellery</strong>—the sacred five-metal alloy prescribed in the Agamas for spiritual resonance and timeless luster—as well as aristocratic <strong>Jadau Kundan Jewellery</strong>, <strong>Imitation Dance Ornaments</strong> for classical Bharatanatyam artists, and bespoke bridal orders.
                  </p>
                </div>

                <p className="text-sm text-[#3D3330] leading-relaxed font-sans">
                  As one of Chennai's earliest <strong>BIS Hallmark Certified Jewellery Showrooms</strong>, we uphold the strictest purity protocols, providing complete authenticity certificates and transparent melt guarantees to every patron.
                </p>
              </>
            )}

            {/* Heritage Stats Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ECE3D2] text-center">
              <div className="p-3 bg-[#FAF7F2] rounded border border-[#DFD2BC]/60">
                <span className="font-mono text-2xl md:text-3xl font-bold text-[#580D1A] block">
                  58+
                </span>
                <span className="font-cinzel text-[10px] tracking-wider text-[#6B5E5B] uppercase block mt-0.5">
                  Years of Legacy
                </span>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded border border-[#DFD2BC]/60">
                <span className="font-mono text-2xl md:text-3xl font-bold text-[#580D1A] block">
                  100%
                </span>
                <span className="font-cinzel text-[10px] tracking-wider text-[#6B5E5B] uppercase block mt-0.5">
                  BIS Hallmarked
                </span>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded border border-[#DFD2BC]/60">
                <span className="font-mono text-2xl md:text-3xl font-bold text-[#580D1A] block">
                  1967
                </span>
                <span className="font-cinzel text-[10px] tracking-wider text-[#6B5E5B] uppercase block mt-0.5">
                  Mylapore Flagship
                </span>
              </div>
            </div>

            {/* Read More Button (only on Home) */}
            {!showFullContent && (
              <div className="pt-2">
                <button
                  onClick={() => navigate("/about")}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#35040D] hover:bg-[#580D1A] text-[#DFB76C] font-cinzel text-xs tracking-widest uppercase font-semibold border border-[#C5A059] transition-all shadow-md cursor-pointer"
                >
                  Discover Our Craftsmanship Story
                  <ChevronRight className="w-4 h-4 text-[#DFB76C]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}