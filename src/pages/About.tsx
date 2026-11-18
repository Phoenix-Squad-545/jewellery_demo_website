import React from "react";
import Breadcrumb from "../components/common/BreadCrumbs";
import BrandSection from "../components/brand/BrandSection";
import TrustIndicators from "../components/trust/TrustIndicators";
import { Sparkles, MapPin, Phone, Mail, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Royal Hero Banner */}
      <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-[#240308] flex items-center justify-center">
        <img
          src="/images/set 2/RJ_001.jpg"
          alt="Radha Gold Jewellers Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/75 to-[#240308]/90" />
        <div className="absolute inset-0 pattern-jaali-dark opacity-35 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            58+ Years of Unbroken Tradition
          </div>

          <h1 className="font-cinzel text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Our Heritage & Craftsmanship Story
          </h1>

          <p className="font-cormorant italic text-lg md:text-xl text-[#DFB76C]">
            Pioneering Original Temple Jewellery in Mylapore, Chennai Since 1967
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb current="Heritage & Craftsmanship" />

      {/* Brand & Craftsmanship Detailed Section */}
      <BrandSection showFullContent />

      {/* Trust & Purity Pillars */}
      <TrustIndicators />

      {/* Store Location Map & Showroom Section */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#35040D]/5 border border-[#C5A059]/30 rounded-sm text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Sacred Mylapore Landmark
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold">
              Visit Our Flagship Boutique
            </h2>
            <div className="w-12 h-px bg-[#C5A059] mx-auto my-3" />
            <p className="text-sm text-[#5D5350] font-sans">
              Located right in the spiritual hub of Mylapore near the historic Sri Kapaleeshwarar Temple.
            </p>
          </div>

          {/* Google Map Embed with Royal Border */}
          <div className="w-full h-[450px] overflow-hidden rounded-sm border-2 border-[#C5A059] shadow-2xl relative">
            <iframe
              title="Radha Gold Jewellers Showroom Location"
              src="https://www.google.com/maps?q=72,+North+Mada+Street,+Mylapore,+Chennai+-+600004&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          {/* Contact Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                TELEPHONE
              </h3>
              <p className="font-mono text-sm text-[#580D1A] font-semibold">
                044 42102844
              </p>
              <p className="font-mono text-xs text-[#736360] mt-0.5">
                +91 94440 00535
              </p>
            </div>

            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                LOCATION
              </h3>
              <p className="text-xs text-[#3D3330] leading-relaxed font-sans">
                72, North Mada Street, Mylapore,
                <br />
                Chennai - 600004, Tamil Nadu
              </p>
            </div>

            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                ELECTRONIC MAIL
              </h3>
              <p className="text-xs text-[#580D1A] font-sans font-semibold">
                radhajewellers@yahoo.com
              </p>
              <p className="text-[11px] text-[#736360] mt-1 font-sans">
                Inquiries answered within 4 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}