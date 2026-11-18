import React from "react";
import { Product } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Eye, ShoppingBag, Sparkles, Heart, Camera } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useAppDispatchHook, useAppSelectorHook } from "../../redux/store";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";

interface ProductCardProps {
  product: Product;
  onOpenTryOn?: (product: Product) => void;
}

export default function ProductCard({ product, onOpenTryOn }: ProductCardProps) {
  const { addToCart, setQuickViewProduct, setTryOnProduct } = useCart();
  const dispatch = useAppDispatchHook();

  const wishlistItems = useAppSelectorHook((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Namaste Radha Gold Jewellers! I am interested in *${product.name}* (${product.category} · ${product.purity}) from your collection. Please share availability and appointment details.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const handleTryOn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTryOnProduct(product);
    if (onOpenTryOn) {
      onOpenTryOn(product);
    }
  };

  return (
    <div className="group relative bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">
      {/* Corner Filigree Accents on hover */}
      <span className="pointer-events-none absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-10" />
      <span className="pointer-events-none absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-10" />
      <span className="pointer-events-none absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-10" />
      <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all duration-300 z-10" />

      {/* Image Container */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2] cursor-pointer"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Subtle royal overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#250308]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hallmark Badge Left */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 bg-[#35040D]/90 text-[#DFB76C] text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm border border-[#C5A059]/40 tracking-wider">
            <Sparkles className="w-2.5 h-2.5 text-[#DFB76C]" />
            {product.hallmark}
          </span>
        </div>

        {/* WISHLIST HEART BUTTON RIGHT */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer shadow-md ${
            isWishlisted
              ? "bg-[#580D1A] text-[#DFB76C] border-[#DFB76C] scale-105"
              : "bg-[#FFFDF9]/90 text-[#6B5E5B] border-[#E8DCC8] hover:text-[#580D1A] hover:bg-white hover:scale-105"
          }`}
          title={isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-center gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {/* Virtual Try-On Button */}
          <button
            type="button"
            onClick={handleTryOn}
            className="flex-1 py-1.5 bg-[#35040D] hover:bg-[#4A0E17] text-[#DFB76C] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm shadow-md transition flex items-center justify-center gap-1 cursor-pointer border border-[#C5A059]"
            title="Virtual Try-On AR Mirror"
          >
            <Camera className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Try-On</span>
          </button>

          {/* Quick View Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="py-1.5 px-2.5 bg-white/95 hover:bg-white text-[#35040D] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm shadow-md transition flex items-center justify-center gap-1 cursor-pointer border border-[#C5A059]/40"
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="p-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-sm shadow-md transition cursor-pointer"
            title="Inquire on WhatsApp"
            aria-label="Inquire on WhatsApp"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Details (No Price Tag - Only Collections & Details) */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#FFFDF9]">
        <div>
          {/* Category & Weight */}
          <div className="flex items-center justify-between text-[11px] text-[#A98239] mb-1">
            <span className="font-semibold uppercase tracking-wider">{product.category}</span>
            <span className="font-mono text-[10px] text-[#736360]">{product.weight}</span>
          </div>

          {/* Product Name */}
          <h4
            onClick={() => setQuickViewProduct(product)}
            className="font-cinzel text-sm text-[#35040D] font-bold line-clamp-2 leading-snug hover:text-[#580D1A] transition cursor-pointer min-h-[2.5rem]"
          >
            {product.name}
          </h4>

          {/* Purity & Craftsmanship Note */}
          <p className="text-[11px] text-[#736360] font-sans mt-1 line-clamp-1">
            {product.purity}
          </p>
        </div>

        {/* Collection Actions (NO PRICE TAG) */}
        <div className="pt-3 mt-3 border-t border-[#ECE3D2] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] text-[#580D1A] font-cinzel uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3 text-[#A98239]" />
            <span>Heirloom Design</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="px-3 py-1.5 bg-[#35040D] hover:bg-[#580D1A] text-[#DFB76C] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm border border-[#C5A059] transition flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-3 h-3 text-[#DFB76C]" />
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
