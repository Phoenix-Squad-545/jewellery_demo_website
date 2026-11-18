import React from "react";
import Hero from "../components/hero/Hero";
import TrustIndicators from "../components/trust/TrustIndicators";
import CategoriesSection from "../components/categories/CategoriesSection";
import CuratedCollectionsSection from "../components/collections/CuratedCollectionsSection";
import BrandSection from "../components/brand/BrandSection";
import GallerySection from "../components/gallery/GallerySection";
import { Sparkles, Calendar, MapPin, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const handleAppointment = () => {
    const text = `Namaste Radha Gold Jewellers! I would like to book a private bridal jewellery consultation at your Mylapore, Chennai showroom.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  return (
    <>
      {/* 1. Stunning Bridal Jewellery Hero Banner */}
      <Hero />

      {/* 2. Trust Indicators (Quality assurance, secure payments, easy returns) */}
      <TrustIndicators />

      {/* 3. Category Cards with Traditional Indian Jewellery Photography */}
      <CategoriesSection />

      {/* 4. Curated Collections: Bridal Collections, Festival Collections, Best Sellers with Direct Reservation & Virtual Try-On */}
      <CuratedCollectionsSection />

      {/* 5. Heritage and Craftsmanship Story Section */}
      <BrandSection />

      {/* 6. Visual Treasury Gallery Section */}
      <GallerySection />

      {/* 7. Bespoke Bridal Salon Consultation Strip */}
      <section className="py-20 bg-[#2B040B] text-white border-t border-[#C5A059]/40 relative overflow-hidden pattern-jaali-dark">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Bridal Consultations
          </div>

          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Design Your Bespoke Wedding Regalia
          </h2>

          <p className="text-sm md:text-base text-[#FAF7F2]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Meet our master sthapatis and gemologists at our <strong>Mylapore, Chennai showroom</strong> or book a dedicated virtual video preview session. We customize pure 22K gold temple harams, antique kadas, and bridal choker suites tailored to your wedding trousseau.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleAppointment}
              className="px-8 py-3.5 bg-gradient-to-r from-[#DFB76C] via-[#C5A059] to-[#A98239] text-[#240308] font-cinzel text-xs uppercase tracking-[0.25em] font-bold rounded-sm shadow-xl hover:shadow-[0_0_25px_rgba(223,183,108,0.5)] transition-all cursor-pointer flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-[#240308]" />
              Book Private Consultation
            </button>

            <a
              href="tel:+919444000535"
              className="px-7 py-3.5 bg-[#35040D] hover:bg-[#4A0E17] text-[#FAF7F2] font-cinzel text-xs uppercase tracking-[0.2em] font-semibold rounded-sm border border-[#C5A059] transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#DFB76C]" />
              Call Mylapore: 044 42102844
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#DFB76C]/90 font-cinzel tracking-wider uppercase border-t border-[#C5A059]/20">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#DFB76C]" /> 100% BIS Hallmarked Purity
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#DFB76C]" /> Walk-ins Welcome (Mon-Sat)
            </span>
          </div>
        </div>
      </section>
    </>
  );
}