import React, { useState } from "react";
import { Eye, X } from "lucide-react";

interface BrowseItemProps {
  image: string;
  index?: number;
}

export default function BrowseItem({ image, index = 0 }: BrowseItemProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="relative group overflow-hidden cursor-pointer rounded-xs border border-[#E8DCC8] hover:border-[#C5A059] transition-all duration-300 aspect-square bg-[#FAF7F2]"
      >
        <img
          src={image}
          alt={`Heritage Archive Piece ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#250308]/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          <span className="w-9 h-9 rounded-full bg-[#35040D] border border-[#C5A059] flex items-center justify-center text-[#DFB76C] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4" />
          </span>
          <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#DFB76C] font-semibold">
            View Piece
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] bg-[#1F0206] border-2 border-[#C5A059] p-2 rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-[#35040D] text-[#DFB76C] border border-[#C5A059] flex items-center justify-center hover:bg-[#580D1A] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={image}
              alt="Radha Gold Jewellers Royal Creation"
              className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}