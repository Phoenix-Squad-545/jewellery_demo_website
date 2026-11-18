import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/logo.jpg";
import { royalCategoriesNav } from "../../data/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#240308] text-[#FAF7F2] border-t-2 border-[#C5A059] relative overflow-hidden pattern-jaali-dark">
      {/* Decorative Gold Filigree Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#A98239] via-[#DFB76C] to-[#A98239]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#C5A059]/20">
          {/* Col 1 & 2: Brand Heritage & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#DFB76C] to-[#A98239] shadow-lg">
                <img
                  src={Logo}
                  alt="Radha Gold Jewellers Emblem"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>

              <div>
                <h3 className="font-cinzel text-lg font-bold tracking-[0.2em] text-[#DFB76C]">
                  Radha Gold Jewellers
                </h3>
                <span className="font-cormorant italic text-xs tracking-widest text-[#FAF7F2]/70 block">
                  Original Temple Artistry Since 1967
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-sans max-w-sm">
              Founded in 1967 in <strong>Mylapore, Chennai</strong> by <strong>Mr. B. S. Balavenkataraman</strong>, pioneer of Original Temple Jewellery. For over 58 years, we have preserved sacred Chola Nakashi goldsmithing, royal bridal suites, and pure 22K hallmarked heirlooms.
            </p>

            {/* Newsletter for Royal Previews */}
            <div className="pt-2">
              <span className="font-cinzel text-xs text-[#DFB76C] font-semibold tracking-wider block mb-2">
                Join the Private Royal Salon
              </span>
              {subscribed ? (
                <div className="p-2.5 bg-[#35040D] border border-[#C5A059] rounded-sm text-xs text-[#DFB76C] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DFB76C]" />
                  <span>Thank you. You will receive private bridal preview invitations.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email for private catalogs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-[#1A0205] border border-[#C5A059]/40 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#DFB76C]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#35040D] text-[#DFB76C] border border-[#C5A059] hover:bg-[#580D1A] transition rounded-sm text-xs cursor-pointer flex items-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Royal Collections */}
          <div>
            <h4 className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#DFB76C] font-bold pb-3 border-b border-[#C5A059]/30 mb-4">
              Royal Treasuries
            </h4>

            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80 font-sans">
              {royalCategoriesNav.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/gallery/${cat.slug}/${cat.product}`}
                    className="hover:text-[#DFB76C] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#A98239]">✦</span>
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Services */}
          <div>
            <h4 className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#DFB76C] font-bold pb-3 border-b border-[#C5A059]/30 mb-4">
              Patron Services
            </h4>

            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80 font-sans">
              <li>
                <Link to="/" className="hover:text-[#DFB76C] transition-colors">
                  Home Treasury
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFB76C] transition-colors">
                  Explore Full Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFB76C] transition-colors">
                  Heritage & 58-Year Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DFB76C] transition-colors">
                  Mylapore Store Directions
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919444475473?text=Namaste!%20I%20would%20like%20to%20book%20a%20bridal%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFB76C] transition-colors flex items-center gap-1"
                >
                  <FaWhatsapp className="text-[#25D366] text-xs" />
                  <span>Bridal Appointments</span>
                </a>
              </li>
              <li>
                <span className="text-white/50">Custom Nakashi Orders</span>
              </li>
              <li>
                <span className="text-white/50">Gold Melt & Exchange Policy</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Showroom & Contact */}
          <div>
            <h4 className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#DFB76C] font-bold pb-3 border-b border-[#C5A059]/30 mb-4">
              Mylapore Flagship
            </h4>

            <div className="space-y-3 text-xs text-[#FAF7F2]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  72, North Mada Street, Mylapore, Chennai - 600004, Tamil Nadu, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <div>
                  <p>044 42102844</p>
                  <p>+91 94440 00535</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <a
                  href="mailto:radhajewellers@yahoo.com"
                  className="hover:text-[#DFB76C] transition"
                >
                  radhajewellers@yahoo.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#DFB76C]">Mon - Sat: 11:00 AM - 8:30 PM</p>
                  <p className="text-[11px] text-white/50">Sundays Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Social Links Bar */}
        <div className="py-8 border-b border-[#C5A059]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#DFB76C] font-cinzel tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> 100% BIS 916 Hallmarked
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> Original Temple Heritage
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#DFB76C]" /> Certified Gems & Polki
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919444475473"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#1A0205] border border-[#C5A059]/40 flex items-center justify-center text-[#DFB76C] hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1EdZnwVkxe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#1A0205] border border-[#C5A059]/40 flex items-center justify-center text-[#DFB76C] hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/radhagoldjewellers2874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#1A0205] border border-[#C5A059]/40 flex items-center justify-center text-[#DFB76C] hover:bg-[#E4405F] hover:text-white hover:border-transparent transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/60 font-sans gap-3">
          <p>© {new Date().getFullYear()} Radha Gold Jewellers. All Royal Rights Reserved.</p>
          <p className="flex items-center gap-3 text-[11px]">
            <span>Mylapore, Chennai</span>
            <span>·</span>
            <span>BIS Certificate Regd.</span>
            <span>·</span>
            <span>Handcrafted in India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}