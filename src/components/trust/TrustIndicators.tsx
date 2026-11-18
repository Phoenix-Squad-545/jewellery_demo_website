import React from "react";
import { ShieldCheck, Award, Truck, RefreshCw, Sparkles, Gem } from "lucide-react";

export default function TrustIndicators() {
  const pillars = [
    {
      icon: Award,
      title: "100% BIS Hallmarked Purity",
      description:
        "Every piece carries the official BIS 916 Hallmark with unique HUID laser engraving, verifying uncompromising gold purity.",
    },
    {
      icon: Gem,
      title: "Certified Precious Gemstones",
      description:
        "Authentic uncut Syndicate Polki, unheated Burmese Kemp rubies, Colombian emeralds, and IGI certified diamonds.",
    },
    {
      icon: Truck,
      title: "Fully Insured Vault Shipping",
      description:
        "Complimentary pan-India and international insured transit packed in tamper-evident armored security seals.",
    },
    {
      icon: RefreshCw,
      title: "Lifetime Exchange & Buyback",
      description:
        "Transparent live gold rate buyback guarantee and complimentary lifetime cleaning and restoration at our boutique.",
    },
  ];

  return (
    <section className="py-16 bg-[#35040D] text-[#FAF7F2] border-y border-[#C5A059]/30 relative overflow-hidden pattern-jaali-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Subtle royal header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.3em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Unwavering Patron Trust
          </div>
          <h3 className="font-cinzel text-2xl md:text-3xl text-white font-bold">
            The Radha Gold Guarantee
          </h3>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-3" />
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#27030A]/80 border border-[#C5A059]/25 p-6 rounded-sm hover:border-[#DFB76C]/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#35040D] border border-[#C5A059] flex items-center justify-center text-[#DFB76C] mb-4 group-hover:scale-110 group-hover:bg-[#580D1A] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#DFB76C] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hallmark & Certification Trust Strip */}
        <div className="mt-12 pt-8 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center text-xs text-[#DFB76C]/80 font-cinzel tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> BIS 916 Pure Gold
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> IGI Diamond Certified
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> 92.5 Sterling Silver
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> Founded in Mylapore 1967
          </span>
        </div>
      </div>
    </section>
  );
}
