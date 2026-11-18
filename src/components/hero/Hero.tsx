import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  // Curated hero showcases strictly from set 1, set 2, set 3, and Latest_Temple
  const heroSlides = [
    {
      image: "/images/set 2/RJ_001.jpg",
      badge: "The Royal Bridal Collection",
      title: "Imperial Bridal Regalia",
      subtitle: "22K Antique Polki & Temple Masterpieces",
      tagline: "HANDCRAFTED FOR THE NOBLE INDIAN BRIDE",
      categoryTarget: "bridal-jewellery",
      productTarget: "Bridal Jewellery",
    },
    {
      image: "/images/Latest_Temple/temple-jewellery-1.jpg",
      badge: "Pioneers of Temple Art Since 1967",
      title: "Sacred Temple Jewellery",
      subtitle: "Original Chola & Vijayanagara Heritage",
      tagline: "DIVINELY HAND-CARVED IN PURE GOLD & KEMP",
      categoryTarget: "temple-jewellery",
      productTarget: "Temple Jewellery",
    },
    {
      image: "/images/set 1/RJ_15.png",
      badge: "Aristocratic Rajputana & Nizam Heirlooms",
      title: "Antique Jadau & Kundan",
      subtitle: "24K Pure Gold Foil Syndicate Polki",
      tagline: "TIMELESS ELEGANCE PASSED THROUGH GENERATIONS",
      categoryTarget: "necklaces",
      productTarget: "Necklaces",
    },
    {
      image: "/images/set 3/001.jpg",
      badge: "Certified Precious Gemstones",
      title: "Royal Emerald & Diamond Haar",
      subtitle: "Zambian Emeralds & Brilliant Solitaires",
      tagline: "MAJESTIC ORNAMENTS FOR ROYAL OCCASIONS",
      categoryTarget: "diamond-jewellery",
      productTarget: "Diamond Jewellery",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
      setAnimKey((prev) => prev + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const currentSlide = heroSlides[current];

  const handleConsultation = () => {
    const text = `Namaste Radha Gold Jewellers! I would like to schedule a private bridal jewellery consultation for my upcoming wedding/festival celebrations.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[580px] lg:h-[84vh] max-h-[820px] flex items-center overflow-hidden bg-[#240308] border-b border-[#C5A059]/40"
    >
      {/* Background Slides with Crossfade */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover object-center transition-transform duration-[12000ms] scale-105"
            />
          </div>
        ))}

        {/* Deep Royal Maroon & Gold Scrim Overlay for Perfect Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#240308]/95 via-[#35040D]/80 to-[#240308]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F0206] via-transparent to-[#240308]/70" />

        {/* Radial Gold Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(197,160,89,0.18)_0%,transparent_70%)]" />

        {/* Traditional Jaali subtle pattern */}
        <div className="absolute inset-0 pattern-jaali-dark opacity-40 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div key={animKey} className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Top Royal Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#35040D]/90 border border-[#C5A059] shadow-lg animate-fadeSlideUp">
            <Crown className="w-4 h-4 text-[#DFB76C]" />
            <span className="font-cinzel text-xs font-semibold text-[#DFB76C] tracking-[0.25em] uppercase">
              {currentSlide.badge}
            </span>
          </div>

          {/* Heritage Headline */}
          <div className="space-y-2 animate-fadeSlideUp">
            <p className="font-cormorant italic text-xl md:text-2xl text-[#DFB76C] font-semibold tracking-wide">
              Mylapore, Chennai · Since 1967
            </p>
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-[1.12]">
              {currentSlide.title}
              <span className="block font-cormorant italic font-normal text-3xl sm:text-4xl lg:text-5xl text-[#F3E5C2] mt-2">
                {currentSlide.subtitle}
              </span>
            </h1>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-xs sm:text-sm tracking-[0.18em] text-[#FAF7F2]/80 uppercase font-sans max-w-xl animate-fadeSlideUp">
            {currentSlide.tagline}
          </p>

          {/* Royal CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 animate-fadeSlideUp">
            <button
              onClick={() =>
                navigate(`/gallery/${currentSlide.categoryTarget}/${currentSlide.productTarget}`)
              }
              className="px-8 py-3.5 bg-gradient-to-r from-[#DFB76C] via-[#C5A059] to-[#A98239] text-[#240308] font-cinzel text-xs uppercase tracking-[0.25em] font-bold rounded-sm shadow-xl hover:shadow-[0_0_25px_rgba(223,183,108,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#240308]" />
              Explore Bridal Collection
            </button>

            <button
              onClick={handleConsultation}
              className="px-6 py-3.5 bg-[#35040D]/80 hover:bg-[#35040D] text-[#FAF7F2] font-cinzel text-xs uppercase tracking-[0.2em] font-semibold rounded-sm border border-[#C5A059] hover:border-[#DFB76C] transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              Book Consultation
            </button>
          </div>

          {/* Hallmark Trust Micro-features */}
          <div className="pt-6 border-t border-[#C5A059]/25 flex items-center gap-6 text-[11px] text-[#DFB76C]/90 font-cinzel tracking-wider uppercase">
            <span>✦ 100% BIS 916 Pure Gold</span>
            <span>✦ Certified Kemp & Polki</span>
            <span className="hidden sm:inline">✦ Insured Worldwide Transit</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute right-6 bottom-8 z-20 flex items-center gap-3">
        <button
          onClick={() => {
            setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
            setAnimKey((prev) => prev + 1);
          }}
          className="w-10 h-10 rounded-full bg-[#35040D]/90 border border-[#C5A059]/50 text-[#DFB76C] hover:bg-[#580D1A] flex items-center justify-center transition cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter */}
        <span className="font-mono text-xs text-[#DFB76C] font-semibold px-1">
          0{current + 1} / 0{heroSlides.length}
        </span>

        <button
          onClick={() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
            setAnimKey((prev) => prev + 1);
          }}
          className="w-10 h-10 rounded-full bg-[#35040D]/90 border border-[#C5A059]/50 text-[#DFB76C] hover:bg-[#580D1A] flex items-center justify-center transition cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Dots Bar */}
      <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setAnimKey((prev) => prev + 1);
            }}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
              i === current ? "w-8 bg-[#DFB76C]" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}