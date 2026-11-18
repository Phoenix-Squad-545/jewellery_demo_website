import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  label: string;
  tagline?: string;
  image: string;
  slug: string;
  itemCount?: number;
  products?: string[];
}

export default function CategoryCard({
  label,
  tagline,
  image,
  slug,
  itemCount,
  products,
}: CategoryCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (products && products.length > 0) {
      navigate(`/gallery/${slug}/${products[0]}`, {
        state: {
          category: slug,
          product: products[0],
          parentImage: image,
        },
      });
    } else {
      navigate(`/gallery/${slug}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-[#FFFDF9] rounded-sm overflow-hidden border border-[#E8DCC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
    >
      {/* Corner Filigree Borders on hover */}
      <span className="pointer-events-none absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-20" />
      <span className="pointer-events-none absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-20" />
      <span className="pointer-events-none absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-20" />
      <span className="pointer-events-none absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-20" />

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF7F2]">
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Elegant Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#250308]/90 via-[#250308]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top Count Badge */}
        {itemCount && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-sans font-semibold tracking-wider text-[#DFB76C] bg-[#35040D]/90 px-2.5 py-1 rounded-sm border border-[#C5A059]/40 backdrop-blur-sm">
              {itemCount} Designs
            </span>
          </div>
        )}

        {/* Floating Content at Bottom */}
        <div className="absolute bottom-4 inset-x-4 z-10 text-white">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#DFB76C] font-semibold mb-1">
            <Sparkles className="w-3 h-3 text-[#DFB76C]" />
            Heritage Treasury
          </div>

          <h3 className="font-cinzel text-lg md:text-xl font-bold text-white group-hover:text-[#DFB76C] transition-colors">
            {label}
          </h3>

          {tagline && (
            <p className="text-xs text-white/80 font-sans mt-1 line-clamp-1">
              {tagline}
            </p>
          )}

          {/* Hover Reveal Action */}
          <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#DFB76C] font-cinzel tracking-wider uppercase opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 text-[#DFB76C]" />
          </div>
        </div>
      </div>
    </div>
  );
}