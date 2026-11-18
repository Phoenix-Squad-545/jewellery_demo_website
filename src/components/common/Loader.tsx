import React from "react";
import Logo from "../../assets/logo.jpg";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-[#240308] overflow-hidden">
      {/* Background image strictly from permitted folders */}
      <img
        src="/images/set 2/RJ_001.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-zoomInOut"
      />

      {/* Warm royal maroon & gold overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/80 to-[#240308]" />
      <div className="absolute inset-0 pattern-jaali-dark opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Ornament top */}
        <div className="flex items-center gap-3 opacity-60">
          <div className="h-px w-12 bg-[#DFB76C]" />
          <div className="h-2 w-2 rotate-45 bg-[#DFB76C]" />
          <div className="h-px w-12 bg-[#DFB76C]" />
        </div>

        {/* Logo with spinning gold rings */}
        <div className="relative h-[110px] w-[110px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-[1.5px] border-transparent border-t-[#DFB76C] border-r-[#C5A059] [animation-duration:2.4s]" />

          {/* Inner Ring */}
          <div className="absolute inset-[10px] animate-[spin_1.8s_linear_infinite_reverse] rounded-full border border-transparent border-b-[#DFB76C] border-l-[#C5A059]" />

          {/* Logo */}
          <div className="absolute inset-[20px] flex items-center justify-center rounded-full bg-white shadow-xl p-2 border border-[#C5A059]">
            <img
              src={Logo}
              alt="Radha Gold Jewellers"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-cinzel text-xl md:text-3xl tracking-[0.25em] text-[#DFB76C] uppercase font-bold">
            Radha Gold Jewellers
          </span>
          <span className="font-cormorant italic text-sm md:text-base tracking-widest text-[#FAF7F2]/70">
            Heritage Temple Artistry · Since 1967
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-[1.5px] w-64 overflow-hidden bg-[#C5A059]/20">
            <div className="h-full w-0 bg-gradient-to-r from-[#DFB76C] to-[#A98239] animate-load" />
          </div>
        </div>

        {/* Ornament bottom */}
        <div className="flex items-center gap-3 opacity-60">
          <div className="h-px w-12 bg-[#DFB76C]" />
          <div className="h-2 w-2 rotate-45 bg-[#DFB76C]" />
          <div className="h-px w-12 bg-[#DFB76C]" />
        </div>
      </div>
    </div>
  );
}