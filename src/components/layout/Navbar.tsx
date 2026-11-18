import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks, royalCategoriesNav } from "../../data/navigation";
import Drawer from "./Drawer";
import logo from "../../assets/logo.jpg";
import { useCart } from "../../context/CartContext";
import { ShoppingBag, Search, Phone, ChevronDown, Sparkles, X, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PRODUCTS, Product } from "../../data/products";
import { useAppDispatchHook, useAppSelectorHook } from "../../redux/store";
import { setWishlistOpen } from "../../redux/slices/wishlistSlice";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [collectionsDropdown, setCollectionsDropdown] = useState<boolean>(false);

  const { cartCount, setIsCartOpen, setQuickViewProduct } = useCart();
  const dispatch = useAppDispatchHook();
  const wishlistItems = useAppSelectorHook((state) => state.wishlist.items);
  const wishlistCount = wishlistItems.length;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const matches = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.purity.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setSearchResults(matches);
  }, [searchQuery]);

  const handleSearchResultClick = (product: Product) => {
    setSearchOpen(false);
    setSearchQuery("");
    setQuickViewProduct(product);
  };

  return (
    <>
      {/* 1. TOP ROYAL ANNOUNCEMENT STRIP */}
      <div className="bg-[#240308] text-[#DFB76C] text-[11px] font-cinzel py-1.5 px-4 text-center tracking-widest border-b border-[#C5A059]/30 flex items-center justify-between z-50 relative">
        <div className="hidden sm:flex items-center gap-2 text-white/70 text-[10px] font-sans">
          <span>Mylapore Showroom: 11:00 AM - 8:30 PM</span>
        </div>

        <div className="mx-auto flex items-center gap-2 truncate">
          <Sparkles className="w-3 h-3 text-[#DFB76C] shrink-0" />
          <span className="truncate">
            100% BIS 916 Hallmarked Pure Gold · Handcrafted Heritage Since 1967 · Worldwide Insured Delivery
          </span>
          <Sparkles className="w-3 h-3 text-[#DFB76C] shrink-0" />
        </div>

        <div className="hidden md:flex items-center gap-4 text-[10px] font-sans text-white/80 shrink-0">
          <a
            href="https://wa.me/919444475473"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#DFB76C] transition"
          >
            <FaWhatsapp className="text-[#25D366]" />
            <span>+91 94444 75473</span>
          </a>
        </div>
      </div>

      {/* 2. MAIN ROYAL NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#35040D] shadow-2xl border-b border-[#C5A059]/40"
            : "bg-[#35040D]/95 backdrop-blur-md border-b border-[#C5A059]/25"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* BRAND ZONE (Logo + Brand Title) */}
            <Link to="/" className="flex items-center gap-3.5 group shrink-0">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#DFB76C] via-[#C5A059] to-[#DFB76C] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logo}
                  alt="Radha Gold Jewellers Emblem"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-xl font-bold tracking-[0.2em] text-[#DFB76C] group-hover:text-white transition-colors uppercase leading-none">
                  Radha Gold
                </span>
                <span className="font-cormorant italic text-xs tracking-[0.25em] text-[#FAF7F2]/80 uppercase mt-1">
                  Jewellers · Since 1967
                </span>
              </div>
            </Link>

            {/* DESKTOP MAIN NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link
                to="/"
                className={`font-cinzel text-xs tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  location.pathname === "/"
                    ? "text-[#DFB76C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DFB76C]"
                    : "text-[#FAF7F2]/90 hover:text-[#DFB76C]"
                }`}
              >
                Home
              </Link>

              {/* Collections with Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCollectionsDropdown(true)}
                onMouseLeave={() => setCollectionsDropdown(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 font-cinzel text-xs tracking-[0.2em] uppercase text-[#FAF7F2]/90 hover:text-[#DFB76C] py-1 cursor-pointer"
                >
                  <span>Collections</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {/* Dropdown Menu */}
                {collectionsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50">
                    <div className="bg-[#240308] border border-[#C5A059] shadow-2xl p-2 rounded-xs divide-y divide-[#35040D]">
                      {royalCategoriesNav.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/gallery/${cat.slug}/${cat.product}`}
                          onClick={() => setCollectionsDropdown(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-cinzel tracking-wider text-[#FAF7F2]/85 hover:text-[#DFB76C] hover:bg-[#35040D] transition"
                        >
                          <span>{cat.label}</span>
                          <span className="text-[10px] text-[#A98239] font-sans">
                            {cat.count}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className={`font-cinzel text-xs tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  location.pathname.startsWith("/gallery")
                    ? "text-[#DFB76C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DFB76C]"
                    : "text-[#FAF7F2]/90 hover:text-[#DFB76C]"
                }`}
              >
                Treasury Gallery
              </Link>

              <Link
                to="/about"
                className={`font-cinzel text-xs tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  location.pathname === "/about"
                    ? "text-[#DFB76C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DFB76C]"
                    : "text-[#FAF7F2]/90 hover:text-[#DFB76C]"
                }`}
              >
                Heritage Story
              </Link>

              <Link
                to="/contact"
                className={`font-cinzel text-xs tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  location.pathname === "/contact"
                    ? "text-[#DFB76C] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#DFB76C]"
                    : "text-[#FAF7F2]/90 hover:text-[#DFB76C]"
                }`}
              >
                Mylapore Boutique
              </Link>
            </nav>

            {/* RIGHT UTILITY ICONS & CART ACTION */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              {/* Search Modal Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-[#FAF7F2]/80 hover:text-[#DFB76C] transition rounded-full hover:bg-white/5 cursor-pointer"
                title="Search Collections"
                aria-label="Search Collections"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Trigger with Badge */}
              <button
                type="button"
                onClick={() => dispatch(setWishlistOpen(true))}
                className="relative p-2 text-[#FAF7F2]/80 hover:text-[#DFB76C] transition rounded-full hover:bg-white/5 cursor-pointer"
                title="View Saved Wishlist"
                aria-label="View Saved Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlistCount > 0 ? "text-[#DFB76C] fill-[#DFB76C]" : ""}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#DFB76C] text-[#240308] font-mono text-[10px] font-bold flex items-center justify-center border border-[#240308]">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Consultation */}
              <a
                href="https://wa.me/919444475473?text=Namaste%20Radha%20Gold%20Jewellers!%20I%20would%20like%20to%20inquire%20about%20your%20heritage%20jewellery%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1F4E34] text-white text-xs font-sans hover:bg-[#163825] transition shadow-sm"
                title="WhatsApp Consultation"
              >
                <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-medium">Inquire</span>
              </a>

              {/* Royal Bag / Cart Trigger with Badge */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-sm bg-[#240308] border border-[#C5A059] text-[#DFB76C] hover:bg-[#580D1A] transition shadow-md flex items-center gap-2 cursor-pointer"
                aria-label="Open Royal Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden md:inline font-cinzel text-xs uppercase tracking-wider font-semibold">
                  Bag
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#DFB76C] text-[#240308] font-mono text-[11px] font-bold flex items-center justify-center shadow-lg border border-[#240308]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setOpen(true)}
                aria-label="Open Menu"
                className="lg:hidden p-2 text-[#DFB76C] hover:text-white transition cursor-pointer"
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-current" />
                  <span className="block w-6 h-0.5 bg-current" />
                  <span className="block w-4 h-0.5 bg-current ml-auto" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3. SECONDARY ROYAL CATEGORY NAVIGATION STRIP */}
        <div className="bg-[#2B040B] border-t border-[#C5A059]/25 py-2 px-4 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center gap-4 sm:gap-8 whitespace-nowrap min-w-max">
            {royalCategoriesNav.map((item) => (
              <Link
                key={item.slug}
                to={`/gallery/${item.slug}/${item.product}`}
                className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#FAF7F2]/80 hover:text-[#DFB76C] transition py-1 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFB76C]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl bg-[#FFFDF9] rounded-sm shadow-2xl border border-[#C5A059] overflow-hidden">
            <div className="p-4 bg-[#35040D] flex items-center gap-3 border-b border-[#C5A059]/30">
              <Search className="w-5 h-5 text-[#DFB76C]" />
              <input
                type="text"
                autoFocus
                placeholder="Search Gold Jewellery, Temple, Bridal, Bangles, Diamonds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-white/50 text-sm font-sans focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/70 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results (NO PRICE TAG) */}
            <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#ECE3D2]">
              {searchQuery && searchResults.length === 0 ? (
                <div className="py-8 text-center text-sm text-[#736360]">
                  No jewels found matching "{searchQuery}". Try searching for "Temple", "Bridal", "Bangles", or "Gold".
                </div>
              ) : (
                searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSearchResultClick(product)}
                    className="py-3 flex items-center gap-4 hover:bg-[#FAF7F2] p-2 rounded cursor-pointer transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded border border-[#DFD2BC]"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-[#A98239] font-semibold block">
                        {product.category} · {product.purity}
                      </span>
                      <h4 className="font-cinzel text-xs font-bold text-[#35040D] truncate">
                        {product.name}
                      </h4>
                      <span className="text-[11px] text-[#580D1A] font-medium block">
                        {product.weight} · 100% BIS Hallmarked
                      </span>
                    </div>
                  </div>
                ))
              )}

              {!searchQuery && (
                <div className="py-4 text-xs text-[#736360]">
                  <p className="font-semibold text-[#35040D] mb-2 uppercase tracking-wider font-cinzel">
                    Popular Collections:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Temple Jewellery", "Bridal Haar", "Kadas", "Jadau Choker", "Polki Jhumka", "Gold Haram"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-2.5 py-1 bg-[#FAF7F2] border border-[#DFD2BC] rounded hover:border-[#C5A059] text-[#35040D] cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}