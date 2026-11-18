import React from "react";
import { useCart } from "../../context/CartContext";
import { X, Sparkles, Check, ShoppingBag, Heart, Camera } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useAppDispatchHook, useAppSelectorHook } from "../../redux/store";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";

interface QuickViewModalProps {
  onOpenTryOn?: (product: any) => void;
}

export default function QuickViewModal({ onOpenTryOn }: QuickViewModalProps) {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const dispatch = useAppDispatchHook();

  const wishlistItems = useAppSelectorHook((state) => state.wishlist.items);
  const isWishlisted = quickViewProduct
    ? wishlistItems.some((item) => item.id === quickViewProduct.id)
    : false;

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const handleWhatsAppInquiry = () => {
    const text = `Namaste Radha Gold Jewellers!%0A%0AI am inquiring about the *${product.name}* (${product.category} · ${product.purity}) listed on your website.%0A%0APlease share more high-res angles, exact gold weight details, and showroom viewing appointment.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  const handleTryOn = () => {
    const current = product;
    setQuickViewProduct(null);
    if (onOpenTryOn) {
      onOpenTryOn(current);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#FFFDF9] rounded-lg shadow-2xl border border-[#C5A059]/50 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#35040D]/80 text-[#DFB76C] hover:bg-[#35040D] flex items-center justify-center border border-[#C5A059]/40 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-[#FAF7F2] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#C5A059]/25 relative">
          <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded shadow-lg border border-[#C5A059]/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center gap-2 text-[11px] text-[#A98239] font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{product.hallmark}</span>
          </div>
        </div>

        {/* Right: Specifications & Actions (NO PRICE TAG) */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] tracking-[0.25em] text-[#A98239] uppercase font-semibold block">
                {product.category} · Heritage Treasury
              </span>

              {/* Wishlist toggle */}
              <button
                type="button"
                onClick={() => dispatch(toggleWishlist(product))}
                className={`p-1.5 rounded-full border transition cursor-pointer ${
                  isWishlisted
                    ? "bg-[#580D1A] text-[#DFB76C] border-[#DFB76C]"
                    : "text-[#6B5E5B] border-[#DFD2BC] hover:text-[#580D1A]"
                }`}
                title={isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
              </button>
            </div>

            <h3 className="font-cinzel text-xl text-[#35040D] font-bold leading-snug mb-3">
              {product.name}
            </h3>

            {/* Collection Quality Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#35040D]/5 border border-[#C5A059]/30 text-[#580D1A] text-xs font-cinzel font-semibold mb-4">
              <Sparkles className="w-3 h-3 text-[#A98239]" />
              <span>Royal Indian Craftsmanship Collection</span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#4A3E3B] leading-relaxed font-sans mb-5">
              {product.description}
            </p>

            {/* Product Specifications Table */}
            <div className="bg-[#FAF7F2] p-3.5 rounded border border-[#DFD2BC] text-xs space-y-2 mb-6">
              <div className="flex justify-between py-1 border-b border-[#DFD2BC]/60">
                <span className="text-[#6B5E5B]">Gold Purity</span>
                <span className="font-medium text-[#251D1B]">{product.purity}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DFD2BC]/60">
                <span className="text-[#6B5E5B]">Gross Weight</span>
                <span className="font-medium text-[#251D1B] font-mono">{product.weight}</span>
              </div>
              {product.stones && (
                <div className="flex justify-between py-1 border-b border-[#DFD2BC]/60">
                  <span className="text-[#6B5E5B]">Precious Inlay</span>
                  <span className="font-medium text-[#251D1B] text-right max-w-[60%]">
                    {product.stones}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="text-[#6B5E5B]">Certification</span>
                <span className="font-medium text-[#35040D] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {product.hallmark}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleTryOn}
                className="w-full py-2.5 bg-[#FAF7F2] hover:bg-white text-[#35040D] font-cinzel text-xs tracking-wider uppercase font-semibold border border-[#C5A059] rounded-sm transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Camera className="w-4 h-4 text-[#A98239]" />
                Virtual Try-On
              </button>

              <button
                type="button"
                onClick={() => {
                  addToCart(product);
                  setQuickViewProduct(null);
                }}
                className="w-full py-2.5 bg-[#35040D] text-[#DFB76C] font-cinzel text-xs tracking-wider uppercase border border-[#C5A059] hover:bg-[#4A0E17] transition shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
            </div>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-2.5 bg-[#1F4E34] text-white font-sans text-xs tracking-wide rounded hover:bg-[#163825] transition cursor-pointer flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              Inquire via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
