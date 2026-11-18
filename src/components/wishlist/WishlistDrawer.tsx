import React from "react";
import { useAppDispatchHook, useAppSelectorHook } from "../../redux/store";
import { removeFromWishlist, setWishlistOpen, clearWishlist } from "../../redux/slices/wishlistSlice";
import { useCart } from "../../context/CartContext";
import { X, Heart, Trash2, ShoppingBag, Sparkles, Camera } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WishlistDrawer({ onOpenTryOn }: { onOpenTryOn?: (product: any) => void }) {
  const dispatch = useAppDispatchHook();
  const { items, isWishlistOpen } = useAppSelectorHook((state) => state.wishlist);
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const handleInquireAll = () => {
    if (items.length === 0) return;
    const piecesList = items
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.category} · ${item.purity})`)
      .join("%0A");

    const message = `Namaste Radha Gold Jewellers!%0A%0AI have saved the following pieces in my wishlist from your website:%0A${piecesList}%0A%0APlease assist me with availability and showroom viewing at Mylapore.`;
    window.open(`https://wa.me/919444475473?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[105] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => dispatch(setWishlistOpen(false))}
      />

      {/* Drawer */}
      <div className="relative z-10 w-full max-w-md bg-[#FFFDF9] text-[#251D1B] shadow-2xl flex flex-col h-full border-l border-[#C5A059]/40">
        {/* Header */}
        <div className="px-6 py-5 bg-[#35040D] text-[#FAF7F2] border-b border-[#C5A059]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#DFB76C] fill-[#DFB76C]" />
              <h3 className="font-cinzel text-lg tracking-wider text-[#DFB76C]">
                Saved Treasury
              </h3>
            </div>
            <p className="text-xs text-[#FAF7F2]/70 font-sans mt-0.5">
              {items.length} {items.length === 1 ? "Favorite Piece Saved" : "Favorite Pieces Saved"}
            </p>
          </div>

          <button
            onClick={() => dispatch(setWishlistOpen(false))}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#FAF7F2]/80 hover:text-white transition cursor-pointer"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <Heart className="w-7 h-7" />
            </div>
            <h4 className="font-cormorant text-2xl text-[#35040D] mb-2 font-semibold">
              Your Wishlist is Empty
            </h4>
            <p className="text-xs text-[#5D5350] leading-relaxed max-w-xs mb-6 font-sans">
              Click the heart icon on any jewellery piece to save it to your private bridal treasury.
            </p>
            <button
              onClick={() => dispatch(setWishlistOpen(false))}
              className="font-cinzel text-xs tracking-widest uppercase bg-[#35040D] text-[#DFB76C] px-6 py-3 border border-[#C5A059] hover:bg-[#4A0E17] transition cursor-pointer"
            >
              Explore Collections
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-[#ECE3D2]">
              {items.map((product) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded border border-[#C5A059]/30 bg-[#FAF7F2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#A98239] font-medium truncate block">
                      {product.category}
                    </span>
                    <h5 className="font-cinzel text-xs text-[#35040D] font-bold line-clamp-1">
                      {product.name}
                    </h5>
                    <p className="text-[11px] text-[#5D5350] font-sans mt-0.5">
                      {product.purity} · {product.weight}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => {
                          addToCart(product);
                        }}
                        className="px-2.5 py-1.5 bg-[#35040D] text-[#DFB76C] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm border border-[#C5A059] hover:bg-[#4A0E17] transition flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Move to Bag
                      </button>

                      {onOpenTryOn && (
                        <button
                          onClick={() => {
                            dispatch(setWishlistOpen(false));
                            onOpenTryOn(product);
                          }}
                          className="px-2.5 py-1.5 bg-white text-[#35040D] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm border border-[#C5A059]/50 hover:bg-[#FAF7F2] transition flex items-center gap-1 cursor-pointer"
                        >
                          <Camera className="w-3 h-3 text-[#A98239]" />
                          Try-On
                        </button>
                      )}

                      <button
                        onClick={() => dispatch(removeFromWishlist(product.id))}
                        className="p-1.5 text-[#8C7A76] hover:text-[#580D1A] ml-auto transition cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#FAF7F2] border-t border-[#C5A059]/30 space-y-3">
              <button
                onClick={handleInquireAll}
                className="w-full py-3 bg-[#1F4E34] text-white font-sans text-xs font-semibold rounded-sm hover:bg-[#163825] transition cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Inquire Wishlist via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#736360] pt-1">
                <button
                  onClick={() => dispatch(clearWishlist())}
                  className="hover:text-[#580D1A] underline cursor-pointer"
                >
                  Clear Wishlist
                </button>
                <span className="text-[11px] text-[#A98239] font-cinzel">
                  ✦ Radha Gold Jewellers
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
