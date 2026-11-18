import React from "react";
import BrowseItem from "./BrowseItem";
import { galleryImages } from "../../data/gallery";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GallerySection() {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-24 bg-[#FFFDF9] border-t border-[#E8DCC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#35040D]/5 border border-[#C5A059]/30 rounded-sm text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Visual Treasury
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold tracking-tight">
            Heritage Gallery Showcase
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <p className="text-sm text-[#5D5350] font-sans">
            Capturing the brilliance of hand-beaten gold, unheated kemp, syndicate polki, and divine temple motifs.
          </p>
        </div>

        {/* 4-column Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.slice(0, 8).map((img, i) => (
            <BrowseItem key={i} image={img} index={i} />
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.25em] uppercase font-bold text-[#35040D] hover:text-[#580D1A] py-3.5 px-8 border border-[#35040D] hover:border-[#580D1A] bg-transparent hover:bg-white transition-all shadow-sm cursor-pointer"
          >
            <span>View All Gallery Archives</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </section>
  );
}