import React from "react";
import { Link } from "react-router-dom";
import { royalCategoriesNav } from "../../data/navigation";
import logo from "../../assets/logo.jpg";
import { X, Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface DrawerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[330px] sm:w-[380px] bg-[#240308] text-[#FAF7F2] z-50 shadow-2xl border-l border-[#C5A059]/40 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#C5A059]/30 flex items-center justify-between bg-[#35040D]">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Radha Gold Jewellers"
              className="w-10 h-10 rounded-full border border-[#C5A059]"
            />
            <div>
              <h3 className="font-cinzel text-sm font-bold tracking-widest text-[#DFB76C]">
                Radha Gold
              </h3>
              <p className="font-cormorant italic text-xs text-[#FAF7F2]/70">
                Jewellers · Since 1967
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#DFB76C] cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Links */}
          <div className="space-y-3 pb-6 border-b border-[#C5A059]/20 font-cinzel text-sm tracking-wider uppercase">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block hover:text-[#DFB76C] transition py-1"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="block hover:text-[#DFB76C] transition py-1"
            >
              Treasury Gallery
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block hover:text-[#DFB76C] transition py-1"
            >
              Heritage & Craftsmanship
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block hover:text-[#DFB76C] transition py-1"
            >
              Mylapore Boutique & Map
            </Link>
          </div>

          {/* Royal Categories Section */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#DFB76C] font-cinzel uppercase tracking-[0.2em] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Royal Collections</span>
            </div>

            <div className="space-y-2">
              {royalCategoriesNav.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/gallery/${cat.slug}/${cat.product}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between p-2 rounded-sm bg-[#35040D]/70 hover:bg-[#35040D] border border-[#C5A059]/20 hover:border-[#DFB76C] transition text-xs font-cinzel text-white"
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-[#DFB76C] font-sans">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Boutique Visit Info */}
          <div className="p-4 bg-[#1F0206] rounded border border-[#C5A059]/25 text-xs space-y-2.5 text-[#FAF7F2]/80 font-sans">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
              <span>72, North Mada Street, Mylapore, Chennai - 600004</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
              <span>044 42102844 / +91 94440 00535</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#DFB76C] shrink-0" />
              <span>Mon - Sat: 11:00 AM - 8:30 PM (Sun Closed)</span>
            </div>
          </div>
        </div>

        {/* Footer WhatsApp Button */}
        <div className="p-4 border-t border-[#C5A059]/30 bg-[#35040D]">
          <a
            href="https://wa.me/919444475473"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-semibold rounded-sm transition flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat with Master Goldsmith</span>
          </a>
        </div>
      </div>
    </>
  );
}